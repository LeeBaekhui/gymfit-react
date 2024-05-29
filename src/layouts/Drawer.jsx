import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Drawer as MuiDrawer,
  Divider,
  IconButton,
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, Routes, Route } from "react-router-dom";
import ScheduleForm from "../components/scheduleManagements/ScheduleForm"; // ScheduleForm 컴포넌트를 임포트

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const CustomDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "&.MuiDrawer-docked": {
    position: "fixed",
    left: 0,
    top: "64px",
    height: "calc(100% - 64px)",
  },
}));

const CustomBox = styled(Box)(({ theme, open }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  flexGrow: 1,
  marginLeft: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
  transition: theme.transitions.create("margin-left", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const [openNestedList, setOpenNestedList] = useState(false);

  const handleClick = () => {
    setOpenNestedList(!openNestedList);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <div />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRight />
            ) : (
              <ChevronLeft />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {openNestedList ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openNestedList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Nested Item 1" />
              </ListItem>
              <ListItem button component={Link} to="/schedule" sx={{ pl: 4 }}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Nested Item 2" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </CustomDrawer>
      <CustomBox open={open}>
        <Box sx={{ p: 3 }}>
          <Routes>
            <Route path="/schedule" element={<ScheduleForm />} />
          </Routes>
        </Box>
      </CustomBox>
    </Box>
  );
};

export default Drawer;
