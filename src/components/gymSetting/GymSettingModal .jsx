// src/components/gymSetting/GymSettingModal.jsx
import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Draggable from "react-draggable"; // Draggable 기능을 추가하기 위해 react-draggable 라이브러리 사용
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider"; // Divider 컴포넌트 import
import { useDrawerContext } from "../../layouts/DrawerContext"; // 경로를 프로젝트 구조에 맞게 조정
import GymsetLayout from "./GymsetLayout"; // GymsetLayout 컴포넌트 불러오기

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85vw', // 모달창 너비를 크게 설정
  height: '85vh', // 모달창 높이를 크게 설정
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0, // 패딩 제거
};

const DraggablePaperComponent = (props) => {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} style={{ borderRadius: '8px', overflow: 'hidden' }} />
    </Draggable>
  );
};

const GymSettingModal = () => {
  const { openModal, handleCloseModal } = useDrawerContext();

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="draggable-dialog-title"
      aria-describedby="modal-description"
      PaperComponent={DraggablePaperComponent} // DraggablePaperComponent를 PaperComponent로 설정
    >
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            p: 2,
          }}
          id="draggable-dialog-title"
        >
          <Typography variant="h6" component="div">
            설정
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              color: (theme) => theme.palette.primary.contrastText,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ mt: 2, height: 'calc(100% - 56px)', overflow: 'hidden' }}>
          <GymsetLayout /> {/* GymsetLayout 컴포넌트 포함 */}
        </Box>
      </Box>
    </Modal>
  );
};

export default GymSettingModal;
