import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

const menuItems = {
  회원출석관리: [
    "회원출석현황",
    "회원조회",
    "신규회원등록",
    "회원상담관리",
    "잠재고객관리",
  ],
  회원가입: [],
  레슨예약관리: ["레슨스케줄관리", "예약관리", "문자발송관리"],
  문자발송관리: [],
  회원참여관리: [
    "운동관리",
    "운동검색",
    "음식관리",
    "체성분관리",
    "혈압심박수관리",
  ],
  회계정산관리: ["매출내역", "지출내역", "정산내역", "직원정산"],
  센터관리: [
    "락커관리",
    "이용권상품관리",
    "대여상품관리",
    "일반상품관리",
    "센터정보관리",
    "터치모니터관리",
    "회원참여설정관리",
  ],
  시스템관리: [
    "내부사용자관리",
    "관리자 접속로그",
    "비밀번호 변경",
    "회원데이터 업로드",
    "배너관리",
  ],
  고객센터: ["센터공지사항", "짐핏공지사항", "이벤트공지사항", "Q&A"],
};

const MenuItems = ({ open, handleMenuItemClick }) => {
  const theme = useTheme();
  const [openItems, setOpenItems] = useState({});

  const handleClick = (title) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [title]: !prevOpenItems[title],
    }));
    handleMenuItemClick(title);
  };

  return (
    <List>
      {Object.keys(menuItems).map((text, index) => (
        <React.Fragment key={text}>
          <ListItemButton
            onClick={() => handleClick(text)}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                fontSize: "1.5rem",
              }}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            {open && (openItems[text] ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
          <Collapse in={open && openItems[text]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menuItems[text].map((item, subIndex) => (
                <ListItemButton
                  key={item}
                  onClick={() => handleMenuItemClick(item)}
                  sx={{
                    pl: 4,
                    "&.active": {
                      fontWeight: "bold",
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <ListItemIcon sx={{ display: "none" }}>
                    {subIndex % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default MenuItems;
