import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { createMember, updateMember } from "./MemberAxios";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Grid,
  Typography,
  Container,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";
import MemberWebcamModal from "./MemberWebcamModal";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SearchIcon from "@mui/icons-material/Search";

const Input = styled("input")({
  display: "none",
});

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

const MemberCreate = ({ existingMember }) => {
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
  const [photo, setPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [showPhoto, setShowPhoto] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember({
      ...member,
      [name]: value,
    });
  };

  // 회원번호 자동 로직
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

  // 체질량지수 BMI 공식
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

  const handleCapture = (imageSrc) => {
    setPhoto(imageSrc);
  };

  const handleTogglePhoto = () => {
    setShowPhoto(!showPhoto);
  };

  const handleDeletePhoto = () => {
    setPhoto(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddressSearch = () => {
    // 우편번호 찾기 로직 추가
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: "1600px",
        mx: "auto",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ p: 3, mt: 3, width: "100%" }}>
        <Typography variant="h6" gutterBottom>
          회원가입
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box
                  sx={{
                    width: 400,
                    height: 400,
                    maxWidth: "100%",
                    maxHeight: "100%",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    resize: "both",
                    overflow: "auto",
                  }}
                >
                  {photo && showPhoto ? (
                    <img
                      src={photo}
                      alt="Captured"
                      style={{ width: "100%", height: "auto" }}
                    />
                  ) : (
                    <Typography>사진 미리보기</Typography>
                  )}
                </Box>
                <Box display="flex" alignItems="center">
                  <Button
                    variant="contained"
                    startIcon={<PhotoCamera />}
                    onClick={() => setOpen(true)}
                    sx={{ mr: 1 }}
                  >
                    사진 촬영
                  </Button>
                  <IconButton onClick={handleTogglePhoto}>
                    {showPhoto ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                  <IconButton onClick={handleDeletePhoto}>
                    <DeleteIcon />
                  </IconButton>
                  <Input
                    accept="image/*"
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file-upload">
                    <Button
                      variant="contained"
                      component="span"
                      startIcon={<AttachFileIcon />}
                      sx={{ ml: 1 }}
                    >
                      파일첨부
                    </Button>
                  </label>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
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
                    sx={{ height: "3rem" }}
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
                    sx={{ height: "3rem" }}
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
                    sx={{ height: "3rem" }}
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
                    sx={{ height: "3rem" }}
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
                    sx={{ height: "3rem" }}
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
                    sx={{ height: "3rem" }}
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
                    sx={{ height: "3rem" }}
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
                    sx={{ height: "3rem" }}
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
                    label="체질량지수"
                    fullWidth
                    value={member.bmi}
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ height: "3rem" }}
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
                    sx={{ height: "3rem" }}
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
                    sx={{ height: "3rem" }}
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
                    sx={{ height: "3rem" }}
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
                    }}
                    sx={{ height: "3rem" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="memo"
                    name="memo"
                    label="메모"
                    multiline
                    rows={1}
                    variant="outlined"
                    fullWidth
                    value={member.memo}
                    onChange={handleChange}
                    sx={{ height: "3rem" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ height: "3rem" }}
                  >
                    {member.id ? "Update Member" : "Create Member"}
                    저장
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <MemberWebcamModal
        open={open}
        onClose={() => setOpen(false)}
        onCapture={handleCapture}
      />
    </Container>
  );
};

export default MemberCreate;
