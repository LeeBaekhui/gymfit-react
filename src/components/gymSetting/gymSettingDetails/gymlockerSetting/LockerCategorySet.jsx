import React, { useState, useEffect } from "react";
import Api from "../../../../Api"; // Api 컴포넌트 가져오기
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

const LockerCategorySet = ({ onLockerAdd }) => {
  const [lockerCategory, setLockerCategory] = useState("");
  const [lockerStartNumber, setLockerStartNumber] = useState("");
  const [lockerEndNumber, setLockerEndNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);
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

  const handleDelete = (idx) => {
    setSelectedIdx(idx);
    setOpen(true);
  };

  const confirmDelete = async () => {
    const lockerToDelete = lockers[selectedIdx];
    try {
      await Api.delete(`/lockers/${lockerToDelete.id}`);
      setLockers(lockers.filter((_, index) => index !== selectedIdx));
      setOpen(false);
    } catch (error) {
      console.error("There was an error deleting the locker!", error);
    }
  };

  const handleEdit = (idx) => {
    const locker = lockers[idx];
    setLockerCategory(locker.category);
    setLockerStartNumber(locker.lockerStartNumber);
    setLockerEndNumber(locker.lockerEndNumber);
    setSelectedIdx(idx);
  };

  const confirmEdit = async () => {
    if (selectedIdx === null) return;

    const lockerToUpdate = lockers[selectedIdx];
    const updatedLocker = {
      category: lockerCategory,
      lockerStartNumber: parseInt(lockerStartNumber, 10),
      lockerEndNumber: parseInt(lockerEndNumber, 10),
    };

    try {
      const response = await Api.put(
        `/lockers/${lockerToUpdate.id}`,
        updatedLocker
      );
      const updatedLockers = lockers.map((locker, index) =>
        index === selectedIdx ? response.data : locker
      );
      setLockers(updatedLockers);
      setLockerCategory("");
      setLockerStartNumber("");
      setLockerEndNumber("");
      setSelectedIdx(null);
    } catch (error) {
      console.error("There was an error updating the locker!", error);
    }
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
                시작번호
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                끝번호
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
                <TableCell>{locker.category}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {locker.lockerStartNumber}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {locker.lockerEndNumber}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleEdit(index)}
                    sx={{ marginRight: 1 }}
                  >
                    수정
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
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

export default LockerCategorySet;
