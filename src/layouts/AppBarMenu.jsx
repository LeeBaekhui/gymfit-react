import React from "react";
import { Box, Button, Input } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f0f0f0",
  borderRadius: "5px 0 0 5px",
  padding: "5px 10px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  marginRight: 0,
  width: 300,
  height: 40,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  borderRadius: "0 5px 5px 0",
  padding: "5px 10px",
  height: 40,
  color: "gray",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    borderRadius: "0 5px 5px 0",
  },
}));

const LogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1976d2",
  color: "white",
  borderRadius: "5px",
  padding: "5px 15px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#115293",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "5px 10px",
  },
}));

const AppBarMenu = ({ handleLogout }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
          flexDirection: "row",
          alignItems: "center",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          [theme.breakpoints.down("sm")]: {
            justifyContent: "space-between",
            width: "100%",
          },
        }}
      >
        <SearchBox>
          <SearchIcon sx={{ color: "gray", marginRight: 1 }} />
          <Input
            disableUnderline
            placeholder="Search"
            sx={{ fontSize: 14, width: "100%" }}
          />
        </SearchBox>
        <SearchButton variant="contained">검색</SearchButton>
      </Box>
      <LogoutButton
        variant="contained"
        startIcon={<LogoutIcon />}
        onClick={handleLogout}
        sx={{
          [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(1),
          },
        }}
      >
        로그아웃
      </LogoutButton>
    </Box>
  );
};

export default AppBarMenu;
