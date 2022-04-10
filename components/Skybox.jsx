import React, { useRef } from "react";
import { CubeTextureLoader } from "three";
import { useThree, useLoader } from "@react-three/fiber";
import { useCubeTexture } from "@react-three/drei";

const Skybox = () => {
  const { scene } = useThree();
  const texture = useCubeTexture(
    ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    { path: "/images/" }
  );
  scene.background = texture;
  return null;
};

export default Skybox;
