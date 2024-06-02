// src/components/gymSetting/GymsetLayout.jsx
import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Divider, TextField, MenuItem, FormControlLabel, Switch, Paper } from '@mui/material';

const menuItems = [
  { title: '락커관리', content: '락커관리 내용' },
  { title: '이용권상품관리', content: '이용권상품관리 내용' },
  { title: '대여상품관리', content: '대여상품관리 내용' },
  { title: '센터정보관리', content: '센터정보관리 내용' },
  { title: '터치모니터관리', content: '터치모니터관리 내용' },
  { title: '회원참여관리', content: '회원참여관리 내용' },
  { title: '시스템관리', content: '시스템관리 내용' },
];

const GymsetLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuItems[0]);

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100%' }}>
      <Paper sx={{ width: { xs: '100%', md: '240px' }, flexShrink: 0, bgcolor: 'background.paper', boxShadow: 3, height: '100%' }}> {/* 음영 3레벨 */}
        <List component="nav" sx={{ height: '100%', overflowY: 'auto' }}>
          {menuItems.map((menuItem, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton selected={selectedMenu.title === menuItem.title} onClick={() => setSelectedMenu(menuItem)}>
                <ListItemText primary={menuItem.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Divider orientation="vertical" flexItem />
      <Paper
        sx={{
          flexGrow: 1,
          p: 3,
          overflowY: 'auto',
          height: '100%',
          boxShadow: 3, // 음영 3레벨
          border: 'none', // 테두리 제거
        }}
      >
        <Typography variant="h4" gutterBottom>
          {selectedMenu.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {selectedMenu.content}
        </Typography>
        {/* 추가적인 설정 내용을 여기에 추가할 수 있습니다. 예시로 몇 가지 컨트롤을 추가합니다. */}
        <Box sx={{ mt: 3 }}>
          <FormControlLabel control={<Switch />} label="기능 활성화" />
          <TextField
            select
            label="옵션 선택"
            value=""
            onChange={() => {}}
            fullWidth
            sx={{ mt: 2 }}
          >
            <MenuItem value={10}>옵션 1</MenuItem>
            <MenuItem value={20}>옵션 2</MenuItem>
            <MenuItem value={30}>옵션 3</MenuItem>
          </TextField>
          <TextField
            label="텍스트 입력"
            fullWidth
            sx={{ mt: 2 }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default GymsetLayout;
