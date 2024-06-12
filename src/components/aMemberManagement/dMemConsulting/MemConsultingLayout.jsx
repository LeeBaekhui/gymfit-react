// src/components/aMemberManagement/dMemConsulting/MemConsultingLayout.jsx
import React from "react";
import { Box } from "@mui/material";

const MemConsultingLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid red",
        width: "100%", // 부모 요소의 너비에 맞추기
        height: "100vh", // 예시로 전체 높이를 설정
      }}
    >
      <div style={{ border: "2px solid blue", padding: "20px" }}>
        This div will adjust according to the screen width.
      </div>
    </Box>
  );
};

export default MemConsultingLayout;
