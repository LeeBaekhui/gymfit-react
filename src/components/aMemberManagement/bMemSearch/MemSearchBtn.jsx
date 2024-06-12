import React from "react";
import { Box, Paper, Typography, Button, ButtonGroup } from "@mui/material";

const MemSearchBtn = () => {
  return (
    <Paper sx={{ width: "100%", p: 2 }} elevation={3}>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box sx={{ flex: "1 1 15%", minWidth: "250px", m: 1 }}>
          <ButtonGroup
            variant="outlined"
            aria-label="Basic button group"
            fullWidth
          >
            <Button sx={{ flex: 1, py: 0.5 }}>
              <Typography variant="caption">누적회원</Typography>
            </Button>
            <Button sx={{ flex: 1, py: 0.5 }}>
              <Typography variant="caption">유효회원</Typography>
            </Button>
            <Button sx={{ flex: 1, py: 0.5 }}>
              <Typography variant="caption">만료회원</Typography>
            </Button>
          </ButtonGroup>
        </Box>
        <Box sx={{ flex: "1 1 29%", minWidth: "250px", m: 1 }}>
          <ButtonGroup
            variant="outlined"
            aria-label="Basic button group"
            fullWidth
          >
            <Button sx={{ flex: 1, py: 0.5 }}>
              <Typography variant="caption">오늘생일</Typography>
            </Button>
            <Button sx={{ flex: 1.2, py: 0.5 }}>
              <Typography variant="caption">만료 3일전</Typography>
            </Button>
            <Button sx={{ flex: 1, py: 0.5 }}>
              <Typography variant="caption">오늘만료</Typography>
            </Button>
            <Button sx={{ flex: 1, py: 0.5 }}>
              <Typography variant="caption">락커만료</Typography>
            </Button>
            <Button sx={{ flex: 1, py: 0.5 }}>
              <Typography variant="caption">오늘예약</Typography>
            </Button>
          </ButtonGroup>
        </Box>
        <Box sx={{ flex: "1 1 30%", minWidth: "250px", m: 1 }}>
          <ButtonGroup
            variant="outlined"
            aria-label="Basic button group"
            fullWidth
          >
            <Button sx={{ flex: 1, py: 0.5 }}>
              <Typography variant="caption">신규결제</Typography>
            </Button>
            <Button sx={{ flex: 0.7, py: 0.5 }}>
              <Typography variant="caption">재결제</Typography>
            </Button>
            <Button sx={{ flex: 0.4, py: 0.5 }}>
              <Typography variant="caption">미납</Typography>
            </Button>
            <Button sx={{ flex: 0.4, py: 0.5 }}>
              <Typography variant="caption">환불</Typography>
            </Button>
            <Button sx={{ flex: 0.9, py: 0.5 }}>
              <Typography variant="caption">정지회원</Typography>
            </Button>
            <Button sx={{ flex: 0.9, py: 0.5 }}>
              <Typography variant="caption">잠재회원</Typography>
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Paper>
  );
};

export default MemSearchBtn;
