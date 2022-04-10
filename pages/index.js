// index.jsx
import css from "../styles/Home.module.css";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Scene from "../components/Scene";
import Skybox from "../components/Skybox";
import SideBar from "../components/SideBar";

// TODO: Add a loading screen
// TODO: investigate sketchfab
// TODO: add a 3d model
// TODO: finalize the design
// TODO: add sidebar

const Home = () => {
  return (
    <>
      <div className={css.scene}>
        <Canvas
          shadows={true}
          className={css.canvas}
          // camera={{
          //   position: [0, 18, 10],
          //   fov: 45,
          //   near: 0.1,
          //   far: 1000,
          // }}
        >
          <Scene />
        </Canvas>
      </div>
      {/* <SideBar /> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
