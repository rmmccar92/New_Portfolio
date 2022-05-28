import { Canvas } from "@react-three/fiber";
import Material from "./Material";
import style from "../styles/Popout.module.css";
import Popout from "./Popout";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Typography } from "@mui/material";

const LinksCom = (props) => {
  return (
    <Popout>
      <Canvas className={style.popOutCanvas}>
        <Material />
      </Canvas>
      <Box
        className={style.gridText}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "12em",
        }}
      >
        <Typography variant="h1" component="h1">
          Links
        </Typography>
        <ul>
          <li>
            <a
              href="https://github.com/rmmccar92"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon style={{ fontSize: "5em" }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ryan-mccarthy-20950291/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon style={{ fontSize: "5em" }} />
            </a>
          </li>
          <li>
            <a href="mailto:rmmccar92@gmail.com">
              <MailOutlineIcon style={{ fontSize: "5em" }} />
            </a>
          </li>
        </ul>
      </Box>
    </Popout>
  );
};

export default LinksCom;
