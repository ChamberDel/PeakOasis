import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Hero3D() {
  return (
    <div className="h-[90vh] w-full">
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        {/* 🔺 Placeholder 3D object */}
        <mesh>
          <coneGeometry args={[1, 2, 32]} />
          <meshStandardMaterial color="orangered" />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}