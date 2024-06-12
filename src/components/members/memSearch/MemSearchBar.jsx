import React, { useState } from "react";
import dayjs from "dayjs";
import {
  Box,
  Select,
  MenuItem,
  Typography,
  InputBase,
  Button,
  Paper,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerValue() {
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const [searchType, setSearchType] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%", // 부모의 100% 너비를 사용
          height: "100%", // 부모의 100% 높이를 사용
          boxSizing: "border-box", // box-sizing을 border-box로 설정
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%", flexWrap: "wrap" }}
        >
          <Typography variant="h6" sx={{ mr: 2, fontSize: "0.875rem" }}>
            회원검색
          </Typography>
          <Select
            value={searchType}
            onChange={handleSearchTypeChange}
            displayEmpty
            inputProps={{ "aria-label": "search type" }}
            sx={{ mr: 2, minWidth: 120, fontSize: "0.875rem" }}
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
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DatePicker
              label="시작일"
              defaultValue={dayjs("2022-04-17")}
              sx={{
                mr: 2,
                width: 130,
                "& .MuiInputBase-root": {
                  fontSize: "0.75rem",
                  overflow: "hidden",
                },
              }}
              slotProps={{ textField: { size: "small" } }}
            />
            <DatePicker
              label="종료일"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              sx={{
                mr: 2,
                width: 130,
                "& .MuiInputBase-root": {
                  fontSize: "0.75rem",
                  overflow: "hidden",
                },
              }}
              slotProps={{ textField: { size: "small" } }}
            />
          </DemoContainer>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              mr: 2,
              border: "1px solid gray",
              borderRadius: "4px",
              padding: "0 8px",
              width: "300px",
              fontSize: "0.875rem",
            }}
            placeholder="회원 이름, 회원번호, 전화번호, 메모 정보로 검색"
            inputProps={{ "aria-label": "search" }}
            value={searchValue}
            onChange={handleSearchValueChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ p: "6px 10px", fontSize: "0.75rem" }}
            aria-label="search"
          >
            통합검색
          </Button>
        </Box>
      </Paper>
    </LocalizationProvider>
  );
}
