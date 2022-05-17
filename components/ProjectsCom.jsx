import { Canvas } from "@react-three/fiber";
import { Container, Box } from "@mui/material";
import Material from "./Material";
import style from "../styles/Popout.module.css";
import data from "../data/projects.js";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

const ProjectsCom = () => {
  return (
    <div className="popOut projects">
      <Canvas className={style.aboutCanvas}>
        <Material />
      </Canvas>
      <div className={style.aboutText}>
        <Container>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            effect={("fade", { fadeEffect: { crossFade: true } })}
            loop={true}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
          >
            {data.projects.map((project) => {
              return (
                <SwiperSlide
                  key={project.title}
                  style={{ width: "25em", height: "25em" }}
                >
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <Box
                    position="relative"
                    sx={{ width: "40%", height: "100%", bottom: "10em" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default ProjectsCom;
