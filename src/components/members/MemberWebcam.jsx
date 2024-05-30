import React, { useState } from "react";
import { Box, Button, IconButton, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MemberWebcamModal from "./MemberWebcamModal";

const Input = styled("input")({
  display: "none",
});

const MemberWebcam = ({ photo, setPhoto }) => {
  const [open, setOpen] = useState(false);
  const [showPhoto, setShowPhoto] = useState(true);

  const handleTogglePhoto = () => {
    setShowPhoto(!showPhoto);
  };

  const handleDeletePhoto = () => {
    setPhoto(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = (imageSrc) => {
    setPhoto(imageSrc);
  };

  return (
    <Paper sx={{ p: 2, textAlign: 'center', height: '50%',width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box
        sx={{
          width: 350,
          height: 350,
          maxWidth: "100%",
          maxHeight: "100%",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          mx: 'auto', // 가운데 정렬
        }}
      >
        {photo && showPhoto ? (
          <img
            src={photo}
            alt="Captured"
            style={{ width: "100%", height: "auto" }}
          />
        ) : (
          <Typography>사진 미리보기</Typography>
        )}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          startIcon={<PhotoCamera />}
          onClick={() => setOpen(true)}
          sx={{ mr: 1 }}
        >
          사진 촬영
        </Button>
        <IconButton onClick={handleTogglePhoto}>
          {showPhoto ? <VisibilityOff /> : <Visibility />}
        </IconButton>
        <IconButton onClick={handleDeletePhoto}>
          <DeleteIcon />
        </IconButton>
        <label htmlFor="file-upload">
          <Input
            accept="image/*"
            id="file-upload"
            type="file"
            onChange={handleFileChange}
          />
          <Button
            variant="contained"
            component="span"
            startIcon={<AttachFileIcon />}
            sx={{ ml: 1 }}
          >
            파일첨부
          </Button>
        </label>
      </Box>
      <MemberWebcamModal
        open={open}
        onClose={() => setOpen(false)}
        onCapture={handleCapture}
      />
    </Paper>
  );
};

export default MemberWebcam;
