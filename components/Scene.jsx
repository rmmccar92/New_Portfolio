import React, { useState, useRef, useEffect, Suspense } from "react";
import Box from "./Box";
import Sphere from "./Sphere";
import Controls from "./OrbitControls";
import FakeSphere from "./FakeSphere";
import { MathUtils } from "three";
import Skybox from "./Skybox";
import Block from "./Block";
import Material from "./Material";

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
          position={[
            MathUtils.randFloatSpread(125),
            MathUtils.randFloatSpread(125),
            MathUtils.randFloatSpread(125),
          ]}
        />
      ))}

      <spotLight position={[0, 5, 10]} penumbra={1} />
      {/* <Block />
      <Material /> */}
      <Sphere position={[0, 5, 0]} />
      <Skybox />
      <Controls />
    </>
  );
};

export default Scene;
