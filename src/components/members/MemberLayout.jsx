import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MemberWebcam from "./MemberWebcam";
import MemberForm from "./MemberForm";
import MemberTabMenu from "./MemberTabMenu"; // MemberTabMenu 컴포넌트 import

export default function MemberLayout() {
  const [photo, setPhoto] = useState(null);

  return (
    <>
      <Grid
        container
        spacing={0}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          mt: 1,
          bgcolor: "orange",
        }}
      >
        <Grid item xs={12} md={4} sx={{ bgcolor: "cyan" }}>
          <MemberWebcam photo={photo} setPhoto={setPhoto} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ bgcolor: "magenta" }}>
          <MemberForm photo={photo} setPhoto={setPhoto} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          flexGrow: 1,
          mt: 1,
        }}
      >
        <Grid
          item
          xs={10}
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MemberTabMenu />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
