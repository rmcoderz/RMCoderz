import { Box, Card, Typography, CardContent, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getComments } from "../../ServicesQl";
import moment from "moment";

const Comments = ({ slug, isMobile }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getComments(slug).then((comment) => setComment(comment));
  });

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "60%",
        margin: "auto",
        backgroundColor: "#003030",
        padding: "20px",
        borderRadius: "0px 0px 15px 15px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bolder",
          padding: "20px 0px 20px 0px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: isMobile ? "30px" : "60px",
          color: "#ffffe6",
        }}
      >
        {comment.length} comments
      </Typography>
      {comment.map((comment, index) => (
        <CommentCard key={index}>
          <CardContent>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bolder",
                padding: "20px 0px 0px 0px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "16px" : "26px",
                // color: "#ffffe6",
              }}
            >
              {comment.name.toUpperCase()}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bolder",
                // padding: "20px 0px 20px 0px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "16px" : "26px",
                // color: "#ffffe6",
              }}
            >
              on {moment(comment.createdAt).format("MMM DD, YYYY")}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bolder",
                padding: "20px 0px 20px 0px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "16px" : "26px",
              }}
            >
              Comment : {comment.comment}
            </Typography>
          </CardContent>
        </CommentCard>
      ))}
    </Box>
  );
};

export default Comments;

const CommentCard = styled(Card)({
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
    borderColor: "#008080",
    color: "#003030",
    boxShadow: "10px 10px #008080",
  },
  "&:active": {
    boxShadow: "10px 10px #003030",
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
  },
});
