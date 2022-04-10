import React, { useState, useRef, useEffect } from "react";
import Floor from "./Floor";
import Box from "./Box";
// import { useHelper } from "@react-three/drei";
// import Draggable from "../components/Draggable";
import { Suspense } from "react";
import Sphere from "./Sphere";
// import { GridHelper } from "three";
import Controls from "./OrbitControls";
import Plane from "./Plane";
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
      {/* <fog attach="fog" args={["black", 0, 140]} /> */}
      <Suspense fallback={null}>
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
      </Suspense>
      <Suspense fallback={null}>
        <spotLight position={[0, 5, 10]} penumbra={1} />
        <Box />
      </Suspense>
      {/* <Plane position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}
      <Suspense fallback={null}>
        <Sphere position={[0, 5, 0]} />
      </Suspense>
      <Suspense fallback={null}>
        <Skybox />
      </Suspense>
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
