// src/layouts/HomeLayout.jsx
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBarLayout from "./AppBarLayout";
import DrawerLayout from "./DrawerLayout";
import { DrawerProvider } from "./DrawerContext";
import GymSettingModal from "../components/gymSetting/GymSettingModal "; // GymSettingModal import

function HomeContent() {
  return (
    <>
      <CssBaseline />
      <AppBarLayout />
      <DrawerLayout />
      <GymSettingModal /> {/* 모달 컴포넌트 추가 */}
    </>
  );
}

export default function HomeLayout() {
  return (
    <DrawerProvider>
      <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}> {/* height와 overflow 설정 */}
        <HomeContent />
      </Box>
    </DrawerProvider>
  );
}