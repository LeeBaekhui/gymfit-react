import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const LokerClassFicationSet = ({ onLockerAdd }) => {
  const [lockerCategory, setLockerCategory] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [lockers, setLockers] = useState([
    { name: "남자락커", range: "1~100" },
    { name: "여자락커", range: "101~150" },
  ]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!lockerCategory || !num1 || !num2) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }

    const newLocker = {
      name: lockerCategory,
      range: `${num1}~${num2}`,
    };

    setLockers([...lockers, newLocker]);
    setLockerCategory("");
    setNum1("");
    setNum2("");

    if (onLockerAdd) {
      onLockerAdd(newLocker);
    }
  };

  const handleDelete = (idx) => {
    setSelectedIdx(idx);
    setOpen(true);
  };

  const confirmDelete = () => {
    setLockers(lockers.filter((_, index) => index !== selectedIdx));
    setOpen(false);
  };

  const handleEdit = (idx) => {
    const locker = lockers[idx];
    setLockerCategory(locker.name);
    const [start, end] = locker.range.split("~");
    setNum1(start);
    setNum2(end);
    setSelectedIdx(idx);
  };

  const confirmEdit = () => {
    const updatedLockers = lockers.map((locker, index) =>
      index === selectedIdx
        ? { name: lockerCategory, range: `${num1}~${num2}` }
        : locker
    );
    setLockers(updatedLockers);
    setLockerCategory("");
    setNum1("");
    setNum2("");
    setSelectedIdx(null);
  };

  return (
    <Box sx={{ margin: 3 }}>
      <Typography variant="h6" gutterBottom>
        락커 분류 설정
      </Typography>
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        sx={{ marginBottom: 4 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="락커분류"
              placeholder="예) 헬스락커, 골프락커, 남자락커, 여자락커 등"
              value={lockerCategory}
              onChange={(e) => setLockerCategory(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              size="small"
              label="번호설정 시작"
              placeholder="예) 숫자입력"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              size="small"
              label="번호설정 끝"
              placeholder="예) 숫자입력"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              required
              type="number"
            />
          </Grid>
        </Grid>
        <Box mt={2} textAlign="center">
          {selectedIdx !== null ? (
            <Button variant="contained" color="primary" onClick={confirmEdit}>
              수정완료
            </Button>
          ) : (
            <Button variant="contained" color="primary" type="submit">
              분류만들기
            </Button>
          )}
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>연번</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>락커분류명</TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                범위
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lockers.map((locker, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{locker.name}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {locker.range}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(index)}
                    sx={{ marginRight: 1 }}
                  >
                    수정
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(index)}
                  >
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>삭제 확인</DialogTitle>
        <DialogContent>
          <DialogContentText>정말 삭제하시겠습니까?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            취소
          </Button>
          <Button onClick={confirmDelete} color="primary" autoFocus>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LokerClassFicationSet;
