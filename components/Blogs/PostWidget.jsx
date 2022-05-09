import { Avatar, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "../../ServicesQl";
import moment from "moment";
import Link from "next/link";

const PostWidget = ({ categories, slug, isMobile }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result),
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug, categories]);

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
          fontSize: isMobile ? "18px" : "24px",
        }}
      >
        {slug ? "RelatedPosts" : "Recent Posts"}
      </Typography>
      {relatedPosts.map((post, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "15px",
          }}
        >
          <Link passHref href={`/blog/${post.slug}`} key={post.title}>
            <Avatar
              alt={post.title}
              src={post.featuredimage.url}
              sx={{
                width: isMobile ? 44 : 56,
                height: isMobile ? 44 : 56,
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
            <Link passHref href={`/blog/${post.slug}`} key={post.title}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffe6",
                  margin: "0px 10px",
                  cursor: "pointer",
                  fontSize: isMobile ? "16px" : "20px",
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
                fontSize: isMobile ? "14px" : "16px",
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
