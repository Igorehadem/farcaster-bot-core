import fs from "fs";

export function appendLog(message: string) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync("cast-log.txt", line);
}
