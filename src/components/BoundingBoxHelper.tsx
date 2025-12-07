import { useMeshSelectStore } from '@/stores';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { BoxHelper } from 'three';

export function BoundingBoxHelper() {
  const selected = useMeshSelectStore((state) => state.selected);
  const helperRef = useRef<BoxHelper | null>(null);
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (helperRef.current) {
      scene.remove(helperRef.current);
      helperRef.current = null;
    }

    if (!selected) return;

    const helper = new BoxHelper(selected, 0xffff00);
    helperRef.current = helper;
    scene.add(helper);

    return () => {
      scene.remove(helper);
    };
  }, [selected]);

  useFrame(() => {
    if (helperRef.current) helperRef.current.update();
  });

  return null;
}
