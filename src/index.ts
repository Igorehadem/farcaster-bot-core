import { postCast } from "./api/neynar";
import { every } from "./utils/scheduler";

console.log("Farcaster Bot Core initialized.");

// demo tick (no network calls yet)
every(60_000, () => {
  postCast("Hello from Farcaster Bot Core (dry-run)");
});
