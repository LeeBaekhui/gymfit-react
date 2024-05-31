import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function GymSetting() {
  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6">Gym Settings</Typography>
        {/* 추가 설정 내용 */}
        <Typography paragraph>Setting Item 1</Typography>
        <Typography paragraph>Setting Item 2</Typography>
        <Typography paragraph>Setting Item 3</Typography>
      </Box>
    </Paper>
  );
}
