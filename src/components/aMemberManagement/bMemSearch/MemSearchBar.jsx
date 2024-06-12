import React, { useState } from "react";
import {
  Paper,
  Typography,
  Select,
  MenuItem,
  InputBase,
  Button,
  Box,
} from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const MemSearchBar = () => {
  const [searchType, setSearchType] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState(dayjs("2022-04-17"));
  const [endDate, setEndDate] = useState(dayjs("2022-04-17"));
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper sx={{ width: "100%", p: 2 }} elevation={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: isSmallScreen ? "0.75rem" : "0.875rem" }}>
            회원검색
          </Typography>
          <Select
            value={searchType}
            onChange={handleSearchTypeChange}
            displayEmpty
            inputProps={{ "aria-label": "search type" }}
            sx={{
              minWidth: isSmallScreen ? 100 : 120,
              fontSize: isSmallScreen ? "0.75rem" : "0.875rem",
            }}
            size="small"
          >
            <MenuItem value="">전체</MenuItem>
            <MenuItem value="M1">유효회원</MenuItem>
            <MenuItem value="M2">만료회원</MenuItem>
            <MenuItem value="M3">정지회원</MenuItem>
            <MenuItem value="M4">무료회원</MenuItem>
            <MenuItem value="M5">시작일</MenuItem>
            <MenuItem value="M6">종료일</MenuItem>
            <MenuItem value="M7">락커번호</MenuItem>
            <MenuItem value="M8">락커시작일</MenuItem>
            <MenuItem value="M9">락커만료일</MenuItem>
          </Select>
          <DatePicker
            label="시작일"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            sx={{
              width: isSmallScreen ? 130 : 150,
              "& .MuiInputBase-root": {
                fontSize: "0.75rem",
                overflow: "hidden",
              },
            }}
            slotProps={{ textField: { size: "small" } }}
          />
          <DatePicker
            label="종료일"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            sx={{
              width: isSmallScreen ? 130 : 150,
              "& .MuiInputBase-root": {
                fontSize: "0.75rem",
                overflow: "hidden",
              },
            }}
            slotProps={{ textField: { size: "small" } }}
          />
          <InputBase
            sx={{
              flex: 1,
              border: "1px solid gray",
              borderRadius: "4px",
              padding: "0 8px",
              width: "60%",
              fontSize: isSmallScreen ? "0.75rem" : "0.875rem",
            }}
            placeholder="회원 이름, 회원번호, 전화번호, 메모 정보로 검색"
            inputProps={{ "aria-label": "search" }}
            value={searchValue}
            onChange={handleSearchValueChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              p: "6px 10px",
              fontSize: isSmallScreen ? "0.75rem" : "0.75rem",
            }}
            aria-label="search"
          >
            통합검색
          </Button>
        </Box>
      </Paper>
    </LocalizationProvider>
  );
};

export default MemSearchBar;
