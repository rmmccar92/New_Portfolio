import { useRef } from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Center, shaderMaterial, Plane } from "@react-three/drei";
import { vertexShader, fragmentShader } from "./Shader";

const NoiseMaterial = shaderMaterial(
  {
    scale: 1.5,
    size: 0.2,
    density: 4.0,
    time: 0.0,
    bg: new THREE.Color("#111033"),
    yellow: new THREE.Color("#ffd600"),
    orange: new THREE.Color("#ff7300"),
  },
  vertexShader,
  fragmentShader
);
extend({ NoiseMaterial });
const MaterialDemo = () => {
  const material = useRef();

  useFrame(({ clock }) => {
    material.current.uniforms.time.value = Math.sin(
      (2 * Math.PI * clock.getElapsedTime()) / 10
    );
  });

  return (
    <Plane args={[12, 14.75]}>
      <noiseMaterial ref={material} side={THREE.DoubleSide} />
    </Plane>
  );
};

export default MaterialDemo;
