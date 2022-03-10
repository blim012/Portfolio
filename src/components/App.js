import { Canvas } from '@react-three/fiber'
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import Camera from './Camera';
import Scene from './Scene';

const App = () => {
  const mesh = useRef()

  return (
    <div id="canvas-container">
      <Canvas>
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          enableRotate={false}/>
        <Camera 
          position={[0, -15, 0]} 
          near={0.01}
          far={100}
          target={mesh}
        />
        <Scene />
      </Canvas>
    </div>
  )
}

export default App;
