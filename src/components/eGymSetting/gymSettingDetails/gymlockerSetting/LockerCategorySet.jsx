import React, { useState, useEffect } from "react";
import { Api } from "@/Api"; // Api 컴포넌트 가져오기
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const LockerCategorySet = ({ onLockerAdd }) => {
  const [lockerCategory, setLockerCategory] = useState("");
  const [lockerStartNumber, setLockerStartNumber] = useState("");
  const [lockerEndNumber, setLockerEndNumber] = useState("");
  const [lockers, setLockers] = useState([]);

  useEffect(() => {
    const fetchLockers = async () => {
      try {
        const response = await Api.get("/lockers");
        setLockers(response.data);
      } catch (error) {
        console.error("There was an error fetching the lockers!", error);
      }
    };

    fetchLockers();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!lockerCategory || !lockerStartNumber || !lockerEndNumber) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }

    const newLocker = {
      category: lockerCategory,
      lockerStartNumber: parseInt(lockerStartNumber, 10),
      lockerEndNumber: parseInt(lockerEndNumber, 10),
    };

    try {
      const response = await Api.post("/lockers", newLocker);
      setLockers([...lockers, response.data]);
      setLockerCategory("");
      setLockerStartNumber("");
      setLockerEndNumber("");

      if (onLockerAdd) {
        onLockerAdd(response.data);
      }
    } catch (error) {
      console.error("There was an error creating the locker!", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await Api.delete(`/lockers/${id}`);
      setLockers(lockers.filter((locker) => locker.id !== id));
    } catch (error) {
      console.error("There was an error deleting the locker!", error);
    }
  };

  const handleEdit = async (id) => {
    const lockerToEdit = lockers.find((locker) => locker.id === id);
    setLockerCategory(lockerToEdit.category);
    setLockerStartNumber(lockerToEdit.lockerStartNumber);
    setLockerEndNumber(lockerToEdit.lockerEndNumber);
    try {
      const response = await Api.put(`/lockers/${id}`, {
        category: lockerCategory,
        lockerStartNumber: parseInt(lockerStartNumber, 10),
        lockerEndNumber: parseInt(lockerEndNumber, 10),
      });
      setLockers(lockers.map((locker) => (locker.id === id ? response.data : locker)));
    } catch (error) {
      console.error("There was an error updating the locker!", error);
    }
  };

  return (
    <Box sx={{ margin: 3 }}>
      <Typography variant="h6" gutterBottom>
        락커 분류 설정
      </Typography>
      <Box component="form" onSubmit={handleFormSubmit} sx={{ marginBottom: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              label="락커분류"
              id="lockerCategory"
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
              label="시작번호 설정"
              id="lockerStartNumber"
              placeholder="예) 숫자입력"
              value={lockerStartNumber}
              onChange={(e) => setLockerStartNumber(e.target.value)}
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              size="small"
              label="끝번호 설정"
              id="lockerEndNumber"
              placeholder="예) 숫자입력"
              value={lockerEndNumber}
              onChange={(e) => setLockerEndNumber(e.target.value)}
              required
              type="number"
            />
          </Grid>
        </Grid>
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="primary" type="submit">
            분류만들기
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>연번</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>락커분류명</TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>시작번호</TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>끝번호</TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lockers.map((locker, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{locker.category}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{locker.lockerStartNumber}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{locker.lockerEndNumber}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Button variant="contained" color="primary" size="small" onClick={() => handleEdit(locker.id)} sx={{ marginRight: 1 }}>
                    수정
                  </Button>
                  <Button variant="contained" color="error" size="small" onClick={() => handleDelete(locker.id)}>
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LockerCategorySet;
