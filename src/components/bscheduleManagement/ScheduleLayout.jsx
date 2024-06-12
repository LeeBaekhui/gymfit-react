import { Box, Typography } from "@mui/material";

const ScheduleForm = () => {
  return (
    <Box
      sx={{
        width: "100vw", // 화면 너비 전체
        height: "100vh", // 화면 높이 전체
        backgroundColor: "orange", // 배경색 오렌지
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">ScheduleForm 화면입니다.</Typography>
      {/* 스케줄 폼 내용 */}
    </Box>
  );
};

export default ScheduleForm;
