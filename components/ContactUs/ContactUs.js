import {
  Box,
  Grid,
  TextField,
  Typography,
  styled,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import HeroImage from "../../assets/images/Hero.png";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const form = useRef();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [subject, setSubject] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "template_qmy7aul", form.current, "vrEiMbCijRIzhV5Wg")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "500px",
        padding: "30px 0px",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} lg={6}>
          <Image src={HeroImage} alt="Hero Image" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
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
              {`<ContactForm>`}
            </Typography>
            <form ref={form} onSubmit={handleSubmit}>
              <Grid item xs={12} sm={12} md={12}>
                <FormTextField
                  required
                  id="filled-required"
                  label="First Name"
                  name="First_Name"
                  defaultValue=""
                  variant="filled"
                  sx={{ width: isMobile ? "100%" : "49%", marginRight: "2%" }}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <FormTextField
                  required
                  id="filled-required"
                  label="Last Name"
                  name="Last_Name"
                  defaultValue=""
                  variant="filled"
                  sx={{ width: isMobile ? "100%" : "49%" }}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormTextField
                  required
                  id="filled-required"
                  label="Email"
                  name="Email"
                  defaultValue=""
                  fullWidth={true}
                  variant="filled"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormTextField
                  required
                  id="filled-required"
                  label="Phone Number"
                  name="Phone_Number"
                  defaultValue=""
                  variant="filled"
                  fullWidth={true}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormTextField
                  multiline
                  required
                  rows={4}
                  id="filled-required"
                  label="Subject"
                  name="Subject"
                  defaultValue=""
                  variant="filled"
                  fullWidth={true}
                  underlined="false"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </Grid>
              <DetailServicesButton
                variant="outlined"
                fullWidth={true}
                type="submit"
              >
                Send Email
              </DetailServicesButton>
            </form>
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
              {`</ContactForm>`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;

const DetailServicesButton = styled(Button)({
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

const FormTextField = styled(TextField)({
  boxShadow: "5px 5px 5px #000030",
  textTransform: "none",
  fontSize: 26,
  margin: "10px auto",
  //   padding: "6px 20px",
  //   border: "1px solid",
  //   lineHeight: 1.5,
  color: "#000030",
  backgroundColor: "#e6e6e6",
  borderRadius: "5px",
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
    borderColor: "#008080",
    color: "#000030",
    boxShadow: "-5px -5px 5px #000030",
  },
  "&:active": {
    boxShadow: "-5px -5px 5px #000030",
    borderColor: "#008080",
    color: "#000030",
  },
});
