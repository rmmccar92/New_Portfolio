// index.jsx
import css from "../styles/Home.module.css";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Scene from "../components/Scene";
import SideBar from "../components/SideBar";
import AboutCom from "../components/AboutCom";
import ProjectsCom from "../components/ProjectsCom";
import LinksCom from "../components/LinksCom";
import ContactCom from "../components/ContactCom";
import Loading from "../components/Loading";

// TODO: add a resume page
// TODO: toggle controls

export const navLinks = [
  { title: `Home`, path: `/` },
  { title: "Projects", path: "/projects" },
  { title: "Links", path: "/links" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Home = () => {
  const [popAchievement, setPopAchievement] = useState(false);
  const [achievement, setAchievement] = useState([]);
  const [currentComponent, setCurrentComponent] = useState("");
  const [loading, setLoading] = useState(true);

  const handleAchievement = (condition) => {
    // console.log("handleAchievement", condition);
    setAchievement((prev) => ({
      ...prev,
      condition,
    }));
    setTimeout(() => {
      console.log("count");
      setPopAchievement(false);
    }, 5000);
  };

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
      case "Contact":
        return <ContactCom />;
      default:
        return;
    }
  };

  const handleClick = (component) => setCurrentComponent(component);
  const handleLoading = () => setTimeout(() => setLoading(false), 5000);

  return (
    <>
      <div className={css.scene}>
        {loading && (handleLoading(), (<Loading />))}
        <Canvas
          linear
          flat
          onClick={() => handleClick("Home")}
          shadows={true}
          className={css.canvas}
          camera={{
            position: [10, 9, 20],
            //   fov: 45,
            //   near: 0.1,
            //   far: 1000,
          }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
        {/* <button
          className={
            popAchievement ? "testButton clicked" : "testButton unclicked"
          }
          onClick={() => {
            setPopAchievement(!popAchievement);
            handleAchievement({ name: "test", description: "test" });
          }}
        >
          test
        </button> */}
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
