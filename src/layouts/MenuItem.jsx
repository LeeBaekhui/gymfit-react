import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import { useDrawerContext } from "./DrawerContext";

export default function MenuItem({ menuItem }) {
  const { openSubmenus, handleMenuClick, handleSubMenuClick } =
    useDrawerContext();

  return (
    <div>
      <ListItemButton onClick={() => handleMenuClick(menuItem.title)}>
        <ListItemIcon>
          {menuItem.title === "회원출관리" ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={menuItem.title} />
        {openSubmenus[menuItem.title] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSubmenus[menuItem.title]} timeout="auto" unmountOnExit>
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
  );
}
