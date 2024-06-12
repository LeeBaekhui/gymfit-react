import React from "react";
import Box from "@mui/material/Box";
import AppBarLayout from "./AppBarLayout";
import DrawerLayout from "./DrawerLayout";
import { DrawerProvider } from "./DrawerContext";

export default function GymfitPage() {
  return (
    <DrawerProvider>
      <Box sx={{ display: "flex", height: "100vh", margin: 0, padding: 0 }}>
        <AppBarLayout /> {/* AppBarLayout 추가 */}
        <DrawerLayout /> {/* DrawerLayout 추가 */}
      </Box>
    </DrawerProvider>
  );
}
