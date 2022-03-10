import React from "react";
import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Camera = (props) => {
  const cameraRef = useRef();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#welcome',
      start: 'top top',
      endTrigger: '#projects',
      end: 'top top',
      onUpdate: (self) => {
        gsap.to(cameraRef.current.position, {
          y: -15 * (1 - self.progress),
          z: 17 * self.progress
        })
      }
    });
  }, []);

  return (
    <PerspectiveCamera ref={cameraRef} makeDefault {...props} />
  )
}

export default Camera;
