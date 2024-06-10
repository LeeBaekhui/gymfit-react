// ProductSelectionForm2.jsx
import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import LockerPayForm from "./LockerPayForm";
import RentalPayForm from "./RentalPayForm";

const ProductSelectionForm2 = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="product tabs"
        variant="fullWidth" // 탭 메뉴를 가로폭에 맞추기 위해 설정
        sx={{ borderBottom: 1, borderColor: "divider" }}
        TabIndicatorProps={{ style: { height: "3px" } }} // 인디케이터 두께 조정
      >
        <Tab
          label="락커상품"
          sx={{
            fontSize: "1rem",
            fontWeight: selectedTab === 0 ? "bold" : "normal",
          }}
        />
        <Tab
          label="대여상품"
          sx={{
            fontSize: "1rem",
            fontWeight: selectedTab === 1 ? "bold" : "normal",
          }}
        />
      </Tabs>
      {selectedTab === 0 && <LockerPayForm />}
      {selectedTab === 1 && <RentalPayForm />}
    </Box>
  );
};

export default ProductSelectionForm2;
