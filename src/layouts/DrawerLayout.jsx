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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MuiDrawer from "@mui/material/Drawer";
import { useDrawerContext } from "./DrawerContext";

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
    title: "회원출관리",
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
    items: ["매출내역", "지출내역", "정산내역", "직정산"],
  },
  {
    title: "센터관리",
    items: [
      "락커관리",
      "이용권상품관리",
      "대여상품관리",
      "센터정보관리",
      "터치모니터관리",
      "회원참여설정관",
    ],
  },
  {
    title: "시스템관리",
    items: [
      "내부사용자 관리",
      "관리자 접속로그",
      "비밀번호변경",
      "회원데이터업로드",
      "배너관리",
    ],
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
  } = useDrawerContext();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((menuItem) => (
          <div key={menuItem.title}>
            <ListItemButton
              onClick={() => {
                if (!open) {
                  handleDrawerOpen(); // 서랍이 닫혀있을 때 열리게 하기
                } else {
                  handleMenuClick(menuItem.title); // 서랍이 열려있을 때는 메뉴 아이템 클릭 시 동작
                }
              }}
            >
              <ListItemIcon>
                {menuItem.title === "회원출관리" ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={menuItem.title} />
              {open && // 서랍이 열려있을 때만 드롭다운 아이콘 표시
                (openSubmenus[menuItem.title] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                ))}
            </ListItemButton>
            <Collapse
              in={open && openSubmenus[menuItem.title]}
              timeout="auto"
              unmountOnExit
            >
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
      </List>
    </Drawer>
  );
}
