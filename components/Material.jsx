import { useRef } from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Center, shaderMaterial, Plane } from "@react-three/drei";
import { vertexShader, fragmentShader } from "../shaders/Shader";

const NoiseMaterial = shaderMaterial(
  {
    scale: 2.5,
    size: 0.25,
    density: 2.5,
    time: 0.0,
    bg: new THREE.Color("rgb(19, 18, 0)"),
    highlight1: new THREE.Color("#1f065c"),
    highlight2: new THREE.Color("cyan"),
  },
  vertexShader,
  fragmentShader
);
extend({ NoiseMaterial });
const MaterialDemo = () => {
  const material = useRef();

  useFrame(({ clock }) => {
    material.current.uniforms.time.value = Math.sin(
      (2 * Math.PI * clock.getElapsedTime()) / 25
    );
  });

  return (
    <Plane args={[12, 14.75]}>
      <noiseMaterial ref={material} side={THREE.DoubleSide} />
    </Plane>
  );
};

export default MaterialDemo;
