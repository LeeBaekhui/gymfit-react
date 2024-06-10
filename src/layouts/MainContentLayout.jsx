import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MemberLayout from "../components/members/MemberLayout";
import ScheduleForm from "../components/scheduleManagement/ScheduleForm";
import { useDrawerContext } from "../layouts/DrawerContext";
import GymsetLayout from "../components/gymSetting/GymsetLayout";
import GymLockerManagement from "../components/gymSetting/gymSettingDetails/gymlockerSetting/GymLockerMangment";
import MemDetailPage from "../components/members/memDetails/memDetailPage"; // MemDetailPage 컴포넌트 import

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
      case "신규회원등록":
        return <MemberLayout />;
      case "레슨스케줄관리":
        return <ScheduleForm />;
      case "락커관리":
        return <GymLockerManagement />;
      case "설정":
        return <GymsetLayout />;
      case "회원조회": // 회원조회 메뉴가 선택되었을 때
        return <MemDetailPage />; // MemDetailPage 렌더링
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
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      <DrawerHeader />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        {selectedMenu ? (
          renderContent()
        ) : (
          <Typography paragraph>Please select a menu item.</Typography>
        )}
      </Box>
    </Box>
  );
}
