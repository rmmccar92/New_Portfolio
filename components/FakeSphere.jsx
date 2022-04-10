const FakeSphere = ({ color, ...props }) => {
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
      <meshBasicMaterial color={color} attach="material" />
    </mesh>
  );
};

export default FakeSphere;
