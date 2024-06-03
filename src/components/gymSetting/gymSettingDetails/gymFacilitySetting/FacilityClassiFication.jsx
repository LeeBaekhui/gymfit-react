import React, { useState } from "react";
import { Box, Button, Card, Typography, TextField, Paper, Select, MenuItem, FormControl, InputLabel, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const initialRows = [
  {
    id: 1,
    category: "시설이용권",
    paymentCount: 0,
    paymentAmount: 0,
    registeredPaymentName: "",
    manage: "-",
  },
  {
    id: 2,
    category: "개인레슨",
    paymentCount: 0,
    paymentAmount: 0,
    registeredPaymentName: "",
    manage: "-",
  },
  {
    id: 3,
    category: "그룹레슨",
    paymentCount: 0,
    paymentAmount: 0,
    registeredPaymentName: "",
    manage: "-",
  },
];

const categoryOptions = ["시설이용권", "개인레슨이용권", "그룹레슨이용권", "OT이용권"];

const FacilityClassiFication = ({ onCategoryAdd }) => {
  const [rows, setRows] = useState(initialRows);
  const [formValue, setFormValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (selectedCategory && formValue) {
      if (isEditing) {
        updateRow(editId, formValue, selectedCategory);
      } else {
        addRow(formValue, selectedCategory);
        onCategoryAdd(selectedCategory);
      }
      setFormValue("");
      setSelectedCategory("");
      setIsEditing(false);
    }
  };

  const addRow = (category, selectedCategory) => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        category,
        paymentCount: 0,
        paymentAmount: 0,
        registeredPaymentName: selectedCategory,
        manage: "-",
      },
    ]);
  };

  const updateRow = (id, newCategory, selectedCategory) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, category: newCategory, registeredPaymentName: selectedCategory } : row
      )
    );
    setIsEditing(false);
    setEditId(null);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleEdit = (id) => {
    const row = rows.find((row) => row.id === id);
    if (row) {
      setFormValue(row.category);
      setSelectedCategory(row.registeredPaymentName);
      setIsEditing(true);
      setEditId(id);
    }
  };

  const columns = [
    { field: "id", headerName: "번호", flex: 0.5, headerAlign: "center", align: "center" },
    { field: "category", headerName: "이용권상품 분류명", flex: 1 },
    { field: "registeredPaymentName", headerName: "등록된 결제명", flex: 1 },
    { field: "paymentAmount", headerName: "결제금액", type: "number", flex: 0.8 },
    { field: "paymentCount", headerName: "결제건수", type: "number", flex: 0.7 },
    {
      field: "manage",
      headerName: "관리",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box>
          <Button
            onClick={() => handleEdit(params.id)}
            aria-label="edit"
            variant="contained"
            color="primary"
            sx={{ mr: 1, fontSize: '0.7rem' }}
          >
            수정
          </Button>
          <Button
            onClick={() => deleteRow(params.id)}
            aria-label="delete"
            variant="contained"
            color="secondary"
            sx={{ mr: 1, fontSize: '0.7rem' }}
          >
            삭제
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%", height: "100%", p: 3, boxSizing: "border-box" }}>
      <Card sx={{ p: 2, mb: 2 }}>
        <Box component="form" id="SubmituserForm" name="SubmituserForm" method="post" onSubmit={handleOnSubmit}>
          <Box sx={{ mb: 2 }}>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                  <InputLabel>상품분류 선택</InputLabel>
                  <Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    label="선택 입력"
                  >
                    {categoryOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  name="co_name"
                  id="co_name"
                  label="이용권상품명 입력"
                  variant="outlined"
                  fullWidth
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
            <Typography sx={{ mt: 1, fontSize: "0.9rem" }}>
              이용권 상품을 분류를 선택하고 이용권상품명을 설정합니다. 필요에 따라 분류 만들어서 사용하세요.
            </Typography>
            <Typography sx={{ mt: 1, fontSize: "0.9rem" }}>
              ※ 기본적용 분류는 삭제가 불가능 합니다. 다른 분류 생성시 삭제 보다는 수정을 이용해 주세요. (통계 처리에 필요)
            </Typography>
          </Box>
          <Box textAlign="center">
            <Button type="submit" variant="contained" color="primary">
              {isEditing ? "수정" : "만들기"}
            </Button>
          </Box>
        </Box>
      </Card>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          이용권상품 목록
        </Typography>
        <Box sx={{ height: "400px", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 15, 20, 25, 50]}
            pagination
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default FacilityClassiFication;
