import React, { useState, useRef, useEffect } from "react";
import Floor from "../components/Floor";
import Box from "../components/Box";
import LightBulb from "../components/LightBulb";
import { OrbitControls, useHelper } from "@react-three/drei";
import Draggable from "../components/Draggable";
import { Suspense } from "react";
import Sphere from "../components/Sphere";
import { GridHelper } from "three";

const Scene = () => {
  return (
    <>
      <ambientLight color="#D9DFFF" intensity={1} />
      {/* <LightBulb position={[5, 10, 5]} /> */}
      {/* <Draggable> */}
      <Suspense fallback={null}>
        <Box position={[0, 1, 0]} />
      </Suspense>
      <Suspense fallback={null}>
        <Sphere position={[0, 5, 0]} />
      </Suspense>
      {/* </Draggable> */}
      <OrbitControls />
      <Floor position={[0, -1, 0]} />
    </>
  );
};

export default Scene;
