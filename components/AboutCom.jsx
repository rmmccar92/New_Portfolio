import { Canvas } from "@react-three/fiber";
import Material from "./Material";
import style from "../styles/Popout.module.css";
const AboutCom = () => {
  return (
    <>
      <div className={style.popOut}>
        <Canvas className={style.popOutCanvas}>
          <Material />
        </Canvas>
        <div className={style.gridText}>
          <h1>About Com</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            at commodi nulla ducimus nemo eveniet sequi veniam enim provident
            earum, atque inventore soluta doloribus molestiae neque dicta
            aspernatur quidem. Aut!{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutCom;
