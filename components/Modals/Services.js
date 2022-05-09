import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Link from "next/link";

// Images
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import GroupsIcon from "@mui/icons-material/Groups";

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  return (
    <>
      <Box
        sx={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        {/* <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            padding: "70px 0px 20px 0px",
          }}
        >
          OUR SERVICES
        </Typography> */}
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
          {`<SERVICES />`}
        </Typography>
        <Typography variant="h5">
          We provide the best quality services in the following categories.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Link href="/service" passHref>
              <Card sx={{ minHeight: isLaptop ? "500px" : "430px" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CardHeader
                    avatar={
                      <WebOutlinedIcon
                        sx={{ fontSize: 100, color: "#008080" }}
                      />
                    }
                  />
                </Box>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "25px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        color: "#003030",
                      }}
                    >
                      Web Development
                    </Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "justify", fontSize: "18px" }}
                  >
                    The world has transformed into a fast-paced digital era. If
                    a brand or a company wants to sustain through this, there is
                    only one way - a strong digital presence. That is exactly
                    why we are here. We design small and large e-commerce sites,
                    for various devices which will be enabled with the latest
                    technologies for your business.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Link href="/service" passHref>
              <Card sx={{ minHeight: isLaptop ? "500px" : "430px" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CardHeader
                    avatar={
                      <InsightsRoundedIcon
                        sx={{
                          fontSize: 100,
                          color: "#008080",
                        }}
                      />
                    }
                  />
                </Box>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "25px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        color: "#003030",
                      }}
                    >
                      Search Engine Optimization
                    </Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "justify", fontSize: "18px" }}
                  >
                    The digital market is the new market to be. It’s constantly
                    growing and comes with great opportunities. Our team would
                    deliver customized marketing solutions to meet the unique
                    requirements of your business.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Link href="/service" passHref>
              <Card sx={{ minHeight: isLaptop ? "500px" : "430px" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CardHeader
                    avatar={
                      <GroupsIcon sx={{ fontSize: 100, color: "#008080" }} />
                    }
                  />
                </Box>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "25px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        color: "#003030",
                      }}
                    >
                      Social Media Marketing
                    </Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "justify", fontSize: "18px" }}
                  >
                    Get people to notice you through our social media marketing
                    services. We market on various social media platforms based
                    on the target audience in order for you to achieve your
                    business goals. We grow as you do. We are dedicated to your
                    growth.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Services;
