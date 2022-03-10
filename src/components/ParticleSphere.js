import React from "react";

const ParticleSphere = (props) => {
  return (
    <points>
      <sphereGeometry args={[5, 64, 32]} />
      <pointsMaterial 
        color={0x48cae4}
        size={0.2}
        sizeAttenuation={true}
        // alphaMap={particleTexture}
        transparent={true}
        depthWrite={false}
      />
    </points>
  )
}

export default ParticleSphere
