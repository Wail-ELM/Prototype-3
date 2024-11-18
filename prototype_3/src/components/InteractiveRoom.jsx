import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Model from "./Model";
import * as THREE from "three";

function InteractiveRoom() {
  const [scene, setScene] = useState(null);
  const [lampOn, setLampOn] = useState(false);
  const [wallColor, setWallColor] = useState("white");

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/models/isometric_room.glb",
      (gltf) => {
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = new THREE.Vector3();
        const size = box.getSize(new THREE.Vector3());
        box.getCenter(center);

        console.log("Centre du modèle :", center);
        console.log("Dimensions du modèle :", size);

        gltf.scene.position.set(-center.x, 0, -center.z); 
        const maxDimension = Math.max(size.x, size.y, size.z);
        gltf.scene.scale.set(10 / maxDimension, 10 / maxDimension, 10 / maxDimension);

        setScene(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error charging room model :", error);
      }
    );
  }, []);

  useEffect(() => {
    if (scene) {
      const lamp = scene.getObjectByName("Cylinder_0");
      if (lamp) {
        lamp.material.emissiveIntensity = lampOn ? 1 : 0;
        lamp.material.emissive = lampOn
          ? new THREE.Color(0xffff00)
          : new THREE.Color(0x000000);
      }
    }
  }, [lampOn, scene]);

  useEffect(() => {
    if (scene) {
      const wall = scene.getObjectByName("Plane001_0");
      if (wall) {
        wall.material.color.set(wallColor);
      }
    }
  }, [wallColor, scene]);

  return (
    <div className="room-container">
      <Canvas className="viewer-container">
        <OrthographicCamera makeDefault position={[0, 5, 10]} zoom={30} />
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 3, 1]} intensity={1} />
        <OrbitControls maxPolarAngle={Math.PI / 2.5} />
       
        <Model scene={scene} />
      </Canvas>

      <div className="controls">
        <button onClick={() => setLampOn(!lampOn)}>
          {lampOn ? "Light Off" : "Light On"}
        </button>
        <button onClick={() => setWallColor("blue")}>Blue Laptop</button>
        <button onClick={() => setWallColor("green")}>Green Laptop</button>
        <button onClick={() => setWallColor("white")}>White Laptop</button>
      </div>
    </div>
  );
}

export default InteractiveRoom;
