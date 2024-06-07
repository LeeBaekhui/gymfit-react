import React, { useState, useEffect } from "react";
import Api from "../../../../Api"; // Api 컴포넌트 가져오기
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
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

const LockerPositionSet = () => {
  const [lockIdx, setLockIdx] = useState("");
  const [loW, setLoW] = useState("");
  const [loH, setLoH] = useState("");
  const [loName, setLoName] = useState("");
  const [positions, setPositions] = useState([]);
  const [lockerCategories, setLockerCategories] = useState([]);

  useEffect(() => {
    const fetchLockerCategories = async () => {
      try {
        const response = await Api.get("/lockers/categories");
        setLockerCategories(response.data);
      } catch (error) {
        console.error(
          "There was an error fetching the locker categories!",
          error
        );
      }
    };

    const fetchPositions = async () => {
      try {
        const response = await Api.get("/lockerPositions");
        setPositions(response.data);
      } catch (error) {
        console.error("There was an error fetching the positions!", error);
      }
    };

    fetchLockerCategories();
    fetchPositions();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const newPosition = {
      lockerPositionCategory: lockIdx,
      lockerPositionWidth: loW,
      lockerPositionHeight: loH,
      lockerPositionName: loName,
    };

    try {
      const response = await Api.post("/lockerPositions", newPosition);
      setPositions([...positions, response.data]);
      // Clear form fields
      setLockIdx("");
      setLoW("");
      setLoH("");
      setLoName("");
    } catch (error) {
      console.error("There was an error creating the position!", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await Api.delete(`/lockerPositions/${id}`);
      setPositions(positions.filter((position) => position.id !== id));
    } catch (error) {
      console.error("There was an error deleting the position!", error);
    }
  };

  const handleEdit = (id) => {
    const positionToEdit = positions.find((position) => position.id === id);
    setLockIdx(positionToEdit.lockerPositionCategory);
    setLoW(positionToEdit.lockerPositionWidth);
    setLoH(positionToEdit.lockerPositionHeight);
    setLoName(positionToEdit.lockerPositionName);
    setPositions(positions.filter((position) => position.id !== id));
  };

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h6" gutterBottom>
        락커 위치 설정
      </Typography>
      <Box component="form" onSubmit={handleFormSubmit} sx={{ mb: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel id="lock-category-select-label">락커분류</InputLabel>
              <Select
                labelId="lock-category-select-label"
                id="lock_idx"
                value={lockIdx}
                label="락커분류"
                onChange={(e) => setLockIdx(e.target.value)}
                size="small"
              >
                <MenuItem value="">
                  <em>분류선택</em>
                </MenuItem>
                {lockerCategories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="가로갯수"
              placeholder="예) 숫자입력"
              value={loW}
              onChange={(e) => setLoW(e.target.value)}
              required
              size="small"
              type="number"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="세로갯수"
              placeholder="예) 숫자입력"
              value={loH}
              onChange={(e) => setLoH(e.target.value)}
              required
              size="small"
              type="number"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="위치명"
              placeholder="예) 로비"
              value={loName}
              onChange={(e) => setLoName(e.target.value)}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" color="primary" type="submit">
              만들기
            </Button>
          </Grid>
        </Grid>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                연번
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                락커분류
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                락커번호
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                위치명
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                가로X세로
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: "1.0rem",
                  minWidth: "150px",
                }}
              >
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {positions.map((position) => (
              <TableRow key={position.id}>
                <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                  {position.id}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                  {position.lockerPositionCategory}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                  {position.새로지정}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                  {position.lockerPositionName}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                  {position.lockerPositionWidth} X{" "}
                  {position.lockerPositionHeight}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.0rem", minWidth: "150px" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleEdit(position.id)}
                    sx={{ marginRight: 1 }}
                  >
                    수정
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => handleDelete(position.id)}
                  >
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

export default LockerPositionSet;
