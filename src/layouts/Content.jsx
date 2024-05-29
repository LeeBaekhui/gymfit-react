// import React from "react";
// import { Box } from "@mui/material";

// const Content = ({ children }) => {
//   return (
//     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//       {children}
//     </Box>
//   );
// };

// export default Content;

import React from "react";
import { Box, styled } from "@mui/material";

const Main = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  paddingTop: theme.spacing(2),
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? drawerWidth - 30 : `calc(${theme.spacing(2)} + 1px)`,
  width: `calc(100% - ${
    open ? drawerWidth : `calc(${theme.spacing(2)} + 1px)`
  }px)`,
}));

const Content = ({ open, drawerWidth, children }) => {
  return (
    <Main open={open} drawerWidth={drawerWidth}>
      {children}
    </Main>
  );
};

export default Content;
