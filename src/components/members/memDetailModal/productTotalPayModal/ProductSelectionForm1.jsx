// ProductSelectionForm1.jsx
import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import FacilityPayForm from "./FacilityPayForm";
import LessonPayForm from "./LessonPayForm";

const ProductSelectionForm1 = () => {
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
          label="시설이용권 상품"
          sx={{
            fontSize: "1rem", // 글자 크기 1레벨 크게 설정
            fontWeight: selectedTab === 0 ? "bold" : "normal",
          }}
        />
        <Tab
          label="레슨상품"
          sx={{
            fontSize: "1rem", // 글자 크기 1레벨 크게 설정
            fontWeight: selectedTab === 1 ? "bold" : "normal",
          }}
        />
      </Tabs>
      {selectedTab === 0 && <FacilityPayForm />}
      {selectedTab === 1 && <LessonPayForm />}
    </Box>
  );
};

export default ProductSelectionForm1;
