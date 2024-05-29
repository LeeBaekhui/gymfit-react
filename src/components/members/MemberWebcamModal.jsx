import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import Webcam from "react-webcam";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Slide,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import CloseIcon from "@mui/icons-material/Close";

// DraggablePaperComponent는 Dialog를 드래그 가능하게 만듭니다.
const DraggablePaperComponent = (props) => {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
};

// Transition component for Dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MemberWebcamModal = ({ open, onClose, onCapture }) => {
  const webcamRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [captureMessage, setCaptureMessage] = useState("");

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
    onCapture(imageSrc);
    setCaptureMessage("촬영이 완료 되었습니다.");
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperComponent={DraggablePaperComponent}
      TransitionComponent={Transition}
      BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
      disableEnforceFocus
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flex: 1 }} id="draggable-dialog-title">
            사진 촬영
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent dividers>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={480}
            height={360}
            style={{
              marginBottom: "10px",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          {captureMessage && (
            <Typography variant="body1" color="success" sx={{ mt: 2 }}>
              {captureMessage}
            </Typography>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          startIcon={<PhotoCamera />}
          onClick={capture}
          sx={{ mx: 1 }}
        >
          촬영
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={onClose}
          sx={{ mx: 1 }}
        >
          적용
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MemberWebcamModal;
