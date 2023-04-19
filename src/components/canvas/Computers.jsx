import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader'


function Computers({ isMobile }) {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
        groundColor='black'>
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive object={computer.scene}
          scale={isMobile ? 0.38 : 0.55}
          position={isMobile ? [2.5, -3.74, 0] : [2.5, -4, 0]}
          rotation={[0, -0.2, -0.2]}
        />
      </hemisphereLight>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(max-width: 450px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, []);

  return (
    <Canvas frameloop='demand' shadows
      camera={{
        position: [20, 3, 5], fov: 25
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate autoRotateSpeed={0.05} enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>

  )
}

// export default Computers
export default ComputersCanvas
