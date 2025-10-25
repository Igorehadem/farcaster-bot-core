// Neynar API client – real implementation for Farcaster Bot
import { NeynarAPIClient } from "neynar";
import { config } from "../../config.js";

const client = new NeynarAPIClient(config.neynarApiKey);

export async function postCast(text: string) {
  try {
    const response = await client.publishCast({
      signer_uuid: process.env.FARCASTER_SIGNER_UUID!,
      text,
    });
    console.log("✅ Cast sent:", response.hash);
    return response;
  } catch (err: any) {
    console.error("❌ Failed to post cast:", err.message);
    return { success: false, error: err.message };
  }
}
