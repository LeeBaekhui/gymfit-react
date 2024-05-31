import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBarLayout from "./AppBarLayout";
import DrawerLayout from "./DrawerLayout";
import MainContentLayout from "./MainContentLayout";
import { DrawerProvider } from "./DrawerContext";

export default function HomeLayout() {
  return (
    <DrawerProvider>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <CssBaseline />
        <AppBarLayout />
        <DrawerLayout />
        <MainContentLayout />
      </Box>
    </DrawerProvider>
  );
}
