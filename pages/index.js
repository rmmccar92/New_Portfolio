// index.jsx
import css from "../styles/Home.module.css";
import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Floor from "../components/Floor";
import Box from "../components/Box";
import LightBulb from "../components/LightBulb";
import { OrbitControls } from "@react-three/drei";
import Draggable from "../components/Draggable";
import { Suspense } from "react";
import Sphere from "../components/Sphere";
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color="white" intensity={1} />
        {/* <LightBulb position={[0, 10, 0]} /> */}
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
      </Canvas>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
