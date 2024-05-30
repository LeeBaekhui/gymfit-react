import { useState } from "react";
import Grid from "@mui/material/Grid";
import MemberWebcam from "./MemberWebcam";
import MemberForm from "./MemberForm";
import MemberTabMenu from "./MemberTabMenu"; // MemberTabMenu 컴포넌트 import

export default function MemberLayout() {
  const [photo, setPhoto] = useState(null);

  return (
    
    <Grid container spacing={1} sx={{ flexGrow: 1, mt: 1 }}>
        <Grid item xs={12} md={4} sx={{ height: '100%' }}>
          <MemberWebcam photo={photo} setPhoto={setPhoto} />
        </Grid>
        <Grid item xs={12} md={8} sx={{ height: '100%' }}>
          <MemberForm photo={photo} setPhoto={setPhoto} />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%', mt: 1, overflowY: 'auto' }}>
        <MemberTabMenu />
      </Grid>
      </Grid>

      
  );
}
