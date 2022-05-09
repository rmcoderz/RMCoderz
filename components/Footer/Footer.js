import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  styled,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Image
import Logo from "../../assets/images/main_trans_2.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Footer = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const handleChange = (e, value) => {
    e.preventDefault();
    router.push(value);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#e6e6e6",
        padding: "50px 20px",
        width: "full",
      }}
    >
      <Box sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Link sx={{ cursor: "pointer" }} href="/" passHref>
              <Image src={Logo} alt="RM <CODERZ>" width={250} height={50} />
            </Link>
            <Typography
              variant="h5"
              sx={{ fontSize: isLaptop ? "16px" : "20px" }}
            >
              RM Coderz is a Software Company started by 2 Software Engineers,
              We provide a best development solution and services as per
              requirements. We have Best HardWorking and Dedicated Developers
              that provide a variety of services with "Superior Quality Code".
            </Typography>
            <HeroButton
              variant="outlined"
              onClick={() => router.push("/contact_us")}
            >
              Contact Us
            </HeroButton>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "left" : "center",
              }}
            >
              <Typography variant="h5" sx={{ fontSize: "20px" }}>
                Quick Link
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "left" : "center",
              }}
            >
              <FTabs
                orientation="vertical"
                onChange={handleChange}
                sx={{
                  marginLeft: isMobile ? "none" : "auto",
                  marginRight: isMobile ? "none" : "auto",
                }}
              >
                <FTab
                  icon={<ArrowRightAltIcon />}
                  iconPosition="start"
                  label="About Us"
                  value="/about"
                />
                <FTab
                  icon={<ArrowRightAltIcon />}
                  iconPosition="start"
                  label="Services"
                  value="/service"
                />
                <FTab
                  icon={<ArrowRightAltIcon />}
                  iconPosition="start"
                  label="Blog"
                  value="/blog"
                />
                <FTab
                  icon={<ArrowRightAltIcon />}
                  iconPosition="start"
                  label="Contact Us"
                  value="/contact_us"
                />
              </FTabs>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "left" : "center",
              }}
            >
              <Typography variant="h5" sx={{ fontSize: "20px" }}>
                Contact Details
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "left" : "center",
              }}
            >
              <List>
                <Link passHref href="mailto:rmcoderz@gmail.com">
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <ListItem>
                      <ListItemIcon>
                        <AlternateEmailIcon />
                      </ListItemIcon>
                      <ListItemText>rmcoderz@gmail.com</ListItemText>
                    </ListItem>
                  </a>
                </Link>
                <Link passHref href="callto:+91-8154036407">
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <ListItem>
                      <ListItemIcon>
                        <LocalPhoneIcon />
                      </ListItemIcon>
                      <ListItemText>+91 81540 36407</ListItemText>
                    </ListItem>
                  </a>
                </Link>
                <Link passHref href="callto:+91-8488080983">
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <ListItem>
                      <ListItemIcon>
                        <LocalPhoneIcon />
                      </ListItemIcon>
                      <ListItemText>+91 84880 80983</ListItemText>
                    </ListItem>
                  </a>
                </Link>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;

const FTabs = styled(Tabs)({
  // marginLeft: "auto",
  // marginRight: "auto",
  "& .MuiTabs-indicator": {
    backgroundColor: "#000033",
  },
  "& .MuiTabs-textColor": {},
});

const FTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    padding: "0px",
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "left",
    // marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#008080",
      opacity: 1,
      borderLeft: "2px solid #003030",
    },
    "&.Mui-selected": {
      color: "#008080",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#008080",
    },
  }),
);

const HeroButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 26,
  margin: "25px auto",
  padding: "6px 20px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "#ffffe6",
  backgroundColor: "#008080",
  borderColor: "#000030",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
    color: "#000030",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
  },
});
