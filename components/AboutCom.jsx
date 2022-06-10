import { Canvas } from "@react-three/fiber";
import Material from "./Material";
import style from "../styles/Popout.module.css";
import Popout from "./Popout";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import headPhoto from "../public/images/me.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../data/technologies.js";

const AboutCom = () => {
  return (
    <Popout>
      <Canvas className={style.popOutCanvas}>
        <Material />
      </Canvas>
      <Box
        className={style.aboutText}
        sx={{
          m: "1em",
          position: "relative",
        }}
      >
        <Typography variant="h2" component="h2">
          About Me
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{ fontSize: { xs: ".85em", md: "1em", lg: "1.25em" } }}
        >
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
            border: "1.75px solid #00cd94",
            width: { xs: "7em", lg: "15em" },
            height: { xs: "9em", lg: "20em" },
            borderRadius: "80%",
            position: "relative",
            mt: "1em",
            boxShadow: "2px -1px 10px #00cd94",
          }}
        >
          <Image
            src={headPhoto}
            alt="Ryan McCarthy"
            layout="fill"
            objectFit="cover"
            objectPosition="top 3px right 20px"
            style={{ borderRadius: "80%", backgroundColor: "#68655C" }}
          />
        </Container>
        <Container>
          <Typography variant="h4" component="h4" textAlign="center" m="0.5em">
            Technologies:
          </Typography>
          <Container
            sx={{
              backgroundColor: "rgba(0, 205, 148, 0.4)",
              borderRadius: "16px",
              border: "3px solid black",
              padding: "1em",
              height: { xs: "15%", md: "25%" },
              justifyContent: "center",
            }}
          >
            <Carousel
              ariaLabel="Technologies"
              infiniteLoop
              autoPlay
              interval={2000}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              showThumbs={false}
              centerMode
              dynamicHeight
              centerSlidePercentage={30}
              padding="1em"
            >
              {data.images.map((image, index) => {
                return (
                  <Box key={index} position="relative" width="5em" height="5em">
                    <Image
                      src={image.url}
                      alt={image.name}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      key={index}
                    />
                  </Box>
                );
              })}
            </Carousel>
          </Container>
        </Container>
      </Box>
    </Popout>
  );
};

export default AboutCom;
