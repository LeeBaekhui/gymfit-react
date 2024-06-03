// 경로: src\components\gymSetting\gymSettingDetails\gymlockerSetting\LokerClassFicationSet.jsx

import React, { useState } from 'react';
import { Box, Button, TextField, Select, MenuItem, InputLabel, FormControl, Typography, Paper, Grid, List, ListItem, ListItemText, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const LokerClassFicationSet = () => {
  const [branchIdx, setBranchIdx] = useState('');
  const [lockerCategory, setLockerCategory] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!branchIdx || !lockerCategory || !num1 || !num2) {
      alert('모든 필드를 입력해 주세요.');
      return;
    }
    // form submission logic here
  };

  const handleDelete = (idx) => {
    setSelectedIdx(idx);
    setOpen(true);
  };

  const confirmDelete = () => {
    // deletion logic here
    setOpen(false);
  };

  const lockers = [
    { name: '남자락커', range: '1~100' },
    { name: '여자락커', range: '101~150' },
    { name: '락커초기데이터', range: '151~5000' },
  ];

  return (
    <Paper sx={{ p: 3, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom>락커 분류 설정</Typography>
      <Box component="form" onSubmit={handleFormSubmit}>
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
              >
                <MenuItem value=""><em>지점선택</em></MenuItem>
                <MenuItem value={2}>본점</MenuItem>
                <MenuItem value={3}>공주점</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="락커분류"
              placeholder="예) 헬스락커, 골프락커, 남자락커, 여자락커 등"
              value={lockerCategory}
              onChange={(e) => setLockerCategory(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="번호설정 시작"
              placeholder="예) 숫자입력"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
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
          <Button variant="contained" color="primary" type="submit">분류만들기</Button>
        </Box>
      </Box>
      <List sx={{ mt: 3 }}>
        {lockers.map((locker, index) => (
          <ListItem key={index} secondaryAction={
            <>
              <Button variant="contained" color="warning" href={`/page/center/center01-4.html?u_idx=${index + 23}#cwhcode`}>수정</Button>
              <Button variant="contained" color="error" onClick={() => handleDelete(index)}>삭제</Button>
            </>
          }>
            <ListItemText primary={`${locker.name} (${locker.range})`} />
          </ListItem>
        ))}
      </List>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>삭제 확인</DialogTitle>
        <DialogContent>
          <DialogContentText>정말 삭제하시겠습니까?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">취소</Button>
          <Button onClick={confirmDelete} color="primary" autoFocus>삭제</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default LokerClassFicationSet;
