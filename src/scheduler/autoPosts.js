// ----------------------------------------------------------
// 🗓️ Farcaster Bot Core — Auto-Post Scheduler
// Runs a one-time batch of 3 posts spaced 1 hour apart
// Safe for CI and mock mode testing
// ----------------------------------------------------------

import { postCast } from "../utils/neynarClient.js";
import { appendLog } from "../utils/logger.js";

const HOUR_MS = 60 * 60 * 1000;

// Demo content — you can replace it with real text later
const posts = [
  {
    text: "Post #1 — testing auto-posting from farcaster-bot-core 🚀",
    imageUrl: process.env.POST_IMAGE_URL_1 || "https://picsum.photos/seed/alpha/1200/630",
  },
  {
    text: "Post #2 — +1h later ⏰",
    imageUrl: process.env.POST_IMAGE_URL_2 || "https://picsum.photos/seed/beta/1200/630",
  },
  {
    text: "Post #3 — +2h later 📡",
    imageUrl: process.env.POST_IMAGE_URL_3 || "https://picsum.photos/seed/charlie/1200/630",
  },
];

/**
 * Schedule a one-time 3-post batch
 * @param {Object} opts startDelayMs, intervalMs
 */
export async function scheduleOneTimeBatch({ startDelayMs = 0, intervalMs = HOUR_MS } = {}) {
  appendLog(`🕒 Scheduling ${posts.length} posts (startDelay=${startDelayMs}ms, interval=${intervalMs}ms)`);

  posts.forEach((item, idx) => {
    const delay = startDelayMs + idx * intervalMs;
    const eta = new Date(Date.now() + delay).toISOString();
    console.log(`🗓️ Scheduled post #${idx + 1} @ ${eta}`);
    appendLog(`🗓️ Post #${idx + 1} scheduled @ ${eta}`);

    setTimeout(async () => {
      try {
        console.log(`📨 Posting #${idx + 1}: "${item.text}"`);
        const res = await postCast(item);
        appendLog(`✅ Posted #${idx + 1}: "${item.text}" → ${res.ok ? "ok" : "fail"}`);
      } catch (err) {
        console.error(`❌ Error posting #${idx + 1}:`, err.message);
        appendLog(`❌ Error posting #${idx + 1}: ${err.message}`);
      }
    }, delay);
  });

  // Auto-exit after last post + grace time
  const maxDelay = startDelayMs + (posts.length * intervalMs) + 5 * 60 * 1000;
  setTimeout(() => {
    appendLog("🏁 Auto-post batch completed ✅");
    console.log("🏁 Done.");
    process.exit(0);
  }, maxDelay);
}
