// ----------------------------------------------------------
// 🧪 Farcaster Bot Core — Single Test Cast Script
// Posts one test cast (mock) using Neynar API wrapper
// ----------------------------------------------------------

import "dotenv/config";
import { postCast } from "../src/utils/neynarClient.js";
import { appendLog, divider } from "../src/utils/logger.js";
import { config } from "../config.js";

(async () => {
  divider("postTestCast run");
  try {
    const text =
      "Test cast via delegated signer — linking GitHub ⚙️ Farcaster safely. #autopost";
    const imageUrl = process.env.POST_IMAGE_URL_1 || null;

    console.log("🧠 Using signer:", config.signerUuid ? "✅ present" : "❌ missing");
    console.log("🖼️ Image URL:", imageUrl || "(none)");

    const result = await postCast({ text, imageUrl });
    console.log("✅ Published mock cast:", result);
    appendLog(`✅ postTestCast → "${text}"`);

  } catch (e) {
    console.error("❌ Error:", e.message);
    appendLog(`❌ postTestCast error: ${e.message}`);
  }
})();
