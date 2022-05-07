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

const AboutInfo = () => {
  const [active, setActive] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
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
            padding: "40px 0px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: isMobile ? "30px" : "60px",
            color: "#003030",
          }}
        >
          What Do We Do?
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Montserrat, sans-serif" }}>
          We place our clients’ needs first
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
                  Market Analysis
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
                  Data Processing
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
                  Strategize
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
                  Implement
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
                      Information collecting and market analysis on different
                      areas to get the right-fit content.
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
                      Collect data and convert it into useful information to be
                      used for marketing & web development purposes.
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
                      Create perfect strategies aiding the individual needs and
                      make a proper business plan to obtain the target.
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
                      Once we have all the information and business strategy we
                      need for the project, we put the plan into action.
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

export default AboutInfo;

const DetailServicesButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 26,
  //   margin: "25px auto",
  padding: "6px auto",
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
