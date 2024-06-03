// 경로: src\components\gymSetting\GymsetLayout.jsx

import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Divider, Paper } from '@mui/material';
import FacilityMenu from './gymSettingDetails/gymFacilitySetting/FacilityMenu';  // FacilityMenu 컴포넌트 임포트
import LockerSetMenu from './gymSettingDetails/gymlockerSetting/LockerSetMenu'; // LockerSetMenu 컴포넌트 임포트

const menuItems = [
  { title: '락커설정', content: '락커설정 내용' },
  { title: '이용권상품설정', content: '이용권상품설정 내용' },
  { title: '대여상품설정', content: '대여상품설정 내용' },
  { title: '센터정보설정', content: '센터정보설정 내용' },
  { title: '터치모니터설정', content: '터치모니터설정 내용' },
  { title: '회원참여설정', content: '회원참여설정 내용' },
  { title: '시스템설정', content: '시스템설정 내용' },
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
        {selectedMenu.title === '이용권상품설정' ? (
        <FacilityMenu />
      ) : selectedMenu.title === '락커설정' ? (
        <LockerSetMenu />
      ) : (
          <>
            <Typography variant="body1" gutterBottom>
              {selectedMenu.content}
            </Typography>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default GymsetLayout;
