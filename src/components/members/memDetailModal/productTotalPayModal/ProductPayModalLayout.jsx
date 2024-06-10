import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import ProductSelectionForm1 from "./ProductSelectionForm1";
import ProductSelectionForm2 from "./ProductSelectionForm2";
import ProductTotalPay from "./ProductTotalPay";

const ProductPayModalLayout = () => {
  return (
    <Box sx={{ mt: 0, mb: 0, pt: 0, pb: 0 }}>
      <Grid container spacing={1} sx={{ mt: 0, mb: 0, pt: 0, pb: 0 }}>
        <Grid item xs={12} md={4} sx={{ mt: 0, mb: 0, pt: 0, pb: 0 }}>
          <Paper elevation={3} sx={{ p: 1, mt: 0, mb: 0, pt: 0, pb: 0 }}>
            <ProductSelectionForm1 />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={{ mt: 0, mb: 0, pt: 0, pb: 0 }}>
          <Paper elevation={3} sx={{ p: 1, mt: 0, mb: 0, pt: 0, pb: 0 }}>
            <ProductSelectionForm2 />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={{ mt: 0, mb: 0, pt: 0, pb: 0 }}>
          <Paper elevation={3} sx={{ p: 1, mt: 0, mb: 0, pt: 0, pb: 0 }}>
            <ProductTotalPay />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPayModalLayout;
