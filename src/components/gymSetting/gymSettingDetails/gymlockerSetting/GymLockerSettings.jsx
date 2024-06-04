import React, { useState } from "react";
import LokerClassFicationSet from "./gymSettingDetails/gymlockerSetting/LokerClassFicationSet";
import LockerPaySet from "./gymSettingDetails/gymlockerSetting/LockerPaySet";
import { Box, Typography } from "@mui/material";

const GymLockerSettings = () => {
  const [lockerCategories, setLockerCategories] = useState([
    { name: "남자락커", range: "1~100" },
    { name: "여자락커", range: "101~150" },
  ]);

  const addLockerCategory = (newCategory) => {
    setLockerCategories([...lockerCategories, newCategory]);
  };

  return (
    <Box sx={{ margin: 3 }}>
      <Typography variant="h4" gutterBottom>
        락커 설정
      </Typography>
      <LokerClassFicationSet onLockerAdd={addLockerCategory} />
      <LockerPaySet lockerCategories={lockerCategories} />
    </Box>
  );
};

export default GymLockerSettings;
