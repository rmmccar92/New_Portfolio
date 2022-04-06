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

const Scene = () => {
  return (
    <>
      <ambientLight color="white" intensity={0.3} />
      <fog attach="fog" args={["black", 0, 140]} />

      <Suspense fallback={null}>
        <spotLight position={[0, 5, 10]} penumbra={1} />
        <Box />
      </Suspense>
      {/* <Plane position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}
      <Suspense fallback={null}>
        <Sphere position={[0, 5, 0]} />
      </Suspense>
      <Controls />
      <Floor position={[0, 0, -100]} rotation={[Math.PI / 2, 0, 0]} />
      <Floor position={[0, 0, 60]} rotation={[Math.PI / 2, 0, 0]} />
      <Floor position={[80, 0, -20]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
      <Floor
        position={[-80, 0, -20]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <Floor position={[0, -80, -20]} rotation={[0, 0, 0]} />
      <Floor position={[0, 80, -20]} rotation={[0, 0, 0]} />
    </>
  );
};

export default Scene;
