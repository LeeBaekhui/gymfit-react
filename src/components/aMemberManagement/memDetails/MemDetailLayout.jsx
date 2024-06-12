import React from "react";
import { Box, Typography } from "@mui/material";
import MemberWebcam from "../MemberWebcam"; // MemberWebcam 임포트 경로
import MemDetail from "./MemDetail";
import MemberSearchBar from "./MemberSearchBar";
import MemDetailButton from "./MemDetailButton";
import DetailTabMenu from "./DetailTabMenu"; // DetailTabMenu 임포트 경로

const MemDetailLayout = () => {
  return (
    <Box sx={{ p: 1, paddingTop: 0 }}>
      <Typography variant="h5" gutterBottom>회원상세</Typography>
      <Box sx={{ mb: 1 }}>
        <MemberSearchBar />
      </Box>
      <Box>
        <MemDetailButton />
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box 
          sx={{ 
            flex: 3, // MemberWebcam 박스를 더 크게
            border: '1px solid #e0e0e0', 
            borderRadius: 1, 
            padding: 1, 
            textAlign: 'left' 
          }}
        >
          <MemberWebcam />
        </Box>
        <Box 
          sx={{ 
            flex: 4, // MemDetail 박스를 조금 작게
            border: '1px solid #e0e0e0', 
            borderRadius: 1, 
            padding: 1 
          }}
        >
          <MemDetail />
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <DetailTabMenu />
      </Box>
    </Box>
  );
};

export default MemDetailLayout;
