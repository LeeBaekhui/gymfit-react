import React from "react";
import { Box, Grid, Paper, Container } from "@mui/material";
import MemSearchBtn from "./MemSearchBtn";
import MemSearchBar from "./MemSearchBar";
import MemSortOptionsBar from "./MemSortOptionsBar";
import MemCard from "./MemCard";

const MemSearchLayout = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ gap: 2, mb: 2 }}
      >
        <MemSearchBtn />
        <MemSearchBar />
        <MemSortOptionsBar />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <MemCard />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <MemCard />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <MemCard />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <MemCard />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MemSearchLayout;
