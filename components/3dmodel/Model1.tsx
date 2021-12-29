import { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "assets/3d-models/person1/scene.gltf");
  
  // const Ref = useRef();

  // useFrame(() => {
  //   Ref.rotation.y += 0.01;
  // });
  return (
    <>
      <primitive object={gltf.scene} scale={0.02} />
    </>
  );
};

export default function Model1() {
  return (
    <div className="threejs-wrapper w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
          <Environment preset="sunset"  />
        </Suspense>
      </Canvas>
    </div>
  );
}