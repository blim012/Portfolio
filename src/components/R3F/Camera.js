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

    ScrollTrigger.create({
      trigger: document.querySelector('#projects').lastChild,
      start: 'top top',
      endTrigger: '#skills',
      end: 'top top',
      onUpdate: (self) => {
        gsap.to(cameraRef.current.position, {
          x: -12 * Math.pow(self.progress, 0.6),
          z: 17 - (17 * Math.pow(self.progress, 1.5))
        })
      }
    });

    ScrollTrigger.create({
      trigger: '#contacts',
      start: 'top center',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.to(cameraRef.current.position, {
          x: -12 + (12 * (Math.pow(Math.sin(5 * self.progress / Math.PI), 2)))
        })
      }
    });
  }, []);

  return (
    <PerspectiveCamera ref={cameraRef} makeDefault {...props} />
  )
}

export default Camera;
