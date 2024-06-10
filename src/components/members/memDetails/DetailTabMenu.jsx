import React, { useState } from "react";
import { Box, Tabs, Tab, Paper } from "@mui/material";
import PaymentManagement from "./detailTabMenu/paymentManagement/PaymentManagement";
import AttendanceManagement from "./detailTabMenu/attendanceManagement/AttendanceManagement";
import ScheduleManagement from "./detailTabMenu/scheduleManagement/ScheduleManagement";
import ExerciseManagement from "./detailTabMenu/exerciseManagement/ExerciseManagement";
import FoodManagement from "./detailTabMenu/foodManagement/FoodManagement";
import BodyCompositionManagement from "./detailTabMenu/bodyCompositionManagement/BodyCompositionManagement";
import BloodheartManagement from "./detailTabMenu/bloodheartManagement/BloodheartManagement";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};

const DetailTabMenu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="detail menu tabs"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tab
          label="결제정보"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 0 ? "bold" : "normal",
            color: value === 0 ? "red" : "inherit",
            borderBottom:
              value === 0 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
        <Tab
          label="출석관리"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 1 ? "bold" : "normal",
            color: value === 1 ? "red" : "inherit",
            borderBottom:
              value === 1 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
        <Tab
          label="스케줄관리"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 2 ? "bold" : "normal",
            color: value === 2 ? "red" : "inherit",
            borderBottom:
              value === 2 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
        <Tab
          label="운동관리"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 3 ? "bold" : "normal",
            color: value === 3 ? "red" : "inherit",
            borderBottom:
              value === 3 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
        <Tab
          label="음식관리"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 4 ? "bold" : "normal",
            color: value === 4 ? "red" : "inherit",
            borderBottom:
              value === 4 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
        <Tab
          label="체성분관리"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 5 ? "bold" : "normal",
            color: value === 5 ? "red" : "inherit",
            borderBottom:
              value === 5 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
        <Tab
          label="혈압/심박수관리"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 6 ? "bold" : "normal",
            color: value === 6 ? "red" : "inherit",
            borderBottom:
              value === 6 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PaymentManagement />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AttendanceManagement />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ScheduleManagement />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ExerciseManagement />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FoodManagement />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <BodyCompositionManagement />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <BloodheartManagement />
      </TabPanel>
    </Paper>
  );
};

export default DetailTabMenu;
