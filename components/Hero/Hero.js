import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import HeroImage from "../../assets/images/HomeHero.png";
import HeroImgae2 from "../../assets/CreativesForWebsite/AboutHero.png";

const Hero = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  return (
    <Box sx={{ backgroundColor: "#003030" }}>
      <Box
        sx={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          height: isLaptop ? "500px" : "800px",
          display: "flex",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            sx={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {isMatch ? (
              <>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#fff" }}
                >
                  Web Development Company That Helps You To Build Your Dream
                  Website.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ paddingTop: "25px", color: "#fff" }}
                >
                  Implement New Web technologies To Transform, Accelerate and
                  Optimize Your Local Business or Services.
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "#fff" }}
                >
                  Web Development Company That Helps You To Build Your Dream
                  Website.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ paddingTop: "25px", color: "#fff" }}
                >
                  Implement New Web technologies To Transform, Accelerate and
                  Optimize Your Local Business or Services.
                </Typography>
              </>
            )}
            <HeroButton
              variant="outlined"
              onClick={() => router.push("/contact_us")}
            >
              Contact Us
            </HeroButton>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            sx={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image src={HeroImage} alt="Hero Image" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

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

export default Hero;
