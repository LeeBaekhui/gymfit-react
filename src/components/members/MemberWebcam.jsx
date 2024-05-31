import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
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
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [photos, setPhotos] = useState([null, null, null, null]);

  const handleTogglePhoto = () => {
    setShowPhoto(!showPhoto);
  };

  const handleDeletePhoto = () => {
    const updatedPhotos = [...photos];
    updatedPhotos[selectedPhoto] = null;
    setPhotos(updatedPhotos);
    setPhoto(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedPhotos = [...photos];
      updatedPhotos[selectedPhoto] = reader.result;
      setPhotos(updatedPhotos);
      setPhoto(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = (imageSrc) => {
    const updatedPhotos = [...photos];
    updatedPhotos[selectedPhoto] = imageSrc;
    setPhotos(updatedPhotos);
    setPhoto(imageSrc);
  };

  const handlePhotoSelection = (index) => {
    setSelectedPhoto(index);
    setPhoto(photos[index]);
  };

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 350,
          height: 270,
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
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
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        {["1", "2", "3", "BMI"].map((label, index) => (
          <Button
            key={label}
            onClick={() => handlePhotoSelection(index)}
            sx={{ mx: 0.5, fontSize: "0.75rem", padding: "2px 6px" }} // 버튼 크기 더 작게 설정
            variant={selectedPhoto === index ? "contained" : "outlined"}
          >
            {label}
          </Button>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          startIcon={<PhotoCamera />}
          onClick={() => setOpen(true)}
          sx={{ mr: 1, fontSize: "0.75rem", padding: "6px 12px" }} // 버튼 크기 더 작게 설정
        >
          사진 촬영
        </Button>
        <IconButton onClick={handleTogglePhoto} size="small">
          {showPhoto ? <VisibilityOff /> : <Visibility />}
        </IconButton>
        <IconButton onClick={handleDeletePhoto} size="small">
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
            sx={{ ml: 1, fontSize: "0.75rem", padding: "6px 12px" }} // 버튼 크기 더 작게 설정
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
