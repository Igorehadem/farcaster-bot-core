// src/scheduler/autoPosts.js
// Schedule a one-time batch of 3 Farcaster posts spaced 1 hour apart.
// Each post includes demo text and an optional image URL (from ENV or fallback placeholders).

const { postCast } = require("../utils/neynarClient");

const HOUR_MS = 60 * 60 * 1000;

// Demo content — replace with your own later.
const posts = [
  {
    text: "🚀 Post #1 — testing auto-posting from farcaster-bot-core. Securely linking GitHub × Farcaster × Wallet.",
    imageUrl: process.env.POST_IMAGE_URL_1 || "https://picsum.photos/seed/alpha/1200/630",
  },
  {
    text: "🧩 Post #2 — +1h later. Using a delegated signer: seed phrase stays safe while activity shows on your FID.",
    imageUrl: process.env.POST_IMAGE_URL_2 || "https://picsum.photos/seed/bravo/1200/630",
  },
  {
    text: "🔐 Post #3 — +1h later again. Next step: switch mock client to the real Neynar SDK/API.",
    imageUrl: process.env.POST_IMAGE_URL_3 || "https://picsum.photos/seed/charlie/1200/630",
  },
];

/**
 * Schedule one-time 3-post batch.
 * @param {Object} opts
 * @param {number} opts.startDelayMs  Delay before first post (default 0)
 * @param {number} opts.intervalMs    Interval between posts (default 1h)
 */
async function scheduleOneTimeBatch({ startDelayMs = 0, intervalMs = HOUR_MS } = {}) {
  const startAt = Date.now() + startDelayMs;

  posts.forEach((item, idx) => {
    const delay = startDelayMs + idx * intervalMs;
    const eta = new Date(Date.now() + delay).toISOString();

    console.log(`[scheduler] Scheduled post #${idx + 1} at ${eta}`);

    setTimeout(async () => {
      try {
        console.log(`[scheduler] Posting #${idx + 1}...`);
        const res = await postCast({ text: item.text, imageUrl: item.imageUrl });
        console.log(`[scheduler] Posted #${idx + 1}`, res);
      } catch (e) {
        console.error(`[scheduler] Error posting #${idx + 1}:`, e);
      }
    }, delay);
  });
}

// Allow direct CLI execution: node src/scheduler/autoPosts.js
if (require.main === module) {
  scheduleOneTimeBatch();
  // Prevent immediate process exit: keep alive until timers finish.
  const maxDelay = (posts.length - 1) * HOUR_MS + 5 * 60 * 1000; // +5 min buffer
  setTimeout(() => {
    console.log("[scheduler] Done window. Exiting.");
    process.exit(0);
  }, maxDelay);
}

module.exports = { scheduleOneTimeBatch, posts };
