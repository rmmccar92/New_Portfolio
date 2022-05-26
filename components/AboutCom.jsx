import { Canvas } from "@react-three/fiber";
import Material from "./Material";
import style from "../styles/Popout.module.css";
import Popout from "./Popout";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import headPhoto from "../public/images/me.jpg";
const AboutCom = () => {
  return (
    <Popout>
      <Canvas className={style.popOutCanvas}>
        <Material />
      </Canvas>
      <Box
        className={style.gridText}
        sx={{
          m: "1em",
        }}
      >
        <Typography variant="h2" component="h2">
          About Me
        </Typography>
        <Typography component="p" variant="p" sx={{ fontSize: "1.25em" }}>
          Welcome to my Portfolio. I have always found myself drawn to the
          ability to create. Whether that&apos;s a digital or physical project
          there&apos;s a certain amount of craftsmanship that can be
          appreciated. So naturally I found myself drawn to web development.I
          have been working as an A/V technician and part time video editor for
          the last three years and while I still enjoy video editing I am
          excited to see what new feats I can accomplish within the web
          development environment.
        </Typography>
        <Container
          sx={{
            border: "2px solid blue",
            width: "14em",
            height: "18em",
            borderRadius: "80%",
            position: "relative",
            mt: "1em",
          }}
        >
          <Image
            src={headPhoto}
            alt="Ryan McCarthy"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            style={{ borderRadius: "80%" }}
          />
        </Container>
        <Container>
          <Typography variant="h4" component="h4" textAlign="center" m="0.5em">
            Technologies:
          </Typography>
          <Container>{/* TODO: Technology carousel */}</Container>
        </Container>
      </Box>
    </Popout>
  );
};

export default AboutCom;
