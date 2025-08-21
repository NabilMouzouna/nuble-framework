# 🌌 Nuble

<div align="center">

![Nuble Logo](https://via.placeholder.com/120x120/4f46e5/ffffff?text=N)

**Opinionated backend framework built on Express**  
*Focus on DX (Developer Experience), readability, and zero boilerplate*

[![npm version](https://img.shields.io/npm/v/nuble.svg)](https://npmjs.com/package/nuble)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Built%20with-Express-000000.svg)](https://expressjs.com/)

</div>

---

## ✨ What is Nuble?

Nuble helps you build backend apps **faster** with a clean, modern approach:

- 🚀 **File-based routing & middleware** → Organize code naturally  
- 🔒 **Built-in security defaults** → CORS, Helmet, rate limiting out of the box  
- 🧩 **Hooks & plugins** → Customize without complexity  
- ✨ **Cleaner syntax** → Write less code, get more done  
- 🛠 **Preconfigured tooling** → TypeScript, ESLint, Prettier, Husky ready to go  

---

## 🎯 Why Choose Nuble?

Backend frameworks are often powerful but **verbose**.  
Nuble is different: it makes code **simpler, safer, and more fun** while still letting you drop down to raw Express when needed.

### Before (Express)
```js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/user', (req, res) => {
  res.json({ id: 1, ...req.body });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### After (Nuble)
```js
import { Server, Route } from "nuble/core";

// Start server with sensible defaults
Server.port(8000).lan(true);

// Define routes cleanly
Route.get("/ping", () => "pong");
Route.post("/user", ({ body }) => ({ id: 1, ...body }));

// Add lifecycle hooks
Server.hooks.beforeStart(() => console.log("🛠 Setting up..."));
```

---

## ⚡ Quick Start

### 1. Create a New Project
```bash
npx create-nuble-app my-app
cd my-app
npm run dev
```

### 2. Project Structure

```text
my-app/
├─ routes/
│  ├─ user/
│  │  ├─ route.ts          # Route definitions
│  │  └─ middleware.ts     # Route-specific middleware
│  └─ auth/
│     ├─ route.ts
│     └─ middleware.ts
├─ src/
│  ├─ index.ts             # Entry point
├─ .eslintrc.js            # ESLint configuration
├─ tsconfig.json           # TypeScript configuration
├─ prettier.config.js      # Prettier configuration
└─ package.json
```

### 3. Your First Route
```js
// routes/hello/route.ts
import { Route } from "nuble/core";

Route.get("/hello", () => ({
  message: "Hello, World!",
  timestamp: new Date().toISOString()
}));

Route.post("/hello", ({ body }) => ({
  message: `Hello, ${body.name}!`,
  received: body
}));
```

---

## 🚀 Core Features

### 🎯 Smart Routing
```js
Route.get("/users/:id", ({ params }) => `User ID: ${params.id}`);
Route.post("/users", ({ body }) => createUser(body));
Route.delete("/users/:id", ({ params }) => deleteUser(params.id));
```

### 🛡️ Security by Default
✅ CORS enabled  
✅ Helmet protection  
✅ Rate limiting  
✅ Request validation

### 🔧 Powerful Hooks
```js
Server.hooks
  .beforeStart(async () => {
    await connectToDatabase();
    console.log("🗄️ Database connected");
  })
  .postStart(() => {
    console.log("🚀 Server ready!");
  })
  .onError((error) => {
    console.error("💥 Server error:", error);
  });
```

### 📁 File-based Middleware
```js
// routes/admin/middleware.ts
export const authMiddleware = ({ headers }) => {
  if (!headers.authorization) {
    throw new Error("Unauthorized");
  }
};
```

### 🌍 Environment Validation
```js
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  PORT: z.coerce.number().default(3000)
});

Server.env(envSchema);
```

---

## 📦 Roadmap (v1.0)

### ✅ Completed
- [x] Auto-starting server
- [x] Route DSL (Route.get, Route.post, etc.)
- [x] Built-in security defaults
- [x] TypeScript support

### 🔧 In Progress
- [ ] File-based routing system
- [ ] File-based middleware
- [ ] Hooks lifecycle system
- [ ] Environment validation with Zod

### 🎯 Planned
- [ ] Pretty logs with colors
- [ ] LAN access with QR codes
- [ ] Plugin system
- [ ] Database integrations
- [ ] Authentication helpers
- [ ] WebSocket support
- [ ] Testing utilities
- [ ] Docker support

→ See [MILESTONES.md](./MILESTONES.md) for full details 
---

## 🤝 Contributing Guidelines

I welcome contributions from the community! 🎉  

- 📐 **Code Style** → Follow the existing style (Prettier + ESLint)  
- 🧪 **Testing** → Write tests for any new features or bug fixes  
- 📚 **Docs** → Update documentation whenever behavior changes  
- 🔀 **Pull Requests** → Submit PRs to the `develop` branch  
- 📄 **Guidelines** → See [CONTRIBUTING.md](./CONTRIBUTING.md) for full details  

---

## 📄 License

Nuble is licensed under the **MIT License**.  
See [LICENSE](./LICENSE) for more information.

---

<div align="center">

**Made with ☕ and ❤️ By Nabil Mouzouna**

[Website](https://github.com/NabilMouzouna/nuble-framework) • [Documentation](https://github.com/NabilMouzouna/nuble-framework) 

</div>