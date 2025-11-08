// ----------------------------------------------------------
// 🧾 Farcaster Bot Core — Event Types
// Unified structure for onchain ↔ Farcaster bridge
// ----------------------------------------------------------

/**
 * Base onchain or internal event description.
 * Extend this interface for custom bridge payloads.
 */
export interface BaseEvent {
  kind: "transfer" | "mint" | "prediction" | "other";
  txhash?: string;
  from?: string;
  to?: string;
  amount?: string;
  detail?: unknown;
}

/**
 * Event wrapper used for webhook → queue pipeline.
 */
export interface WebhookEvent {
  type: string;
  payload: any;
}
