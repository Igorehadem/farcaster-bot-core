import { postCast } from "./api/neynar.js";
import { every } from "./utils/scheduler.js";
import { printConfig, config } from "../config.js";
import { MessageQueue } from "./utils/queue.js";
import { appendLog } from "./utils/logger.js";

printConfig();
console.log("🤖 Farcaster Bot Core initialized (Phase 2).");

// Локальная очередь сообщений для безопасного демо
const q = new MessageQueue<string>();
q.add("gm Farcaster 🌐 (queued)");
q.add("Phase 2: queue + webhook placeholders ready");

// Счётчик итераций
let runs = 0;
const maxRuns = 10; // остановиться после 10 циклов

every(config.postInterval * 60_000, async (stop) => {
  const msg = q.next() ?? "heartbeat: nothing to cast now";
  const result = await postCast(msg);
  console.log("cast result:", result);

  appendLog(`Cast: ${msg} → ${result.hash}`);

  runs++;
  if (runs >= maxRuns) {
    appendLog(`🛑 Reached ${maxRuns} iterations, stopping scheduler.`);
    console.log(`🛑 Reached ${maxRuns} iterations, stopping scheduler.`);
    stop();
  }
});
