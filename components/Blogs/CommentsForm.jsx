import {
  Box,
  Grid,
  TextField,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { submitComment } from "../../ServicesQl";

const CommentsForm = ({ slug }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
    phone: null,
    storeData: false,
  });

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const CommentSubmite = () => {
    setError(false);

    const { name, email, comment, storeData, phone } = formData;

    if (!comment || !name || !email || !phone) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, phone, slug };
    console.log(
      "🚀 ~ file: CommentsForm.jsx ~ line 46 ~ CommentSubmite ~ commentObj",
      commentObj,
    );

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
    } else {
      localStorage.removeItem("name", name);
      localStorage.removeItem("email", email);
      localStorage.removeItem("phone", phone);
    }

    submitComment(commentObj).then(() => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <Box
      sx={{
        width: "60%",
        margin: "auto",
        backgroundColor: "#ffffe6",
        padding: "20px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bolder",
          padding: "20px 0px 20px 0px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: isMobile ? "30px" : "40px",
          color: "#003030",
        }}
      >
        Leave Comment
      </Typography>
      <form onSubmit={CommentSubmite}>
        <Grid item xs={12} sm={12} md={12}>
          <Grid item xs={12} sm={12} md={12}>
            <FormTextField
              required
              id="filled-required"
              label="Name"
              name="name"
              defaultValue=""
              variant="filled"
              fullWidth={true}
              // onChange={(e) => {
              //   setFirstName(e.target.value);
              // }}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <FormTextField
              required
              id="filled-required"
              label="Email"
              name="email"
              defaultValue=""
              fullWidth={true}
              variant="filled"
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <FormTextField
              required
              id="filled-required"
              label="Phone Number"
              name="phone"
              defaultValue=""
              variant="filled"
              fullWidth={true}
              // onChange={(e) => {
              //   setPhone(e.target.value);
              // }}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <FormTextField
              multiline
              required
              rows={4}
              id="filled-required"
              label="Comment"
              name="comment"
              defaultValue=""
              variant="filled"
              fullWidth={true}
              underlined="false"
              // onChange={(e) => {
              //   setSubject(e.target.value);
              // }}
              onChange={onInputChange}
            />
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12}>
            <Checkbox
              id="storeData"
              name="storeData"
              value="true"
              onChange={onInputChange}
            />
            <Typography>Store my data for future comment</Typography>
          </Grid> */}
          {error && (
            <Typography variant="h6" sx={{ color: "red" }}>
              Please fill all fields to submite Comment.
            </Typography>
          )}
          <DetailServicesButton
            variant="outlined"
            fullWidth={true}
            onClick={CommentSubmite}
          >
            Post Comment
          </DetailServicesButton>
          {showSuccessMessage && (
            <Typography variant="h6" sx={{ color: "#003030" }}>
              Your Comment Posted SuccessFully! Now it's under review...
            </Typography>
          )}
        </Grid>
      </form>
    </Box>
  );
};

export default CommentsForm;

const FormTextField = styled(TextField)({
  boxShadow: "5px 5px 5px #000030",
  textTransform: "none",
  fontSize: 26,
  margin: "10px auto",
  //   padding: "6px 20px",
  //   border: "1px solid",
  //   lineHeight: 1.5,
  color: "#000030",
  backgroundColor: "#ffffe6",
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
