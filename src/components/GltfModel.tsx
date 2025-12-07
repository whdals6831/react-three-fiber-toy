import { useMeshSelectStore } from '@/stores';
import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { SkeletonUtils } from 'three/examples/jsm/Addons.js';

type GltfModelProps = {
  url: string;
  position?: [number, number, number];
};

export function GltfModel({ url, position = [0, 0, 0] }: GltfModelProps) {
  const { scene } = useGLTF(url);
  const { select } = useMeshSelectStore();
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  return (
    <primitive
      object={clone}
      position={position}
      onPointerDown={(e: PointerEvent) => {
        e.stopPropagation();
        select(clone);
      }}
    />
  );
}
