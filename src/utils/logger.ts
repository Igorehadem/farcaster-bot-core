import fs from "fs";

export function logCast(message: string) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync("cast-log.txt", line);
  console.log(`🪶 Logged: ${message}`);
}
