// index.jsx
import css from "../styles/Home.module.css";
import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Scene from "../components/Scene";

const Home = () => {
  const camera = useRef();

  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [0, 18, 10],
          fov: 45,
          near: 0.1,
          far: 1000,
          ref: camera,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
