import React from "react";
import { Box, Select, MenuItem, Typography, Paper } from "@mui/material";

const MemSortOptionsBar = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "center",
        flexWrap: "nowrap",
        backgroundColor: "#fff",
      }}
    >
      <Box display="flex" alignItems="center" gap={1} flexWrap="nowrap">
        <Select
          name="sc_gubun1"
          id="sc_gubun1"
          displayEmpty
          defaultValue=""
          onChange={() => fsearch_submit_list()}
          sx={{
            minWidth: 100,
            fontSize: "0.75rem",
            height: "2rem",
            padding: "0 8px",
          }}
          size="small"
        >
          <MenuItem value="">결제일선택</MenuItem>
          <MenuItem value="asc">오름차순</MenuItem>
          <MenuItem value="desc">내림차순</MenuItem>
        </Select>
        <Select
          name="sc_gubun2"
          id="sc_gubun2"
          displayEmpty
          defaultValue=""
          onChange={() => fsearch_submit_list()}
          sx={{
            minWidth: 100,
            fontSize: "0.75rem",
            height: "2rem",
            padding: "0 8px",
          }}
          size="small"
        >
          <MenuItem value="">방문일선택</MenuItem>
          <MenuItem value="asc">오름차순</MenuItem>
          <MenuItem value="desc">내림차순</MenuItem>
        </Select>
        <Select
          name="sc_gubun3"
          id="sc_gubun3"
          displayEmpty
          defaultValue=""
          onChange={() => fsearch_submit_list()}
          sx={{
            minWidth: 100,
            fontSize: "0.75rem",
            height: "2rem",
            padding: "0 8px",
          }}
          size="small"
        >
          <MenuItem value="">출석일선택</MenuItem>
          <MenuItem value="asc">오름차순</MenuItem>
          <MenuItem value="desc">내림차순</MenuItem>
        </Select>
        <Select
          name="sc_gubun4"
          id="sc_gubun4"
          displayEmpty
          defaultValue=""
          onChange={() => fsearch_submit_list()}
          sx={{
            minWidth: 100,
            fontSize: "0.75rem",
            height: "2rem",
            padding: "0 8px",
          }}
          size="small"
        >
          <MenuItem value="">연령대전체</MenuItem>
          <MenuItem value="10">10대</MenuItem>
          <MenuItem value="20">20대</MenuItem>
          <MenuItem value="30">30대</MenuItem>
          <MenuItem value="40">40대</MenuItem>
          <MenuItem value="50">50대</MenuItem>
          <MenuItem value="60">60대</MenuItem>
          <MenuItem value="70">70대</MenuItem>
          <MenuItem value="80">80대 이상</MenuItem>
        </Select>
        <Select
          name="sc_gubun5"
          id="sc_gubun5"
          displayEmpty
          defaultValue=""
          onChange={() => fsearch_submit_list()}
          sx={{
            minWidth: 100,
            fontSize: "0.75rem",
            height: "2rem",
            padding: "0 8px",
          }}
          size="small"
        >
          <MenuItem value="">남여전체</MenuItem>
          <MenuItem value="M">남</MenuItem>
          <MenuItem value="F">여</MenuItem>
        </Select>
        <Select
          name="sc_gubun6"
          id="sc_gubun6"
          displayEmpty
          defaultValue=""
          onChange={() => fsearch_submit_list()}
          sx={{
            minWidth: 100,
            fontSize: "0.75rem",
            height: "2rem",
            padding: "0 8px",
          }}
          size="small"
        >
          <MenuItem value="">이용권분류선택</MenuItem>
          <MenuItem value="40">시설이용권</MenuItem>
          <MenuItem value="42">개인레슨이용권</MenuItem>
          <MenuItem value="43">그룹레슨이용권</MenuItem>
        </Select>
        <Select
          name="sc_gubun7"
          id="sc_gubun7"
          displayEmpty
          defaultValue=""
          onChange={() => fsearch_submit_list()}
          sx={{
            minWidth: 100,
            fontSize: "0.75rem",
            height: "2rem",
            padding: "0 8px",
          }}
          size="small"
        >
          <MenuItem value="">이용권결제명선택</MenuItem>
          <MenuItem value="43">OT</MenuItem>
          <MenuItem value="43">PT 10회</MenuItem>
          <MenuItem value="43">PT 20회</MenuItem>
          <MenuItem value="43">개인레슨 10회</MenuItem>
          <MenuItem value="43">요가 1개월</MenuItem>
          <MenuItem value="43">요가 3개월</MenuItem>
          <MenuItem value="43">초기자료</MenuItem>
          <MenuItem value="43">헬스 학생 12개월</MenuItem>
          <MenuItem value="43">헬스 학생 1개월</MenuItem>
          <MenuItem value="43">헬스 학생 3개월</MenuItem>
          <MenuItem value="43">헬스 학생 6개월</MenuItem>
          <MenuItem value="43">헬스+요가+PT10회</MenuItem>
          <MenuItem value="43">헬스복 1개월</MenuItem>
          <MenuItem value="43">헬스일반 12개월</MenuItem>
          <MenuItem value="43">헬스일반 1개월</MenuItem>
          <MenuItem value="43">헬스일반 3개월</MenuItem>
          <MenuItem value="43">헬스일반 6개월</MenuItem>
        </Select>
        <Select
          name="sc_gubun8"
          id="sc_gubun8"
          displayEmpty
          defaultValue=""
          onChange={() => fsearch_submit_list()}
          sx={{
            minWidth: 100,
            fontSize: "0.75rem",
            height: "2rem",
            padding: "0 8px",
          }}
          size="small"
        >
          <MenuItem value="">락커상태선택</MenuItem>
          <MenuItem value="정상">정상</MenuItem>
          <MenuItem value="미반납">미반납</MenuItem>
          <MenuItem value="완료">완료</MenuItem>
        </Select>
        <Select
          name="search_membergroup"
          id="search_membergroup"
          displayEmpty
          defaultValue=""
          onChange={() => fsearch_list_submit()}
          sx={{
            minWidth: 100,
            fontSize: "0.75rem",
            height: "2rem",
            padding: "0 8px",
          }}
          size="small"
        >
          <MenuItem value="">회원그룹선택</MenuItem>
          <MenuItem value="10">2019황금돼지이벤트</MenuItem>
          <MenuItem value="11">CrossFit</MenuItem>
          <MenuItem value="12">PT</MenuItem>
          <MenuItem value="13">S제휴업체</MenuItem>
          <MenuItem value="14">VIP</MenuItem>
          <MenuItem value="15">공주시보디빌딩협회</MenuItem>
          <MenuItem value="16">그룹PT</MenuItem>
        </Select>
        <Select
          name="search_step_info"
          id="search_step_info"
          displayEmpty
          defaultValue=""
          onChange={() => fsearch_list_submit()}
          sx={{
            minWidth: 100,
            fontSize: "0.75rem",
            height: "2rem",
            padding: "0 8px",
          }}
          size="small"
        >
          <MenuItem value="">담당자선택</MenuItem>
          <MenuItem value="85">이다현</MenuItem>
          <MenuItem value="79">이백희</MenuItem>
          <MenuItem value="67">신규직원테스트</MenuItem>
          <MenuItem value="59">이슬이슬</MenuItem>
          <MenuItem value="42">123123</MenuItem>
          <MenuItem value="41">12312321</MenuItem>
        </Select>
      </Box>
    </Paper>
  );
};

export default MemSortOptionsBar;
