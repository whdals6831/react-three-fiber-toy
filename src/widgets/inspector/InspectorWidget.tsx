import { useMeshSelectStore } from '@/stores';
import { Card, Collapse } from 'antd';
import { PositionController } from './components/PositionController';
import { RotationController } from './components/RotationController';
import { ScaleController } from './components/ScaleController';

export function InspectorWidget() {
  const { selected, updatePosition, updateRotation, updateScale } =
    useMeshSelectStore();

  const pos = selected?.position;
  const rot = selected?.rotation;
  const scale = selected?.scale;

  return (
    <div className="absolute top-5 right-5 w-64 z-10">
      <Card title="Inspector" size="small">
        {!selected ? (
          <div>모델을 선택하세요.</div>
        ) : (
          <Collapse
            defaultActiveKey={['position', 'rotation', 'scale']}
            // ghost
            className="transform-collapse"
            items={[
              {
                key: 'position',
                label: 'Position',
                children: (
                  <PositionController
                    vec={pos}
                    onChange={(axis, v) => updatePosition(axis, v)}
                  />
                ),
              },
              {
                key: 'rotation',
                label: 'Rotation',
                children: (
                  <RotationController
                    vec={rot}
                    onChange={(axis, v) => updateRotation(axis, v)}
                  />
                ),
              },
              {
                key: 'scale',
                label: 'Scale',
                children: (
                  <ScaleController
                    vec={scale}
                    onChange={(axis, v) => updateScale(axis, v)}
                  />
                ),
              },
            ]}
          />
        )}
      </Card>
    </div>
  );
}
