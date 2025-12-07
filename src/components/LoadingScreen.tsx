export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* 스피너 */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent" />

        {/* 텍스트 */}
        <p className="text-white text-sm font-medium tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
}
