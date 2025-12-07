import { Object3D } from 'three';
import { create } from 'zustand';

type SelectState = {
  selected: Object3D | null;
  select: (v: Object3D | null) => void;
};

export const useMeshSelectStore = create<SelectState>((set) => ({
  selected: null,
  select: (v) => set({ selected: v }),
}));
