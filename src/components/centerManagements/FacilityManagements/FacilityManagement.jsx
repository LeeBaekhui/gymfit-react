import React, { useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import FacilityClassiFication from "./FacilityClassiFication";
import FacilityPayManagement from "./FacilityPayManagement";
import ViewFacilityProducts from "./ViewFacilityProducts";

const FacilityManagement = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <Box sx={{ width: "100%", height: "100vh", p: 3, boxSizing: "border-box" }}>
      <Box sx={{ mb: 2, textAlign: "left" }}>
        <Typography variant="h5" gutterBottom>
          이용권상품결제관리
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          HOME &gt; 센터관리 &gt; 이용권상품결제관리 &gt; 이용권 상품 분류관리
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" mb={2} sx={{ justifyContent: "flex-start" }}>
            <Button
              onClick={() => handleButtonClick("viewProducts")}
              variant="contained"
              sx={{ mx: 1 }}
            >
              이용권 상품 보기
            </Button>
            <Button
              onClick={() => handleButtonClick("managePayments")}
              variant="contained"
              sx={{ mx: 1 }}
            >
              이용권 상품 결제관리
            </Button>
            <Button
              onClick={() => handleButtonClick("classification")}
              variant="contained"
              sx={{ mx: 1 }}
              color="primary"
            >
              이용권 상품 분류관리
            </Button>
          </Box>
          {activeComponent === "viewProducts" && <ViewFacilityProducts />}
          {activeComponent === "managePayments" && <FacilityPayManagement />}
          {activeComponent === "classification" && <FacilityClassiFication />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FacilityManagement;
