import React from "react";

const AmbientParticles = (props) => {
  const particleTexture = props.particleTexture;
  const count = props.count;
  const particlePositions = new Float32Array(count * 3);

  for(let i = 0; i < count; i++) {
    let i3 = i * 3;
    particlePositions[i3] = (Math.random() - 0.5) * 25;
    particlePositions[i3 + 1] = (Math.random() - 0.5) * 25;
    particlePositions[i3 + 2] = (Math.random() - 0.5) * 25;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute 
          attachObject={['attributes', 'position']} 
          count={count}
          array={particlePositions}
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        color={'white'}
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        alphaMap={particleTexture}
        transparent={true}
      />
    </points>
  )
};

export default AmbientParticles;
