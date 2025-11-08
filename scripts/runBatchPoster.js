// ----------------------------------------------------------
// 🚀 Farcaster Bot Core — One-time Batch Poster
// Schedules 3 mock posts with 1-hour intervals
// ----------------------------------------------------------

import "dotenv/config";
import { scheduleOneTimeBatch } from "../src/scheduler/autoPosts.js";
import { appendLog, divider } from "../src/utils/logger.js";
import { config } from "../config.js";

function checkEnv() {
  const required = ["NEYNAR_API_KEY", "SIGNER_UUID"];
  const missing = required.filter((v) => !process.env[v]);
  if (missing.length) {
    console.error("⚠️ Missing env vars:", missing.join(", "));
    process.exit(1);
  }
}

(async () => {
  divider("runBatchPoster start");
  try {
    checkEnv();
    console.log("✅ Env check passed. Starting one-time 3-post batch…");
    appendLog("🚀 Starting 3-post batch autoposter");

    await scheduleOneTimeBatch({ startDelayMs: 0 });
    appendLog("✅ Batch autopost finished");

  } catch (e) {
    console.error("❌ Batch error:", e.message);
    appendLog(`❌ Batch error: ${e.message}`);
  } finally {
    divider("runBatchPoster end");
  }
})();
