import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function ModelViewer({ model }) {
  const [modelObject, setModelObject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    if (!model || !model.originalname) {
      setError('Invalid model data: missing filename or originalname');
      return;
    }

    const fileExtension = model.originalname.split('.').pop().toLowerCase(); 

    if (!['glb', 'gltf', 'obj'].includes(fileExtension)) {
      setError(`Unsupported file format: .${fileExtension}`);
      return;
    }

    const loader = fileExtension === 'obj' ? new OBJLoader() : new GLTFLoader();

    loader.load(
      `http://localhost:5000/${model.filename}`, 
      (loadedModel) => {
        setModelObject(fileExtension === 'obj' ? loadedModel : loadedModel.scene); 
        setError(null); 
        console.log('Model loaded successfully:', loadedModel);
      },
      undefined,
      (err) => {
        console.error('Error loading model:', err);
        setError('Failed to load the model. Ensure it is a valid GLTF or OBJ file.');
      }
    );
  }, [model]);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Canvas className="viewer-container">
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom enableRotate />
        {modelObject && <primitive object={modelObject} />}
      </Canvas>
    </div>
  );
}

export default ModelViewer;
