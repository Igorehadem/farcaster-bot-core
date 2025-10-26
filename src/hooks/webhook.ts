// Webhook handler stub for onchain → Farcaster events (Phase 2)
export type WebhookEvent = {
  type: string;
  payload?: unknown;
};

export function handleWebhook(event: WebhookEvent) {
  console.log("⚡ webhook:", event.type || "unknown", event.payload ? "(payload)" : "");
  // TODO: route into MessageQueue in Phase 2.1
}
