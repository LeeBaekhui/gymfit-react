import React, { useState } from 'react';
import { Paper, Grid, Typography, Button, Box } from '@mui/material';
import { blue, green, orange, grey, red } from '@mui/material/colors';
import ProductPayModal from '../memDetailModal/ProductPayModal';

const MemDetailButton = () => {
  // 서버 연동을 통해 데이터를 가져올 부분
  const validDate = "2023-12-27~2024-12-31";
  const remainingDays = 206;
  const attendanceDays = 5;
  const attendanceRate = 1.1;

  // 모달 창 열림 상태 관리
  const [isModalOpen, setModalOpen] = useState(false);

  // 모달 창 열기/닫기 핸들러
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Grid container alignItems="center" spacing={1} justifyContent="space-between">
          <Grid item xs>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="body2">
                유효기간 {validDate}, <span style={{ color: 'red', fontWeight: 'bold', fontSize: '1.1rem' }}>남은날 {remainingDays}일</span> / 출석일 {attendanceDays} / 출석율 {attendanceRate}%
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
              <Button variant="contained" sx={{ backgroundColor: blue[500], color: 'white', minWidth: '80px', fontSize: '0.75rem' }} onClick={handleOpenModal}>
                종합결제
              </Button>
              <Button variant="contained" sx={{ backgroundColor: green[500], color: 'white', minWidth: '80px', fontSize: '0.75rem' }}>
                대여상품결제
              </Button>
              <Button variant="contained" sx={{ backgroundColor: orange[500], color: 'white', minWidth: '80px', fontSize: '0.75rem' }}>
                일반상품결제
              </Button>
              <Button variant="contained" sx={{ backgroundColor: grey[500], color: 'black', minWidth: '80px', fontSize: '0.75rem' }}>
                정보수정
              </Button>
              <Button variant="contained" sx={{ backgroundColor: red[500], color: 'white', minWidth: '80px', fontSize: '0.75rem' }}>
                회원삭제
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <ProductPayModal open={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default MemDetailButton;
