import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Author = ({ author, isMobile }) => {
  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "60%",
        backgroundColor: "#003030",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "60px auto 0px auto",
        borderRadius: "15px 15px 0px 0px",
      }}
    >
      <Box>
        <Avatar
          src={author.photo.url}
          alt={author.name}
          sx={{
            width: 112,
            height: 112,
            top: "-50px",
            border: "2px solid #fff",
          }}
        />
      </Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#ffffe6",
          margin: "0px 10px",
          cursor: "pointer",
          fontSize: isMobile ? "16px" : "24px",
        }}
      >
        {author.name}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#ffffe6",
          margin: "0px 10px",
          cursor: "pointer",
          fontSize: isMobile ? "16px" : "24px",
        }}
      >
        {author.bio}
      </Typography>
    </Box>
  );
};

export default Author;
