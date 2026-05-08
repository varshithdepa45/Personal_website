export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.18]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.10),transparent_55%)]" />
    </div>
  );
}
