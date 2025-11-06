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
- [Base Screener] (https://github.com/Igorehadem/base-wallet-screener) 

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

## 🔐 Environment Variables

Create a local `.env` file (never commit it) based on `.env.example`:

NEYNAR_API_KEY=your_neynar_api_key
SIGNER_PRIVATE_KEY=your_signer_private_key
POST_IMAGE_URL_1=https://yourimage1.url
POST_IMAGE_URL_2=https://yourimage2.url
POST_IMAGE_URL_3=https://yourimage3.url

sql
Копировать код

These variables are required for local runs and GitHub Actions.  
Use `.env.example` as a reference.  
Add your real values only in a local `.env` file or GitHub Secrets.

---

## 🚀 One-Time 3-Post Batch (1-Hour Interval)

### ▶️ Run Locally

node scripts/runBatchPoster.js

markdown
Копировать код

This will:
- Immediately post the first message.  
- Schedule two more posts, each one hour apart.

### ⚙️ Run via GitHub Actions

1. Go to **Settings → Secrets and variables → Actions**  
   Add the following secrets:
   - `NEYNAR_API_KEY`
   - `SIGNER_PRIVATE_KEY`
   - *(optional)* `POST_IMAGE_URL_1`, `POST_IMAGE_URL_2`, `POST_IMAGE_URL_3`
2. Open **Actions → One-time Farcaster autopost batch → Run workflow**  
   to trigger the job manually.

Default demo images use [picsum.photos](https://picsum.photos).  
You can override them by setting your own image URLs or editing  
`src/scheduler/autoPosts.js`.

---

## 🧩 Neynar Client Integration

The file `src/utils/neynarClient.js` provides the helper function:

```js
postCast({ text, imageUrl })
It currently logs mock output for testing.
Replace its body with the actual Neynar SDK or API call using your delegated signer
when you’re ready for real posting.

This approach keeps your main wallet seed completely safe.

⚠️ Security Guidelines
Never commit .env or any real private keys.

Always use a delegated signer, approved in Warpcast.

You can revoke a signer at any time if compromised.

Your main wallet and seed phrase remain untouched.

CI/CD automation must rely only on environment variables and GitHub Secrets.

🧠 Quick Recap
Component	Purpose
.env.example	Reference for required environment variables
src/utils/neynarClient.js	Wrapper for Neynar API (replace mock)
src/scheduler/autoPosts.js	Logic for 3 scheduled posts (1 hour apart)
scripts/runBatchPoster.js	CLI runner for manual execution
.github/workflows/auto-post-batch.yml


