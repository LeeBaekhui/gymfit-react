import React, { useState } from "react";
import { Tabs, Tab, Box, Button, Grid, Paper, Typography } from "@mui/material";

const tabMenu = [
  "결제정보",
  "출석관리",
  "스케줄관리",
  "운동관리",
  "음식관리",
  "체성분관리",
  "혈압/심박수관리",
];

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const MemberTabMenu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "80%" }}>
      <Paper elevation={3} sx={{ mb: 2, p: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="primary"
          textColor="primary"
          aria-label="member tab menu"
        >
          {tabMenu.map((menu, index) => (
            <Tab key={index} label={menu} id={`tab-${index}`} />
          ))}
        </Tabs>
      </Paper>
      {tabMenu.map((menu, index) => (
        <TabPanel value={value} index={index} key={index}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Button variant="contained" fullWidth>
                {menu} 기능 1
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" fullWidth>
                {menu} 기능 2
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" fullWidth>
                {menu} 기능 3
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </Box>
  );
};

export default MemberTabMenu;
