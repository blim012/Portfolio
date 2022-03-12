import React from "react";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Sphere } from "@react-three/drei";

const ParticleSphere = (props) => {
  const particleTexture = props.particleTexture;
  const pSphereGroupRef = useRef();
  const pSphereRef = useRef();
  const skillSphereRef = useRef();

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

    ScrollTrigger.create({
      trigger: document.querySelector('#projects').lastChild,
      start: 'top top',
      endTrigger: '#skills',
      end: 'top top',
      onUpdate: (self) => {
        gsap.to(skillSphereRef.current.material, {
          opacity: self.progress
        })
        gsap.to(pSphereGroupRef.current.rotation, {
          y: '+=0.5',
          ease: 'power2.out',
          duration: 1,
        })
      }
    });

    ScrollTrigger.create({
      trigger: '#skills',
      start: 'bottom center',
      endTrigger: '#contacts',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.to(pSphereGroupRef.current.rotation, {
          duration: 1,
          y: '+=0.2',
          ease: 'power2.out'
        })
        gsap.to(skillSphereRef.current.material, {
          opacity: 1 - self.progress * 2
        })
      }
    })
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
      <Sphere ref={skillSphereRef} args={[5.1, 64, 32]}>
        <meshBasicMaterial 
          color={'black'}
          transparent={true}
          opacity={0} 
        />
      </Sphere>
    </group>
  );
}

export default ParticleSphere;
