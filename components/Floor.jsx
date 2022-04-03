import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Floor = (props) => {
  const texture = useLoader(TextureLoader, "/images/skybox.jpg");
  return (
    <mesh {...props} receiveShadow={true}>
      <boxBufferGeometry args={[50, 0.5, 40]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};

export default Floor;
