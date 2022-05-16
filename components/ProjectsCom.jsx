import { Canvas } from "@react-three/fiber";
import Material from "./Material";
import style from "../styles/Popout.module.css";
import data from "../data/projects.js";
import Image from "next/image";

const ProjectsCom = () => {
  return (
    <div className="popOut projects">
      <Canvas className={style.aboutCanvas}>
        <Material />
      </Canvas>
      <div className={style.aboutText}>
        {data.projects.map((project) => {
          return (
            <>
              <h1 key={project.title}>{project.title}</h1>
              <p>{project.description}</p>
              <Image
                src={project.image}
                alt={project.title}
                width={40}
                height={40}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsCom;
