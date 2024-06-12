import React from 'react';
import { Box, TextField, MenuItem, Button, Grid, Typography } from '@mui/material';

const ProductSelectionForm1 = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            select
            label="상품분류"
            fullWidth
            variant="outlined"
          >
            <MenuItem value="">
              <em>상품 분류 선택</em>
            </MenuItem>
            {/* Add other options here */}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            label="상품선택"
            fullWidth
            variant="outlined"
          >
            <MenuItem value="">
              <em>시설 이용권 상품 선택</em>
            </MenuItem>
            {/* Add other options here */}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="이용기간"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="판매금액"
            type="number"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: <Typography>원</Typography>,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth sx={{ bgcolor: 'grey.700', color: 'white' }}>
            카드
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: <Typography>원</Typography>,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth sx={{ bgcolor: 'grey.700', color: 'white' }}>
            현금
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: <Typography>원</Typography>,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth sx={{ bgcolor: 'grey.700', color: 'white' }}>
            이체
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: <Typography>원</Typography>,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth sx={{ bgcolor: 'grey.700', color: 'white' }}>
            포인트
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: <Typography>P</Typography>,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="할인"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: <Typography>원</Typography>,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="결제금액"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: <Typography>원</Typography>,
            }}
            sx={{ fontWeight: 'bold', color: 'red' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="미납금"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: <Typography>원</Typography>,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="포인트적립"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: <Typography>%</Typography>,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="메모"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductSelectionForm1;
