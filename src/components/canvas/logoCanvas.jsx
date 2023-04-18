import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import logo from "../../assets/logo.png";
import CanvasLoader from "../Loader";


const Ball = () => {
    const [decal] = useTexture([logo]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2}>
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
                    color="black"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[1, 0, 0]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[1, 1, 1]}
                    map={decal}
                    flatShading
                />
                <Decal
                    position={[-1, 0, 0]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[1, 1, 1]}
                    map={decal}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    // rotation={[Math.PI / 1, 0, 0]}
                    rotation={[0, Math.PI / 1, 0]}

                    scale={[1, 1, 1]}
                    map={decal}
                    flatShading
                />
                <Decal
                    position={[0, 0, -1]}
                    rotation={[0, -Math.PI / 1, 0]}
                    scale={[1, 1, 1]}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const LogoCanvas = ({ logo }) => {
    return (
        <Canvas
            frameloop="demand"
            shadows="soft white"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableDamping={true} dampingFactor={0.05} autoRotate autoRotateSpeed={2} enableZoom={false} maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />
                <Ball imgUrl={logo} />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default LogoCanvas;
