import React, { useRef } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// extend({ OrbitControls });

function Controls() {
  const { camera, gl } = useThree();
  const orbitRef = useRef();
  useFrame(() => orbitRef.current.update());

  return (
    <OrbitControls
      autoRotate
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      autoRotateSpeed={0.25}
      enabled={false}
      args={[camera, gl.domElement]}
      reverseOrbit={true}
      // target={[0, 0, 0]}
      ref={orbitRef}
    />
  );
}

export default Controls;
