import { Canvas } from "@react-three/fiber";
import Material from "./Material";
import style from "../styles/Popout.module.css";

const LinksCom = (props) => {
  return (
    <div className="popOut links">
      <Canvas className={style.aboutCanvas}>
        <Material />
      </Canvas>
      <div className={style.aboutText}>
        <h1>Links</h1>
        <ol>
          <li>
            <a href="#"> Lorem.</a>
          </li>
          <li>
            <a href="#"> Lorem.</a>
          </li>
          <li>
            <a href="#"> Lorem.</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default LinksCom;
