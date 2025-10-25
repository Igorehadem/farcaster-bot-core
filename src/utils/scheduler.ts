// Simple interval scheduler utility
export function every(ms: number, fn: () => void) {
  const id = setInterval(fn, ms);
  console.log(`⏱ Scheduler started (${ms / 1000}s interval)`);
  return () => clearInterval(id);
}
