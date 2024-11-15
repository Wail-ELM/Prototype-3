import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ModelViewer({ modelName }) {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(`http://localhost:5000/${modelName}`, (gltf) => {
      setModel(gltf.scene); 
    });
  }, [modelName]);

  return (
    <Canvas className="viewer-container">
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom enableRotate />
      {model && <primitive object={model} />}
    </Canvas>
  );
}

export default ModelViewer;
