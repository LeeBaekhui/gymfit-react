import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Paper,
} from "@mui/material";
import { DataGrid, GridRow } from "@mui/x-data-grid";

const FacilityPayManagement = () => {
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    u_name: "",
    image: "",
    u_term: "",
    lesson_cnt: "",
    real_price: "",
    cardprice: "",
    cashprice: "",
    bankprice: "",
    pointprice: "",
    disprice1: "",
    disprice2: "",
    pointprice1: "",
    pointprice2: "",
    times_yn: "N",
    times_cnt: "",
  });

  const [categories, setCategories] = useState([
    "시설이용권",
    "개인레슨",
    "그룹레슨",
    "OT",
  ]); // Sample categories, replace with actual data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRows([...rows, { ...formData, id: rows.length + 1 }]);
    setFormData({
      category: "",
      u_name: "",
      image: "",
      u_term: "",
      lesson_cnt: "",
      real_price: "",
      cardprice: "",
      cashprice: "",
      bankprice: "",
      pointprice: "",
      disprice1: "",
      disprice2: "",
      pointprice1: "",
      pointprice2: "",
      times_yn: "N",
      times_cnt: "",
    });
  };

  const handleEdit = (id) => {
    const row = rows.find((row) => row.id === id);
    if (row) {
      setFormData(row);
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "category", headerName: "상품 분류명", width: 150 },
    { field: "u_name", headerName: "이용권 상품 결제명", width: 200 },
    { field: "u_term", headerName: "기간", width: 100 },
    { field: "lesson_cnt", headerName: "레슨회차", width: 100 },
    { field: "real_price", headerName: "판매금액", width: 120 },
    { field: "cardprice", headerName: "카드금액", width: 120 },
    { field: "cashprice", headerName: "현금금액", width: 120 },
    { field: "bankprice", headerName: "이체금액", width: 120 },
    { field: "pointprice", headerName: "포인트금액", width: 120 },
    { field: "disprice1", headerName: "할인금액", width: 120 },
    { field: "disprice2", headerName: "할인율", width: 80 },
    { field: "pointprice1", headerName: "포인트적립", width: 120 },
    { field: "pointprice2", headerName: "포인트율", width: 80 },
    { field: "times_yn", headerName: "횟수설정", width: 120 },
    { field: "times_cnt", headerName: "허용횟수", width: 120 },
    {
      field: "actions",
      headerName: "관리",
      width: 150,
      renderCell: (params) => (
        <Box>
          <Button
            onClick={() => handleEdit(params.id)}
            variant="contained"
            color="primary"
            size="small"
            sx={{ mr: 1 }}
          >
            수정
          </Button>
          <Button
            onClick={() => handleDelete(params.id)}
            variant="contained"
            color="secondary"
            size="small"
          >
            삭제
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto", p: 3 }}>
      <Card sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          이용권 상품 결제관리
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                select
                label="상품 분류명"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="이용권 상품 결제명"
                placeholder="상품명 입력 예) 헬스 1개월 등..."
                name="u_name"
                value={formData.u_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="상품 이미지"
                placeholder="100 X 70pixe 이미지"
                name="image"
                value={formData.image}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <Button
                      variant="contained"
                      component="label"
                      sx={{ height: "30px", width: "150px" }}
                    >
                      파일찾기
                      <input type="file" hidden />
                    </Button>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                select
                label="기간설정"
                name="u_term"
                value={formData.u_term}
                onChange={handleChange}
              >
                {Array.from({ length: 12 }, (_, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    {index + 1}개월
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="레슨회차"
                placeholder="레슨횟수 입력"
                name="lesson_cnt"
                value={formData.lesson_cnt}
                onChange={handleChange}
                InputProps={{
                  endAdornment: <Typography variant="body2">회</Typography>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="판매금액"
                placeholder="판매금액 입력"
                name="real_price"
                value={formData.real_price}
                onChange={handleChange}
                InputProps={{
                  endAdornment: <Typography variant="body2">원</Typography>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="카드금액"
                placeholder="카드금액 입력"
                name="cardprice"
                value={formData.cardprice}
                onChange={handleChange}
                InputProps={{
                  endAdornment: <Typography variant="body2">원</Typography>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="현금금액"
                placeholder="현금금액 입력"
                name="cashprice"
                value={formData.cashprice}
                onChange={handleChange}
                InputProps={{
                  endAdornment: <Typography variant="body2">원</Typography>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="이체금액"
                placeholder="이체금액 입력"
                name="bankprice"
                value={formData.bankprice}
                onChange={handleChange}
                InputProps={{
                  endAdornment: <Typography variant="body2">원</Typography>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="포인트금액"
                placeholder="포인트금액 입력"
                name="pointprice"
                value={formData.pointprice}
                onChange={handleChange}
                InputProps={{
                  endAdornment: <Typography variant="body2">P</Typography>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  fullWidth
                  size="small"
                  label="할인금액"
                  placeholder="할인금액 입력"
                  name="disprice1"
                  value={formData.disprice1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: <Typography variant="body2">원</Typography>,
                  }}
                />
                <TextField
                  fullWidth
                  size="small"
                  label="할인율"
                  placeholder="할인율 입력"
                  name="disprice2"
                  value={formData.disprice2}
                  onChange={handleChange}
                  sx={{ ml: 2 }}
                  InputProps={{
                    endAdornment: <Typography variant="body2">%</Typography>,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  fullWidth
                  size="small"
                  label="포인트적립"
                  placeholder="포인트적립 입력"
                  name="pointprice1"
                  value={formData.pointprice1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: <Typography variant="body2">원</Typography>,
                  }}
                />
                <TextField
                  fullWidth
                  size="small"
                  label="포인트율"
                  placeholder="포인트율 입력"
                  name="pointprice2"
                  value={formData.pointprice2}
                  onChange={handleChange}
                  sx={{ ml: 2 }}
                  InputProps={{
                    endAdornment: <Typography variant="body2">%</Typography>,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                select
                label="입장횟수"
                name="times_cnt"
                value={formData.times_cnt}
                onChange={handleChange}
                placeholder="입장횟수"
              >
                <MenuItem value="N">제한없음</MenuItem>
                <MenuItem value="1">1회 입장</MenuItem>
                <MenuItem value="2">2회 입장</MenuItem>
                <MenuItem value="3">3회 입장</MenuItem>
                <MenuItem value="4">4회 입장</MenuItem>
                <MenuItem value="5">5회 입장</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button type="submit" variant="contained" color="primary">
              제출
            </Button>
          </Box>
        </Box>
      </Card>
      <Paper sx={{ width: "100%", height: "calc(100vh - 600px)", mt: 3 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15, 20, 25, 50]}
          pagination
          autoHeight
          components={{
            Row: (props) => <GridRow {...props} />,
          }}
        />
      </Paper>
    </Box>
  );
};

export default FacilityPayManagement;
