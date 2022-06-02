import React, { useRef } from "react";
import { CubeTextureLoader } from "three";
import { useThree, useLoader } from "@react-three/fiber";
import { useCubeTexture } from "@react-three/drei";

const Skybox = () => {
  const { scene } = useThree();
  const [cubeMap] = useLoader(CubeTextureLoader, [
    // 4 1 Top Bottom 3 2
    [
      "/images/cat.jpg",
      "/images/7c.png",
      "/images/extra5c.png",
      "/images/5b.png",
      "/images/extra3b.png",
      "/images/extra_red4b.png",
    ],
  ]);
  scene.background = cubeMap;
  return null;
};

export default Skybox;
