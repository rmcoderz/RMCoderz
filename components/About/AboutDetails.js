import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const AboutDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        maxWidth: "80%",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "40px 0px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bolder",
          padding: "40px 0px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: isMobile ? "30px" : "60px",
          color: "#003030",
        }}
      >
        ABOUT US
      </Typography>
      <Typography
        variant={isMobile ? "h6" : "h4"}
        sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
      >
        RM Coderz is a Vadodara, Gujarat (India) based software company
        delivering exciting, business-changing software products.
      </Typography>
      <Typography
        variant={isMobile ? "h6" : "h4"}
        sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
      >
        Our prime motto is to accelerate our client’s business by providing the
        best services. We believe that innovation comes by applying technology
        solutions to real business problems. We are focused on constantly
        improving ourselves and staying updated with the latest technologies.
      </Typography>
    </Box>
  );
};

export default AboutDetails;
