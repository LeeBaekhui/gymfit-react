import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import ProductMenuPay from './ProductMenuPay';
import ProductSelectionForm1 from './ProductSelectionForm1';
import ProductSelectionForm2 from './ProductSelectionForm2';
import ProductTotalPay from './ProductTotalPay';

const ProductPayModalLayout = () => {
  return (
    <Box>
      <Paper elevation={3} sx={{ mb: 2, p: 2 }}>
        <ProductMenuPay />
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <ProductSelectionForm1 />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <ProductSelectionForm2 />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <ProductTotalPay />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPayModalLayout;
