import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={0.5} rotationIntensity={1} floatingRange={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1.5}
          castShadow
          shadow-mapSize={1024}
        />
        <meshStandardMaterial
          color='#070707'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[1, 0, 0]}
          rotation={[0 * Math.PI, 2, 0]}
          scale={0.8}
          map={decal}
          flatShading
        />
        <Decal
          position={[-1, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.8}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          // rotation={[Math.PI / 1, 0, 0]}
          rotation={[0, Math.PI / 1, 0]}

          scale={0.8}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[0, -Math.PI / 1, 0]}
          scale={0.8}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand' shadows='soft white'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate rotateSpeed={0.75}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}

        />

        <Ball imgUrl={icon} />
        <Preload all />
      </Suspense>

    </Canvas>
  );
};

export default BallCanvas;