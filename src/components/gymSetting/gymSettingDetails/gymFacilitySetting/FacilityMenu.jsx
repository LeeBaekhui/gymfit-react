// src/components/gymSetting/gymSettingDetails/gymFacilitySetting/FacilityMenu.jsx

import React, { useState } from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import FacilityClassiFication from "./FacilityClassiFication";
import FacilityPayManagement from "./FacilityPayManagement";
import ViewFacilityProducts from "./ViewFacilityProducts";

const FacilityMenu = () => {
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
              onClick={() => handleButtonClick("viewProducts")}
              variant={activeComponent === "viewProducts" ? "contained" : "outlined"}
              sx={{ mx: 1}}
            >
              이용권 상품 보기
            </Button>
            <Button
              onClick={() => handleButtonClick("managePayments")}
              variant={activeComponent === "managePayments" ? "contained" : "outlined"}
              sx={{ mx: 1 }}
            >
              이용권 상품 결제관리
            </Button>
            <Button
              onClick={() => handleButtonClick("classification")}
              variant={activeComponent === "classification" ? "contained" : "outlined"}
              sx={{ mx: 1 }}
              color="primary"
            >
              이용권 상품 분류관리
            </Button>
          </Box>
          <Paper sx={{ p: 3, boxShadow: 3 }}>
            {activeComponent === "viewProducts" && <ViewFacilityProducts />}
            {activeComponent === "managePayments" && <FacilityPayManagement />}
            {activeComponent === "classification" && <FacilityClassiFication />}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FacilityMenu;
