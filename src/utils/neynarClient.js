// src/utils/neynarClient.js
// Minimal wrapper for posting to Farcaster via Neynar API (mock implementation).
// Replace the mock section with the real Neynar SDK call when ready.

/**
 * Posts a cast (text + optional image) to Farcaster using Neynar API.
 * @param {Object} params
 * @param {string} params.text - The text content of the cast.
 * @param {string} [params.imageUrl] - Optional image URL to embed in the cast.
 * @returns {Promise<Object>} - API response or mock object.
 */
async function postCast({ text, imageUrl }) {
  const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
  const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY;

  if (!NEYNAR_API_KEY || !SIGNER_PRIVATE_KEY) {
    throw new Error("Missing required environment variables: NEYNAR_API_KEY or SIGNER_PRIVATE_KEY");
  }

  // === MOCK IMPLEMENTATION ===
  // For now, this only logs the payload to demonstrate the posting flow.
  // Later, replace this block with a real API or SDK request to Neynar.
  console.log("[neynarClient] Mock postCast() called with:", { text, imageUrl });
  return {
    ok: true,
    mock: true,
    postedAt: new Date().toISOString(),
    text,
    imageUrl,
  };

  // === REAL IMPLEMENTATION EXAMPLE (replace above block) ===
  // const res = await fetch("https://api.neynar.com/v2/farcaster/cast", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "api_key": NEYNAR_API_KEY,
  //   },
  //   body: JSON.stringify({
  //     signer_key: SIGNER_PRIVATE_KEY,
  //     text,
  //     embeds: imageUrl ? [{ url: imageUrl }] : [],
  //   }),
  // });
  // if (!res.ok) {
  //   const err = await res.text();
  //   throw new Error(`Neynar API error: ${res.status} ${err}`);
  // }
  // return res.json();
}

module.exports = { postCast };
