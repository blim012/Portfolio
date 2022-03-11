import React from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Camera from './Camera';
import Scene from './Scene';

const R3F = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <React.Suspense fallback={null}>
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            enableRotate={false}/>
          <Camera 
            position={[0, -15, 0]} 
            near={0.01}
            far={100}
          />
          <Scene />
        </React.Suspense>
      </Canvas>
    </div>
  );
}

export default R3F;
