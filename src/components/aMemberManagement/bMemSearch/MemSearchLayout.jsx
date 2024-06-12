import React from "react";
import { Box } from "@mui/material";
import MemSearchBtn from "./MemSearchBtn";
import MemSearchBar from "./MemSearchBar";
import MemSortOptionsBar from "./MemSortOptionsBar";
import MemSearchCard from "./MemSearchCard";

const MemSearchLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ gap: 2, mb: 2, width: "auto" }}
    >
      <MemSearchBtn />
      <MemSearchBar />
      <MemSortOptionsBar />
      <MemSearchCard />
    </Box>
  );
};

export default MemSearchLayout;
