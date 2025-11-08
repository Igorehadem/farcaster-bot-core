// ----------------------------------------------------------
// 🧾 Farcaster Bot Core — Logger Utility
// Handles simple timestamped logging for bot events
// ----------------------------------------------------------

import fs from "fs";

/**
 * Append a single message to the cast log file.
 * Each entry includes ISO timestamp.
 */
export function appendLog(message: string) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync("cast-log.txt", line);
}

/**
 * Write a separator line (useful between runs).
 */
export function divider(label = "session") {
  const line = `\n--- ${label} @ ${new Date().toISOString()} ---\n`;
  fs.appendFileSync("cast-log.txt", line);
  console.log(line.trim());
}

/**
 * Clear the log file (for manual cleanup before test runs).
 */
export function clearLog() {
  if (fs.existsSync("cast-log.txt")) fs.unlinkSync("cast-log.txt");
  console.log("🧹 Cleared cast-log.txt");
}
