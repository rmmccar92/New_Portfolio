const Plane = (props) => {
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[200, 200]} />
      <meshPhysicalMaterial attach="material" color="black" />
    </mesh>
  );
};

export default Plane;
