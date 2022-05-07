import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const ServicePackageTitle = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bolder",
          padding: "20px 0px 20px 0px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: isMobile ? "30px" : "60px",
          color: "#003030",
        }}
      >
        OUR SERVICE PACKAGES
      </Typography>
    </Box>
  );
};

export default ServicePackageTitle;
