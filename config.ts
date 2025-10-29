// Farcaster Bot Core – configuration module
try {
  await import('dotenv/config');
} catch {
  console.log('⚠️ dotenv not found — skipping env load (CI-safe)');
}

export const config = {
  neynarApiKey: process.env.FARCASTER_API_KEY || "",
  botName: process.env.BOT_NAME || "farcaster-bot",
  postInterval: Number(process.env.POST_INTERVAL_MINUTES || 0.1),
};

export function printConfig() {
  console.log("🧩 Farcaster Bot Config Loaded:");
  console.log(`Bot Name: ${config.botName}`);
  console.log(`Interval: ${config.postInterval} min`);
}
