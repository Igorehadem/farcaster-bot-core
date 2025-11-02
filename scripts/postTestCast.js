// scripts/postTestCast.js
// Post a single test cast immediately (text + optional image) using real Neynar API.

require("dotenv").config();
const { postCast } = require("../src/utils/neynarClient");

(async () => {
  try {
    const text =
      "Test cast via delegated signer — linking GitHub × Farcaster safely. #autopost";

    const imageUrl = process.env.POST_IMAGE_URL_1 || null;

    console.log("[test] Using signer UUID:", process.env.SIGNER_UUID ? "present ✅" : "MISSING ❌");
    console.log("[test] Image URL:", imageUrl || "(none)");

    const out = await postCast({ text, imageUrl });
    console.log("[test] Published cast:", out);
  } catch (e) {
    console.error("[test] Error:", e);
    process.exit(1);
  }
})();
