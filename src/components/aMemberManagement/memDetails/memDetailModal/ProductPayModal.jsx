import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Button, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Draggable from 'react-draggable';
import ProductPayModalLayout from './productTotalPayModal/ProductPayModalLayout';

const PaperComponent = (props) => {
  const nodeRef = React.useRef(null);
  return (
    <Draggable nodeRef={nodeRef} handle="#draggable-dialog-title">
      <Paper ref={nodeRef} {...props} />
    </Draggable>
  );
};

const ProductPayModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
          borderRadius: 2,
          border: 'none',  // 테두리 제거
          position: 'relative',
          overflow: 'visible', // DialogTitle이 박스 바깥으로 나갈 수 있게 설정
        },
      }}
      BackdropProps={{
        style: { backgroundColor: 'transparent' },  // 모달 밖의 배경을 투명하게 설정
      }}
    >
      <DialogTitle
        style={{
          cursor: 'move',
          backgroundColor: '#3f51b5', // 파란색 계열
          padding: '8px 16px', // 높이 줄이기
          borderTopLeftRadius: '8px',  // 제목 부분의 양쪽 모서리 맞춤
          borderTopRightRadius: '8px', // 제목 부분의 양쪽 모서리 맞춤
          margin: 0, // 상단 여백 제거
          position: 'absolute',
          top: '-16px', // Dialog 상단에 고정시키기 위해 top 조정
          left: 0,
          right: 0,
        }}
        id="draggable-dialog-title"
      >
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
          종합결제
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 4, // 아이콘 위치 조정
            color: '#fff',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ paddingTop: '40px' }}>
        <ProductPayModalLayout />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductPayModal;
