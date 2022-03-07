// npm install react-three-fiber three@0.122.0 use-cannon

import { Canvas, extend, useThree } from 'react-three-fiber';
import { Physics } from 'use-cannon';

import Lights from './components/Lights'
import Aircraft from './components/Aircraft'
import Floor from './components/Floor';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return (
    <orbitControls args={[camera, gl.domElement]} />
  );
}


function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        shadowMap
        style={{ background: 'black' }}
        camera={{ position: [2, 2, 2] }}>
        <Lights />
        <axesHelper args={[50]} />
        <Orbit />
        <Physics>
          <Aircraft />
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;