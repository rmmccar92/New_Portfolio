import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Sphere = (props) => {
  const texture = useLoader(TextureLoader, "/images/moon_texture.jpg");
  const normalMap = useLoader(TextureLoader, "/images/normal_map_MOON.png");
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.001));

  return (
    <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh}>
      <sphereBufferGeometry args={[4, 400, 40]} />
      <meshPhysicalMaterial
        attach="material"
        map={texture}
        normalMap={normalMap}
        roughness={2}
        color="white"
      />
    </mesh>
  );
};

export default Sphere;
