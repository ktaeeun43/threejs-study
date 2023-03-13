import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cssmark from "./Cssmark";

const Css = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Cssmark />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
};

export default Css;
