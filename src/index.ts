import { postCast } from "./api/neynar.js";
import { every } from "./utils/scheduler.js";
import { printConfig, config } from "../config.js";

printConfig();
console.log("🤖 Farcaster Bot Core initialized.");

every(config.postInterval * 60_000, () => {
  postCast("Hello from Farcaster Bot Core (test run)");
});
