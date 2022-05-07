import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
// import { TextureLoader } from "three";
import { useSpring, animated, config } from "@react-spring/three";

const Box = () => {
  const r = 35;
  const theta = 0;
  const dTheta = (2 * Math.PI) / 1000;
  // const texture = useLoader(TextureLoader, "/images/skybox.jpg");
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? 1.5 : 1,
    color: hovered ? "violet" : "grey",
    config: config.wobbly,
  });
  useFrame(() => (mesh.current.position.z += Math.PI / 720));
  useFrame(() => (mesh.current.position.y += Math.PI / 720));
  return (
    <>
      <animated.mesh
        {...props}
        receiveShadow={true}
        castShadow={true}
        ref={mesh}
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
        onClick={(e) => setActive(!active)}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <animated.meshPhysicalMaterial
          reflectivity={0.5}
          attach="material"
          color={props.color}
        />
      </animated.mesh>
    </>
  );
};

export default Box;
