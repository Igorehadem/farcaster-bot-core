import { postCast } from "./api/neynar.js";
import { every } from "./utils/scheduler.js";
import { printConfig, config } from "../config.js";

printConfig();
console.log("🤖 Farcaster Bot Core initialized.");

every(config.postInterval * 60_000, async () => {
  const result = await postCast("auto GM, Farcaster 🌐! #Base");
  console.log(result);
});
