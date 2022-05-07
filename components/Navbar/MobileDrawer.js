import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";

import ListRoundedIcon from "@mui/icons-material/ListRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <React.Fragment>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="right">
        <List>
          <ListItemButton onClick={() => router.push("/")}>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => router.push("/about")}>
            <ListItemIcon>
              <PersonRoundedIcon />
            </ListItemIcon>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => router.push("/service")}>
            <ListItemIcon>
              <DesignServicesRoundedIcon />
            </ListItemIcon>
            <ListItemText>Services</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => router.push("/blog")}>
            <ListItemIcon>
              <BookRoundedIcon />
            </ListItemIcon>
            <ListItemText>Blog</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => router.push("/contact_us")}>
            <ListItemIcon>
              <ConnectWithoutContactRoundedIcon />
            </ListItemIcon>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#008080", marginLeft: "auto" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ListRoundedIcon color="#008080" />
      </IconButton>
    </React.Fragment>
  );
};

export default MobileDrawer;
