import { Box, Grid, IconButton, Typography, styled } from "@mui/material";
import React from "react";
import Link from "next/link";

// images
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterLine = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "20px 20px 20px 20px",
        width: "full",
      }}
    >
      <Box
        sx={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "auto 0px",
          alignContent: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ sm: 2, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "26",
                  fontWeight: "bold",
                }}
              >
                Designed By{" "}
                <Link passhref href="https://www.rmcoderz.com">
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#000",
                    }}
                  >
                    RM Coderz.
                  </a>
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{
                  fontSize: "26",
                  fontWeight: "bold",
                }}
              >
                Copyright © 2022{" "}
                <Link passhref href="https://www.rmcoderz.com">
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#000",
                    }}
                  >
                    RM Coderz.
                  </a>
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link passhref href="https://www.facebook.com/RMCoderz/">
                <a
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <SocialButtons aria-label="facebook">
                    <FacebookIcon />
                  </SocialButtons>
                </a>
              </Link>
              <Link passhref href="https://www.instagram.com/rmcoderz/">
                <a
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <SocialButtons aria-label="Instagram">
                    <InstagramIcon />
                  </SocialButtons>
                </a>
              </Link>
              <Link
                passhref
                href="https://www.linkedin.com/in/rm-coderz-56a189238/"
              >
                <a
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <SocialButtons aria-label="LinkedIn">
                    <LinkedInIcon />
                  </SocialButtons>
                </a>
              </Link>
              <Link passhref href="https://twitter.com/RMCoderz">
                <a
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <SocialButtons aria-label="Twitter">
                    <TwitterIcon />
                  </SocialButtons>
                </a>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FooterLine;

const SocialButtons = styled(IconButton)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 26,
  margin: "auto 5px",
  padding: "6px 6px",
  border: "1px solid",
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
