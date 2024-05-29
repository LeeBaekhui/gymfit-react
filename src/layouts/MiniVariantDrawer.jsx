import { useState, lazy, Suspense } from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import Content from "./Content";

// Lazy load components
const MemberForm = lazy(() => import("../components/members/MemberForm"));
const ScheduleForm = lazy(() => import("../components/scheduleManagements/ScheduleForm"));
const FacilityManagement = lazy(() =>
  import(
    "../components/centerManagements/FacilityManagements/FacilityManagement"
  )
);
const LockerForm = lazy(() =>
  import("../components/centerManagements/lockerManagements/LockerForm")
);
const RentalForm = lazy(() =>
  import("../components/centerManagements/rentalManagements/RentalForm")
);

export default function MiniVariantDrawer() {
  const [open, setOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(
    <Typography paragraph>내용이 들어가는 곳</Typography>
  );
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (text) => {
    switch (text) {
      case "신규회원등록":
        setCurrentComponent(<MemberForm />);
        break;
        case "레슨스케줄관리":
        setCurrentComponent(<ScheduleForm />);
        break;
      case "이용권상품관리":
        setCurrentComponent(<FacilityManagement />);
        break;
      case "락커관리":
        setCurrentComponent(<LockerForm />);
        break;
      case "대여상품관리":
        setCurrentComponent(<RentalForm />);
        break;
      default:
        setCurrentComponent(
          <Typography paragraph>{text} 내용이 들어가는 곳</Typography>
        );
    }
  };

  const handleLogout = () => {
    navigate("/signup");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleLogout={handleLogout}
      />
      <Drawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleMenuItemClick={handleMenuItemClick}
      />
      <Content>
        <Suspense fallback={<Typography>Loading...</Typography>}>
          {currentComponent}
        </Suspense>
      </Content>
    </Box>
  );
}
