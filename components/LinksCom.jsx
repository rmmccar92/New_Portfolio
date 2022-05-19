import { Canvas } from "@react-three/fiber";
import Material from "./Material";
import style from "../styles/Popout.module.css";

const LinksCom = (props) => {
  return (
    <div className={style.popOut}>
      <Canvas className={style.popOutCanvas}>
        <Material />
      </Canvas>
      <div className={style.gridText}>
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
