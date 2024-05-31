import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import GymSetting from "./GymSetting"; // GymSetting 컴포넌트 임포트

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function GymsetLayout() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: "90%", // 전체 너비
        height: "90%", // 전체 높이
        overflow: "auto", // 스크롤 가능하게
      }}
    >
      <DrawerHeader />
      <Typography paragraph>This is the GymsetLayout component.</Typography>
      <GymSetting /> {/* GymSetting 컴포넌트 렌더링 */}
    </Box>
  );
}
