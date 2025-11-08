// ----------------------------------------------------------
// 🌐 Farcaster Bot Core — Neynar Client Wrapper
// Safe mock client for testing Farcaster post requests
// Replace with real Neynar SDK when ready
// ----------------------------------------------------------

import { config } from "../../config.js";
import { appendLog } from "./logger.js";

export async function postCast({
  text,
  imageUrl,
}: {
  text: string;
  imageUrl?: string;
}) {
  if (!config.neynarApiKey || !config.signerUuid) {
    throw new Error("Missing NEYNAR_API_KEY or SIGNER_UUID in environment");
  }

  const payload = {
    text,
    imageUrl: imageUrl || null,
    signer: config.signerUuid,
  };

  console.log("🟣 [postCast] mock send:", payload);
  appendLog(`🟣 Mock cast → "${text}" ${imageUrl ? `[img:${imageUrl}]` : ""}`);

  // 🔸 When ready, replace this block with real API request:
  /*
  const res = await fetch("https://api.neynar.com/v2/farcaster/cast", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api_key": config.neynarApiKey,
    },
    body: JSON.stringify({
      signer_uuid: config.signerUuid,
      text,
      embeds: imageUrl ? [{ url: imageUrl }] : [],
    }),
  });
  if (!res.ok) throw new Error(`Neynar error: ${res.status} ${await res.text()}`);
  const data = await res.json();
  appendLog(`✅ Posted: ${data.cast.hash}`);
  return data;
  */

  return { ok: true, mock: true, text };
}
