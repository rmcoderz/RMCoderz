import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  Button,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// Images
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const DetailServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [active, setActive] = useState(0);
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
          WHAT DEFINES US
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
          WHAT DEFINES US
        </Typography>
        <Typography variant="h5">
          We enable progressive businesses to transform, scale and gain
          competitive advantage and thrive in their respective areas of
          interest.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          minHeight: "270px",
          padding: "30px 0px",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box sx={{ minHeight: "270px" }}>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText>Web Services</ListItemText> */}
                <DetailServicesButton
                  variant="outlined"
                  // startIcon={<ArrowRightAltIcon />}
                  onClick={() => setActive(0)}
                  fullWidth={true}
                >
                  Commitment
                </DetailServicesButton>
              </List>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DetailServicesButton
                  variant="outlined"
                  // startIcon={<ArrowRightAltIcon />}
                  onClick={() => setActive(1)}
                  fullWidth={true}
                >
                  Accuracy
                </DetailServicesButton>
              </List>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DetailServicesButton
                  variant="outlined"
                  // startIcon={<ArrowRightAltIcon />}
                  onClick={() => setActive(2)}
                  fullWidth={true}
                >
                  Quality
                </DetailServicesButton>
              </List>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DetailServicesButton
                  variant="outlined"
                  // startIcon={<ArrowRightAltIcon />}
                  onClick={() => setActive(3)}
                  fullWidth={true}
                >
                  Team Work
                </DetailServicesButton>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Box sx={{ minHeight: "270px", width: "100%" }}>
              {active == 0 && (
                <Card
                  sx={{
                    minHeight: "270px",
                    width: "100%",
                    backgroundColor: "#008080",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="AboutImageContainer"
                >
                  <CardContent>
                    <Typography variant="h4" sx={{ margin: "auto 0px" }}>
                      We are committed to delivering the best quality services
                      to our clients so that they can achieve the maximum
                      results from their e-commerce website and store.
                    </Typography>
                  </CardContent>
                </Card>
              )}
              {active == 1 && (
                <Card
                  sx={{
                    minHeight: "270px",
                    width: "100%",
                    backgroundColor: "#008080",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="AboutImageContainer"
                >
                  <CardContent>
                    <Typography variant="h4">
                      We put our 100% and accomplish the work with negligible
                      errors and maintain the accuracy throughout.
                    </Typography>
                  </CardContent>
                </Card>
              )}
              {active == 2 && (
                <Card
                  sx={{
                    minHeight: "270px",
                    width: "100%",
                    backgroundColor: "#008080",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="AboutImageContainer"
                >
                  <CardContent>
                    <Typography variant="h4">
                      We will never compromise on the quality of our service no
                      matter what. We try to deliver the best quality work
                      within the given timeframe.
                    </Typography>
                  </CardContent>
                </Card>
              )}
              {active == 3 && (
                <Card
                  sx={{
                    minHeight: "270px",
                    width: "100%",
                    backgroundColor: "#008080",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="AboutImageContainer"
                >
                  <CardContent>
                    <Typography variant="h4">
                      We are a team of expert people who synergize their efforts
                      in order to accomplish greater and bigger goals. With us,
                      you can grow your business exponentially.
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DetailServices;

const DetailServicesButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 26,
  //   margin: "25px auto",
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
