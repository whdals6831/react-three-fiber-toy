import { BoundingBoxHelper, GltfModel } from '@/components';
import { useMeshSelectStore } from '@/stores';
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export function CanvasWidget() {
  const { select } = useMeshSelectStore();

  return (
    <Canvas
      className="bg-black"
      camera={{ position: [0, 3, 10] }}
      gl={{
        toneMapping: 0,
        powerPreference: 'high-performance',
        alpha: false,
        antialias: true,
        stencil: false,
        autoClear: false,
        depth: true,
      }}
      onPointerMissed={() => {
        select(null);
      }}
    >
      <ambientLight intensity={3} />
      <OrbitControls enableDamping={false} />
      <gridHelper args={[10, 10]} />
      <BoundingBoxHelper />
      <Stats />

      <GltfModel url={'/red_bird.glb'} position={[-2, 0, 0]} />
      <GltfModel url={'/red_bird.glb'} position={[2, 0, 0]} />
    </Canvas>
  );
}
