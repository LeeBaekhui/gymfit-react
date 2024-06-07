// 경로: src\components\gymSetting\GymSettingModal .jsx

import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { useDrawerContext } from "../../layouts/DrawerContext";
import GymsetLayout from "./GymsetLayout";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", // 모달창 위치 설정
  width: "90vw", // 모달창 너비를 크게 설정
  height: "90vh", // 모달창 높이를 크게 설정
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0, // 패딩 제거
  borderRadius: 2, // 모서리를 둥글게 설정
};

const GymSettingModal = () => {
  const { openModal, handleCloseModal } = useDrawerContext();

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "primary.main",
            color: "primary.contrastText",
            p: 1,
            cursor: "move",
            borderTopLeftRadius: 2, // 왼쪽 위 모서리 곡률
            borderTopRightRadius: 2, // 오른쪽 위 모서리 곡률
            borderBottomLeftRadius: 0, // 왼쪽 아래 모서리 곡률 없음
            borderBottomRightRadius: 0, // 오른쪽 아래 모서리 곡률 없음
          }}
          id="modal-title"
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
        <Box sx={{ mt: 1, height: "calc(100% - 56px)", overflow: "auto" }}>
          <GymsetLayout /> {/* GymsetLayout 컴포넌트 포함 */}
        </Box>
      </Box>
    </Modal>
  );
};

export default GymSettingModal;
