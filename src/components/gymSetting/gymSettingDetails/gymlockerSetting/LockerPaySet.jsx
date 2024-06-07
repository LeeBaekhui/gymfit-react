import React, { useState, useEffect } from "react";
import Api from "../../../../Api"; // Api 컴포넌트 가져오기
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const LockerPaySet = () => {
  const [lockerPayCategory, setLockerPayCategory] = useState("");
  const [lockerPayName, setLockerPayName] = useState("");
  const [lockerPayTerm, setLockerPayTerm] = useState("");
  const [lockerPayMargin, setLockerPayMargin] = useState("");
  const [lockerPayPrice, setLockerPayPrice] = useState("");
  const [lockerPayLateFee, setLockerPayLateFee] = useState("");
  const [lockerPayLateFeeState, setLockerPayLateFeeState] = useState("");
  const [lockerPays, setLockerPays] = useState([]);
  const [lockerCategories, setLockerCategories] = useState([]);

  useEffect(() => {
    const fetchLockerPays = async () => {
      try {
        const response = await Api.get("/lockerPays");
        setLockerPays(response.data);
      } catch (error) {
        console.error("There was an error fetching the locker pays!", error);
      }
    };

    const fetchLockerCategories = async () => {
      try {
        const response = await Api.get("/lockers/categories");
        setLockerCategories(response.data);
      } catch (error) {
        console.error(
          "There was an error fetching the locker categories!",
          error
        );
      }
    };

    fetchLockerPays();
    fetchLockerCategories();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const newLockerPay = {
      lockerPayCategory,
      lockerPayName,
      lockerPayTerm,
      lockerPayMargin,
      lockerPayPrice,
      lockerPayLateFee,
      lockerPayLateFeeState,
    };

    try {
      const response = await Api.post("/lockerPays", newLockerPay);
      setLockerPays([...lockerPays, response.data]);
      // Clear form fields
      setLockerPayCategory("");
      setLockerPayName("");
      setLockerPayTerm("");
      setLockerPayMargin("");
      setLockerPayPrice("");
      setLockerPayLateFee("");
      setLockerPayLateFeeState("");
    } catch (error) {
      console.error("There was an error creating the locker pay!", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await Api.delete(`/lockerPays/${id}`);
      setLockerPays(lockerPays.filter((lockerPay) => lockerPay.id !== id));
    } catch (error) {
      console.error("There was an error deleting the locker pay!", error);
    }
  };

  const handleEdit = (id) => {
    const lockerPayToEdit = lockerPays.find((lockerPay) => lockerPay.id === id);
    setLockerPayCategory(lockerPayToEdit.lockerPayCategory);
    setLockerPayName(lockerPayToEdit.lockerPayName);
    setLockerPayTerm(lockerPayToEdit.lockerPayTerm);
    setLockerPayMargin(lockerPayToEdit.lockerPayMargin);
    setLockerPayPrice(lockerPayToEdit.lockerPayPrice);
    setLockerPayLateFee(lockerPayToEdit.lockerPayLateFee);
    setLockerPayLateFeeState(lockerPayToEdit.lockerPayLateFeeState);
    setLockerPays(lockerPays.filter((lockerPay) => lockerPay.id !== id));
  };

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h6" gutterBottom>
        락커 결제 설정
      </Typography>
      <Box component="form" onSubmit={handleFormSubmit} sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel
                id="locker-category-select-label"
                sx={{ textAlign: "center" }}
              >
                락커분류선택
              </InputLabel>
              <Select
                labelId="locker-category-select-label"
                id="lockerPayCategory"
                value={lockerPayCategory}
                label="락커분류선택"
                onChange={(e) => setLockerPayCategory(e.target.value)}
                size="small"
              >
                <MenuItem value="">
                  <em>락커분류를 선택하세요</em>
                </MenuItem>
                {lockerCategories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="락커결제명"
              placeholder="락커 결제명을 입력하세요."
              value={lockerPayName}
              onChange={(e) => setLockerPayName(e.target.value)}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="term-select-label" sx={{ textAlign: "center" }}>
                기간설정
              </InputLabel>
              <Select
                labelId="term-select-label"
                id="lockerPayTerm"
                value={lockerPayTerm}
                label="기간설정"
                onChange={(e) => setLockerPayTerm(e.target.value)}
                size="small"
              >
                {[...Array(12).keys()].map((i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1}개월
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="락커보증금"
              placeholder="금액입력"
              value={lockerPayMargin}
              onChange={(e) => setLockerPayMargin(e.target.value)}
              required
              type="number"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="결제금액"
              placeholder="금액입력"
              value={lockerPayPrice}
              onChange={(e) => setLockerPayPrice(e.target.value)}
              required
              type="number"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6} display="flex" alignItems="center">
            <TextField
              fullWidth
              label="1일 연체료"
              placeholder="금액입력"
              value={lockerPayLateFee}
              onChange={(e) => setLockerPayLateFee(e.target.value)}
              required
              type="number"
              size="small"
              sx={{ mr: 2 }}
            />
            <FormControl fullWidth>
              <InputLabel
                id="late-fee-state-label"
                sx={{ textAlign: "center" }}
              >
                사용 여부
              </InputLabel>
              <Select
                labelId="late-fee-state-label"
                id="lockerPayLateFeeState"
                value={lockerPayLateFeeState}
                label="사용 여부"
                onChange={(e) => setLockerPayLateFeeState(e.target.value)}
                size="small"
              >
                <MenuItem value="1">사용</MenuItem>
                <MenuItem value="0">사용안함</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="primary" type="submit">
            만들기
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                연번
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                락커분류
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                락커결제명
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                이용기간
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                보증금
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                결제금액
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                연체료
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                유무
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lockerPays.map((lockerPay) => (
              <TableRow key={lockerPay.id}>
                <TableCell align="center">{lockerPay.id}</TableCell>
                <TableCell align="center">
                  {lockerPay.lockerPayCategory}
                </TableCell>
                <TableCell align="center">{lockerPay.lockerPayName}</TableCell>
                <TableCell align="center">
                  {lockerPay.lockerPayTerm}개월
                </TableCell>
                <TableCell align="center">
                  {lockerPay.lockerPayMargin} 원
                </TableCell>
                <TableCell align="center">
                  {lockerPay.lockerPayPrice} 원
                </TableCell>
                <TableCell align="center">
                  {lockerPay.lockerPayLateFee} 원
                </TableCell>
                <TableCell align="center">
                  {lockerPay.lockerPayLateFeeState === "1"
                    ? "사용"
                    : "사용안함"}
                </TableCell>
                <TableCell align="center">
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(lockerPay.id)}
                    sx={{ marginRight: 1 }}
                  >
                    수정
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(lockerPay.id)}
                  >
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LockerPaySet;
