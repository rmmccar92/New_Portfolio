const Stars = (props) => {
  const texture = useLoader(TextureLoader, "/images/stars.jpg");
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.001));

  return (
    <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh}>
      <sphereBufferGeometry args={[2, 30, 10]} clearcoat={1} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
};
