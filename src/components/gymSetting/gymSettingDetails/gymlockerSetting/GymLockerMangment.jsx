import React from 'react';
import { Box, Typography, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const GymLockerManagement = () => {
  const [branch, setBranch] = React.useState('');
  const [searchType, setSearchType] = React.useState('');
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
    // fsearch1_submit() 호출 등 추가 작업 수행
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const setDate = (days) => {
    const currentDate = new Date();
    setStartDate(currentDate);
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + parseInt(days, 10));
    setEndDate(futureDate);
  };

  const handleSearch = () => {
    // fsearch1_submit() 호출 등 추가 작업 수행
  };

  return (
    <Box p={3}>
      <Typography variant="h5">Gym Locker Management</Typography>
      <Typography variant="body1">Manage your gym lockers here.</Typography>

      <Box mt={3} style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
        <Box mb={2}>
          <Typography variant="h6">락커찾기</Typography>

          <Box display="flex" alignItems="center" mb={2}>
            

            <FormControl variant="outlined" size="small" style={{ minWidth: 150, marginLeft: 16 }}>
              <InputLabel id="search-type-label">선택</InputLabel>
              <Select
                labelId="search-type-label"
                id="sc_gubun1"
                value={searchType}
                onChange={handleSearchTypeChange}
                label="선택"
              >
                <MenuItem value=""><em>선택</em></MenuItem>
                <MenuItem value={1}>락커번호</MenuItem>
                <MenuItem value={3}>락커시작일</MenuItem>
                <MenuItem value={4}>락커만료일</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="통합검색 입력"
            name="search_word"
            id="search_word"
            style={{ marginBottom: 16 }}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box display="flex" alignItems="center" mb={2}>
              <DatePicker
                label="시작일"
                value={startDate}
                onChange={(date) => setStartDate(date)}
                renderInput={(params) => <TextField {...params} style={{ width: 100 }} />}
              />
              <Typography mx={2}>~</Typography>
              <DatePicker
                label="종료일"
                value={endDate}
                onChange={(date) => setEndDate(date)}
                renderInput={(params) => <TextField {...params} style={{ width: 100 }} />}
              />
            </Box>
          </LocalizationProvider>

          <Typography variant="body2" color="error">만료 예정일</Typography>

          <Box display="flex" alignItems="center" mb={2}>
            <Button variant="outlined" size="small" onClick={() => setDate('0')}>오늘</Button>
            <Button variant="outlined" size="small" onClick={() => setDate('1')} style={{ marginLeft: 8 }}>1일</Button>
            <Button variant="outlined" size="small" onClick={() => setDate('3')} style={{ marginLeft: 8 }}>3일</Button>
            <Button variant="outlined" size="small" onClick={() => setDate('7')} style={{ marginLeft: 8 }}>7일</Button>
          </Box>

          <Button variant="contained" color="primary" onClick={handleSearch}>
            검색
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GymLockerManagement;
