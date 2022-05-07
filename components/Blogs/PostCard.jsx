import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import moment from "moment";

const PostCard = ({ post }) => {
  const router = useRouter();
  console.log("🚀 ~ file: PostCard.jsx ~ line 4 ~ PostCard ~ post", post);
  return (
    <Box sx={{ margin: "0px 0px 20px 0px" }}>
      <Card>
        <CardMedia
          image={post.featuredimage.url}
          sx={{
            width: "500px",
            height: "500px",
            objectFit: "cover",
            margin: "10px auto",
          }}
        />
        <CardContent sx={{ padding: "20px 20px", backgroundColor: "#ffffe6" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt={post.author.name}
              src={post.author.photo.url}
              sx={{
                width: 56,
                height: 56,
                border: "2px solid #e6e6e6",
                boxShadow: "0px 0px 20px #888888",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#003030",
                  margin: "0px 10px",
                }}
              >
                {post.author.name}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#003030",
                  margin: "0px 10px",
                  fontSize: "16px",
                }}
              >
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px auto",
              width: "60%",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontSize: "24px", textAlign: "center" }}
            >
              {post.excert}
            </Typography>
            <HeroButton
              variant="outlined"
              onClick={() => router.push(`/blog/${post.slug}`)}
            >
              Read More
            </HeroButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostCard;

const HeroButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 26,
  margin: "25px auto",
  padding: "6px 20px",
  border: "1px solid",
  borderRadius: "50px",
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
