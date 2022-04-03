// index.jsx
import css from "../styles/Home.module.css";
import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Scene from "../components/Scene";

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
        <Scene />
      </Canvas>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
