# Health Genie – AI Health Assistant

Modern multi-module healthcare assistant built with React + TypeScript + Vite + Tailwind CSS. Provides interactive tools:

- Symptom Checker
- Medication Assistant
- Wellness Coach
- Mental Health Companion
- Lab Report Analyzer (file & text input)
- Emergency First Aid Guide (localized for Pakistan)
- Personal Health Planner (appointments, meds, goals)
- Tech Stack / Architecture Overview

Primary AI foundation: GPT‑5 (secure backend integration planned – no keys exposed client‑side). Design emphasizes modular expansion, privacy awareness, and clean architecture.

---
## 1. Tech Stack
| Layer | Tools |
|-------|-------|
| Core UI | React 18, React Router, TypeScript |
| Styling | Tailwind CSS, custom gradients, Lucide Icons |
| Tooling | Vite, ESLint, TypeScript ESLint, Autoprefixer |
| Deployment | GitHub Pages (script), optional Docker |
| AI Layer | GPT‑5 (chat reasoning), prompt orchestration (planned), safety filters (planned) |

---
## 2. Quick Start
Prerequisites:
- Node.js 18+ (LTS) https://nodejs.org

Verify installation:
```powershell
node -v
npm -v
```

Install dependencies:
```powershell
cd "C:\Users\dell\Downloads\project-bolt-sb1-cvwhojcs\project"
npm install
```

Start development server:
```powershell
npm run dev
```
Open http://localhost:5173 (default).

Production build & local preview:
```powershell
npm run build
npm run preview
```

Static analysis / lint:
```powershell
npm run lint
```

Type checking:
```powershell
npm run typecheck
```

---
## 3. Project Structure
```
src/
  App.tsx              # Routing + layout shell
  main.tsx             # Entry bootstrap
  components/          # Header, Footer, shared UI
  pages/               # Feature modules (each isolated)
public/                # Static assets
tailwind.config.js     # Tailwind setup
vite.config.ts         # Vite configuration
eslint.config.js       # ESLint flat config
```

---
## 4. Architecture Notes
Frontend only at present; AI calls will route through a server (planned) to:
1. Accept structured user input (symptoms, labs, context)
2. Apply prompt templates + guardrails
3. Call GPT‑5 provider with secured secret key
4. Post‑process (safety, disclaimers, normalization)
5. Return minimal JSON to the client

Planned enhancements:
- Persistent state (local storage / encrypted storage)
- Feature toggle & model abstraction
- Internationalization (Urdu + English)
- Accessibility polish (ARIA landmarks & focus management)

---
## 5. Security & Privacy Principles
- No API keys or PHI stored in client bundle
- Environment variables only loaded in build or server runtime
- Input normalization before any model call (planned)
- Defensive disclaimers for medical / emergency features

To add secrets later:
1. Create `.env` (never commit):
   ```bash
   VITE_API_BASE_URL=https://your-proxy.example.com
   ```
2. Access with `import.meta.env.VITE_API_BASE_URL`.
3. Implement a small backend proxy (Node/Express/Fastify) that injects the real AI key server‑side.

---
## 6. Deployment
### Netlify (Production)
Automated via GitHub Actions (`.github/workflows/deploy-netlify.yml`).

Secrets required in repository settings:
- `NETLIFY_AUTH_TOKEN` (from Netlify User settings > Applications > Personal access tokens)
- `NETLIFY_SITE_ID` (Site settings > Site information)

First-time manual setup:
1. Create site in Netlify (no build yet) or via CLI.
2. Add the two secrets to GitHub repo.
3. Push to `main` -> workflow builds & deploys.

Local test build:
```powershell
npm install
npm run build
```

Manual CLI deploy (alternative):
```powershell
npx netlify deploy --build --prod
```

Rollback:
```powershell
netlify deploy --prod --commit=<git-sha>
```

Logs:
```powershell
netlify logs --prod
```

SPA routing handled by `netlify.toml`.

---
## 7. Coding Standards
- Functional React components, hooks only
- Type-first: prefer explicit interfaces for complex objects
- Tailwind utility classes grouped logically (layout → color → effects)
- No default `React` import (automatic JSX runtime)
- Lint before commit (`npm run lint`)
- Keep components under ~300 lines; extract subcomponents if larger

---
## 8. Contributing (Internal Guidelines)
1. Create a feature branch: `feat/<scope>-<short-description>`
2. Run lint + typecheck before push
3. Use conventional commits (e.g., `feat(symptom): add severity scoring`)
4. Open PR with: Purpose, Implementation, Screenshots (if UI)
5. Ensure no secrets / tokens in diff

---
## 9. Troubleshooting
| Issue | Resolution |
|-------|------------|
| `npm install` fails | Confirm Node 18+, delete `node_modules` + `package-lock.json`, retry |
| Styles missing | Ensure `index.css` imports Tailwind directives & rebuild |
| Route loads scrolled | Scroll restoration added in `App.tsx` (ScrollToTop) |
| AI not responding | Backend proxy not yet implemented (use mock responses) |

---
## 10. Legal & Medical Disclaimer
This project is educational; not a diagnostic tool. Always consult qualified healthcare professionals for medical decisions. Emergency features do not replace calling local services (e.g., Rescue 1122 / 15 in Pakistan).

---
## 11. Roadmap (High-Level)
- [ ] Backend proxy (secure GPT‑5 calls)
- [ ] Real-time symptom triage refinement
- [ ] PDF lab report parsing
- [ ] Offline / PWA support
- [ ] Role-based user profiles
- [ ] Multi-language (Urdu)

---
## 12. License
Licensed under the Apache License, Version 2.0. You may not use this project except in compliance with the License.

You may obtain a copy of the License at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the `LICENSE` file for the specific language governing permissions and limitations.

Copyright © 2025 Muhammad Atif Latif

---


# About the Author

<div style="background-color: #f8f9fa; border-left: 5px solid #28a745; padding: 20px; margin-bottom: 20px; border-radius: 5px;">
  <h2 style="color: #28a745; margin-top: 0; font-family: 'Poppins', sans-serif;">Muhammad Atif Latif</h2>
  <p style="font-size: 16px; color: #495057;">Data Scientist & Machine Learning Engineer</p>
  
  <p style="font-size: 15px; color: #6c757d; margin-top: 15px;">
    Passionate about building AI solutions that solve real-world problems. Specialized in machine learning, 
    deep learning, and data analytics with experience implementing production-ready models.
  </p>
</div>

## Connect With Me

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
  <a href="https://github.com/m-Atif-Latif" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Follow-212121?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://www.kaggle.com/matiflatif" target="_blank">
    <img src="https://img.shields.io/badge/Kaggle-Profile-20BEFF?style=for-the-badge&logo=kaggle" alt="Kaggle">
  </a>
  <a href="https://www.linkedin.com/in/muhammad-atif-latif-13a171318" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin" alt="LinkedIn">
  </a>
  <a href="https://x.com/mianatif5867" target="_blank">
    <img src="https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=for-the-badge&logo=twitter" alt="Twitter">
  </a>
  <a href="https://www.instagram.com/its_atif_ai/" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-Follow-E4405F?style=for-the-badge&logo=instagram" alt="Instagram">
  </a>
  <a href="mailto:muhammadatiflatif67@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail" alt="Email">
  </a>
</div>

---

<div style="font-size: 14px; color: #6c757d; text-align: center; margin-top: 20px;">
Feel free to reach out if you have any questions or suggestions!


</div>

Maintained by Muhammad Atif Latif. Clean, modular, production-ready foundation.
