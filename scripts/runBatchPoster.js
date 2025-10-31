// scripts/runBatchPoster.js
// CLI runner to trigger a one-time 3-post batch with 1-hour intervals.
// Reads credentials from environment variables (.env or GitHub Secrets).

require("dotenv").config();
const { scheduleOneTimeBatch } = require("../src/scheduler/autoPosts");

(async () => {
  console.log("[runner] Starting one-time 3-post batch...");
  await scheduleOneTimeBatch({ startDelayMs: 0 }); // First post immediately
  // The process will remain alive until all scheduled posts complete.
})();
