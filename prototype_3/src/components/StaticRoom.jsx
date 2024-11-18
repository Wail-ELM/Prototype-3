import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
function StaticRoom() {
  const [scene, setScene] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/models/isometric_room.glb",
      (gltf) => {
        console.log("Modèle chargé :", gltf.scene);
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = new THREE.Vector3();
        box.getCenter(center);
        gltf.scene.position.set(-center.x, -center.y, -center.z); 
  
    
        const size = box.getSize(new THREE.Vector3());
        const maxDimension = Math.max(size.x, size.y, size.z);
        const scale = 10 / maxDimension; 
        gltf.scene.scale.set(scale, scale, scale);
  
        setScene(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Erreur lors du chargement du modèle :", error);
      }
    );
  }, []);

  return (
    <div className="room-container">
      <Canvas className="viewer-container">
        {}
        <OrthographicCamera makeDefault position={[10, 10, 10]} zoom={8} />
        <ambientLight intensity={0.5} />
        <OrbitControls maxPolarAngle={Math.PI / 2.5} /> {}
        {scene && <primitive object={scene} />} {}
      </Canvas>
    </div>
  );
}

export default StaticRoom;
