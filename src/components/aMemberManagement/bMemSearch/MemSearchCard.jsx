import React from "react";
import {
  Card,
  Box,
  Typography,
  Checkbox,
  Avatar,
  IconButton,
  Paper,
} from "@mui/material";
import {
  red,
  blue,
  pink,
  grey,
  green,
  orange,
  purple,
} from "@mui/material/colors";
import PaymentIcon from "@mui/icons-material/Payment";
import AttendanceIcon from "@mui/icons-material/EventAvailable";
import ExerciseIcon from "@mui/icons-material/FitnessCenter";
import MealIcon from "@mui/icons-material/Restaurant";
import BodyCompositionIcon from "@mui/icons-material/AccessibilityNew";

const MemCard = () => {
  return (
    <Card
      sx={{
        p: 1,
        mb: 1,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: grey[300],
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography variant="body2">
          출석 <span style={{ fontWeight: "bold", color: red[500] }}>0005</span>{" "}
          / 평균이용{" "}
          <span style={{ fontWeight: "bold", color: red[500] }}>06:11</span>
        </Typography>
        <Checkbox sx={{ transform: "scale(1.2)" }} />
      </Box>
      <Box sx={{ display: "flex", mb: 1 }}>
        <Avatar
          src="/img/200x190.png"
          variant="square"
          sx={{ width: 60, height: 60, mr: 1 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2" component="div" sx={{ mb: 0.5 }}>
            <a href="/page/member/member_view.php?midx=2249&page=1&select_date=2024-06-11&search_branch_idx=2&search_type=M1">
              테스트3(3658){" "}
              <span style={{ fontWeight: "normal" }}>남/55세</span>
            </a>
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 0.5 }}>
            010-2314-4521
          </Typography>
          <Paper sx={{ p: 0.5, backgroundColor: blue[50], boxShadow: 1 }}>
            <Typography variant="body2">헬스일반 1개월</Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "0.75rem", color: "#333" }}
            >
              2023-12-27 ~ 2024-12-31 <span>(203일)</span>
            </Typography>
          </Paper>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
            담당: -
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 1, mb: 0.5 }}>
        <Paper
          sx={{ p: 0.5, backgroundColor: pink[50], boxShadow: 1, flexGrow: 1 }}
        >
          <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
            여자 신발장 테스트 172023.12.27 ~ 2024.01.29(33일)
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ display: "flex", gap: 1, mb: 0.5 }}>
        <Paper
          sx={{ p: 0.5, backgroundColor: grey[100], boxShadow: 1, flexGrow: 1 }}
        >
          <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
            대여상품이름 2023.12.29 ~ 2024.01.02(0일)
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", mt: 1 }}>
        <Paper
          sx={{
            p: 0.5,
            backgroundColor: green[50],
            boxShadow: 1,
            textAlign: "center",
          }}
        >
          <IconButton
            color="inherit"
            onClick={() =>
              window.open(
                "/page/member_kare/pop_member_pay_list.php?userID=UN220353",
                "_blank",
                "width=1500,height=800"
              )
            }
          >
            <PaymentIcon />
          </IconButton>
          <Typography variant="caption">수강결제</Typography>
        </Paper>
        <Paper
          sx={{
            p: 0.5,
            backgroundColor: orange[50],
            boxShadow: 1,
            textAlign: "center",
          }}
        >
          <IconButton
            color="inherit"
            onClick={() =>
              window.open(
                "/page/member_kare/pop_member_attend_list.php?userID=UN220353",
                "_blank",
                "width=1500,height=800"
              )
            }
          >
            <AttendanceIcon />
          </IconButton>
          <Typography variant="caption">출석정보</Typography>
        </Paper>
        <Paper
          sx={{
            p: 0.5,
            backgroundColor: purple[50],
            boxShadow: 1,
            textAlign: "center",
          }}
        >
          <IconButton
            color="inherit"
            onClick={() =>
              window.open(
                "/page/member_kare/pop_member_exercise_list.php?userID=UN220353",
                "_blank",
                "width=1500,height=800"
              )
            }
          >
            <ExerciseIcon />
          </IconButton>
          <Typography variant="caption">운동보기</Typography>
        </Paper>
        <Paper
          sx={{
            p: 0.5,
            backgroundColor: blue[50],
            boxShadow: 1,
            textAlign: "center",
          }}
        >
          <IconButton
            color="inherit"
            onClick={() =>
              window.open(
                "/page/member_kare/pop_member_meal_list.php?userID=UN220353",
                "_blank",
                "width=1500,height=800"
              )
            }
          >
            <MealIcon />
          </IconButton>
          <Typography variant="caption">음식섭취</Typography>
        </Paper>
        <Paper
          sx={{
            p: 0.5,
            backgroundColor: grey[200],
            boxShadow: 1,
            textAlign: "center",
          }}
        >
          <IconButton
            color="inherit"
            onClick={() =>
              window.open(
                "/page/member_kare/pop_member_body_list.php?userID=UN220353",
                "_blank",
                "width=1500,height=800"
              )
            }
          >
            <BodyCompositionIcon />
          </IconButton>
          <Typography variant="caption">체성분</Typography>
        </Paper>
      </Box>
    </Card>
  );
};

export default MemCard;
