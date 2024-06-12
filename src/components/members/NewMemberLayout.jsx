import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MemberWebcam from "./MemberWebcam";
import NewMemberForm from "./NewMemberForm";

export default function MemberLayout() {
  const [photo, setPhoto] = useState(null);

  return (
    <Box sx={{ mt: 2 }}>
      <Grid
        container
        spacing={2} // 두 컴포넌트 사이의 거리 조절
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={8} md={6} lg={6}>
          <Box sx={{ p: 2 }}>
            <MemberWebcam photo={photo} setPhoto={setPhoto} />
          </Box>
        </Grid>
        <Grid item xs={11} sm={8} md={6} lg={6}>
          <Box sx={{ p: 2 }}>
            <NewMemberForm photo={photo} setPhoto={setPhoto} />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1, mt: 2 }} //* 화면 위쪽에서 떨어지게 마진 적용 *
      ></Grid>
    </Box>
  );
}
