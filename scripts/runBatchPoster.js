// scripts/runBatchPoster.js
// CLI runner to trigger a one-time 3-post batch with 1-hour intervals.
// Includes environment check before scheduling.

require("dotenv").config();
const { scheduleOneTimeBatch } = require("../src/scheduler/autoPosts");

function checkEnv() {
  const required = ["NEYNAR_API_KEY", "SIGNER_PRIVATE_KEY"];
  const missing = required.filter((v) => !process.env[v]);

  if (missing.length) {
    console.error("[env-check] Missing required env variables:", missing.join(", "));
    process.exit(1);
  }

  console.log("[env-check] All required secrets detected ✅");
  console.log("[env-check] Loaded image URLs:");
  console.log(" POST_IMAGE_URL_1:", process.env.POST_IMAGE_URL_1);
  console.log(" POST_IMAGE_URL_2:", process.env.POST_IMAGE_URL_2);
  console.log(" POST_IMAGE_URL_3:", process.env.POST_IMAGE_URL_3);
}

(async () => {
  console.log("[runner] Starting one-time 3-post batch...");
  checkEnv();

  await scheduleOneTimeBatch({ startDelayMs: 0 }); // first post immediately
})();
