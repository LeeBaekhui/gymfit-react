import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Paper } from '@mui/material';

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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const ProductMenuPay = () => {
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
        aria-label="product menu tabs"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab label="시설이용상품" />
        <Tab label="레슨상품" />
        <Tab label="락커상품" />
        <Tab label="대여상품" />
      </Tabs>
      <TabPanel value={value} index={0}>
        시설이용상품 내용
      </TabPanel>
      <TabPanel value={value} index={1}>
        레슨상품 내용
      </TabPanel>
      <TabPanel value={value} index={2}>
        락커상품 내용
      </TabPanel>
      <TabPanel value={value} index={3}>
        대여상품 내용
      </TabPanel>
    </Paper>
  );
};

export default ProductMenuPay;
