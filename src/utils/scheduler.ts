export function every(ms: number, fn: (stop: () => void) => void) {
  const timer = setInterval(() => fn(() => clearInterval(timer)), ms);
  console.log(`⏱ Scheduler started (${ms / 1000}s interval)`);
}
