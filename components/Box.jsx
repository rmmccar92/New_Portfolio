import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useSpring, animated, config } from "@react-spring/three";

const Box = (props) => {
  const texture = useLoader(TextureLoader, "/images/skybox.jpg");
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  });
  useFrame(() => (mesh.current.rotation.x += 0.001));
  return (
    <animated.mesh
      {...props}
      receiveShadow={true}
      castShadow={true}
      ref={mesh}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
      onClick={(e) => setActive(!active)}
      scale={scale}
    >
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial color={hovered ? "red" : "blue"} />
    </animated.mesh>
  );
};

export default Box;
