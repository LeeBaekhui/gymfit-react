import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Grid,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { createMember, updateMember } from "./MemberAxios";
import SearchIcon from "@mui/icons-material/Search";

const memberGroups = [
  { value: "group1", label: "Group 1" },
  { value: "group2", label: "Group 2" },
  { value: "group3", label: "Group 3" },
];

const handlers = [
  { value: "handler1", label: "Handler 1" },
  { value: "handler2", label: "Handler 2" },
  { value: "handler3", label: "Handler 3" },
];

const genders = [
  { value: "male", label: "남성" },
  { value: "female", label: "여성" },
];

const MemberForm = ({ existingMember, photo, setPhoto }) => {
  const [member, setMember] = useState({
    name: "",
    gender: "",
    height: "",
    phone: "010",
    email: "",
    weight: "",
    memberId: "",
    memberGroup: "",
    bmi: "",
    lockerNumber: "",
    handler: "",
    enterAlarm: "",
    address: "",
    memo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember({
      ...member,
      [name]: value,
    });
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const lastFourDigits = value.slice(-4);
    let newMemberId = lastFourDigits;
    setMember((prevMember) => ({
      ...prevMember,
      phone: value,
      memberId: newMemberId,
    }));
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  useEffect(() => {
    if (member.height && member.weight) {
      const heightInMeters = member.height / 100;
      const bmi = (member.weight / (heightInMeters * heightInMeters)).toFixed(
        2
      );
      setMember((prevMember) => ({ ...prevMember, bmi }));
    }
  }, [member.height, member.weight]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const memberData = {
        ...member,
        profileImage: photo ? photo.split(",")[1] : null,
      };
      if (member.id) {
        await updateMember(member.id, memberData);
        alert("Member updated successfully");
      } else {
        await createMember(memberData);
        alert("Member created successfully");
      }
    } catch (error) {
      alert("Error occurred");
    }
  };

  const handleAddressSearch = () => {
    // 우편번호 찾기 로직 추가
  };

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="name"
            name="name"
            label="이름"
            fullWidth
            value={member.name}
            onChange={handleChange}
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            select
            id="gender"
            name="gender"
            label="성별"
            value={member.gender}
            onChange={handleChange}
            fullWidth
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="height"
            name="height"
            label="신장(cm)"
            fullWidth
            value={member.height}
            onChange={handleChange}
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="phone"
            name="phone"
            label="전화번호"
            fullWidth
            value={member.phone}
            onChange={handlePhoneChange}
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="email"
            name="email"
            label="이메일"
            fullWidth
            value={member.email}
            onChange={handleChange}
            error={!!member.email && !validateEmail(member.email)}
            helperText={
              !!member.email && !validateEmail(member.email)
                ? "유효한 이메일 주소를 입력하세요"
                : ""
            }
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="weight"
            name="weight"
            label="체중(kg)"
            fullWidth
            value={member.weight}
            onChange={handleChange}
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="memberId"
            name="memberId"
            label="회원번호"
            fullWidth
            value={member.memberId}
            onChange={handleChange}
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            select
            id="memberGroup"
            name="memberGroup"
            label="회원그룹"
            value={member.memberGroup}
            onChange={handleChange}
            fullWidth
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          >
            {memberGroups.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="bmi"
            name="bmi"
            label="체질량지수(BMI)"
            fullWidth
            value={member.bmi}
            InputProps={{
              readOnly: true,
              style: { fontSize: 14 },
            }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="lockerNumber"
            name="lockerNumber"
            label="락커번호"
            fullWidth
            value={member.lockerNumber}
            onChange={handleChange}
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            select
            id="handler"
            name="handler"
            label="담당자"
            value={member.handler}
            onChange={handleChange}
            fullWidth
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          >
            {handlers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            id="enterAlarm"
            name="enterAlarm"
            label="입실알림"
            fullWidth
            value={member.enterAlarm}
            onChange={handleChange}
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="주소"
            fullWidth
            value={member.address}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleAddressSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              style: { fontSize: 14 },
            }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="memo"
            name="memo"
            label="메모"
            multiline
            rows={2}
            variant="outlined"
            fullWidth
            value={member.memo}
            onChange={handleChange}
            size="small"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {member.id ? "Update Member" : "Create Member"}
            저장
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MemberForm;
