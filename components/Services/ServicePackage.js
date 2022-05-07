import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const ServicePackage = ({ item, index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const light = index % 2 === 0; //For Manageing Card Colors
  const direction = index % 2 === 0; //For Manageing Card Layout Direction
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundColor: light ? "#ffffe6" : "#003030",
        padding: isMobile ? "0px" : "80px 0px",
      }}
    >
      <Box sx={{ width: "80%", margin: "0px auto" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ sm: 2, md: 3 }}
          sx={{
            display: "flex",
            flexDirection: direction ? "row" : "row-reverse",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              alignItems: direction || isMobile ? "flex-start" : "flex-end",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bolder",
                padding: "20px 0px 20px 0px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "30px" : "60px",
                color: light ? "#003030" : "#ffffe6",
              }}
            >
              {item.packageName}
            </Typography>
            <HeroButton
              variant="outlined"
              onClick={() => router.push("/contact_us")}
            >
              Contact Us
            </HeroButton>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "left" : "center",
                color: light ? "#003030" : "#ffffe6",
              }}
            >
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <DoneOutlineIcon />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: isMobile ? "16px" : "30px",
                        color: light ? "#003030" : "ffffe6",
                        fontWeight: "bold",
                      }}
                    >
                      {`${item.day} Days`}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <DoneOutlineIcon />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: isMobile ? "16px" : "30px",
                        color: light ? "#003030" : "ffffe6",
                        fontWeight: "bold",
                      }}
                    >
                      {`${item.revisions} Revisions`}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <DoneOutlineIcon />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: isMobile ? "16px" : "30px",
                        color: light ? "#003030" : "ffffe6",
                        fontWeight: "bold",
                      }}
                    >
                      {`${item.pages} Pages`}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <DoneOutlineIcon />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: isMobile ? "16px" : "30px",
                        color: light ? "#003030" : "ffffe6",
                        fontWeight: "bold",
                      }}
                    >
                      {item.service}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <DoneOutlineIcon />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: isMobile ? "16px" : "30px",
                        color: light ? "#003030" : "ffffe6",
                        fontWeight: "bold",
                      }}
                    >
                      {item.content}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <DoneOutlineIcon />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: isMobile ? "16px" : "30px",
                        color: light ? "#003030" : "ffffe6",
                        fontWeight: "bold",
                      }}
                    >
                      {`${item.support} Month Support`}{" "}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicePackage;

const HeroButton = styled(Button)({
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
