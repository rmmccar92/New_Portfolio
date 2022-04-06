import React, { useRef } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

function Controls() {
  const { camera, gl } = useThree();
  const orbitRef = useRef();
  useFrame(() => orbitRef.current.update());

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 4}
      autoRotateSpeed={0.25}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
}

export default Controls;
