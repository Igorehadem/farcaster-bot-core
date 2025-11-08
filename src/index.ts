// ----------------------------------------------------------
// 🤖 Farcaster Bot Core — Main entry
// Queue → scheduler → (mock) Neynar client
// ----------------------------------------------------------

import { postCast } from "./utils/neynarClient.js";
import { every } from "./utils/scheduler.js";
import { printConfig, config } from "../config.js";
import { MessageQueue } from "./utils/queue.js";
import { appendLog, divider } from "./utils/logger.js";

printConfig();

// Отметим границы сессии в cast-log.txt
divider("bot session start");

// Локальная очередь (безопасная демо-версия)
const q = new MessageQueue<string>();
q.add("gm Farcaster (queued)");
q.add("Phase 2: queue + webhook placeholders ready");

// Счётчик итераций
let runs = 0;
const maxRuns = 10; // остановимся после 10 циклов

every(config.postInterval * 60_000, async (stop) => {
  try {
    const msg = q.next() ?? "heartbeat: nothing to cast now";
    const result = await postCast({ text: msg });

    console.log("✅ cast result:", result);
    appendLog(`Cast → "${msg}"`);

    runs++;
    if (runs >= maxRuns) {
      appendLog(`🛑 Reached ${maxRuns} iterations, stopping scheduler.`);
      divider("bot session end");
      stop();
    }
  } catch (err: any) {
    console.warn("⚠️ loop error:", err?.message || err);
    appendLog(`❌ Error: ${err?.message || String(err)}`);
  }
});
