// ----------------------------------------------------------
// 🪝 Farcaster Bot Core — Webhook Handler
// Stub for Phase 2: handles onchain → Farcaster events
// ----------------------------------------------------------

import { WebhookEvent } from "../types/events.js";
import { appendLog } from "../utils/logger.js";
import { MessageQueue } from "../utils/queue.js";

const q = new MessageQueue<WebhookEvent>();

/**
 * Entry point for any external or onchain event.
 * Later this will map events → cast templates.
 */
export function handleWebhook(event: WebhookEvent) {
  console.log(`🪝 webhook received: ${event.type}`);
  appendLog(`🪝 webhook: ${event.type}`);
  q.add(event);

  // TODO Phase 2: transform queued event → cast template → postCast()
}
