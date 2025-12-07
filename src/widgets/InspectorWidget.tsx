import { useMeshSelectStore } from '@/stores';
import { Card, InputNumber } from 'antd';

export function InspectorWidget() {
  const selected = useMeshSelectStore((s) => s.selected);

  const pos = selected?.position;

  return (
    <div className="absolute top-5 right-5 w-64 z-10">
      <Card title="Transform" size="small">
        {!pos ? (
          <div>모델을 선택하세요.</div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-5 font-semibold">X</span>
              <InputNumber
                value={pos.x}
                step={0.1}
                // onChange={v => updatePos('x', Number(v))}
                className="flex-1"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="w-5 font-semibold">Y</span>
              <InputNumber
                value={pos.y}
                step={0.1}
                // onChange={v => updatePos('y', Number(v))}
                className="flex-1"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="w-5 font-semibold">Z</span>
              <InputNumber
                value={pos.z}
                step={0.1}
                // onChange={v => updatePos('z', Number(v))}
                className="flex-1"
              />
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
