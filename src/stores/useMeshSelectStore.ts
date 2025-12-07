import { Object3D } from 'three';
import { create } from 'zustand';

type SelectState = {
  selected: Object3D | null;
  select: (v: Object3D | null) => void;
  updatePosition: (axis: 'x' | 'y' | 'z', value: number) => void;
  updateRotation: (axis: 'x' | 'y' | 'z', value: number) => void;
  updateScale: (axis: 'x' | 'y' | 'z', value: number) => void;
};

export const useMeshSelectStore = create<SelectState>((set, get) => ({
  selected: null,
  select: (v) => set({ selected: v }),
  updatePosition: (axis, value) => {
    const obj = get().selected;

    if (!obj) return;

    obj.position[axis] = value; // mesh 객체 이동
    set({ selected: obj }); // 가져다 사용하는 곳 값 갱신 ex) Inspector 값 갱신
  },
  updateRotation: (axis, value) => {
    const obj = get().selected;

    if (!obj) return;

    obj.rotation[axis] = value; // mesh 객체 회전
    set({ selected: obj }); // 가져다 사용하는 곳 값 갱신 ex) Inspector 값 갱신
  },
  updateScale: (axis, value) => {
    const obj = get().selected;

    if (!obj) return;

    obj.scale[axis] = value; // mesh 객체 스케일 변경
    set({ selected: obj }); // 가져다 사용하는 곳 값 갱신 ex) Inspector 값 갱신
  },
}));
