import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import MailIcon from "@mui/icons-material/Mail";
import SmsIcon from "@mui/icons-material/Sms";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MuiDrawer from "@mui/material/Drawer";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import { useDrawerContext } from "./DrawerContext";
import MainContentLayout from "./MainContentLayout";

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
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
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
}));

const menuItems = [
  {
    title: "회원관리",
    items: [
      "회원출석현황",
      "회원조회",
      "신규회원등록",
      "회원상담관리",
      "잠재고객관리",
    ],
  },
  {
    title: "레슨예약관리",
    items: ["레슨스케줄관리", "예약관리"],
  },
  {
    title: "문자발송관리",
    items: [],
  },
  {
    title: "회원참여관리",
    items: ["운동관리", "운동검색", "체성분관리", "혈압심박수관리"],
  },
  {
    title: "회계정산관리",
    items: ["매출내역", "지출내역", "정산내역", "직원정산"],
  },
  {
    title: "락커관리",
    items: [],
  },
  {
    title: "고객관리",
    items: ["센터공지사항", "짐핏공지사항", "이벤트공지사항", "Q&A"],
  },
];

export default function DrawerLayout() {
  const theme = useTheme();
  const {
    open,
    handleDrawerOpen,
    handleDrawerClose,
    handleMenuClick,
    openSubmenus,
    handleSubMenuClick,
    handleOpenModal,
    setSelectedMenu,
  } = useDrawerContext();

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((menuItem) => (
            <div key={menuItem.title}>
              <ListItemButton
                onClick={() => {
                  if (!open) {
                    handleDrawerOpen();
                  } else {
                    handleMenuClick(menuItem.title);
                    setSelectedMenu(menuItem.title);
                  }
                }}
              >
                <ListItemIcon>
                  {menuItem.title === "회원관리" ? (
                    <GroupIcon />
                  ) : menuItem.title === "레슨예약관리" ? (
                    <EditCalendarIcon />
                  ) : menuItem.title === "문자발송관리" ? (
                    <SmsIcon />
                  ) : menuItem.title === "락커관리" ? (
                    <DoorSlidingIcon />
                  ) : menuItem.title === "회계정산관리" ? (
                    <ReceiptLongIcon />
                  ) : menuItem.title === "고객관리" ? (
                    <ManageAccountsIcon />
                  ) : (
                    <MailIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={menuItem.title} />
                {open && menuItem.title !== "락커관리" && (
                  openSubmenus[menuItem.title] ? <ExpandLess /> : <ExpandMore />
                )}
              </ListItemButton>
              <Collapse in={open && openSubmenus[menuItem.title]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menuItem.items.map((item) => (
                    <ListItemButton
                      key={item}
                      sx={{ pl: 4 }}
                      onClick={() => handleSubMenuClick(item)}
                    >
                      <ListItemText primary={item} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
          <Divider />
          <ListItemButton onClick={handleOpenModal}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="설정" />
          </ListItemButton>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          overflow: "auto",
          width: "100vw",
          height: "100vh",
        }}
      >
        <MainContentLayout />
      </Box>
    </Box>
  );
}
