[![CI](https://github.com/Igorehadem/farcaster-bot-core/actions/workflows/ci.yml/badge.svg)](https://github.com/Igorehadem/farcaster-bot-core/actions/workflows/ci.yml)
![Node 20](https://img.shields.io/badge/Node-20.x-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

# Farcaster Bot Core 🤖

Core logic and utilities for building bots on Farcaster.

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
- [x] Implement Neynar `postCast()` stub (SDK ready)
- [ ] Add onchain Base events bridge

### Phase 2 — Automation & Scaling
- [x] Add Message Queue placeholder (`src/utils/queue.ts`)
- [x] Add Webhook handler stub (`src/hooks/webhook.ts`)
- [ ] Route webhook → queue → cast templates
- [ ] Map Base onchain events → Farcaster casts
- [ ] Add rate-limit & backoff logic

---

## Quick Start (dev)

1. Copy `.env.example` → `.env` and fill API keys.
2. Install deps: `npm i`
3. Build: `npm run build`
4. Run (dry-run): `node dist/index.js`

---

## CI Build Status

✅ Passing on **Node 20**  
TypeScript 5.x with `@types/node`.

---

## Related Projects

- [Base Screener](https://github.com/Igorehadem/base-wallet-screener)
- [Farcaster Frame Demo](https://github.com/Igorehadem/farcaster-frame-demo)
- [Builder Journal](https://github.com/Igorehadem/builder-journal)

---

## 🔐 Environment Variables

Create a local `.env` file (never commit it) based on `.env.example`:

```env
NEYNAR_API_KEY=your_neynar_api_key
SIGNER_UUID=your_delegated_signer_uuid   # use delegated signer, not a private key
POST_IMAGE_URL_1=https://yourimage1.url
POST_IMAGE_URL_2=https://yourimage2.url
POST_IMAGE_URL_3=https://yourimage3.url
```

These variables are required for local runs and GitHub Actions.  
Use `.env.example` as a reference. Add real values only in a local `.env` file or GitHub Secrets.

---

## 🚀 One-Time 3-Post Batch (1-Hour Interval)

### ▶️ Run Locally

```bash
node scripts/runBatchPoster.js
```

This will:
- Immediately post the first message.
- Schedule two more posts, each one hour apart.

### ⚙️ Run via GitHub Actions

1. Go to **Settings → Secrets and variables → Actions** and add:
   - `NEYNAR_API_KEY`
   - `SIGNER_UUID`
   - *(optional)* `POST_IMAGE_URL_1`, `POST_IMAGE_URL_2`, `POST_IMAGE_URL_3`
2. Open **Actions → One-time Farcaster autopost batch → Run workflow** to trigger the job manually.

Default demo images use [picsum.photos](https://picsum.photos).  
You can override them by setting your own image URLs or editing `src/scheduler/autoPosts.js`.

---

## 🧩 Neynar Client Integration

The file `src/utils/neynarClient.js` provides the helper function:

```js
postCast({ text, imageUrl })
```

It currently logs mock output for testing.  
Replace its body with the actual Neynar SDK or REST call using your **delegated signer** when you’re ready for real posting.  
This approach keeps your main wallet seed completely safe.

---

## ⚠️ Security Guidelines

- Never commit `.env` or any real private keys.
- Always use a **delegated signer**, approved in Warpcast (can be revoked anytime).
- CI/CD automation must rely only on environment variables and GitHub Secrets.

---

## Demo

Latest bot log sample (auto-generated):

```
[2025-10-29T09:00:00.000Z] gm Farcaster 🌐 #AutomationTest
[2025-10-29T10:00:00.000Z] gm Farcaster 🌐 #AutomationTest
```

➡️ Logs from the latest run are available in the **Artifacts** section (`cast-log.zip`) at the bottom of each workflow page.

---

## File Map (high level)

```
.github/workflows/
  ci.yml
  test-bot.yml
  auto-post-batch.yml
assets/images/autopost/
  post1_cyberpunk.jpg, post2_cyberpunk.jpg, post3_cyberpunk.jpg
scripts/
  postTestCast.js
  runBatchPoster.js
src/
  api/ (stubs)
  hooks/webhooks.ts
  scheduler/autoPosts.js
  types/events.ts
  utils/
    logger.ts
    queue.ts
    scheduler.ts
    neynarClient.js
  index.ts
config.ts
```

---

## License

MIT © 2025 Igorehadem

---

## 🧱 Development Summary

> Repository activity and maintenance checklist for Farcaster Bot Core

| # | Commit Type | Description | Status |
|---|--------------|-------------|:------:|
| 1 | `docs:` | ✏️ Rebuilt and cleaned up README with badges & env docs | ✅ |
| 2 | `docs:` | 🧠 Added detailed comments to all GitHub workflows | ✅ |
| 3 | `docs:` | 🔧 Updated `.env.example` and `config.ts` (safe signer) | ✅ |
| 4 | `feat:` | 🧾 Added reusable `logger.ts` utility | ✅ |
| 5 | `refactor:` | ♻️ Integrated logger into `index.ts` | ✅ |
| 6 | `refactor:` | 🚀 Updated scripts (`postTestCast.js`, `runBatchPoster.js`) | ✅ |
| 7 | `feat:` | 🗓 Enhanced auto-post scheduler with structured logging | ✅ |
| 8 | `feat:` | 🪝 Implemented typed webhook handler and event types | ✅ |
| 9 | `chore:` | 🎨 Added Prettier and EditorConfig for code style | ✅ |
| 10 | `docs:` | 🧱 Added this summary checklist to README | ✅ |

---

### 🧩 Highlights
- Modular design: `config`, `logger`, `scheduler`, `webhooks`
- CI-ready with mock Neynar integration
- Consistent code style and logging system
- Ready for **Phase 2: onchain → cast bridge**

_Last updated: **${new Date().toISOString().slice(0,10)}**_
