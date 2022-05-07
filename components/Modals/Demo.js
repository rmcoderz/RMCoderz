import { HomeMaxOutlined } from "@mui/icons-material";
import { Box, Grid, List, ListItemIcon } from "@mui/material";
import React from "react";
import Home from "../../pages";

const Demo = () => {
  return (
    <Box>
      <Box>
        <Grid>
          <List>
            <ListItemIcon>
              <HomeMaxOutlined color="primary" />
            </ListItemIcon>
          </List>
        </Grid>
      </Box>
    </Box>
  );
};

export default Demo;
