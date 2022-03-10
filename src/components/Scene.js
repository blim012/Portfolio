import React from "react";
import { useTexture } from "@react-three/drei"
import ParticleSphere from "./ParticleSphere";

const Scene = (props) => {
  const particleTexture = useTexture('circle.png');

  return (
    <ParticleSphere particleTexture={particleTexture} />
  );
};

export default Scene;
