import { Footer, LoadingScreen } from '@/components';
import { CanvasWidget, InspectorWidget } from '@/widgets';
import { Suspense } from 'react';

export function App() {
  return (
    <div className="relative w-full h-screen">
      <Suspense fallback={<LoadingScreen />}>
        <CanvasWidget />
        <InspectorWidget />
        <Footer />
      </Suspense>
    </div>
  );
}
