import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Author = ({ author }) => {
  console.log("🚀 ~ file: Author.jsx ~ line 6 ~ Author ~ author", author);
  return (
    <Box
      sx={{
        width: "60%",
        backgroundColor: "#003030",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "60px auto 0px auto",
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
        }}
      >
        {author.bio}
      </Typography>
    </Box>
  );
};

export default Author;
