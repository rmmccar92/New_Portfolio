import React, { useRef } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import Box from "./Box";

const Sphere = (props) => {
  const texture = useLoader(TextureLoader, "/images/moon_texture.jpg");
  const normalMap = useLoader(TextureLoader, "/images/normal_map_MOON.png");
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.001));
  return (
    <>
      <animated.mesh
        {...props}
        receiveShadow={true}
        castShadow={true}
        ref={mesh}
      >
        <sphereBufferGeometry args={[4, 400, 40]} />
        <animated.meshPhysicalMaterial
          attach="material"
          map={texture}
          normalMap={normalMap}
          roughness={2}
          color="white"
        />
      </animated.mesh>
    </>
  );
};

export default Sphere;
