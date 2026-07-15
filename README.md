<div align="center">

# 🩺 Health Genie — AI Personal Health Companion

**A modern, multi-module healthcare assistant for everyday health guidance**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-green?style=flat-square)](LICENSE)

[Features](#-features) · [Quick Start](#-quick-start) · [Architecture](#-architecture) · [Deployment](#-deployment) · [Contributing](#-contributing)

</div>

---

> ⚠️ **Medical Disclaimer:** Health Genie is an educational project — **not** a diagnostic tool. Always consult qualified healthcare professionals for medical decisions. Emergency features do not replace calling local emergency services (e.g., **Rescue 1122 / 15** in Pakistan).

---

## ✨ Features

| Module | Description |
|--------|-------------|
| 🔍 **Symptom Checker** | Interactive symptom assessment with AI-assisted triage |
| 💊 **Medication Assistant** | Medication information, reminders, and interaction awareness |
| 🧘 **Wellness Coach** | Personalized fitness, nutrition, and lifestyle guidance |
| 🧠 **Mental Health Companion** | Supportive, judgment-free mental wellness conversations |
| 🧪 **Lab Report Analyzer** | Analyze lab results via file upload or pasted text |
| 🚑 **Emergency First Aid Guide** | Step-by-step first aid, localized for Pakistan |
| 📅 **Personal Health Planner** | Track appointments, medications, and health goals |
| 🏗️ **Tech Stack Overview** | Built-in architecture and stack documentation |

**Design principles:** modular expansion · privacy awareness · clean architecture · secure AI integration (no keys exposed client-side).

---

## 🛠️ Tech Stack

| Layer | Tools |
|-------|-------|
| **Core UI** | React 18, React Router, TypeScript |
| **Styling** | Tailwind CSS, custom gradients, Lucide Icons |
| **Tooling** | Vite, ESLint, TypeScript ESLint, Autoprefixer |
| **Deployment** | Netlify (GitHub Actions), optional Docker |
| **AI Layer** | GPT‑5 chat reasoning · prompt orchestration *(planned)* · safety filters *(planned)* |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+ (LTS)** — [download here](https://nodejs.org)

Verify your installation:

```bash
node -v
npm -v
```

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/health-genie.git
cd health-genie

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint static analysis |
| `npm run typecheck` | Run TypeScript type checking |

---

## 📁 Project Structure

```
src/
├── App.tsx              # Routing + layout shell (incl. scroll restoration)
├── main.tsx             # Entry bootstrap
├── components/          # Header, Footer, shared UI
└── pages/               # Feature modules (each isolated)
public/                  # Static assets
tailwind.config.js       # Tailwind setup
vite.config.ts           # Vite configuration
eslint.config.js         # ESLint flat config
```

---

## 🏛️ Architecture

The app is currently **frontend-only**. AI calls will route through a secure backend proxy (planned) following this flow:

```
User Input → Backend Proxy → GPT‑5 → Post-processing → Client
```

1. **Accept** structured user input (symptoms, labs, context)
2. **Apply** prompt templates + guardrails
3. **Call** the GPT‑5 provider with a server-side secret key
4. **Post-process** responses (safety filters, disclaimers, normalization)
5. **Return** minimal JSON to the client

### Planned Enhancements

- Persistent state (local / encrypted storage)
- Feature toggles & model abstraction
- Internationalization (Urdu 🇵🇰 + English 🇬🇧)
- Accessibility polish (ARIA landmarks & focus management)

---

## 🔒 Security & Privacy

- ✅ No API keys or PHI stored in the client bundle
- ✅ Environment variables loaded only at build time or server runtime
- ✅ Input normalization before any model call *(planned)*
- ✅ Defensive disclaimers on all medical / emergency features

### Adding Secrets

1. Create a `.env` file (**never commit it**):

   ```bash
   VITE_API_BASE_URL=https://your-proxy.example.com
   ```

2. Access it via `import.meta.env.VITE_API_BASE_URL`.
3. Implement a small backend proxy (Node / Express / Fastify) that injects the real AI key **server-side**.

---

## ☁️ Deployment

### Netlify (Production)

Deployment is automated via GitHub Actions — see [`.github/workflows/deploy-netlify.yml`](.github/workflows/deploy-netlify.yml).

**Required repository secrets:**

| Secret | Where to find it |
|--------|------------------|
| `NETLIFY_AUTH_TOKEN` | Netlify → User settings → Applications → Personal access tokens |
| `NETLIFY_SITE_ID` | Netlify → Site settings → Site information |

**First-time setup:**

1. Create a site in Netlify (no build required) or via CLI.
2. Add both secrets to your GitHub repository settings.
3. Push to `main` → the workflow builds and deploys automatically.

**Useful commands:**

```bash
# Test the production build locally
npm install && npm run build

# Manual CLI deploy (alternative)
npx netlify deploy --build --prod

# Rollback to a previous commit
netlify deploy --prod --commit=<git-sha>

# View production logs
netlify logs --prod
```

> SPA routing is handled by `netlify.toml`.

---

## 📏 Coding Standards

- Functional React components with hooks only
- **Type-first:** explicit interfaces for complex objects
- Tailwind utility classes grouped logically (layout → color → effects)
- No default `React` import (automatic JSX runtime)
- Lint before every commit (`npm run lint`)
- Keep components under **~300 lines** — extract subcomponents when larger

---

## 🤝 Contributing

1. **Branch:** `feat/<scope>-<short-description>`
2. **Verify:** run `npm run lint` and `npm run typecheck` before pushing
3. **Commit:** use [Conventional Commits](https://www.conventionalcommits.org) — e.g., `feat(symptom): add severity scoring`
4. **PR:** include Purpose, Implementation notes, and Screenshots (for UI changes)
5. **Check:** ensure no secrets or tokens appear in the diff

---

## 🧯 Troubleshooting

| Issue | Resolution |
|-------|------------|
| `npm install` fails | Confirm Node 18+, delete `node_modules` + `package-lock.json`, retry |
| Styles missing | Ensure `index.css` imports the Tailwind directives, then rebuild |
| Route loads scrolled down | Scroll restoration is handled by `ScrollToTop` in `App.tsx` |
| AI not responding | Backend proxy not yet implemented — use mock responses |

---

## 🗺️ Roadmap

- [ ] Backend proxy for secure GPT‑5 calls
- [ ] Real-time symptom triage refinement
- [ ] PDF lab report parsing
- [ ] Offline / PWA support
- [ ] Role-based user profiles
- [ ] Multi-language support (Urdu)

---

## 📄 License

Licensed under the **Apache License, Version 2.0** — see the [LICENSE](LICENSE) file for details.

You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0). Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an **"AS IS" BASIS**, without warranties or conditions of any kind.

Copyright © 2025 Michael Drew

---

## 👤 About the Author

**Michael Drew** — Senior Software Engineer

[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:michaeldrew0619@gmail.com)

*Feel free to reach out with questions or suggestions!*

---

<div align="center">

**⭐ If you find this project useful, consider giving it a star!**

</div>
