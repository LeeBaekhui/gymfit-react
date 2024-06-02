import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const products = [
  {
    id: 1,
    category: "시설이용권",
    name: "헬스북 1개월 0회",
    period: "2개월",
    price: "170,000원",
    date: "2024-03-21",
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    category: "시설이용권",
    name: "초기자료 0회",
    period: "1개월",
    price: "70,000원",
    date: "2024-01-30",
    image: "/path/to/image2.jpg",
  },
  {
    id: 3,
    category: "시설이용권",
    name: "헬스 학생 1개월 0회",
    period: "3개월",
    price: "170,000원",
    date: "2022-03-23",
    image: "/path/to/image3.jpg",
  },
  {
    id: 4,
    category: "시설이용권",
    name: "헬스 일반 12개월 0회",
    period: "12개월",
    price: "590,000원",
    date: "2022-08-18",
    image: "/path/to/image4.jpg",
  },
  {
    id: 5,
    category: "시설이용권",
    name: "헬스 일반 6개월 0회",
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
  })
);

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: "flex", height: "100vh", overflow: "hidden" }}
    >
      <CustomTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Facility Products Tabs"
        sx={{ borderRight: 1, borderColor: "divider", minWidth: 200 }}
      >
        <CustomTab label="본점" />
        <CustomTab label="시설이용권" />
        <CustomTab label="개인레슨이용권" />
        <CustomTab label="그룹레슨이용권" />
        <CustomTab label="패키지이용권" />
      </CustomTabs>
      <TabPanel value={value} index={0}>
        <Grid
          container
          spacing={3}
          sx={{ maxHeight: "100%", overflowY: "auto" }}
        >
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                {product.image && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                )}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
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
      <TabPanel value={value} index={1}>
        <Grid
          container
          spacing={3}
          sx={{ maxHeight: "100%", overflowY: "auto" }}
        >
          {/* Facility products will go here */}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid
          container
          spacing={3}
          sx={{ maxHeight: "100%", overflowY: "auto" }}
        >
          {/* Personal lesson products will go here */}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid
          container
          spacing={3}
          sx={{ maxHeight: "100%", overflowY: "auto" }}
        >
          {/* Group lesson products will go here */}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid
          container
          spacing={3}
          sx={{ maxHeight: "100%", overflowY: "auto" }}
        >
          {/* Package products will go here */}
        </Grid>
      </TabPanel>
    </Box>
  );
};

export default ViewFacilityProducts;
