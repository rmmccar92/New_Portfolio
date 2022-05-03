import React, { useState, useRef, useEffect, Suspense } from "react";
import Box from "./Box";
// import Draggable from "../components/Draggable";
import Sphere from "./Sphere";
import Controls from "./OrbitControls";
import FakeSphere from "./FakeSphere";
import { MathUtils } from "three";
import Skybox from "./Skybox";

const Scene = () => {
  const NUM = 100;
  const spheres = new Array(NUM).fill();
  // const [x, y, z] = Array(3)
  //   .fill()
  //   .map(() => MathUtils.randFloatSpread(100));
  return (
    <>
      <ambientLight color="white" intensity={0.3} />
      <fog attach="fog" args={["black", 0, 140]} />
      {spheres.map((_, i) => (
        <FakeSphere
          key={i}
          color={"white"}
          position={[
            MathUtils.randFloatSpread(125),
            MathUtils.randFloatSpread(125),
            MathUtils.randFloatSpread(125),
          ]}
        />
      ))}

      <spotLight position={[0, 5, 10]} penumbra={1} />
      <Box />
      {/* <Plane position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}
      <Sphere position={[0, 5, 0]} />
      <Skybox />
      <Controls />
      {/* <Floor position={[0, 0, -100]} rotation={[Math.PI / 2, 0, 0]} />
      <Floor position={[0, 0, 60]} rotation={[Math.PI / 2, 0, 0]} />
      <Floor position={[80, 0, -20]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
      <Floor
        position={[-80, 0, -20]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <Floor position={[0, -80, -20]} rotation={[0, 0, 0]} />
      <Floor position={[0, 80, -20]} rotation={[0, 0, 0]} /> */}
    </>
  );
};

export default Scene;
