// Tiny scheduler utility for periodic jobs
export function every(ms: number, fn: () => void) {
  const id = setInterval(fn, ms);
  return () => clearInterval(id);
}
