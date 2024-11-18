import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Model({ scene }) {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.y = 0; 
    }
  });

  return scene ? <primitive object={scene} ref={modelRef} /> : null;
}

export default Model;
