import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileDrawer from "./MobileDrawer";

// Imgaes
import Logo from "../../assets/images/main_trans_2.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";

const Navbar = ({ activeTab, selectedTab }) => {
  const router = useRouter();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e, value) => {
    e.preventDefault();
    setValue(value);
    router.push(value);
  };
  return (
    <React.Fragment>
      <AppBar
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
        }}
        position="sticky"
      >
        <Toolbar>
          <Link sx={{ cursor: "pointer" }} href="/" passHref>
            <Image src={Logo} alt="RM <CODERZ>" width={250} height={50} />
          </Link>
          {isMatch ? (
            <MobileDrawer />
          ) : (
            <MTabs value={activeTab} onChange={handleChange}>
              <MTab
                icon={<HomeRoundedIcon />}
                iconPosition="start"
                label="Home"
                value="/"
              />
              <MTab
                icon={<PersonRoundedIcon />}
                iconPosition="start"
                label="About"
                value="/about"
              />
              <MTab
                icon={<DesignServicesRoundedIcon />}
                iconPosition="start"
                label="Services"
                value="/service"
              />
              <MTab
                icon={<BookRoundedIcon />}
                iconPosition="start"
                label="Blog"
                value="/blog"
              />
              <MTab
                icon={<ConnectWithoutContactRoundedIcon />}
                iconPosition="start"
                label="Contact Us"
                value="/contact_us"
              />
            </MTabs>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;

const MTabs = styled(Tabs)({
  marginLeft: "auto",
  "& .MuiTabs-indicator": {
    backgroundColor: "#000033",
  },
  "& .MuiTabs-textColor": {},
});

const MTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
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
      borderBottom: "2px solid #003030",
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
