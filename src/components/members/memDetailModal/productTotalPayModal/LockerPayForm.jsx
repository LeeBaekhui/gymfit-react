// LockerPayForm.jsx
import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

const LockerPayForm = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={1} sx={{ mb: 1 }}>
        {" "}
        {/* 줄 간격 줄이기 */}
        <Grid item xs={12}>
          <TextField
            select
            label="락커분류"
            fullWidth
            variant="outlined"
            size="small" // 최소 사이즈로 설정
            InputLabelProps={{ style: { fontSize: "0.875rem" } }} // 글자 크기 조정
            InputProps={{ style: { fontSize: "0.875rem", height: 36 } }} // 글자 크기 및 높이 조정
          >
            <MenuItem value="">
              <em>락커 분류 선택</em>
            </MenuItem>
            {/* Add other options here */}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            label="락커선택"
            fullWidth
            variant="outlined"
            size="small" // 최소 사이즈로 설정
            InputLabelProps={{ style: { fontSize: "0.875rem" } }} // 글자 크기 조정
            InputProps={{ style: { fontSize: "0.875rem", height: 36 } }} // 글자 크기 및 높이 조정
          >
            <MenuItem value="">
              <em>락커 상품 선택</em>
            </MenuItem>
            {/* Add other options here */}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="시작일"
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  variant="outlined"
                  size="small" // 최소 사이즈로 설정
                  InputLabelProps={{ style: { fontSize: "0.875rem" } }} // 글자 크기 조정
                  InputProps={{
                    ...params.InputProps,
                    style: { fontSize: "0.875rem", height: 36 },
                  }} // 글자 크기 및 높이 조정
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="종료일"
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  variant="outlined"
                  size="small" // 최소 사이즈로 설정
                  InputLabelProps={{ style: { fontSize: "0.875rem" } }} // 글자 크기 조정
                  InputProps={{
                    ...params.InputProps,
                    style: { fontSize: "0.875rem", height: 36 },
                  }} // 글자 크기 및 높이 조정
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="판매금액"
            type="number"
            fullWidth
            variant="outlined"
            size="small" // 최소 사이즈로 설정
            InputLabelProps={{ style: { fontSize: "0.875rem" } }} // 글자 크기 조정
            InputProps={{
              endAdornment: <Typography>원</Typography>,
              style: { fontSize: "0.875rem", height: 36 }, // 글자 크기 및 높이 조정
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "grey.700",
              color: "white",
              fontSize: "0.875rem",
              height: 36,
            }} // 글자 크기 및 높이 조정
          >
            카드
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            size="small" // 최소 사이즈로 설정
            InputProps={{
              endAdornment: <Typography>원</Typography>,
              style: { fontSize: "0.875rem", height: 36 }, // 글자 크기 및 높이 조정
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "grey.700",
              color: "white",
              fontSize: "0.875rem",
              height: 36,
            }} // 글자 크기 및 높이 조정
          >
            현금
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            size="small" // 최소 사이즈로 설정
            InputProps={{
              endAdornment: <Typography>원</Typography>,
              style: { fontSize: "0.875rem", height: 36 }, // 글자 크기 및 높이 조정
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "grey.700",
              color: "white",
              fontSize: "0.875rem",
              height: 36,
            }} // 글자 크기 및 높이 조정
          >
            이체
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            size="small" // 최소 사이즈로 설정
            InputProps={{
              endAdornment: <Typography>원</Typography>,
              style: { fontSize: "0.875rem", height: 36 }, // 글자 크기 및 높이 조정
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "grey.700",
              color: "white",
              fontSize: "0.875rem",
              height: 36,
            }} // 글자 크기 및 높이 조정
          >
            포인트
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            size="small" // 최소 사이즈로 설정
            InputProps={{
              endAdornment: <Typography>P</Typography>,
              style: { fontSize: "0.875rem", height: 36 }, // 글자 크기 및 높이 조정
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="할인"
            fullWidth
            variant="outlined"
            size="small" // 최소 사이즈로 설정
            InputLabelProps={{ style: { fontSize: "0.875rem" } }} // 글자 크기 조정
            InputProps={{
              endAdornment: <Typography>원</Typography>,
              style: { fontSize: "0.875rem", height: 36 }, // 글자 크기 및 높이 조정
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="결제금액"
            fullWidth
            variant="outlined"
            size="small" // 최소 사이즈로 설정
            InputLabelProps={{ style: { fontSize: "0.875rem" } }} // 글자 크기 조정
            InputProps={{
              endAdornment: <Typography>원</Typography>,
              style: {
                fontSize: "0.875rem",
                fontWeight: "bold",
                color: "red",
                height: 36,
              }, // 글자 크기 및 높이 조정
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="미납금"
            fullWidth
            variant="outlined"
            size="small" // 최소 사이즈로 설정
            InputLabelProps={{ style: { fontSize: "0.875rem" } }} // 글자 크기 조정
            InputProps={{
              endAdornment: <Typography>원</Typography>,
              style: { fontSize: "0.875rem", height: 36 }, // 글자 크기 및 높이 조정
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="포인트적립"
            fullWidth
            variant="outlined"
            size="small" // 최소 사이즈로 설정
            InputLabelProps={{ style: { fontSize: "0.875rem" } }} // 글자 크기 조정
            InputProps={{
              endAdornment: <Typography>%</Typography>,
              style: { fontSize: "0.875rem", height: 36 }, // 글자 크기 및 높이 조정
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
            size="small" // 최소 사이즈로 설정
            InputLabelProps={{ style: { fontSize: "0.875rem" } }} // 글자 크기 조정
            InputProps={{ style: { fontSize: "0.875rem" } }} // 글자 크기 조정
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LockerPayForm;
