import Sphere from "./Sphere";
import Controls from "./OrbitControls";
import FakeSphere from "./FakeSphere";
import { MathUtils } from "three";
import Skybox from "./Skybox";

const randX = () => MathUtils.randFloatSpread(225);
const randY = () => MathUtils.randFloatSpread(225);
const randZ = () => MathUtils.randFloatSpread(225);

const Scene = () => {
  const NUM = 100;
  const spheres = new Array(NUM).fill();
  return (
    <>
      <ambientLight color="white" intensity={0.3} />
      <fog attach="fog" args={["black", 0, 140]} />
      {spheres.map((_, i) => (
        <FakeSphere
          key={i}
          color={"white"}
          position={[randX(), randY(), randZ()]}
        />
      ))}

      <spotLight position={[0, 5, 10]} penumbra={1} />
      <Sphere position={[0, 5, 0]} />
      <Skybox />
      <Controls />
    </>
  );
};

export default Scene;
