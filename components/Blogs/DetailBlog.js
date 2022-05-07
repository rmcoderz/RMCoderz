import React from "react";
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import PostDetails from "./PostDetails";
import Author from "./Author";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";
import PostWidget from "./PostWidget";
import Categories from "./Categories";

const postDetails = ({ blog }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "80%", margin: "40px auto" }}>
      <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={8}
          sx={{
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <PostDetails blog={blog} isMobile={isMobile} />
          <Author author={blog.author} />
          {/* <AdjacentPosts slug={blog.slug} createdAt={blog.createdAt} /> */}
          <CommentsForm slug={blog.slug} />
          <Comments slug={blog.slug} />
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Box
            sx={{
              top: isDesktop ? "96px" : "none",
              position: isDesktop ? "sticky" : "none",
            }}
          >
            <PostWidget
              slug={blog.slug}
              categories={blog.categories.map((category) => category.slug)}
            />
            <Categories />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default postDetails;
