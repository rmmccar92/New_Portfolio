import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MuiNextLink from "./MuiNextLink";
// import styles from "../styles/SideBar.module.css";

const drawerWidth = 280;

function SideBar({ navLinks }) {
  const drawer = (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        {navLinks.map(({ title, path, onClick }, index) => (
          <ListItem
            key={index}
            sx={{
              // border: `rgba(192, 192, 192, 0.045) 1px solid`,
              padding: `0.5em 0 0.5em 0`,
              transition: "transform .5s, position .5s, height .5s ease-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
              "&:after": {
                content: `''`,
                // display: "inline-block",
                margin: 0,
                padding: 0,
                borderTop: "1em solid transparent",
                borderBottom: "1em solid transparent",
                borderLeft: "1em solid rgba(159, 158, 167, 0.451)",
                // filter: "blur(0.35px)",
              },
              "&:before": {
                content: `''`,
                // display: "inline-block",
                borderTop: "1em solid transparent",
                borderBottom: "1em solid transparent",
                borderRight: "1em solid rgba(159, 158, 167, 0.451)",
                // filter: "blur(0.4px)",
              },
              "&:hover:before": {
                display: "none",
              },
              "&:hover:after": {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                borderRight: "2px solid rgba(159, 158, 167, 0.051)",
                borderLeft: "2px solid rgba(159, 158, 167, 0.051)",
                backgroundColor: `rgba(192, 192, 192, 0.3)`,
                backdropFilter: `blur(5px)`,
                margin: `0.5em 0 0.5em 0`,
                padding: `0`,
                width: `100%`,
                textAlign: `center`,
                transition:
                  "transform .5s, position .5s, height .5s ease-out, background-color .75s ease-in",
                "&:hover": {
                  transform: "scale(1.1)",
                  backgroundColor: `rgba(192, 192, 192, 1)`,
                },
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
