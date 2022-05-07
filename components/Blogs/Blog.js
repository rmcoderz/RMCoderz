import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Categories from "./Categories";
import PostCard from "./PostCard";
import PostWidget from "./PostWidget";
export default function Blog({ posts }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Box
            sx={{
              top: isDesktop ? "96px" : "none",
              position: isDesktop ? "sticky" : "none",
            }}
          >
            <PostWidget />
            <Categories />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
