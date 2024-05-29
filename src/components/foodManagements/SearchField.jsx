import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchAndActions({ onSearch }) {
  const [timer, setTimer] = useState(null);

  const handleTextField = (e) => {
    console.log("여기: " + e.target.value);
    const searchValue = e.target.value;

    // 이전에 설정된 타이머가 있다면 취소
    if (timer) {
      clearTimeout(timer);
    }

    // 새로운 타이머 설정
    const newTimer = setTimeout(() => {
      onSearch(searchValue);
    }, 1000);

    // 새로운 타이머 저장
    setTimer(newTimer);
  };
  
  return (
    <div>
    <h1>음식 칼로리 계산기</h1>
    <Box display="flex" alignItems="center" mb={2}>
      <Box flexGrow={1} mr={1}>
        <TextField
          fullWidth
          label="음식이름을 입력하세요"
          id="search"
          onChange={handleTextField}
          InputProps={{ sx: { textAlign: "center", fontSize: "1rem" } }}
        />
      </Box>
      <Button
      // contained
        variant="contained" size="large" color="primary"
        sx={{ height: "55px", minWidth: "100px", fontSize: "1.2rem" }}
      >
        검색
      </Button>
    </Box>
    </div>
  );
}
