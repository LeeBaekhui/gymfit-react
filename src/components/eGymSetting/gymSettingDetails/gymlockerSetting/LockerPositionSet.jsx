// 경로: src\components\gymSetting\gymSettingDetails\gymlockerSetting\LockerPositionSet.jsx

import React, { useState } from 'react';
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
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Edit, Delete, Settings } from '@mui/icons-material';

const LockerPositionSet = () => {
  const [branchIdx, setBranchIdx] = useState('');
  const [lockIdx, setLockIdx] = useState('');
  const [loW, setLoW] = useState('');
  const [loH, setLoH] = useState('');
  const [loName, setLoName] = useState('');
  const [positions, setPositions] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newPosition = {
      id: positions.length + 1,
      branch: branchIdx,
      category: lockIdx,
      loW: loW,
      loH: loH,
      loName: loName,
    };
    setPositions([...positions, newPosition]);
    // Clear form fields
    setBranchIdx('');
    setLockIdx('');
    setLoW('');
    setLoH('');
    setLoName('');
  };

  const handleDelete = (id) => {
    setPositions(positions.filter(position => position.id !== id));
  };

  const handleEdit = (id) => {
    const positionToEdit = positions.find(position => position.id === id);
    setBranchIdx(positionToEdit.branch);
    setLockIdx(positionToEdit.category);
    setLoW(positionToEdit.loW);
    setLoH(positionToEdit.loH);
    setLoName(positionToEdit.loName);
    setPositions(positions.filter(position => position.id !== id));
  };

  const handleSettings = (id) => {
    // 설정 로직 추가
  };

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h6" gutterBottom>락커 위치 설정</Typography>
      <Box component="form" onSubmit={handleFormSubmit} sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="branch-select-label">지점</InputLabel>
              <Select
                labelId="branch-select-label"
                id="branch_idx"
                value={branchIdx}
                label="지점"
                onChange={(e) => setBranchIdx(e.target.value)}
                size="small"
              >
                <MenuItem value=""><em>지점선택</em></MenuItem>
                {/* 지점 옵션 추가 */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
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
                <MenuItem value=""><em>분류선택</em></MenuItem>
                {/* 락커분류 옵션 추가 */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={3}>
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
          <Grid item xs={6} sm={3}>
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
          <Grid item xs={12} sm={6}>
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
        </Grid>
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="primary" type="submit">만들기</Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>연번</TableCell>
              <TableCell>지점</TableCell>
              <TableCell>락커분류</TableCell>
              <TableCell>위치명</TableCell>
              <TableCell>가로X세로</TableCell>
              <TableCell>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {positions.map((position) => (
              <TableRow key={position.id}>
                <TableCell>{position.id}</TableCell>
                <TableCell>{position.branch}</TableCell>
                <TableCell>{position.category}</TableCell>
                <TableCell>{position.loName}</TableCell>
                <TableCell>{position.loW} X {position.loH}</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" onClick={() => handleEdit(position.id)}>
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="default" onClick={() => handleSettings(position.id)}>
                    <Settings fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="secondary" onClick={() => handleDelete(position.id)}>
                    <Delete fontSize="small" />
                  </IconButton>
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
