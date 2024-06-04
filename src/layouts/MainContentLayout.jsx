// 경로: src\layouts\MainContentLayout.jsx

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MemberLayout from "../components/members/MemberLayout"; // MemberLayout 컴포넌트 import
import ScheduleForm from "../components/ScheduleManagement/ScheduleForm"; // ScheduleForm 컴포넌트 import
import { useDrawerContext } from "../layouts/DrawerContext";
import GymsetLayout from "../components/gymSetting/GymsetLayout"; // GymsetLayout 컴포넌트 import
import GymLockerManagement from "../components/gymSetting/gymSettingDetails/gymlockerSetting/GymLockerMangment"; // GymLockerManagement 컴포넌트 import

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginLeft: "400px",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MainContentLayout() {
  const { selectedMenu } = useDrawerContext();

  const renderContent = () => {
    switch (selectedMenu) {
      case "신규회원등록": // 신규회원등록 메뉴가 선택되었을 때
        return <MemberLayout />;
      case "레슨스케줄관리":
        return <ScheduleForm />;
      case "락커관리": // 락커관리 메뉴가 선택되었을 때
        return <GymLockerManagement />; // 수정된 부분
      case "설정": // 설정 메뉴가 선택되었을 때
        return <GymsetLayout />;
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
        width: "100%", // 전체 너비
        height: "100%", // 전체 높이
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
