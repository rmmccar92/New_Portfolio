import { Box, Container } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MuiNextLink from "./MuiNextLink";

const drawerWidth = 280;

function SideBar({ navLinks, handleClick, currentComponent }) {
  const drawer = (
    <Container
      sx={{
        backgroundColor: `rgba(7, 7, 7, 0.726)`,
        backdropFilter: `blur(5px)`,
        overflow: `hidden`,
        height: { xs: "20vh", md: "100vh" },
        width: { xs: "100%", md: drawerWidth },
      }}
    >
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "row", md: "column" },
          height: { xs: "25vh", md: "100vh" },
        }}
      >
        {navLinks.map(({ title, path, onClick }, index) => (
          <ListItem
            key={index}
            sx={{
              // border: `rgba(192, 192, 192, 0.045) 1px solid`,
              padding: `0.5em 0 0.5em 0`,
              transition: "transform .25s,",
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
                transform: { xs: "rotate(280deg)", md: "rotate(0deg)" },
                width: `100%`,
                textAlign: `center`,
                transition:
                  "transform .5s, color .25s, background-color .25s, border-top-right-radius .5s ease-in-out, border-bottom-right-radius .5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                  backgroundColor: `#00cd94`,
                  borderTopRightRadius: `0.75em`,
                  borderBottomRightRadius: `0.75em`,
                },
              }}
            >
              <ListItemText>
                <MuiNextLink
                  onClick={() => handleClick(title)}
                  href=""
                  color="#ffffff"
                  className={
                    currentComponent === title ? "active" : "not-active"
                  }
                >
                  {title}
                </MuiNextLink>
              </ListItemText>
            </Box>
          </ListItem>
        ))}
      </List>
    </Container>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          // display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            top: { xs: "80%", md: "0" },
            width: { xs: "100%", md: drawerWidth },
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
