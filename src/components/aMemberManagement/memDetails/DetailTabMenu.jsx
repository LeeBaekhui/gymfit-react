import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Paper, Slide } from '@mui/material';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Slide direction="up" in={value === index} mountOnEnter unmountOnExit>
            <Typography>{children}</Typography>
          </Slide>
        </Box>
      )}
    </div>
  );
};

const DetailTabMenu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="detail menu tabs"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab label="결제정보" />
        <Tab label="출석관리" />
        <Tab label="스케줄관리" />
        <Tab label="운동관리" />
        <Tab label="음식관리" />
        <Tab label="체성분관리" />
        <Tab label="혈압/심박수관리" />
      </Tabs>
      <TabPanel value={value} index={0}>
        결제정보 내용
      </TabPanel>
      <TabPanel value={value} index={1}>
        출석관리 내용
      </TabPanel>
      <TabPanel value={value} index={2}>
        스케줄관리 내용
      </TabPanel>
      <TabPanel value={value} index={3}>
        운동관리 내용
      </TabPanel>
      <TabPanel value={value} index={4}>
        음식관리 내용
      </TabPanel>
      <TabPanel value={value} index={5}>
        체성분관리 내용
      </TabPanel>
      <TabPanel value={value} index={6}>
        혈압/심박수관리 내용
      </TabPanel>
    </Paper>
  );
};

export default DetailTabMenu;
