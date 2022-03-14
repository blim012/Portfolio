import React from "react";
import { useTexture } from "@react-three/drei"
import ParticleSphere from "./ParticleSphere";
import AmbientParticles from "./AmbientParticles";
import circleTexture from "../../static/circle.png";

const Scene = (props) => {
  const particleTexture = useTexture(circleTexture);

  return (
    <>
      <ParticleSphere particleTexture={particleTexture} />
      <AmbientParticles particleTexture={particleTexture} count={500} />
    </>
  );
};

export default Scene;
