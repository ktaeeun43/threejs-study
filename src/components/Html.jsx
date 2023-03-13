import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Htmllogo from "./Htmllogo";

const Html = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Htmllogo />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
};

export default Html;
