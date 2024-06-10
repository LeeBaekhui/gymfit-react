import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Draggable from "react-draggable";
import ProductPayModalLayout from "./productTotalPayModal/ProductPayModalLayout";

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
      maxWidth="xl" // 가로 폭 xs-sm-md-lg-xl, false 콘텐츠 크기에 따라 자동 조절
      PaperProps={{
        sx: {
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 0, // Paper의 padding을 0으로 설정
          borderRadius: 2,
          border: "none", // 테두리 제거
          position: "relative",
          overflow: "visible", // DialogTitle이 박스 바깥으로 나갈 수 있게 설정
          height: "90vh", // 모달 최대 높이 설정
        },
      }}
      BackdropProps={{
        style: { backgroundColor: "transparent" }, // 모달 밖의 배경을 투명하게 설정
      }}
    >
      <DialogTitle
        style={{
          cursor: "move",
          backgroundColor: "#3f51b5", // 파란색 계열
          padding: "4px 8px", // 높이 줄이기
          borderTopLeftRadius: "8px", // 제목 부분의 양쪽 모서리 맞춤
          borderTopRightRadius: "8px", // 제목 부분의 양쪽 모서리 맞춤
          margin: 0, // 상단 여백 제거
          position: "absolute",
          top: "-16px", // Dialog 상단에 고정시키기 위해 top 조정
          left: 0,
          right: 0,
        }}
        id="draggable-dialog-title"
      >
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ flexGrow: 1, color: "#fff" }}
        >
          종합결제
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 4,
            top: 2, // 아이콘 위치 조정
            color: "#fff",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          paddingTop: "24px", // 위쪽 여백 최소화
          paddingBottom: 0, // 아래쪽 여백 최소화
          paddingLeft: 8, // 좌측 여백 최소화
          paddingRight: 8, // 우측 여백 최소화
          height: "calc(100% - 24px)", // 제목 부분을 제외한 나머지 높이
          overflowY: "auto",
        }}
      >
        <ProductPayModalLayout />
      </DialogContent>
    </Dialog>
  );
};

export default ProductPayModal;
