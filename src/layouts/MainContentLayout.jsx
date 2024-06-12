import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AttendManageLayout from "../components/aMemberManagement/aAttendManagement/AttendManageLayout";
import MemSearchLayout from "../components/aMemberManagement/bMemSearch/MemSearchLayout";
import NewMemberLayout from "../components/aMemberManagement/cNewMember/MemberLayout";
import MemConsultingLayout from "../components/aMemberManagement/dMemConsulting/MemConsultingLayout";
import PotenCustomerLayout from "../components/aMemberManagement/ePotentialCustomer/PotenCustomerLayout";
import ScheduleLayout from "../components/bscheduleManagement/ScheduleLayout";
import { useDrawerContext } from "../layouts/DrawerContext";
import GymSettingModal from "../components/eGymSetting/GymSettingModal";

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
      case "회원출석관리":
        return <AttendManageLayout />;
      case "회원조회/상세":
        return <MemSearchLayout />;
      case "신규회원등록":
        return <NewMemberLayout />;
      case "회원상담관리":
        return <MemConsultingLayout />;
      case "잠재고객관리":
        return <PotenCustomerLayout />;
      case "레슨스케줄관리":
        return <ScheduleLayout />;
      case "설정":
        return <GymSettingModal />;
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
        height: "100vh",
        overflowY: "auto",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        width: "100%", // 전체 너비를 사용하도록 설정
        maxWidth: "100vw", // 뷰포트 너비에 맞게 조정
      }}
    >
      <DrawerHeader />
      {selectedMenu ? (
        renderContent()
      ) : (
        <Typography paragraph>Please select a menu item.</Typography>
      )}
    </Box>
  );
}
