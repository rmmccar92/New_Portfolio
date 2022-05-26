// index.jsx
import css from "../styles/Home.module.css";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Scene from "../components/Scene";
import SideBar from "../components/SideBar";
import AboutCom from "../components/AboutCom";
import ProjectsCom from "../components/ProjectsCom";
import LinksCom from "../components/LinksCom";
import ContactCom from "../components/ContactCom";

// TODO: Add a loading screen
// TODO: Learn more about shaders
// TODO: investigate sketchfab
// TODO: add a contact page
// TODO: add a resume page
// TODO: toggle controls

export const navLinks = [
  { title: `Home`, path: `/` },
  { title: "Projects", path: "/projects" },
  { title: "Links", path: "/links" },
  { title: "About", path: "/about" },
  { title: "Resume", path: "/resume" },
  { title: "Contact", path: "/contact" },
];

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState("");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Home":
        return;
      case "About":
        return <AboutCom />;
      case "Projects":
        return <ProjectsCom />;
      case "Links":
        return <LinksCom />;
      case "Resume":
        return;
      case "Contact":
        return <ContactCom />;
      default:
        return;
    }
  };

  const handleClick = (component) => setCurrentComponent(component);
  return (
    <>
      <div className={css.scene}>
        <Canvas
          linear
          flat
          onClick={() => handleClick("Home")}
          shadows={true}
          className={css.canvas}
          camera={{
            position: [0, 9, 20],

            //   fov: 45,
            //   near: 0.1,
            //   far: 1000,
          }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
        <SideBar
          currentComponent={currentComponent}
          handleClick={handleClick}
          navLinks={navLinks}
        />
        {renderComponent()}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
