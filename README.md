# Farcaster Bot Core 🤖

Core logic and utilities for building bots on Farcaster.

## Includes
- API wrapper (Neynar planned)
- Message handling system
- Onchain integrations (Base planned)

## Roadmap
- [x] Project initialized
- [x] Neynar API placeholder added
- [ ] Base integration planned
- [ ] Message handler module

## Quick Start (dev)
1) Copy `.env.example` to `.env` and fill keys later.
2) Install deps: `npm i`
3) Build: `npm run build`
4) Run (dry-run): `node dist/index.js`

### Related Projects
- [BaseToken Contract](https://github.com/Igorehadem/base-token-contract)
- [Farcaster Bot Core](https://github.com/Igorehadem/farcaster-bot-core)
- [Builder Journal](https://github.com/Igorehadem/builder-journal)

## API Integration Plan
- Neynar REST client for cast fetching  
- Event-based listener for mentions  
- Optional BaseToken tip trigger via onchain call  
- Logging pipeline via Builder Journal updates  
