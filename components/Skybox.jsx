import React, { useRef } from "react";
import { CubeTextureLoader } from "three";
import { useThree, useLoader } from "@react-three/fiber";
import { useCubeTexture } from "@react-three/drei";

const Skybox = () => {
  const { scene } = useThree();
  const texture = useCubeTexture(
    // 4 1 Top Bottom 3 2
    ["cat.jpg", "7a.jpg", "extra5.jpg", "5b.jpg", "12c.png", "10a.jpg"],
    { path: "/images/" }
  );
  scene.background = texture;
  return null;
};

export default Skybox;
