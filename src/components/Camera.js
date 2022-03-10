import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

const Camera = (props) => {
  return (
    <PerspectiveCamera makeDefault {...props} />
  )
}

export default Camera;
