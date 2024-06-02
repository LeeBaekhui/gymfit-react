import React, { useState } from "react";
import { Box, Button, Card, Typography, TextField, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const FacilityClassification = () => {
  const [rows, setRows] = useState([
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
    {
      id: 4,
      category: "OT",
      paymentCount: 0,
      paymentAmount: 0,
      registeredPaymentName: "",
      manage: "-",
    },

    // Add more rows as needed
  ]);
  const [formValue, setFormValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newCategory = formData.get("co_name");
    if (newCategory) {
      if (isEditing) {
        updateRow(editId, newCategory);
      } else {
        addRow(newCategory);
      }
      setFormValue("");
      setIsEditing(false);
    }
  };

  const addRow = (category) => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        category,
        paymentCount: 0,
        paymentAmount: 0,
        registeredPaymentName: "",
        manage: "-",
      },
    ]);
  };

  const updateRow = (id, newCategory) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, category: newCategory } : row
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
      setIsEditing(true);
      setEditId(id);
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "번호",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    { field: "category", headerName: "이용권상품 분류명", width: 300 },
    { field: "registeredPaymentName", headerName: "등록된 결제명", width: 180 },
    {
      field: "paymentAmount",
      headerName: "결제금액",
      type: "number",
      width: 150,
    },
    {
      field: "paymentCount",
      headerName: "결제건수",
      type: "number",
      width: 110,
    },
    {
      field: "manage",
      headerName: "관리",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box>
          <Button
            onClick={() => handleEdit(params.id)}
            aria-label="edit"
            variant="contained"
            color="primary"
            sx={{ mr: 1 }}
          >
            수정
          </Button>
          <Button
            onClick={() => deleteRow(params.id)}
            aria-label="delete"
            variant="contained"
            color="secondary"
          >
            삭제
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%", height: "100vh", p: 3, boxSizing: "border-box" }}>
      <Card sx={{ p: 2 }}>
        <Box
          component="form"
          id="SubmituserForm"
          name="SubmituserForm"
          method="post"
          onSubmit={handleOnSubmit}
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              이용권상품 분류명
            </Typography>
            <TextField
              name="co_name"
              id="co_name"
              label="이용권상품 분류명"
              variant="outlined"
              fullWidth
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Typography>예: 시설이용, 개인레슨, 그룹레슨, OT 등</Typography>
            <Typography sx={{ mt: 1 }}>
              이용권 상품을 분류합니다. “시설이용권, 개인레슨이용권,
              그룹레슨이용권, 패키지이용권, OT이용권”은 기본적용 분류이고, 그 외
              필요에 따라 분류 만들어서 사용하세요
            </Typography>
            <Typography sx={{ mt: 1 }}>
              ※ 기본적용 분류는 삭제는 불가능 합니다. 다른 분류를 생성시 삭제
              보다는 수정을 이용해 주세요. (통계 처리에 필요)
            </Typography>
          </Box>
          <Box textAlign="center">
            <Button type="submit" variant="contained" color="primary">
              {isEditing ? "수정" : "만들기"}
            </Button>
          </Box>
        </Box>
      </Card>
      <Paper sx={{ p: 2, height: "100%" }}>
        <Typography variant="h6" gutterBottom>
          이용권상품 목록
        </Typography>
        <div style={{ height: "calc(100vh - 400px)", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 15, 20, 25, 50]}
            pagination
          />
        </div>
      </Paper>
    </Box>
  );
};

export default FacilityClassification;
