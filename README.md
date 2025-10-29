![CI](https://github.com/Igorehadem/farcaster-bot-core/actions/workflows/ci.yml/badge.svg)

# Farcaster Bot Core 🤖

Core logic and utilities for building bots on Farcaster.

## Includes
- API wrapper (Neynar SDK planned)
- Message handling & scheduling system
- Onchain integrations (Base planned)
- CI pipeline (Node 20 + TypeScript)

---

## Roadmap
### Phase 1 — Core Setup
- [x] Add config module  
- [x] Add scheduler  
- [x] Add Neynar API placeholder  
- [x] Fix CI pipeline (Node 20 + TypeScript + @types/node)  
- [x] Implement Neynar postCast() stub (SDK ready) 
- [ ] Add onchain Base events bridge  

### Phase 2 — Automation & Scaling
- [x] Add Message Queue placeholder (`src/utils/queue.ts`)  
- [x] Add Webhook handler stub (`src/hooks/webhook.ts`)  
- [ ] Route webhook → queue → cast templates  
- [ ] Map Base onchain events → Farcaster casts  
- [ ] Add rate-limit & backoff logic  

---

## Quick Start (dev)
1️⃣ Copy `.env.example` → `.env` and fill API keys.  
2️⃣ Install deps: `npm i`  
3️⃣ Build: `npm run build`  
4️⃣ Run (dry-run): `node dist/index.js`

---

## CI Build Status
✅ Passing on **Node 20**  
Tests compile successfully with TypeScript 5.5 and `@types/node`.  

---

## Related Projects
- [BaseToken Contract](https://github.com/Igorehadem/base-token-contract)  
- [Farcaster Bot Core](https://github.com/Igorehadem/farcaster-bot-core)  
- [Builder Journal](https://github.com/Igorehadem/builder-journal)

---

## API Integration Plan
- Neynar REST client for cast publishing & fetching  
- Event-based listener for mentions and onchain actions  
- Optional BaseToken tip trigger via smart-contract call  
- Logging pipeline → Builder Journal updates  

## Demo

Latest bot log sample (auto-generated):
[2025-10-29T09:00:00.000Z] gm Farcaster 🌐 #AutomationTest
[2025-10-29T10:00:00.000Z] gm Farcaster 🌐 #AutomationTest

---

## 🧪 Test Bot Demo

You can run a safe **dry-run** of the Farcaster Bot directly on GitHub Actions.  
It automatically simulates message posting, logs results to `cast-log.txt`,  
and stops after 10 iterations.

[![Run Farcaster Bot (dry-run)](https://github.com/Igorehadem/farcaster-bot-core/actions/workflows/test-bot.yml/badge.svg)](https://github.com/Igorehadem/farcaster-bot-core/actions/workflows/test-bot.yml)

### Sample Output

🤖 Farcaster Bot Core initialized (Phase 2).
⏱ Scheduler started (6s interval)
(stub) Would post cast: gm Farcaster 🌐 (queued)
(stub) Would post cast: Phase 2: queue + webhook placeholders ready
🛑 Reached 10 iterations, stopping scheduler.
✅ Bot ran successfully


➡️ Logs from the latest run are available in the **Artifacts** section  
(`cast-log.zip`) at the bottom of each workflow page.

---




