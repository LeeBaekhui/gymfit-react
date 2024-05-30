import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ScheduleForm from "../components/scheduleManagement/ScheduleForm"; // ScheduleForm 컴포넌트 import
import { useDrawerContext } from "./DrawerContext";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MainContentLayout() {
  const { selectedMenu } = useDrawerContext();

  const renderContent = () => {
    switch (selectedMenu) {
      case "레슨스케줄관리":
        return <ScheduleForm />;
      default:
        return (
          <Typography paragraph>{`Selected Menu: ${selectedMenu}`}</Typography>
        );
    }
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: "100vw", // 전체 너비
        height: "100vh", // 전체 높이
        overflow: "auto", // 스크롤 가능하게
      }}
    >
      <DrawerHeader />
      {selectedMenu ? (
        renderContent() // 선택된 메뉴에 따라 컨텐츠를 렌더링
      ) : (
        <Typography paragraph>Please select a menu item.</Typography>
      )}
    </Box>
  );
}
