import { Canvas } from "@react-three/fiber";
import { Box, Container, Typography } from "@mui/material";
import Material from "./Material";
import style from "../styles/Popout.module.css";
import data from "../data/projects.js";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectsCom = () => {
  return (
    <div className="popOut projects">
      <Canvas className={style.aboutCanvas}>
        <Material />
      </Canvas>
      <Carousel
        ariaLabel="Projects"
        infiniteLoop
        emulateTouch
        autoFocus
        interval={5000}
        showThumbs={false}
        className={style.carousel}
        showStatus={false}
        showArrows
        showIndicators={false}
        useKeyboardArrows
      >
        {data.projects.map((project, index) => {
          return (
            <Container key={index}>
              <Box className={style.carouselInner}>
                <Box className={style.carouselImg}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="responsive"
                    width={100}
                    height={100}
                    objectFit="contain"
                  />
                </Box>
                <Container className={style.carouselText}>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography variant="body1">{project.description}</Typography>
                </Container>
              </Box>
            </Container>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProjectsCom;
