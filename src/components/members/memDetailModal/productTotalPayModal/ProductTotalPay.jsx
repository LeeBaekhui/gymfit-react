import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

const ProductTotalPay = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        총 결제금액
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
        1,000,000원
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Button variant="contained" color="primary" fullWidth>
        결제하기
      </Button>
    </Box>
  );
};

export default ProductTotalPay;
