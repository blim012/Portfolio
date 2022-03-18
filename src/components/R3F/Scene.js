import React from "react";
import { RepeatWrapping, NearestFilter, DoubleSide } from "three";
import { useTexture } from "@react-three/drei"
import ParticleSphere from "./ParticleSphere";
import AmbientParticles from "./AmbientParticles";
import circleTexture from "../../static/circle.png";
import skillSphereTexture1 from "../../static/skillSphere1.png";
import skillSphereTexture2 from "../../static/skillSphere2.png";

const Scene = (props) => {
  const particleTexture = useTexture(circleTexture);
  const skillTextureA = useTexture(skillSphereTexture1);
  const skillTextureB = useTexture(skillSphereTexture2);

  skillTextureA.wrapS = skillTextureA.wrapT = RepeatWrapping;
  skillTextureA.repeat.set(3 , 1);
  skillTextureA.magFilter = skillTextureA.minFilter = NearestFilter;
  skillTextureA.needsUpdate = true;

  skillTextureB.wrapS = skillTextureB.wrapT = RepeatWrapping;
  skillTextureB.repeat.set(3 , 1);
  skillTextureB.magFilter = skillTextureB.minFilter = NearestFilter;
  skillTextureB.needsUpdate = true;

  return (
    <>
      <ParticleSphere 
        particleTexture={particleTexture} 
        skillTextureA={skillTextureA}
        skillTextureB={skillTextureB} 
      />
      <AmbientParticles particleTexture={particleTexture} count={500} />
    </>
  );
};

export default Scene;
