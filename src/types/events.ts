// Event types used across Phase 2 (placeholder)
export type BaseEvent =
  | { kind: "transfer"; txHash: string; from: string; to: string; amount: string }
  | { kind: "mint"; txHash: string; to: string; amount: string }
  | { kind: "other"; detail?: unknown };
