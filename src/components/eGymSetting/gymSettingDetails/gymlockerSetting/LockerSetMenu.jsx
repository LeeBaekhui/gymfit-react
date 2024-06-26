// 경로: src\components\gymSetting\gymSettingDetails\gymlockerSetting\LockerMenu.jsx

import React, { useState } from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import LokerClassFicationSet from "./LokerClassFicationSet.jsx";
import LockerPaySet from "./LockerPaySet.jsx";
import LockerPositionSet from "./LockerPositionSet.jsx";
import LockerProductsView from "./LockerProductsView.jsx";

const LockerMenu = () => {
  const [activeComponent, setActiveComponent] = useState("viewProducts");

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <Box sx={{ width: "100%", height: "100vh", p: 1, boxSizing: "border-box" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" mb={2} sx={{ justifyContent: "center" }}>
            <Button
              onClick={() => handleButtonClick("LockerProductsView")}
              variant={activeComponent === "viewProducts" ? "contained" : "outlined"}
              sx={{ mx: 1 }}
            >
              락커현황
            </Button>
            <Button
              onClick={() => handleButtonClick("LockerPositionSet")}
              variant={activeComponent === "lockerPosition" ? "contained" : "outlined"}
              sx={{ mx: 1 }}
            >
              락커위치설정
            </Button>
            <Button
              onClick={() => handleButtonClick("LockerPaySet")}
              variant={activeComponent === "managePayments" ? "contained" : "outlined"}
              sx={{ mx: 1 }}
              color="primary"
            >
              결제관리
            </Button>
            <Button
              onClick={() => handleButtonClick("LokerClassFicationSet")}
              variant={activeComponent === "classification" ? "contained" : "outlined"}
              sx={{ mx: 1 }}
              color="primary"
            >
              락커분류
            </Button>
          </Box>
          <Paper sx={{ p: 3, boxShadow: 3 }}>
            {activeComponent === "LockerProductsView" && <LockerProductsView />}
            {activeComponent === "LockerPositionSet" && <LockerPositionSet />}
            {activeComponent === "LockerPaySet" && <LockerPaySet />}
            {activeComponent === "LokerClassFicationSet" && <LokerClassFicationSet />}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LockerMenu;
