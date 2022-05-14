import { Canvas } from "@react-three/fiber";
import Material from "./Material";
import style from "../styles/Popout.module.css";
const AboutCom = () => {
  return (
    <>
      <div className="popOut about-com">
        <Canvas className={style.aboutCanvas}>
          <Material />
        </Canvas>
        <div className={style.aboutText}>
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
