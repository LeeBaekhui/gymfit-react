// 경로: src\components\gymSetting\gymSettingDetails\gymlockerSetting\LockerPaySet.jsx

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
import { Edit, Delete } from '@mui/icons-material';

const LockerPaySet = () => {
  const [lockerCategory, setLockerCategory] = useState('');
  const [lockerName, setLockerName] = useState('');
  const [term, setTerm] = useState('');
  const [margin, setMargin] = useState('');
  const [price, setPrice] = useState('');
  const [lateFee, setLateFee] = useState('');
  const [lateFeeState, setLateFeeState] = useState('');
  const [lockers, setLockers] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newLocker = {
      id: lockers.length + 1,
      category: lockerCategory,
      name: lockerName,
      term: term,
      margin: margin,
      price: price,
      lateFee: lateFee,
      lateFeeState: lateFeeState,
    };
    setLockers([...lockers, newLocker]);
    // Clear form fields
    setLockerCategory('');
    setLockerName('');
    setTerm('');
    setMargin('');
    setPrice('');
    setLateFee('');
    setLateFeeState('');
  };

  const handleDelete = (id) => {
    setLockers(lockers.filter(locker => locker.id !== id));
  };

  const handleEdit = (id) => {
    const lockerToEdit = lockers.find(locker => locker.id === id);
    setLockerCategory(lockerToEdit.category);
    setLockerName(lockerToEdit.name);
    setTerm(lockerToEdit.term);
    setMargin(lockerToEdit.margin);
    setPrice(lockerToEdit.price);
    setLateFee(lockerToEdit.lateFee);
    setLateFeeState(lockerToEdit.lateFeeState);
    setLockers(lockers.filter(locker => locker.id !== id));
  };

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h6" gutterBottom>락커 결제 설정</Typography>
      <Box component="form" onSubmit={handleFormSubmit} sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="locker-category-select-label" sx={{ textAlign: 'center' }}>락커분류선택</InputLabel>
              <Select
                labelId="locker-category-select-label"
                id="u_ridx"
                value={lockerCategory}
                label="락커분류선택"
                onChange={(e) => setLockerCategory(e.target.value)}
                size="small"
              >
                <MenuItem value=""><em>락커분류를 선택하세요</em></MenuItem>
                <MenuItem value="헬스락커">헬스락커</MenuItem>
                <MenuItem value="골프락커">골프락커</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="락커결제명"
              placeholder="락커 결제명을 입력하세요."
              value={lockerName}
              onChange={(e) => setLockerName(e.target.value)}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="term-select-label" sx={{ textAlign: 'center' }}>기간설정</InputLabel>
              <Select
                labelId="term-select-label"
                id="u_term"
                value={term}
                label="기간설정"
                onChange={(e) => setTerm(e.target.value)}
                size="small"
              >
                {[...Array(12).keys()].map(i => (
                  <MenuItem key={i + 1} value={i + 1}>{i + 1}개월</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="락커보증금"
              placeholder="금액입력"
              value={margin}
              onChange={(e) => setMargin(e.target.value)}
              required
              type="number"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="결제금액"
              placeholder="금액입력"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              type="number"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6} display="flex" alignItems="center">
            <TextField
              fullWidth
              label="1일 연체료"
              placeholder="금액입력"
              value={lateFee}
              onChange={(e) => setLateFee(e.target.value)}
              required
              type="number"
              size="small"
              sx={{ mr: 2 }}
            />
            <FormControl fullWidth>
              <InputLabel id="late-fee-state-label" sx={{ textAlign: 'center' }}>사용 여부</InputLabel>
              <Select
                labelId="late-fee-state-label"
                id="late_fee_state"
                value={lateFeeState}
                label="사용 여부"
                onChange={(e) => setLateFeeState(e.target.value)}
                size="small"
              >
                <MenuItem value="1">사용</MenuItem>
                <MenuItem value="0">사용안함</MenuItem>
              </Select>
            </FormControl>
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
              <TableCell>락커분류</TableCell>
              <TableCell>락커결제명</TableCell>
              <TableCell>이용기간</TableCell>
              <TableCell>보증금</TableCell>
              <TableCell>결제금액</TableCell>
              <TableCell>1일/연체료</TableCell>
              <TableCell>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lockers.map((locker) => (
              <TableRow key={locker.id}>
                <TableCell>{locker.id}</TableCell>
                <TableCell>{locker.category}</TableCell>
                <TableCell>{locker.name}</TableCell>
                <TableCell>{locker.term}개월</TableCell>
                <TableCell>{locker.margin} 원</TableCell>
                <TableCell>{locker.price} 원</TableCell>
                <TableCell>{locker.lateFee} 원 ({locker.lateFeeState === "1" ? "사용" : "사용안함"})</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" onClick={() => handleEdit(locker.id)}>
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="secondary" onClick={() => handleDelete(locker.id)}>
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

export default LockerPaySet;
