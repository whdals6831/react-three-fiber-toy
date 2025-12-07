import { InputNumber } from 'antd';
import type { Vector3 } from 'three';

export function PositionController({
  vec,
  onChange,
}: {
  vec: Vector3 | undefined;
  onChange: (axis: 'x' | 'y' | 'z', v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {(['x', 'y', 'z'] as const).map((axis) => (
        <div key={axis} className="flex items-center gap-2">
          <span className="w-5 uppercase">{axis}</span>
          <InputNumber
            value={vec ? vec[axis] : 0}
            step={0.1}
            className="flex-1"
            onChange={(v) => onChange(axis, Number(v))}
          />
        </div>
      ))}
    </div>
  );
}
