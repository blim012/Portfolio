import React from "react";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ParticleSphere = (props) => {
  const particleTexture = props.particleTexture;
  const pSphereGroupRef = useRef();
  const pSphereRef = useRef();

  useFrame(({clock}) => {
    pSphereRef.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#welcome',
      start: 'top top',
      endTrigger: '#projects',
      end: 'top top',
      onUpdate: (self) => {
        gsap.to(pSphereGroupRef.current.rotation, {
          y: '+=0.5',
          ease: 'power2.out',
          duration: 1
        });
        gsap.to(pSphereGroupRef.current.position, {
          x: 3 * self.progress
        });
      }
    });
  });

  return (
    <group ref={pSphereGroupRef}>
      <points ref={pSphereRef}>
        <sphereGeometry args={[5, 64, 32]} />
        <pointsMaterial 
          color={0x48cae4}
          size={0.2}
          sizeAttenuation={true}
          alphaMap={particleTexture}
          transparent={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default ParticleSphere;
