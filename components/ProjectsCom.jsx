import { Canvas } from "@react-three/fiber";
import { Container, Box, Typography } from "@mui/material";
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
        infiniteLoop
        autoPlay
        emulateTouch
        interval={5000}
        preventMovementUntilSwipeScrollTolerance
        showThumbs={false}
        className={style.carousel}
      >
        {data.projects.map((project, index) => {
          return (
            <div key={index}>
              <div className={style.aboutCarousel}>
                <div className={style.aboutCarouselImg}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={300}
                    objectFit="cover"
                  />
                </div>
                <div className={style.aboutCarouselText}>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography variant="body1">{project.description}</Typography>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProjectsCom;
