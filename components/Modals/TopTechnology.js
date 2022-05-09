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
import Image from "next/image";
import React from "react";

// images
import JS from "../../assets/images/JavaScript.png";
import TS from "../../assets/images/typescript.png";
import VUE from "../../assets/images/Vue.png";
import NODE from "../../assets/images/node.png";
import Link from "next/link";

const TopTechnology = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  return (
    <Box sx={{ width: "80%", margin: "40px auto 0 auto" }}>
      {/* <Typography
        variant="h4"
        sx={{ fontWeight: "bold", paddingBottom: "50px" }}
      >
        Ongoing Trending Technologies
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
        ONGOING TRENDING TECHNOLOGIES
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Link href="/blog" passHref>
            <Card sx={{ minHeight: isLaptop ? "340px" : "300px" }}>
              <CardHeader
                avatar={
                  <Image src={JS} alt="JavaScript" width={50} height={50} />
                }
              />
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#003030" }}
                >
                  JavaScript
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: isLaptop ? "12px" : "14px",
                    textAlign: "justify",
                  }}
                >
                  JavaScript, often abbreviated JS, is a programming language
                  that is one of the core technologies of the World Wide Web,
                  alongside HTML and CSS. Over 97% of websites use JavaScript on
                  the client side for web page behavior, often incorporating
                  third-party libraries.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Link href="/blog" passHref>
            <Card sx={{ minHeight: isLaptop ? "340px" : "300px" }}>
              <CardHeader
                avatar={
                  <Image src={TS} alt="TypeScript" width={50} height={50} />
                }
              />
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#003030" }}
                >
                  TypeScript
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: isLaptop ? "12px" : "14px",
                    textAlign: "justify",
                  }}
                >
                  TypeScript is a programming language developed and maintained
                  by Microsoft. It is a strict syntactical superset of
                  JavaScript and adds optional static typing to the language. It
                  is designed for the development of large applications and
                  transpiles to JavaScript.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Link href="/blog" passHref>
            <Card sx={{ minHeight: isLaptop ? "340px" : "300px" }}>
              <CardHeader
                avatar={<Image src={VUE} alt="Vue.JS" width={50} height={50} />}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#003030" }}
                >
                  Vue.JS
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: isLaptop ? "12px" : "14px",
                    textAlign: "justify",
                  }}
                >
                  Vue.js is an open-source model–view–viewmodel front end
                  JavaScript framework for building user interfaces and
                  single-page applications. It was created by Evan You, and is
                  maintained by him and the rest of the active core team
                  members.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Link href="/blog" passHref>
            <Card sx={{ minHeight: isLaptop ? "340px" : "300px" }}>
              <CardHeader
                avatar={
                  <Image src={NODE} alt="Node.Js" width={70} height={50} />
                }
              />
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#003030" }}
                >
                  Node.JS
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: isLaptop ? "12px" : "14px",
                    textAlign: "justify",
                  }}
                >
                  Node.js is an open-source, cross-platform, back-end JavaScript
                  runtime environment that runs on the V8 engine and executes
                  JavaScript code outside a web browser.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopTechnology;
