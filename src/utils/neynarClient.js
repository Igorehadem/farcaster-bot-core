// src/utils/neynarClient.js
// Real Neynar API call for posting a cast via delegated signer UUID.
// Docs: POST /v2/farcaster/cast/ (requires x-api-key + signer_uuid)

const API_URL = "https://api.neynar.com/v2/farcaster/cast/";

async function postCast({ text, imageUrl }) {
  const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
  const SIGNER_UUID = process.env.SIGNER_UUID;

  if (!NEYNAR_API_KEY || !SIGNER_UUID) {
    throw new Error(
      "Missing env vars: NEYNAR_API_KEY and/or SIGNER_UUID. " +
      "See .env.example and ensure your signer is approved in Warpcast."
    );
  }

  // Embeds: pass image URL if provided (Farcaster supports URL embeds).
  // Neynar accepts an 'embeds' array; image links may be included as { url }.
  // If you need cast/thread embeds, use { cast_id: { hash, fid } } instead.
  const embeds = imageUrl ? [{ url: imageUrl }] : [];

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": NEYNAR_API_KEY,
    },
    body: JSON.stringify({
      signer_uuid: SIGNER_UUID,
      text,
      embeds,
      // Optional fields you might use later:
      // channel_id: "neynar",
      // parent: "<cast hash or parent_url>",
      // idem: "<your idempotency key>",
    }),
  });

  if (!res.ok) {
    const errTxt = await res.text().catch(() => "");
    throw new Error(`Neynar publish error ${res.status}: ${errTxt}`);
  }

  // Expected: { success: true, cast: { hash, author: { fid }, text } }
  return res.json();
}

module.exports = { postCast };
