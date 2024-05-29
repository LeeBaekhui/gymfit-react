import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Drawer as MuiDrawer,
  Divider,
  IconButton,
  Box,
  CssBaseline,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Content from "./Content"; // Content 컴포넌트를 임포트
import MenuItems from "./MenuItems"; // MenuItems 컴포넌트를 임포트

const drawerWidth = 240; // Drawer 폭조절

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
  justifyContent: "space-between", // 화살표를 오른쪽으로 이동
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
    position: "fixed", // Drawer를 고정 위치로 설정
    left: 0, // 왼쪽으로 정렬
    top: "64px", // 헤더 아래에 위치하도록 설정 (헤더 높이에 맞게 조정)
    height: "calc(100% - 64px)", // 헤더를 제외한 전체 높이로 설정 (헤더 높이에 맞게 조정)
  },
}));

// CustomBox 스타일 정의
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // 왼쪽 정렬
  justifyContent: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  flexGrow: 1,
  marginLeft: drawerWidth, // Drawer의 폭만큼 마진을 추가하여 컨텐츠가 왼쪽으로 이동하지 않도록 함
}));

const Drawer = ({ open, handleDrawerClose, handleMenuItemClick }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <div />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MenuItems open={open} handleMenuItemClick={handleMenuItemClick} />
      </CustomDrawer>
      <Content open={open} drawerWidth={drawerWidth}>
        {/* 여기에 콘텐츠 내용을 추가합니다 */}
      </Content>
    </Box>
  );
};

export default Drawer;
