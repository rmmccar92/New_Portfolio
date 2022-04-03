import React, { useEffect, useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";

function LightBulb(props) {
  const mesh = useRef();
  const pointLight = useRef();

  useHelper(pointLight, PointLightHelper);
  return (
    <mesh {...props} ref={mesh}>
      <pointLight castShadow ref={pointLight} />
      <sphereBufferGeometry args={[0.5, 30, 10]} />
      <meshPhongMaterial emissive="red" />
    </mesh>
  );
}

export default LightBulb;
