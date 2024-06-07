import React, { useState } from "react";
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newPosition = {
      id: positions.length + 1,
      category: lockIdx,
      loW: loW,
      loH: loH,
      loName: loName,
    };
    setPositions([...positions, newPosition]);
    // Clear form fields
    setLockIdx("");
    setLoW("");
    setLoH("");
    setLoName("");
  };

  const handleDelete = (id) => {
    setPositions(positions.filter((position) => position.id !== id));
  };

  const handleEdit = (id) => {
    const positionToEdit = positions.find((position) => position.id === id);
    setLockIdx(positionToEdit.category);
    setLoW(positionToEdit.loW);
    setLoH(positionToEdit.loH);
    setLoName(positionToEdit.loName);
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
                {/* 락커분류 옵션 추가 */}
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
                  {position.category}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                  {position.loName}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.0rem" }}>
                  {position.loW} X {position.loH}
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
