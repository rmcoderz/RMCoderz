import { Avatar, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "../../ServicesQl";
import moment from "moment";
import Link from "next/link";

const PostWidget = ({ categories, slug }) => {
  console.log("🚀 ~ file: PostWidget.jsx ~ line 8 ~ PostWidget ~ slug", slug);
  console.log(
    "🚀 ~ file: PostWidget.jsx ~ line 8 ~ PostWidget ~ categories",
    categories,
  );
  const [relatedPosts, setRelatedPosts] = useState([]);
  console.log(
    "🚀 ~ file: PostWidget.jsx ~ line 8 ~ PostWidget ~ relatedPosts",
    relatedPosts,
  );

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result),
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <Box
      sx={{
        backgroundColor: "#003030",
        padding: "20px",
        margin: "0px 0px 10px 0px",
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#ffffe6",
          margin: "0px 10px",
          borderBottom: "2px solid #ffffe6",
          paddingBottom: "10px",
        }}
      >
        {slug ? "RelatedPosts" : "Recent Posts"}
      </Typography>
      {relatedPosts.map((post) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "15px",
          }}
        >
          <Link passhref href={`/blog/${post.slug}`} key={post.title}>
            <Avatar
              alt={post.title}
              src={post.featuredimage.url}
              sx={{
                width: 56,
                height: 56,
                border: "2px solid #e6e6e6",
                boxShadow: "0px 0px 10px #888888",
                cursor: "pointer",
              }}
            />
          </Link>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Link passhref href={`/blog/${post.slug}`} key={post.title}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffe6",
                  margin: "0px 10px",
                  cursor: "pointer",
                }}
              >
                {post.title}
              </Typography>
            </Link>
            <Typography
              variant="h5"
              sx={{
                color: "#ffffe6",
                margin: "0px 10px",
                fontSize: "16px",
              }}
            >
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PostWidget;
