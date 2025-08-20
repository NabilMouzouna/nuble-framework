# 🚀 Nuble Roadmap

This document outlines the planned milestones for the Nuble framework.

---

## ✅ Phase 1 – Core Setup (MVP)

Goal: Get **Nuble Core** bootstrapped with minimal but working features.

- [ ] Repo setup with MIT license, README, CONTRIBUTING.md
- [ ] Monorepo with PNPM workspaces (or TurboRepo)
- [ ] Packages:
  - `nuble-core` → framework logic
  - `create-nuble-app` → scaffolder CLI (later)
- [ ] Shared dev tooling:
  - `tsconfig`
  - ESLint + Prettier
  - Husky + lint-staged
- [ ] Nuble Core MVP:
  - `Server` class → auto-start, `.port()`, `.lan()`
  - `Route` DSL → `Route.get("/ping", () => "pong")`
  - Enhanced `Response` → `return {}`, `Response.error()`
  - Hooks → `Hooks.beforeStart`, `Hooks.postStart`
  - Basic error handling + helmet + CORS defaults
- [ ] Example app under `examples/basic`

---

## 🔄 Phase 2 – DX Enhancements

Goal: Reduce friction & add developer sugar.

- [ ] File-based routing → auto-scan `routes/`
- [ ] File-based middleware → auto-apply `middleware.ts`
- [ ] Validated config → `Server.env(z.object({...}))`
- [ ] Better DX logs → pretty startup, LAN IP QR code
- [ ] CLI v1 → `create-nuble-app my-app`

---

## 🚧 Phase 3 – Growth Features

Goal: Make Nuble enterprise-friendly.

- [ ] Authentication plugin (JWT, API keys)
- [ ] Database helpers (Postgres/Mongo + Prisma/Knex)
- [ ] Rate limiting middleware
- [ ] Observability hooks (logging, metrics)
- [ ] Testing utilities (mock requests, fast boot server)

---

## 🏁 Phase 4 – Deployment & Production

Goal: Make Nuble apps easy to ship.

- [ ] Dockerfile generation in scaffolded apps
- [ ] Serverless adapter (AWS Lambda, Vercel)
- [ ] Graceful shutdown hooks
- [ ] Monitoring & performance hooks

---

### 🎯 Philosophy

- **Phase 1:** Nail DX basics (magic setup, clean syntax).
- **Phase 2:** Enhance DX with conventions and automation.
- **Phase 3:** Add ecosystem features (auth, DB, caching).
- **Phase 4:** Production-ready (deploy anywhere, observability).

---