import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Grid, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const initialCategories = ["시설이용권", "개인레슨이용권", "그룹레슨이용권"];

const products = [
  {
    id: 1,
    category: "시설이용권",
    name: "헬스복 1개월",
    period: "2개월",
    price: "170,000원",
    date: "2024-03-21",
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    category: "시설이용권",
    name: "초기자료",
    period: "1개월",
    price: "70,000원",
    date: "2024-01-30",
    image: "/path/to/image2.jpg",
  },
  {
    id: 3,
    category: "시설이용권",
    name: "헬스 학생 1개월",
    period: "3개월",
    price: "170,000원",
    date: "2022-03-23",
    image: "/path/to/image3.jpg",
  },
  {
    id: 4,
    category: "시설이용권",
    name: "헬스 일반 12개월",
    period: "12개월",
    price: "590,000원",
    date: "2022-08-18",
    image: "/path/to/image4.jpg",
  },
  {
    id: 5,
    category: "시설이용권",
    name: "헬스 일반 6개월",
    period: "6개월",
    price: "360,000원",
    date: "2022-08-18",
    image: "/path/to/image5.jpg",
  },
];

const CustomTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
  marginBottom: "10px", // 위/아래 간격 추가
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 120,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    color: "rgba(0, 0, 0, 0.85)",
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
    outline: "none", // 탭 버튼 클릭 시 생기는 검정색 박스 제거
  })
);

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const ViewFacilityProducts = () => {
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState(initialCategories);
  const [category, setCategory] = useState(categories[0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCategory(categories[newValue]);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <CustomTabs
          value={value}
          onChange={handleChange}
          aria-label="Facility Products Tabs"
          centered
        >
          {categories.map((category, index) => (
            <CustomTab key={index} label={category} />
          ))}
        </CustomTabs>
      </Box>
      {categories.map((category, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Grid container spacing={3} sx={{ maxHeight: "100%", overflowY: "auto" }}>
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card>
                    {product.image ? (
                      <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                    ) : (
                      <Box sx={{ height: 200, backgroundColor: "#e0e0e0" }} />
                    )}
                    <CardContent>
                      <Typography gutterBottom variant="h7" component="div"> {/* 글자 크기 조절 */}
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.category}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        등록일: {product.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        이용기간: {product.period}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        가격: {product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </TabPanel>
      ))}
    </Box>
  );
};

export default ViewFacilityProducts;
