// index.jsx
import css from "../styles/Home.module.css";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Scene from "../components/Scene";
import SideBar from "../components/SideBar";

// TODO: Mobile
// TODO: Make Custom skybox images in PS
// TODO: Add a loading screen
// TODO: investigate sketchfab
// TODO: add a 3d model
// TODO: finalize the design

export const navLinks = [
  { title: `Home`, path: `/` },
  { title: "Projects", path: "/projects" },
  { title: "Links", path: "/links" },
  { title: "About", path: "/about" },
];

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
        <SideBar navLinks={navLinks} />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
