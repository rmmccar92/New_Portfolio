import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Sphere = (props) => {
  const texture = useLoader(TextureLoader, "/images/moon_texture.jpg");
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.001));

  return (
    <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh}>
      <sphereBufferGeometry args={[2, 30, 10]} clearcoat={1} />
      <meshPhysicalMaterial map={texture} color="white" />
    </mesh>
  );
};

export default Sphere;
