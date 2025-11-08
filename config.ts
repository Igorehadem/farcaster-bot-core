// ----------------------------------------------------------
// ⚙️ Farcaster Bot Core — Configuration Module
// Loads environment variables for local & CI-safe runs
// ----------------------------------------------------------

try {
  await import("dotenv/config");
} catch {
  console.log("⚠️ dotenv not found — skipping env load (CI-safe)");
}

export const config = {
  neynarApiKey: process.env.NEYNAR_API_KEY || "",
  signerUuid: process.env.SIGNER_UUID || "",
  botName: process.env.BOT_NAME || "farcaster-bot",
  postInterval: Number(process.env.POST_INTERVAL_MINUTES || 0.1),
};

export function printConfig() {
  console.log("🧩 Farcaster Bot Config Loaded:");
  console.log(`Bot: ${config.botName}`);
  console.log(`Interval: ${config.postInterval} min`);
  console.log(`Signer: ${config.signerUuid ? "✅ present" : "❌ missing"}`);
}
