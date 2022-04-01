import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Box = (props) => {
  const texture = useLoader(TextureLoader, "/images/skybox.jpg");
  return (
    <mesh {...props} receiveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial map={texture} color="white" />
    </mesh>
  );
};

export default Box;
