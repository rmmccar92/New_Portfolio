import React, { useMemo } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Extrude, OrbitControls, Center } from "@react-three/drei";

const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false };
const SIDE = 10;

function Block(props) {
  const shape = useMemo(() => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 2);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  return (
    <>
      <Extrude args={[shape, extrudeSettings]} {...props}>
        <meshPhysicalMaterial
          flatShading
          color="white"
          thickness={SIDE}
          roughness={0.4}
          clearcoat={1}
          clearcoatRoughness={1}
          transmission={0.75}
          ior={1.25}
          attenuationTint="#fff"
          attenuationDistance={0}
        />
      </Extrude>
    </>
  );
}

export default Block;
