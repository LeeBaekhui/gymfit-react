import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Grid,
  Paper,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LockIcon from "@mui/icons-material/Lock";
import SmsIcon from "@mui/icons-material/Sms";

const GymLockerManagement = () => {
  const [branch, setBranch] = useState("");
  const [searchType, setSearchType] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
    // fsearch2_submit() 호출 등 추가 작업 수행
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const setDate = (days) => {
    const currentDate = new Date();
    setStartDate(currentDate);
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + parseInt(days, 10));
    setEndDate(futureDate);
  };

  const handleSearch = () => {
    // fsearch1_submit() 호출 등 추가 작업 수행
  };

  return (
    <Box pl={1}>
      <Box
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box mb={2}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">락커찾기</Typography>
            <Grid container spacing={1} alignItems="center">
              {/* 선택 메뉴 */}
              <Grid item>
                <FormControl
                  variant="outlined"
                  size="small"
                  style={{ minWidth: 120 }}
                >
                  <InputLabel id="search-type-label">선택</InputLabel>
                  <Select
                    labelId="search-type-label"
                    id="sc_gubun1"
                    value={searchType}
                    onChange={handleSearchTypeChange}
                    label="선택"
                  >
                    <MenuItem value="">
                      <em>선택</em>
                    </MenuItem>
                    <MenuItem value={1}>락커번호</MenuItem>
                    <MenuItem value={3}>락커시작일</MenuItem>
                    <MenuItem value={4}>락커만료일</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* 통합검색 입력 폼 */}
              <Grid item>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="통합검색 입력"
                  name="search_word"
                  id="search_word"
                  sx={{
                    width: 150,
                    "& .MuiInputBase-input::placeholder": {
                      fontSize: "0.8rem",
                    },
                  }}
                />
              </Grid>

              {/* 시작 날짜 입력 폼 */}
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="시작일"
                    value={startDate}
                    onChange={(date) => setStartDate(date)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        placeholder="시작일"
                        sx={{
                          width: 120,
                          "& .MuiInputBase-input::placeholder": {
                            fontSize: "0.8rem",
                          },
                        }}
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton size="small">
                                <CalendarTodayIcon fontSize="small" />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              {/* "~" 표시 */}
              <Grid item>
                <Typography>~</Typography>
              </Grid>

              {/* 종료 날짜 입력 폼 */}
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="종료일"
                    value={endDate}
                    onChange={(date) => setEndDate(date)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        placeholder="종료일"
                        sx={{
                          width: 120,
                          "& .MuiInputBase-input::placeholder": {
                            fontSize: "0.8rem",
                          },
                        }}
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton size="small">
                                <CalendarTodayIcon fontSize="small" />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              {/* 날짜 버튼 */}
              <Grid item>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setDate("0")}
                  sx={{ minWidth: 60 }}
                >
                  오늘
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setDate("1")}
                  sx={{ minWidth: 60, marginLeft: 1 }}
                >
                  1일
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setDate("3")}
                  sx={{ minWidth: 60, marginLeft: 1 }}
                >
                  3일
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setDate("7")}
                  sx={{ minWidth: 60, marginLeft: 1 }}
                >
                  7일
                </Button>
              </Grid>

              {/* 검색 버튼 */}
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={handleSearch}
                  sx={{ minWidth: 80 }}
                >
                  검색
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Box mt={1}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            >
              <Typography variant="h6">락커분류정보</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          fontSize: "1rem",
                          textAlign: "center",
                        }}
                      >
                        락커분류명
                      </TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          fontSize: "1rem",
                          textAlign: "center",
                        }}
                      >
                        번호
                      </TableCell>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          fontSize: "1rem",
                          textAlign: "center",
                        }}
                      >
                        위치명
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ fontSize: "1rem", textAlign: "center" }}
                      >
                        남자락커
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "1rem", textAlign: "center" }}
                      >
                        1~100번
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "1rem", textAlign: "center" }}
                      >
                        <Link href="/page/center/center01-1.html?sc_branch2=2&sc_gubun=23&sc_lo_idx=45&view_type=1&sc_type=2&member_only=&branch_only=">
                          남자탈의실
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ fontSize: "1rem", textAlign: "center" }}
                      >
                        여자락커
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "1rem", textAlign: "center" }}
                      >
                        101~150번
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "1rem", textAlign: "center" }}
                      >
                        <Link href="/page/center/center01-1.html?sc_branch2=2&sc_gubun=24&sc_lo_idx=46&view_type=1&sc_type=2&member_only=&branch_only=">
                          여탈의실
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ fontSize: "1rem", textAlign: "center" }}
                      >
                        락커초기데이터
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "1rem", textAlign: "center" }}
                      >
                        151~5000번
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "1rem", textAlign: "center" }}
                      ></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box mt={3} textAlign="center">
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" className="bg_purple">
                <Typography variant="body2" component="span">
                  락커전체 <br /> 0
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="bg_green">
                <Typography variant="body2" component="span">
                  사용가능 <br /> 0
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="bg_skyblue">
                <Typography variant="body2" component="span">
                  사용중 <br />0
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="bg_yellow">
                <Typography variant="body2" component="span">
                  미반납 <br /> 0
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="bg_darkseagreen">
                <Typography variant="body2" component="span">
                  정지중 <br /> 0
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="bg_red">
                <Typography variant="body2" component="span">
                  수리중 <br /> 0
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className="bg_blue7">
                <Typography variant="body2" component="span">
                  예약중 <br /> 0
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="h6" mt={5}>
          <span className="concept-color">49</span>개의 락커가 검색 되었습니다.
        </Typography>
        <Box
          className="flex_ty1 between mt20"
          display="flex"
          justifyContent="flex-start"
          mt={2}
        >
          <Box>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 1,
                border: "2px solid",
                borderColor: "lightblue",
                "&:hover": {
                  borderColor: "blue",
                },
                transition: "border-color 0.3s",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
                >
                  101
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  onClick={() => {
                    // 락커 반납 로직
                  }}
                  sx={{ mb: 0, fontSize: "0.75rem" }}
                >
                  반납
                </Button>
                <Checkbox
                  name="chk[]"
                  value="1046"
                  sx={{ margin: 0, padding: 0, transform: "scale(1.2)" }}
                />
              </Box>
              <Box
                sx={{ position: "relative", width: 185, height: 130, mb: 0.5 }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 185, height: 130 }}
                  image="/img/185x130.png"
                />
                <Box
                  sx={{ position: "absolute", top: 0, left: 0, opacity: 0.7 }}
                >
                  <Button
                    variant="contained"
                    className="btn-type btn-ss purple"
                    size="small"
                    sx={{ fontSize: "0.75rem" }}
                  >
                    미반납
                  </Button>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    opacity: 0.7,
                  }}
                >
                  <Button
                    variant="contained"
                    className="btn-type btn-ss dgray"
                    size="small"
                    sx={{ fontSize: "0.75rem" }}
                  >
                    연체료 (0원)
                  </Button>
                </Box>
              </Box>
              <CardContent
                sx={{ flex: "1 0 auto", textAlign: "center", padding: 1 }}
              >
                <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                  테스트6
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                  2023-12-26 ~ 2024-01-26 (<span>32</span>)
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                  010-1122-6666
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 1,
                  width: "100%",
                }}
              >
                <IconButton aria-label="lock" size="small" sx={{ padding: 0 }}>
                  <LockIcon fontSize="small" />
                </IconButton>
                <TextField
                  size="small"
                  placeholder="6666"
                  value="6666"
                  sx={{ width: "80px", fontSize: "0.50rem", ml: 0 }}
                />
                <IconButton
                  aria-label="sms"
                  size="small"
                  sx={{ padding: 0, ml: 0.5 }}
                >
                  <SmsIcon fontSize="small" />
                </IconButton>
                <Typography
                  variant="body2"
                  onClick={() => {
                    // SMS 발송 로직
                  }}
                  sx={{ cursor: "pointer", fontSize: "0.75rem", ml: 0.5 }}
                >
                  문자발송
                </Typography>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GymLockerManagement;
