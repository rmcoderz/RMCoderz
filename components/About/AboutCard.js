import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  styled,
} from "@mui/material";
import React from "react";

const AboutCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  return (
    <Box
      sx={{
        maxWidth: "80%",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
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
        What Matters to Us
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ sm: 2, md: 3 }}
        sx={{ display: "flex" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <AboutCustomCard sx={{ minHeight: isDesktop ? "520px" : "410px" }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Increase your E-commerce Store purchases with Digital Marketing
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "14px",
                  textAlign: "justify",
                  marginTop: "15px",
                }}
              >
                We help you increase awareness about your product/brand and
                company to the target audience using Facebook, Instagram, and
                Google Ads. Reach interested buyers and scale your E-commerce
                business with us.
              </Typography>
            </CardContent>
          </AboutCustomCard>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <AboutCustomCard sx={{ minHeight: isDesktop ? "520px" : "410px" }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                No More Tedious and Time-Consuming tasks
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "14px",
                  textAlign: "justify",
                  marginTop: "15px",
                }}
              >
                We provide a complete solution for creating logos, and graphics
                for marketing to review follow-ups and designing an E-commerce
                website as per your individual needs. You get all these services
                from one platform so that you can boost your e-business like
                never before.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "14px",
                  textAlign: "justify",
                  marginTop: "15px",
                  fontWeight: "bold",
                }}
              >
                Let us handle the online marketing while you focus on creating
                new ideas
              </Typography>
            </CardContent>
          </AboutCustomCard>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <AboutCustomCard sx={{ minHeight: isDesktop ? "520px" : "410px" }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Increase your E-commerce purchases with us through Digital
                Marketing
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "14px",
                  textAlign: "justify",
                  marginTop: "15px",
                }}
              >
                We will help increase awareness about your products to the
                target audience through Facebook, Instagram, and Google Ads.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "14px",
                  textAlign: "justify",
                  marginTop: "15px",
                  fontWeight: "bold",
                }}
              >
                Reach the interested buyers and scale your E-commerce business
                now.
              </Typography>
            </CardContent>
          </AboutCustomCard>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <AboutCustomCard sx={{ minHeight: isDesktop ? "520px" : "410px" }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Check the performance of your products as compared to the
                competitors
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "14px",
                  textAlign: "justify",
                  marginTop: "15px",
                }}
              >
                We help you in measuring the performance of your products so
                that you can always stay ahead of the competitors.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "14px",
                  textAlign: "justify",
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                Stay one step ahead with us.
              </Typography>
            </CardContent>
          </AboutCustomCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCard;

const AboutCustomCard = styled(Card)({
  boxShadow: "-10px -10px #008080",
  textTransform: "none",
  margin: "20px auto",
  //   fontSize: 26,
  padding: "6px 0px",
  border: "1px solid",
  //   lineHeight: 1.5,
  color: "#fff",
  backgroundColor: "#003030",
  borderColor: "#008080",
  transition: "ease-in-out 0.3s",
  "&:hover": {
    backgroundColor: "#ffffe6",
    borderColor: "#003030",
    color: "#003030",
    boxShadow: "10px 10px #003030",
  },
  "&:active": {
    boxShadow: "10px 10px #003030",
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
  },
});
