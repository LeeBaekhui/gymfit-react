import React, { useState } from "react";
import { Box, Tabs, Tab, Paper } from "@mui/material";

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
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};

const PaytManageLayout = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="payment tabs"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tab
          label="결제전체"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 0 ? "bold" : "normal",
            color: value === 0 ? "red" : "inherit",
            borderBottom:
              value === 0 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
        <Tab
          label="이용권상품결제"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 1 ? "bold" : "normal",
            color: value === 1 ? "red" : "inherit",
            borderBottom:
              value === 1 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
        <Tab
          label="일반상품결제"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 2 ? "bold" : "normal",
            color: value === 2 ? "red" : "inherit",
            borderBottom:
              value === 2 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
        <Tab
          label="락커결제"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 3 ? "bold" : "normal",
            color: value === 3 ? "red" : "inherit",
            borderBottom:
              value === 3 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
        <Tab
          label="대여상품결제"
          sx={{
            fontSize: "1rem",
            fontWeight: value === 4 ? "bold" : "normal",
            color: value === 4 ? "red" : "inherit",
            borderBottom:
              value === 4 ? "2px solid red" : "2px solid transparent",
            marginRight: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "red",
            },
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        결제전체 내용
      </TabPanel>
      <TabPanel value={value} index={1}>
        이용권상품결제 내용
      </TabPanel>
      <TabPanel value={value} index={2}>
        일반상품결제 내용
      </TabPanel>
      <TabPanel value={value} index={3}>
        락커결제 내용
      </TabPanel>
      <TabPanel value={value} index={4}>
        대여상품결제 내용
      </TabPanel>
    </Paper>
  );
};

export default PaytManageLayout;
