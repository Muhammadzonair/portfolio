export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0f19] px-6 text-white">
      <div className="glass-card flex flex-col items-center gap-4 rounded-[2rem] px-10 py-8 text-center">
        <div className="loader-ring" />
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/80">Loading portfolio</p>
      </div>
    </div>
  );
}
