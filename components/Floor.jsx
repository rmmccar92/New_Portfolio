import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Floor = (props) => {
  const texture = useLoader(TextureLoader, "/images/skybox.jpg");
  return (
    <>
      {/* <fog attach="fog" args={["black", 1, 100]} /> */}
      <mesh {...props} receiveShadow={true} scale={[2, 2, 2]}>
        <boxBufferGeometry args={[80, 0.5, 80]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};

export default Floor;
