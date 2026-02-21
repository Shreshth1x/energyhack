# GridMind

## What It Is
AI auditor for local governments overwhelmed by AI-era infrastructure permit applications (data centers, EV networks, battery storage). Sits on the government side of the table — not a developer tool.

## Tech Stack
- **Frontend:** React 18 + Vite, Tailwind CSS (dark gov-terminal aesthetic), Framer Motion, Recharts, Zustand, react-pdf
- **Backend/AI:** Claude Sonnet via Anthropic API, SSE streaming, Node.js serverless API (`/api/review`)
- **Morph:** FastApply (draft ordinance language), WarpGrep (search municipal codes)
- **Deploy:** Vercel

## Key Architecture
- The demo is the **War Room**: a live permit inbox for Loving County, TX (pop. 64, code from 1987)
- 8 pre-loaded demo applications flood in at 3.5s intervals — the "flood animation" IS the product story
- Each application runs through a **4-layer audit pipeline** (all layers run in parallel via Promise.all):
  1. Completeness Check (checklist vs application)
  2. Internal Consistency (contradictions within the app)
  3. Code Compliance (hardcoded jurisdiction profile — NOT live code DB)
  4. Impact Verification (energy math — grid load, water usage vs baselines)
- Pipeline outputs a final **Audit Report** with executive summary + exactly **3 required actions**

## Dev Pointers
- UI is intentionally bureaucratic/utilitarian — NOT sleek startup. Dark bg `#0F1117`, panels `#161B22`.
- Jurisdiction profiles are **hardcoded** for the demo (Loving County). No live code DB.
- Layer 3 compliance is faked intelligently with hardcoded data — looks real, isn't live.
- Claude responses stream token-by-token into the review panel via SSE.
- Zustand store lives in `/src/store/warRoom.js` — manages inbox, active review, flood state.
- The "6,000% of county peak demand" moment (Layer 4) is the most dramatic line in the demo — nail it.
- Building Profile tab is P1 — static mockup is fine, vision is described verbally.
- API key goes in `.env` as `VITE_ANTHROPIC_API_KEY` — never commit.
