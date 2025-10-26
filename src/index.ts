import { postCast } from "./api/neynar.js";         
import { every } from "./utils/scheduler.js";       
import { printConfig, config } from "../config.js"; 
import { MessageQueue } from "./utils/queue.js";    

printConfig();
console.log("🤖 Farcaster Bot Core initialized (Phase 2).");

// Локальная очередь сообщений для безопасного демо
const q = new MessageQueue<string>();
q.add("gm Farcaster 🌐 (queued)");
q.add("Phase 2: queue + webhook placeholders ready");

every(config.postInterval * 60_000, async () => {
  const msg = q.next() ?? "heartbeat: nothing to cast now";
  const result = await postCast(msg);
  console.log("cast result:", result);
});
