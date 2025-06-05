import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";

export default function Home() {
  return (
    <main className="bg-[#f0e9e0] text-neutral-900 min-h-screen">
      <section className="h-screen w-full relative">
        <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} />
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[2.5, 2.5, 0.2, 32]} />
              <meshStandardMaterial color="#c2b6a2" />
            </mesh>
            <mesh position={[0, 0.1, 0]}>
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshStandardMaterial color="#e63946" emissive="#e63946" emissiveIntensity={1} />
            </mesh>
            <Environment preset="sunset" />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-10 w-full flex flex-col items-center text-center text-neutral-900">
          <h1 className="text-4xl md:text-6xl font-semibold">Peak Oasis</h1>
          <p className="text-lg md:text-xl mt-2 max-w-md">Luxury beachside picnics, glamping, and exclusive event experiences at Virgin Gorda.</p>
          <a
            href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            className="mt-4 bg-[#e63946] text-white py-2 px-6 rounded-full hover:bg-[#c42b3b] transition"
          >
            Book Now
          </a>
        </div>
      </section>

      <section className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Our Experiences</h2>
          <p className="text-lg">Enjoy curated beach picnics with upscale furnishings, tented lounge setups, and bespoke experiences under the Caribbean sun. Coming soon: Peak Glamp & Wedding Oasis packages.</p>
        </div>
        <div className="bg-gray-200 h-64 rounded-xl"></div>
      </section>

      <footer className="bg-[#eae4da] text-neutral-700 p-6 text-center">
        <p>&copy; 2025 Peak Oasis Retreat. Virgin Gorda, BVI.</p>
        <p className="text-sm mt-2">Follow us on Instagram & Facebook @peakoasisretreat</p>
      </footer>
    </main>
  );
}
