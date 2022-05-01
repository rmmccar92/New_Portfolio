import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MuiNextLink from "./MuiNextLink";

const drawerWidth = 280;

function SideBar({ navLinks }) {
  const drawer = (
    <div className="sideBar">
      <Toolbar border="none" />
      <List>
        {navLinks.map(({ title, path, onClick }, index) => (
          <ListItem key={index}>
            <Box
              className="link-box"
              // sx={{
              //   backgroundColor: `rgba(192, 192, 192, 0.3)`,
              //   backdropFilter: `blur(5px)`,
              //   margin: `0.5em`,
              //   width: `100%`,
              //   textAlign: `center`,
              //   borderTopRightRadius: `40px`,
              //   borderBottomRightRadius: `40px`,
              // }}
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
