import React, { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography, Paper, Tooltip } from "@mui/material";
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

const photos = {
  1: null,
  2: null,
  3: null,
  BMI: null,
};

const MemberWebcam = ({ photo, setPhoto }) => {
  const [open, setOpen] = useState(false);
  const [showPhoto, setShowPhoto] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [aspectRatio, setAspectRatio] = useState('');
  const [currentKey, setCurrentKey] = useState('1');
  const [selectedButton, setSelectedButton] = useState('1');

  useEffect(() => {
    const handleResize = () => {
      if (selectedPhoto) {
        const img = new Image();
        img.src = selectedPhoto;
        img.onload = () => {
          const ratio = (img.width / img.height).toFixed(2);
          setAspectRatio(`${(ratio * 100).toFixed(2)}%`);
        };
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedPhoto]);

  const handleTogglePhoto = () => {
    setShowPhoto(!showPhoto);
  };

  const handleDeletePhoto = () => {
    setPhoto(null);
    setSelectedPhoto(null);
    photos[currentKey] = null;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
      setSelectedPhoto(reader.result);
      photos[currentKey] = reader.result;
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const ratio = (img.width / img.height).toFixed(2);
        setAspectRatio(`${(ratio * 100).toFixed(2)}%`);
      };
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = (imageSrc) => {
    setPhoto(imageSrc);
    setSelectedPhoto(imageSrc);
    photos[currentKey] = imageSrc;
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const ratio = (img.width / img.height).toFixed(2);
      setAspectRatio(`${(ratio * 100).toFixed(2)}%`);
    };
  };

  const handleSelectPhoto = (key) => {
    setCurrentKey(key);
    setSelectedButton(key); // 버튼 클릭 상태 설정
    setSelectedPhoto(photos[key]);
    if (photos[key]) {
      const img = new Image();
      img.src = photos[key];
      img.onload = () => {
        const ratio = (img.width / img.height).toFixed(2);
        setAspectRatio(`${(ratio * 100).toFixed(2)}%`);
      };
    } else {
      setAspectRatio('');
    }
  };

  return (
    <Paper
      sx={{
        p: 2,
        textAlign: "center",
        height: { xs: 'auto', md: '90%' }, // 반응형 높이
        width: { xs: '60%', sm: '80%', md: '80%', lg: '85%', xl: '90%' }, // 반응형 너비 5단계 설정
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mx: "auto", // 가로 중앙 정렬
        my: { xs: 1, md: 2 } // 반응형 세로 여백
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 500, // 사진 미리보기 크기 2레벨 크게
          height: 300, // 사진 미리보기 크기 2레벨 크게
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          mx: "auto", // 가운데 정렬
          position: "relative"
        }}
      >
        {selectedPhoto && showPhoto ? (
          <>
            <img
              src={selectedPhoto}
              alt="Captured"
              style={{ width: "80%", height: "auto" }}
            />
            <Typography
              variant="caption"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: "2px 8px",
                borderRadius: "4px"
              }}
            >
              {aspectRatio}
            </Typography>
          </>
        ) : (
          <Typography sx={{ opacity: 0.5 }}>사진 미리보기</Typography>
        )}
      </Box>
      <Box display="flex" justifyContent="space-between" sx={{ width: '100%', maxWidth: 300, mb: 1 }}>
        {['1', '2', '3', 'BMI'].map((label, index) => (
          <Tooltip key={index} title={`${label} 사진 촬영 및 저장`}>
            <Button
              variant="outlined"
              size="small"
               sx={{
                mx: 0.5,
                fontSize: '0.75rem',
                width: '50px',
                backgroundColor: selectedButton === label ? "lightblue" : "inherit" // 버튼 배경색 변경
              }}
              onClick={() => handleSelectPhoto(label)}
            >
              {label}
            </Button>
          </Tooltip>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 0 }}>
        <Button
          variant="contained"
          startIcon={<PhotoCamera />}
          onClick={() => setOpen(true)}
          sx={{ mr: 1, fontSize: '0.75rem' }} // 버튼을 1레벨 작게
        >
          촬영
        </Button>
        <Button
          variant="contained"
          startIcon={showPhoto ? <VisibilityOff /> : <Visibility />}
          onClick={handleTogglePhoto}
          sx={{ mr: 1, fontSize: '0.75rem' }} // 버튼을 1레벨 작게
        >
          {showPhoto ? "숨김" : "노출"}
        </Button>
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={handleDeletePhoto}
          sx={{ mr: 1, fontSize: '0.75rem' }} // 버튼을 1레벨 작게
        >
          삭제
        </Button>
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
            sx={{ ml: 1, fontSize: '0.75rem' }} // 버튼을 1레벨 작게
          >
            첨부
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
