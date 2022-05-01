import React, { useContext, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MuiNextLink from "./MuiNextLink";
import Router from "next/router";

const drawerWidth = 280;

function SideBar({ navLinks }) {
  // const { window } = navLinks;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="sideBar">
      <Toolbar border="none" />
      <List>
        {navLinks.map(({ title, path, onClick }, index) => (
          <ListItem key={index}>
            {/* <ListItemIcon>
              {index % 2 === 0 ? (
                <InboxIcon className="evenIcons" color="evenIcons" />
              ) : (
                <MailIcon className="oddIcons" color="oddIcons" />
              )}
            </ListItemIcon> */}

            <Box
              sx={{
                backgroundColor: `rgba(192, 192, 192, 0.3)`,
                backdropFilter: `blur(5px)`,
                margin: `0.5em`,
                width: `100%`,
                textAlign: `center`,
                borderRadius: `10px/50%`,
              }}
            >
              <ListItemText>
                <MuiNextLink href={path} color="#ffffff">
                  {title}
                </MuiNextLink>
              </ListItemText>
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    // <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "transparent",
            border: "none",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default SideBar;
