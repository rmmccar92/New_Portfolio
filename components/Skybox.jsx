import React, { useRef } from "react";
import { CubeTextureLoader } from "three";
import { useThree, useLoader } from "@react-three/fiber";
import { useCubeTexture } from "@react-three/drei";

const Skybox = () => {
  const { scene } = useThree();
  const texture = useCubeTexture(
    // 4 1 Top Bottom 3 2
    [
      "cat.jpg",
      "7c.png",
      "extra5c.png",
      "5b.png",
      "extra3b.png",
      "extra_red4b.png",
    ],
    { path: "/images/" }
  );
  scene.background = texture;
  return null;
};

export default Skybox;
