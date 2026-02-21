# GridMind — Product Requirements Document v2.0
**The AI Auditor for Governments Drowning in Infrastructure Permits**
_Hackathon Edition • Feb 2026_

> **The Bet:** In 50 years, cities will be dynamic systems — buildings constantly shifting their energy use, purpose, and infrastructure in response to the world around them. Every one of those changes requires government approval. The government side of that table is completely unserved by technology. GridMind is the compliance layer that lets cities evolve at the speed the future demands.

> **Strategic Framing:** We are NOT a permit filing tool for developers. We are an AI auditor for local governments overwhelmed by the flood of AI-generated infrastructure permit applications. The developer side of permitting is already being automated. GridMind makes sure the government side can keep up.

---

## Table of Contents
1. [The Problem](#1-the-problem)
2. [The Insight](#2-the-insight)
3. [Product Overview](#3-product-overview)
4. [The Demo: The War Room](#4-the-demo-the-war-room)
5. [Tech Stack](#5-tech-stack)
6. [Core Features](#6-core-features)
7. [The Audit System](#7-the-audit-system)
8. [AI Agent Architecture](#8-ai-agent-architecture)
9. [Permit Intelligence Engine](#9-permit-intelligence-engine)
10. [UI/UX Spec: The War Room](#10-uiux-spec-the-war-room)
11. [Build Plan](#11-build-plan)
12. [Business Model](#12-business-model)
13. [Competitive Landscape](#13-competitive-landscape)
14. [Hackathon Demo Script](#14-hackathon-demo-script)
15. [Why This Wins](#15-why-this-wins)
16. [Appendices](#16-appendices)

---

## 1. The Problem

### The Flood Nobody Talks About

Every major tech company — Microsoft, Amazon, Google, Meta — is right now expanding data center infrastructure into rural America. Loving County, Texas. Mecklenburg County, Virginia. Umatilla County, Oregon. Counties with 3 government employees, zoning codes written in 1987, and no regulatory framework for anything more complex than a grain silo.

Meanwhile, these companies have entire teams of lawyers and AI systems generating thousands of pages of permit applications — pre-filled, technically precise, legally optimized — and firing them at local governments that have no idea what they're reading.

**This is the actual bottleneck in American infrastructure development. Not the filing. The reviewing.**

### The Numbers

| Metric | Reality |
|---|---|
| Average hyperscale data center permit application | 400–1,200 pages |
| Average Loving County-type government staff | 2–4 people |
| Time for a small jurisdiction to review a novel infrastructure application | 14–24 months |
| Cost to developer of that delay | $2–10M/month in carrying costs |
| Number of data center applications filed in Texas in 2024 | 340+ |
| Number of those jurisdictions with AI/data center zoning codes | <12% |
| Environmental consulting firms who work government-side | Almost none |

### The Core Dysfunction

The developer's AI generates the application. The government's human reads it. That asymmetry is only getting worse. By 2030, every EV charging network expansion, every battery storage facility, every smart building retrofit, every grid-tied solar installation will come with an AI-generated permit package. Local governments will be completely underwater.

Nobody is solving the government side of this equation. PermitFlow, Spark, Paces — they all sell to developers. The county commissioner sitting across the table from Microsoft has no tools, no support, and no AI in her corner.

**GridMind is that AI.**

---

## 2. The Insight

### The Flip

Every competitor in this space looked at permitting and asked: *"How do we help companies file permits faster?"*

GridMind asks: *"How do we help governments review permits faster?"*

This flip changes everything:

- **Mandatory adoption** — if a county requires GridMind for permit review, every developer who wants to build there has to interact with the product. No sales motion required.
- **Government contracts don't churn** — once embedded in a county's permitting workflow, GridMind is the permitting infrastructure. Switching cost = rebuild your entire government permitting system.
- **The problem accelerates** — AI application generation gets faster every year. Government capacity stays flat. The gap GridMind fills grows automatically.
- **Both sides benefit** — developers get faster approvals. Governments get comprehensible applications. GridMind sits in the middle collecting a processing fee from the party with money: the developer.

### The 50-Year Thesis

Buildings are about to stop being static objects. A building in 2075 may be a residential tower on Monday, a data center annex on Wednesday, and a grid energy storage node on Friday — reconfiguring continuously in response to city needs, energy prices, and tenant demand. Every one of those transitions requires government approval.

The cities that adapt fastest will be the ones whose regulatory infrastructure can keep pace with physical change. GridMind is the operating system that makes that possible. We start with the acute crisis — rural counties drowning in data center applications — and grow into the long-term vision: the compliance layer for the living city.

---

## 3. Product Overview

### What GridMind Is

GridMind is an AI auditor deployed on the government side of the permitting table. When a permit application arrives at a local jurisdiction — for a data center, an EV charging network, a battery storage facility, a smart building retrofit, or any AI-era infrastructure — GridMind:

1. **Reads and interprets** the entire application, regardless of length or complexity
2. **Translates** it from corporate/legal language into plain English for government officials
3. **Audits** it against existing local codes, flagging compliance gaps and missing information
4. **Identifies** what new regulations or classifications the jurisdiction needs to create
5. **Generates** the specific questions officials need to ask before approving
6. **Tracks** the application through the approval process, updating as revisions come in
7. **Learns** from every application to get faster and smarter for the next one

### What GridMind Is Not

- Not a chatbot wrapper — the UI is a government operations dashboard, not a chat interface
- Not a developer tool — we sit on the government side of the table
- Not a simulation — we process real (or realistic) permit applications in real time
- Not a general permitting tool — we specialize in AI-era infrastructure: data centers, EV networks, battery storage, grid-tied energy systems, smart building systems

### The Building Intelligence Layer

Beyond reactive permit review, GridMind maintains a **living profile for every building** it has reviewed. This profile tracks:

- Current permitted use and zoning classification
- Energy systems on file (electrical service size, generators, solar, storage)
- Active and expired permits
- Pending applications and their status
- Change history and trigger log

When a building owner wants to change something — convert office space to data center, add EV charging, switch from gas to electric heating — GridMind already has the building's history. It knows what the current permits say, what the new use requires, and what gap needs to be filed. By the time intent is expressed, the permit stack is 80% pre-built.

---

## 4. The Demo: The War Room

### The Concept

A **real-time permit inbox for Loving County, Texas** — the most extreme possible version of the problem.

Loving County has a population of 64 people. It is the least populated county in the United States. It also sits on top of the Permian Basin and is 90 minutes from Midland, which means it is now receiving serious interest from data center developers who want cheap land, cheap power, and minimal regulatory friction.

The demo shows what happens when that friction meets reality — and what GridMind does about it.

### Why This Demo Works

- **Not a simulation** — it's a live operational dashboard
- **Not a chatbot** — it's a government inbox under siege
- **Emotionally legible** — every judge immediately understands the problem when the third application hits before the first one is reviewed
- **Tells the 50-year story** — the War Room is what today looks like; the building profile layer is what 2075 looks like
- **Interactive** — judges can submit their own fake permit applications and watch GridMind process them live

---

## 5. Tech Stack

### 5.1 Frontend

| Layer | Technology | Notes |
|---|---|---|
| Framework | React 18 + Vite | Fast setup, deploys as static site |
| UI Style | Tailwind CSS — intentionally bureaucratic aesthetic | Dark government dashboard feel. NOT a sleek startup UI. That contrast is part of the story. |
| Animations | Framer Motion | Permit cards flying into inbox, processing animations, approval/rejection states |
| Document viewer | react-pdf | Renders realistic multi-page permit application PDFs in the UI |
| Charts | Recharts | Application volume over time, approval rate, processing speed metrics |
| State | Zustand | Global store for inbox state, permit queue, building profiles |

### 5.2 Backend / AI

| Layer | Technology | Notes |
|---|---|---|
| Primary AI | Claude claude-sonnet-4-6 via Anthropic API | Reads permit applications, generates plain-English summaries, identifies compliance gaps, generates review questions |
| Code editing AI | Morph FastApply | When GridMind recommends regulatory language changes, FastApply applies them to the jurisdiction's code documents in real time |
| Code search | Morph WarpGrep | Searches existing municipal code documents to find relevant regulations for novel application types |
| Streaming | Server-Sent Events | Claude analysis streams token by token into the review panel |
| API layer | Node.js + Vercel serverless | `/api/review` endpoint — takes permit application text, returns streaming analysis |
| Storage | Vercel KV (Redis) | Stores building profiles, permit history, jurisdiction code library |
| Deployment | Vercel | One command deploy |

### 5.3 Morph Integration (All Three Features)

| Feature | How It's Used in GridMind |
|---|---|
| **FastApply** | When GridMind identifies that a jurisdiction needs new regulatory language (e.g. Loving County has no data center zoning code), FastApply generates and applies draft ordinance language to their municipal code template in real time. The county sees a suggested code update, not just a problem flag. |
| **WarpGrep** | When a novel application arrives, WarpGrep searches the jurisdiction's entire existing code library to find the closest applicable regulations — utility regulations, industrial zoning, hazardous materials codes — even when there's no direct match. Finds relevant precedent in seconds instead of hours. |
| **Glance** | Watches every PR to GridMind's codebase, auto-tests the permit intake and review flows in a browser, posts a video to GitHub confirming the War Room UI still processes applications correctly after each deploy. Critical for a product where UI accuracy = regulatory accuracy. |

### 5.4 Key Dependencies

```bash
npm create vite@latest gridmind -- --template react
cd gridmind
npm install framer-motion
npm install react-pdf
npm install recharts
npm install zustand
npm install tailwindcss postcss autoprefixer
npm install @anthropic-ai/sdk
npm install express cors
npx tailwindcss init -p
```

### 5.5 Environment Variables

```bash
# .env — never commit
VITE_ANTHROPIC_API_KEY=sk-ant-your_key_here
MORPH_API_KEY=your_morph_key_here
VITE_DEMO_MODE=true  # enables pre-loaded demo permit applications
```

---

## 6. Core Features

### 6.1 Feature Priorities

| Feature | Description | Priority | Time Est. |
|---|---|---|---|
| Permit Inbox (War Room) | Live feed of incoming permit applications, styled as government dashboard. Cards animate in. Each shows applicant, project type, size, and GridMind status. | P0 | 25 min |
| AI Application Reader | Claude reads the full application text, generates 3-section plain-English summary: what they want to build, what it means for the jurisdiction, what's missing | P0 | 30 min |
| Compliance Gap Detector | GridMind checks application against jurisdiction's existing codes, highlights every gap, flags novel use types the jurisdiction has never classified | P0 | 25 min |
| Review Question Generator | Auto-generates the specific questions officials need to ask before approving — formatted as an official review letter | P0 | 20 min |
| Application Flood Simulator | Pre-loaded queue of 8-10 realistic permit applications that hit the inbox in sequence during demo — data centers, EV networks, battery storage, solar farms | P0 | 20 min |
| Building Profile | Living record for each reviewed building — permitted use, energy systems, active permits, change history | P1 | 25 min |
| Intent-to-Change Flow | Building owner types what they want to change. GridMind shows the full permit cascade required and pre-builds the applications. | P1 | 30 min |
| Regulatory Gap Generator | When jurisdiction has no applicable code, Morph FastApply drafts suggested ordinance language in real time | P2 | 20 min |
| Processing Metrics Dashboard | Shows jurisdiction stats: applications received, average review time (manual vs GridMind), approval rate, backlog size | P2 | 15 min |

### 6.2 The Pre-Loaded Demo Application Queue

These are the 8 applications that hit the Loving County inbox during the demo, in order:

```
Application 1 — Microsoft
Type: Hyperscale Data Center
Scale: 480 MW, 1,200 acres
Novel issue: No data center zoning classification exists
GridMind flag: 6 regulatory gaps, 3 new code sections needed

Application 2 — Tesla Energy
Type: Grid-Scale Battery Storage Facility
Scale: 800 MWh, NFPA 855 compliance required
Novel issue: No battery storage fire code adopted locally
GridMind flag: Missing hazmat permit framework, fire suppression specs absent

Application 3 — Buc-ee's (EV charging)
Type: EV Charging Network Expansion
Scale: 120 DC fast chargers, 4 MW total load
Novel issue: Load addition exceeds existing utility infrastructure
GridMind flag: Requires utility upgrade agreement, TxDOT ROW permits missing

Application 4 — Unnamed LLC
Type: Cryptocurrency Mining Facility
Scale: 95 MW, 24/7 operation
Novel issue: Noise ordinance, cooling water usage, power purchase agreement
GridMind flag: Incomplete — missing 14 required attachments

Application 5 — SunPower
Type: Utility-Scale Solar Farm + Storage
Scale: 200 MW solar, 400 MWh storage
Novel issue: Agricultural land conversion, wildlife corridor impact
GridMind flag: Needs TCEQ air permit, agricultural exemption documentation

Application 6 — Amazon Web Services
Type: AI Training Data Center Campus
Scale: 1.2 GW across 3 phases, 10-year buildout
Novel issue: Largest application ever received by county
GridMind flag: Phased approval framework needed, county has no precedent

Application 7 — Local Hospital
Type: Building Use Conversion — Hospital to Smart Medical Hotel
Scale: 8-floor, 340,000 sq ft, occupancy class change
Novel issue: Complete reclassification, energy system overhaul
GridMind flag: 11 permit types required across 4 agencies

Application 8 — Anonymous
Type: Residential Building — Gas to All-Electric Conversion
Scale: 240-unit apartment complex
Novel issue: Electrical service upgrade, gas line decommission
GridMind flag: Simple — 3 permits, 6 weeks, fully pre-built by GridMind
```

The queue is designed to escalate in complexity and then end with the simple one — showing GridMind handles everything from the overwhelmingly complex to the routine.

---

## 7. The Audit System

This is the core of what GridMind actually does mechanically. When a permit application arrives, GridMind runs it through four sequential audit layers. Each layer is independent — a failure at Layer 1 doesn't block Layer 2 from running. All four results are synthesized into a single structured Audit Report at the end.

---

### 7.1 What's Buildable in 2 Hours vs. Vision-Only

| Audit Layer | Demo Status | Why |
|---|---|---|
| Layer 1 — Completeness Check | ✅ **Build it** | Hardcoded checklist + Claude cross-reference. 20 min. |
| Layer 2 — Internal Consistency | ✅ **Build it** | Single Claude prompt scanning for numerical contradictions. 20 min. |
| Layer 3 — Code Compliance | ⚠️ **Fake it intelligently** | Hardcode Loving County's profile. Can't ingest real codes in 2 hrs. Looks and behaves real. 15 min. |
| Layer 4 — Impact Verification | ✅ **Build it** | Energy math already exists from GridMind ATX v1. 15 min. |
| Audit Report + 3 Actions | ✅ **Build it** | Claude's final structured output. 15 min. |
| Live municipal code database | 🔭 **Vision only** | Describe as "ingesting every Texas jurisdiction's codes." Don't demo live. |
| Morph WarpGrep live code search | 🔭 **Vision only** | Describe the concept. Mock the output if needed. |
| Morph FastApply live ordinance drafting | ⚠️ **Fake it** | Pre-written draft that "appears" on gap detection. Concept lands without live API. |
| Full building profile layer | 🔭 **Vision only** | Show as static mockup. This is the 50-year story. |
| Cross-jurisdiction expansion | 🔭 **Vision only** | Pure narrative. "Texas first, then every high-growth state." |

---

### 7.2 Layer 1 — Completeness Check

**What it does:** Checks whether the application contains every document and piece of information it is legally required to include. This is the most basic layer but eliminates weeks of back-and-forth between county staff and applicants.

**How it works:** GridMind has hardcoded required document checklists per permit type per jurisdiction. Claude reads the application and cross-references against the checklist for the detected project type.

**What it outputs:** A red/yellow/green completeness scorecard. Every missing item listed explicitly with the exact document name needed to satisfy it.

**Demo status:** ✅ Build it — 20 minutes

**Claude Prompt:**
```javascript
const COMPLETENESS_SYSTEM = `
You are GridMind performing a completeness audit on a permit application.
You will be given a required document checklist for this permit type and jurisdiction,
and the full application text.

For each required item on the checklist, determine:
- PRESENT: The application clearly includes this
- PARTIAL: The application mentions this but it appears incomplete
- MISSING: The application does not include this at all

Return your response as a JSON object with this exact structure:
{
  "score": <number 0-100>,
  "status": "complete" | "incomplete" | "critically_incomplete",
  "items": [
    {
      "requirement": "<item name>",
      "status": "present" | "partial" | "missing",
      "note": "<brief explanation>"
    }
  ],
  "critical_missing": ["<item>", "<item>"] // items whose absence blocks review
}
`;

function buildCompletenessPrompt(application, permitType, jurisdiction) {
  const checklist = PERMIT_CHECKLISTS[permitType][jurisdiction] || PERMIT_CHECKLISTS[permitType]['default'];
  return `
PERMIT TYPE: ${permitType}
JURISDICTION: ${jurisdiction}

REQUIRED DOCUMENT CHECKLIST:
${checklist.map((item, i) => `${i + 1}. ${item}`).join('\n')}

APPLICATION TEXT:
${application.fullText}

Run the completeness audit. Return JSON only.
  `;
}
```

**Hardcoded Checklists (Phase 1):**
```javascript
const PERMIT_CHECKLISTS = {
  'data_center': {
    'default': [
      'Site plan with property boundaries and setbacks',
      'Electrical single-line diagram',
      'Utility pre-application confirmation letter',
      'Backup generator specifications including fuel type and NOx emissions',
      'Cooling system design and water usage calculations',
      'Stormwater management plan',
      'Traffic impact analysis',
      'Noise impact study',
      'TCEQ pre-consultation letter (if generators >250 kW)',
      'ERCOT large load interconnection pre-application (if load >10 MW)',
      'Fire suppression system design',
      'Hazardous materials inventory (batteries, fuel)',
      'Grading and drainage plan',
      'Utility easement documentation'
    ]
  },
  'battery_storage': {
    'default': [
      'Site plan',
      'NFPA 855 compliance documentation',
      'Fire suppression system design',
      'Hazardous materials permit application (TCEQ)',
      'Battery chemistry specifications and safety data sheets',
      'Thermal management system design',
      'Emergency response plan',
      'PUCT notification (if >10 MW)',
      'Utility interconnection agreement',
      'Electrical permit application',
      'Setback calculations from occupied structures'
    ]
  },
  'ev_charging': {
    'default': [
      'Site plan showing charger locations',
      'Electrical permit application',
      'Load addition request to serving utility',
      'Single-line electrical diagram',
      'TxDOT right-of-way permit (if applicable)',
      'ADA accessibility compliance documentation',
      'Utility interconnection agreement (if >50 kW total)'
    ]
  },
  'building_use_change': {
    'default': [
      'Current certificate of occupancy',
      'Proposed occupancy classification',
      'Building code compliance analysis for new use',
      'Fire and life safety plan',
      'Electrical service capacity analysis',
      'Mechanical/HVAC plan',
      'ADA compliance review',
      'Zoning use change application',
      'Parking analysis for new use',
      'Energy code compliance documentation'
    ]
  }
};
```

---

### 7.3 Layer 2 — Internal Consistency Check

**What it does:** Reads the entire application and finds places where the numbers, claims, or specifications contradict each other. Large AI-generated applications assembled from boilerplate frequently have internal contradictions that expose either errors or deliberate obfuscation.

**How it works:** Single Claude prompt with the full application text, instructed to find numerical and factual discrepancies across sections.

**What it outputs:** A numbered list of inconsistencies with specific references to where the conflicting information appears, and the exact nature of the discrepancy.

**Demo status:** ✅ Build it — 20 minutes

**Claude Prompt:**
```javascript
const CONSISTENCY_SYSTEM = `
You are GridMind performing an internal consistency audit on a permit application.
Your job is to find contradictions, discrepancies, and inconsistencies WITHIN the
application itself — not against external codes, but against its own claims.

Look specifically for:
- Numerical contradictions (load figures, square footage, water usage, capacity stated differently in different sections)
- Specification mismatches (equipment specs that don't match stated performance claims)
- Timeline contradictions (phasing plans that conflict with permit sequencing)
- Capacity contradictions (stated capacity vs. design specs that don't support it)
- Environmental claim contradictions (impact claims that conflict with technical specs)

Return your response as a JSON object:
{
  "inconsistencies_found": <number>,
  "severity": "none" | "minor" | "significant" | "critical",
  "findings": [
    {
      "id": <number>,
      "severity": "minor" | "significant" | "critical",
      "description": "<what the contradiction is>",
      "location_a": "<where the first claim appears — section/page>",
      "claim_a": "<the first claim>",
      "location_b": "<where the conflicting claim appears>",
      "claim_b": "<the conflicting claim>",
      "implication": "<why this matters for the jurisdiction>"
    }
  ]
}

If no inconsistencies are found, return findings as an empty array.
`;

function buildConsistencyPrompt(application) {
  return `
APPLICATION: ${application.company} — ${application.type}

FULL APPLICATION TEXT:
${application.fullText}

Run the internal consistency audit. Return JSON only.
  `;
}
```

---

### 7.4 Layer 3 — Code Compliance Check

**What it does:** Checks the proposed project against the jurisdiction's existing municipal codes, state regulations, and federal requirements. Flags clear violations, gray areas requiring interpretation, and — critically — classifications that don't exist yet.

**How it works (demo):** Jurisdiction profiles are hardcoded with their key code provisions and known gaps. Claude checks the application against the hardcoded profile. In production this would be a live code database searched via Morph WarpGrep.

**What it outputs:** Per-code-section findings (green/yellow/red) plus a separate section for "no applicable code exists" flags.

**Demo status:** ⚠️ Fake it intelligently — 15 minutes. Hardcode Loving County's profile. Looks and behaves real.

**Hardcoded Jurisdiction Profile:**
```javascript
const JURISDICTION_PROFILES = {
  loving_county_tx: {
    name: "Loving County, TX",
    population: 64,
    code_version: 1987,
    applicable_codes: [
      {
        section: "Zoning Ordinance §4.2",
        title: "Heavy Industrial Use",
        description: "Permits manufacturing, processing, and storage facilities",
        max_lot_coverage: 0.60,
        min_setback_road_ft: 150,
        min_setback_residential_ft: 500,
        noise_limit_db: 65,
        applies_to: ["data_center", "battery_storage", "crypto_mining"]
      },
      {
        section: "Zoning Ordinance §3.1",
        title: "Agricultural/Open Land",
        description: "Default classification for undeveloped land",
        applies_to: ["solar_farm"]
      },
      {
        section: "Building Code §12",
        title: "Electrical Systems",
        description: "Adopts 2017 NEC by reference",
        applies_to: ["all"]
      }
    ],
    classification_gaps: [
      {
        gap: "No data center zoning classification",
        severity: "critical",
        nearest_applicable: "Heavy Industrial §4.2",
        note: "County has never classified a data center. Heavy Industrial is the closest applicable category but was written for manufacturing, not compute infrastructure."
      },
      {
        gap: "No large load interconnection framework (>10 MW)",
        severity: "critical",
        nearest_applicable: "None",
        note: "County has no mechanism to evaluate or condition approval of loads that exceed current grid infrastructure capacity."
      },
      {
        gap: "No battery storage regulations",
        severity: "critical",
        nearest_applicable: "Hazardous Materials §8.4 (partial)",
        note: "NFPA 855 not adopted. No fire code provisions specific to lithium-ion battery arrays."
      },
      {
        gap: "No cooling water usage regulations",
        severity: "significant",
        nearest_applicable: "None",
        note: "No framework for evaluating or limiting industrial groundwater withdrawal. Permian Basin aquifer depletion is an active concern."
      },
      {
        gap: "No EV charging infrastructure classification",
        severity: "minor",
        nearest_applicable: "Commercial Use §2.3",
        note: "Minor gap — commercial electrical code generally applies."
      }
    ]
  }
};
```

**Claude Prompt:**
```javascript
const COMPLIANCE_SYSTEM = `
You are GridMind performing a code compliance audit on a permit application.
You will be given the jurisdiction's applicable codes and known classification gaps,
and the full application text.

For each applicable code section, determine whether the application is:
- COMPLIANT: Application clearly meets this requirement
- LIKELY_COMPLIANT: Application appears to meet this but lacks sufficient detail to confirm
- VIOLATION: Application clearly does not meet this requirement — cite the specific conflict
- UNVERIFIABLE: Cannot determine compliance from the information provided
- NO_CODE_EXISTS: No applicable regulation covers this aspect of the project

Return your response as JSON:
{
  "overall_status": "compliant" | "violations_found" | "gaps_found" | "critical_gaps",
  "compliance_findings": [
    {
      "code_section": "<section reference>",
      "requirement": "<what the code requires>",
      "status": "compliant" | "likely_compliant" | "violation" | "unverifiable" | "no_code_exists",
      "finding": "<specific finding>",
      "severity": "info" | "minor" | "significant" | "critical"
    }
  ],
  "classification_gaps": [
    {
      "gap": "<what classification is missing>",
      "severity": "minor" | "significant" | "critical",
      "implication": "<what this means for the jurisdiction's ability to approve or deny>"
    }
  ]
}
`;

function buildCompliancePrompt(application, jurisdictionProfile) {
  return `
JURISDICTION: ${jurisdictionProfile.name}
CODE VERSION: ${jurisdictionProfile.code_version}

APPLICABLE CODE SECTIONS:
${JSON.stringify(jurisdictionProfile.applicable_codes, null, 2)}

KNOWN CLASSIFICATION GAPS:
${JSON.stringify(jurisdictionProfile.classification_gaps, null, 2)}

APPLICATION:
Company: ${application.company}
Type: ${application.type}
Scale: ${application.scale}
Key specs: ${application.keySpecs}

APPLICATION TEXT:
${application.fullText}

Run the code compliance audit. Return JSON only.
  `;
}
```

---

### 7.5 Layer 4 — Impact Verification Check

**What it does:** Takes the applicant's own stated impact claims and verifies them against GridMind's independent energy and infrastructure models. This is the layer that catches the most consequential misrepresentations — when a company claims "minimal grid impact" for a 480 MW load, or "negligible water usage" for a 2M gallon/day cooling system.

**How it works:** Extracts the applicant's key impact claims from the application, then runs GridMind's energy simulation model against them. Uses real ERCOT data and Austin Energy/Texas grid baseline numbers from GridMind ATX v1.

**What it outputs:** Per-claim verdicts — Substantiated, Unsubstantiated, or Requires Additional Data — with GridMind's independent analysis and the specific delta between claimed and modeled impact.

**Demo status:** ✅ Build it — 15 minutes. The energy math already exists from v1.

**Claude Prompt (claim extraction):**
```javascript
const CLAIM_EXTRACTION_SYSTEM = `
You are GridMind extracting impact claims from a permit application for independent verification.

Extract every quantitative or qualitative claim the applicant makes about:
- Grid and energy infrastructure impact
- Water usage and aquifer impact  
- Traffic and transportation impact
- Noise and environmental impact
- Economic and employment impact
- Construction and operational timeline

Return as JSON:
{
  "claims": [
    {
      "id": <number>,
      "category": "grid" | "water" | "traffic" | "noise" | "economic" | "timeline",
      "claim": "<exact claim as stated in application>",
      "claimed_value": "<specific number or qualifier if stated>",
      "verifiable": true | false,
      "verification_method": "<how GridMind can check this>"
    }
  ]
}
`;
```

**Impact Verification Logic:**
```javascript
// /src/lib/impactVerification.js
import { calculateTotalDemand, calculateGridStress } from './energyModel.js';

const TEXAS_GRID_BASELINES = {
  loving_county: {
    current_peak_mw: 8,        // tiny county, tiny grid
    substation_capacity_mw: 180,
    nearest_substation: 'Wink 138kV Substation',
    aquifer: 'Permian Basin (Pecos Valley)',
    aquifer_sustainable_withdrawal_gpd: 4200000,
    current_industrial_withdrawal_gpd: 1800000
  },
  travis_county: {
    current_peak_mw: 3200,
    substation_capacity_mw: 4100,
    nearest_substation: 'Multiple — Austin Energy territory',
    aquifer: 'Edwards Aquifer',
    aquifer_sustainable_withdrawal_gpd: 450000000,
    current_industrial_withdrawal_gpd: 180000000
  }
};

export function verifyGridImpactClaim(claim, applicationSpecs, jurisdiction) {
  const baseline = TEXAS_GRID_BASELINES[jurisdiction];
  const proposedLoadMW = applicationSpecs.loadMW;
  const loadAsPercentOfPeak = (proposedLoadMW / baseline.current_peak_mw) * 100;
  const loadAsPercentOfSubstation = (proposedLoadMW / baseline.substation_capacity_mw) * 100;

  let verdict, analysis, severity;

  if (loadAsPercentOfPeak > 100) {
    verdict = 'UNSUBSTANTIATED';
    severity = 'critical';
    analysis = `Proposed load of ${proposedLoadMW} MW represents ${loadAsPercentOfPeak.toFixed(0)}% of ${jurisdiction.replace('_', ' ')}'s current peak demand. The nearest substation (${baseline.nearest_substation}) has ${baseline.substation_capacity_mw} MW capacity — this project would consume ${loadAsPercentOfSubstation.toFixed(0)}% of that. A claim of "minimal grid impact" is not supportable. A new substation or major transmission upgrade is almost certainly required.`;
  } else if (loadAsPercentOfPeak > 25) {
    verdict = 'UNSUBSTANTIATED';
    severity = 'significant';
    analysis = `Proposed load represents ${loadAsPercentOfPeak.toFixed(0)}% of current peak demand. This is material grid impact requiring a formal ERCOT interconnection study regardless of applicant's characterization.`;
  } else {
    verdict = 'REQUIRES_ADDITIONAL_DATA';
    severity = 'minor';
    analysis = `Load impact appears manageable but requires confirmation via ERCOT large load pre-application process.`;
  }

  return { claim, verdict, severity, gridmind_analysis: analysis,
           claimed_value: claim.claimed_value, modeled_value: `${loadAsPercentOfPeak.toFixed(0)}% of local peak demand` };
}

export function verifyWaterUsageClaim(claim, applicationSpecs, jurisdiction) {
  const baseline = TEXAS_GRID_BASELINES[jurisdiction];
  const proposedGPD = applicationSpecs.waterUsageGPD;
  const availableGPD = baseline.aquifer_sustainable_withdrawal_gpd - baseline.current_industrial_withdrawal_gpd;
  const usageAsPercentOfAvailable = (proposedGPD / availableGPD) * 100;

  return {
    claim,
    verdict: usageAsPercentOfAvailable > 50 ? 'UNSUBSTANTIATED' : 'REQUIRES_ADDITIONAL_DATA',
    severity: usageAsPercentOfAvailable > 50 ? 'critical' : 'significant',
    gridmind_analysis: `Proposed usage of ${(proposedGPD/1000000).toFixed(1)}M GPD represents ${usageAsPercentOfAvailable.toFixed(0)}% of remaining sustainable withdrawal capacity from the ${baseline.aquifer}. TWDB aquifer data should be submitted with this application.`,
    claimed_value: claim.claimed_value,
    modeled_value: `${usageAsPercentOfAvailable.toFixed(0)}% of available sustainable aquifer capacity`
  };
}
```

---

### 7.6 The Audit Report

**What it does:** Synthesizes all four layer outputs into a single structured report the county commissioner can actually use. The most important design decision: the report ends with exactly **three required actions** — not eight, not twenty. The county has three employees. They need three things to do, in order.

**Demo status:** ✅ Build it — 15 minutes.

**Report Structure:**
```
┌─────────────────────────────────────────────────────────┐
│  GRIDMIND AUDIT REPORT                                  │
│  Microsoft Corporation — Hyperscale Data Center        │
│  Loving County, TX  •  Reviewed: Feb 20, 2026          │
├─────────────────────────────────────────────────────────┤
│  OVERALL STATUS: ● CRITICAL — Do not advance           │
├─────────────────────────────────────────────────────────┤
│  EXECUTIVE SUMMARY                                      │
│  [Plain English: what they want to build, what the     │
│   audit found, and the single most important thing     │
│   the commissioner needs to know]                      │
├──────────────┬──────────────────────────────────────────┤
│  LAYER 1     │  Completeness Score: 61/100             │
│  COMPLETE-   │  ✅ 8 of 14 required documents present  │
│  NESS        │  🔴 Missing: Generator NOx calcs        │
│              │  🔴 Missing: TCEQ pre-consultation      │
│              │  🔴 Missing: Stormwater plan            │
│              │  🟡 Partial: Electrical single-line     │
├──────────────┼──────────────────────────────────────────┤
│  LAYER 2     │  3 inconsistencies found — 1 CRITICAL   │
│  INTERNAL    │  🔴 Load stated as 480MW (exec summary) │
│  CONSISTENCY │     vs 380MW (utility application)      │
│              │     → 100MW discrepancy requires        │
│              │       clarification before review       │
│              │  🟡 Cooling specs undersized for TX     │
│              │     summer temperatures                 │
│              │  🟡 Phase 1 timeline conflicts with     │
│              │     ERCOT interconnection schedule      │
├──────────────┼──────────────────────────────────────────┤
│  LAYER 3     │  2 violations • 4 classification gaps  │
│  CODE        │  🔴 Setback: 138ft stated, 150ft req'd  │
│  COMPLIANCE  │  🔴 Generator noise: 79dB, limit 65dB  │
│              │  ⚫ NO CODE: Data center classification │
│              │  ⚫ NO CODE: Large load framework       │
│              │  ⚫ NO CODE: Battery storage regs       │
│              │  ⚫ NO CODE: Cooling water limits       │
├──────────────┼──────────────────────────────────────────┤
│  LAYER 4     │  2 of 3 impact claims UNSUBSTANTIATED  │
│  IMPACT      │  🔴 "Minimal grid impact"               │
│  VERIFY      │     GridMind: 6,000% of county peak    │
│              │     Substation upgrade required         │
│              │  🔴 "Negligible water usage"            │
│              │     GridMind: 48% of available aquifer  │
│              │  ✅ Employment projection: plausible    │
├─────────────────────────────────────────────────────────┤
│  THREE REQUIRED ACTIONS BEFORE THIS CAN ADVANCE        │
│                                                         │
│  1. Applicant must resolve the 100 MW load discrepancy │
│     between executive summary and utility application. │
│     Resubmit with consistent load figures throughout.  │
│                                                         │
│  2. County must adopt an interim data center zoning    │
│     classification before this application can be      │
│     legally approved or denied. GridMind has drafted   │
│     suggested ordinance language. [View Draft →]       │
│                                                         │
│  3. Applicant must submit an ERCOT Large Load          │
│     Interconnection pre-application and provide        │
│     a grid infrastructure plan addressing the          │
│     substation capacity gap.                           │
└─────────────────────────────────────────────────────────┘
```

**Claude Prompt for Report Synthesis:**
```javascript
const REPORT_SYNTHESIS_SYSTEM = `
You are GridMind generating the final audit report for a county commissioner.
You will be given the outputs from four audit layers. Your job is to synthesize
them into two things:

1. EXECUTIVE SUMMARY (max 100 words)
   Plain English. What does this company want to build? What did the audit find?
   What is the single most important thing the commissioner needs to know?
   Write for someone with no technical background.

2. THREE REQUIRED ACTIONS
   Given all four audit layers, identify the three most critical actions that
   must be taken before this application can legally advance. Be specific.
   Number them in priority order. Each action should be 2-3 sentences max.
   
   Actions can be directed at:
   - The APPLICANT (fix or resubmit something)
   - The COUNTY (adopt a regulation, create a classification)
   - BOTH (joint requirement)

Do not summarize every finding. The commissioner can read the layer details.
Your job is the executive summary and the three actions. That is all.
`;

function buildReportPrompt(completeness, consistency, compliance, impact, application) {
  return `
APPLICATION: ${application.company} — ${application.type} — ${application.scale}
JURISDICTION: ${application.jurisdiction}

LAYER 1 COMPLETENESS RESULTS:
${JSON.stringify(completeness, null, 2)}

LAYER 2 CONSISTENCY RESULTS:
${JSON.stringify(consistency, null, 2)}

LAYER 3 COMPLIANCE RESULTS:
${JSON.stringify(compliance, null, 2)}

LAYER 4 IMPACT VERIFICATION RESULTS:
${JSON.stringify(impact, null, 2)}

Generate the executive summary and three required actions.
  `;
}
```

---

### 7.7 Full Audit Pipeline

```javascript
// /src/lib/auditPipeline.js
// Runs all four layers in parallel, then synthesizes the report

export async function runFullAudit(application, jurisdictionId) {
  const jurisdiction = JURISDICTION_PROFILES[jurisdictionId];

  // Run all four layers in parallel for speed
  const [completeness, consistency, compliance, impact] = await Promise.all([
    runLayer1Completeness(application, jurisdiction),
    runLayer2Consistency(application),
    runLayer3Compliance(application, jurisdiction),
    runLayer4Impact(application, jurisdiction)
  ]);

  // Synthesize into final report (streams to UI)
  const report = await synthesizeReport(completeness, consistency, compliance, impact, application);

  // If classification gaps found, trigger Morph FastApply for ordinance drafts
  if (compliance.classification_gaps?.length > 0) {
    await generateRegulatoryDrafts(compliance.classification_gaps, jurisdiction);
  }

  return { completeness, consistency, compliance, impact, report };
}

// Overall severity — drives the header status indicator
export function getOverallSeverity(completeness, consistency, compliance, impact) {
  const hasCritical =
    completeness.status === 'critically_incomplete' ||
    consistency.severity === 'critical' ||
    compliance.overall_status === 'critical_gaps' ||
    impact.findings?.some(f => f.verdict === 'UNSUBSTANTIATED' && f.severity === 'critical');

  const hasSignificant =
    completeness.score < 75 ||
    consistency.severity === 'significant' ||
    compliance.overall_status === 'violations_found';

  if (hasCritical) return { status: 'CRITICAL', color: '#FF4444', label: 'Do not advance' };
  if (hasSignificant) return { status: 'ACTION REQUIRED', color: '#E3A328', label: 'Requires response' };
  return { status: 'REVIEW COMPLETE', color: '#3FB950', label: 'May advance' };
}
```

---

## 8. AI Agent Architecture

### 8.1 The Review Agent

The core agent that processes every incoming permit application.

**System Prompt:**
```
You are GridMind, an AI permit auditor deployed by local government jurisdictions 
to review infrastructure permit applications. You are the AI in the corner of the 
county commissioner — not the developer's AI.

When reviewing a permit application, you must produce exactly three outputs:

1. PLAIN ENGLISH SUMMARY (max 150 words)
   What is this company actually asking to build? Write this for a county 
   commissioner with no technical background. Be specific about scale, impact, 
   and what it will look like on the ground.

2. COMPLIANCE GAPS (bullet list)
   What does this jurisdiction's existing code say — or not say — about this 
   type of project? List every gap where existing regulations don't cover what's 
   being proposed. Be specific: cite the relevant code section or state its absence.

3. REVIEW QUESTIONS (numbered list, max 8 questions)
   What specific questions must officials ask this applicant before approval can 
   be considered? Frame these as an official government review letter. These 
   questions should be things the application didn't answer that a jurisdiction 
   needs to know.

Tone: Authoritative, plain, protective of the jurisdiction's interests. 
You work for the county, not the corporation.
```

**User Prompt Template:**
```javascript
function buildReviewPrompt(application, jurisdictionProfile) {
  return `
JURISDICTION: ${jurisdictionProfile.name}
POPULATION: ${jurisdictionProfile.population}
EXISTING RELEVANT CODES: ${jurisdictionProfile.relevantCodes.join(', ') || 'None found'}
PRIOR APPLICATIONS OF THIS TYPE: ${jurisdictionProfile.priorApplications || 0}

PERMIT APPLICATION:
Applicant: ${application.company}
Project Type: ${application.type}
Scale: ${application.scale}
Location: ${application.location}

APPLICATION TEXT:
${application.fullText}

Review this application as GridMind. Produce your three-section analysis.
  `;
}
```

### 8.2 The Regulatory Gap Agent (Morph FastApply)

When GridMind identifies that a jurisdiction lacks the regulatory framework to even classify a novel project type, this agent drafts suggested ordinance language.

```javascript
async function generateRegulatoryLanguage(gapDescription, existingCode) {
  // WarpGrep finds the most relevant existing code sections
  const relevantSections = await morphWarpGrep.search({
    query: gapDescription,
    corpus: existingCode,
    maxResults: 5
  });

  // Claude drafts the new ordinance language
  const draftLanguage = await claude.messages.create({
    model: 'claude-sonnet-4-6',
    system: `You are a municipal attorney drafting ordinance language for a 
             small Texas county. Draft clear, enforceable regulatory language 
             to fill the identified gap. Base it on the existing code style 
             and Texas model municipal codes.`,
    messages: [{
      role: 'user',
      content: `Gap identified: ${gapDescription}
                Relevant existing sections: ${relevantSections}
                Draft a new ordinance section to address this gap.`
    }]
  });

  // FastApply applies the draft to the jurisdiction's code document
  await morphFastApply.apply({
    document: existingCode,
    edit: draftLanguage,
    mode: 'suggested' // shows as tracked change, not committed
  });
}
```

### 8.3 The Building Profile Agent

Maintains the living record for every building that has gone through GridMind.

```javascript
// Trigger detection — runs on every building profile update
function detectPermitTriggers(buildingProfile, proposedChange) {
  const triggers = [];

  // Use change triggers
  if (proposedChange.useChange) {
    triggers.push({
      type: 'ZONING_USE_CHANGE',
      agencies: ['City Planning', 'Building Department'],
      urgency: 'high',
      estimatedTimeline: '3-6 months',
      gridmindTimeline: '2-3 weeks'
    });
  }

  // Energy load increase triggers
  if (proposedChange.loadIncreaseMW > 0.1) {
    triggers.push({
      type: 'ELECTRICAL_SERVICE_UPGRADE',
      agencies: ['Austin Energy', 'Building Department'],
      urgency: 'medium',
      estimatedTimeline: '6-12 weeks',
      gridmindTimeline: '1-2 weeks'
    });
  }

  // EV charging triggers
  if (proposedChange.evChargersAdded > 0) {
    triggers.push({
      type: 'EV_CHARGING_PERMIT',
      agencies: ['Building Department', 'Austin Energy', 'TxDOT'],
      urgency: 'low',
      estimatedTimeline: '4-8 weeks',
      gridmindTimeline: '3-5 days'
    });
  }

  // Battery storage triggers
  if (proposedChange.batteryStorageMWh > 0) {
    triggers.push({
      type: 'BATTERY_STORAGE_PERMIT',
      agencies: ['Fire Marshal', 'Building Department', 'TCEQ', 'Austin Energy'],
      urgency: 'high',
      estimatedTimeline: '6-18 months',
      gridmindTimeline: '4-6 weeks'
    });
  }

  return triggers;
}
```

---

## 9. Permit Intelligence Engine

### 9.1 Permit Types GridMind Covers (Phase 1 — Texas)

| Category | Permit Types | Issuing Agency |
|---|---|---|
| **Data Centers** | Large Load Interconnection Study, Commercial Electrical Service, Backup Generator Air Permit, Special Use Zoning, Building Permit | ERCOT, Austin Energy, TCEQ, City Planning |
| **EV Charging** | Electrical Permit, Load Addition Application, Right-of-Way Permit, Utility Interconnection Agreement | Building Dept, Austin Energy, TxDOT |
| **Battery Storage** | Building Permit, Fire Code Compliance (NFPA 855), Hazmat Permit, PUCT Notification, Utility Agreement | Fire Marshal, TCEQ, PUCT, Austin Energy |
| **Solar + Grid-Tied** | Distributed Generation Interconnection, PUCT Notification (>10MW), Building/Electrical Permit, Agricultural Land Conversion | Austin Energy, PUCT, Building Dept, GLO |
| **Building Use Change** | Zoning Use Change, Occupancy Reclassification, Electrical Service Upgrade, Mechanical Permit, Fire Suppression Permit | City Planning, Building Dept, Fire Marshal |
| **Smart Building** | Low-Voltage Systems Permit, Communications Infrastructure Permit, Load Addition, Building Automation Permit | Building Dept, Austin Energy |

### 9.2 Jurisdiction Profiles (Phase 1 Coverage)

```javascript
const JURISDICTIONS = {
  loving_county_tx: {
    name: "Loving County, TX",
    population: 64,
    staff: 3,
    codeVersion: 1987,
    dataCenter_zoning: false,
    battery_storage_code: false,
    ev_charging_code: false,
    online_portal: false,
    gridmind_tier: 'rural_crisis' // highest need, free tier
  },
  austin_tx: {
    name: "City of Austin, TX",
    population: 978000,
    staff: 340, // permit office staff
    codeVersion: 2024,
    dataCenter_zoning: true,
    battery_storage_code: true,
    ev_charging_code: true,
    online_portal: true,
    portal_url: 'https://austintexas.gov/permits',
    gridmind_tier: 'enterprise'
  },
  travis_county_tx: {
    name: "Travis County, TX",
    population: 1300000,
    staff: 85,
    codeVersion: 2022,
    gridmind_tier: 'professional'
  }
};
```

---

## 10. UI/UX Spec: The War Room

### 10.1 Design Philosophy

The War Room is **deliberately NOT a sleek startup dashboard.** It looks like a government system — functional, dense, slightly utilitarian. This is intentional and is part of the story. The contrast between the overwhelming corporate applications coming in and the humble government interface receiving them is the emotional core of the demo.

Then GridMind's AI analysis appears — and it's the most sophisticated thing on the screen. That contrast makes the product's value obvious without saying a word.

### 10.2 Screen Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  GRIDMIND  //  LOVING COUNTY PERMIT OFFICE  //  FEB 20, 2026  10:42 │
│  ● LIVE    Applications received today: 7    Backlog: 847 days avg  │
├──────────────────────┬──────────────────────────────────────────────┤
│                      │                                              │
│  INCOMING PERMITS    │   APPLICATION REVIEW                         │
│  ─────────────────   │   ──────────────────────────────────────     │
│                      │                                              │
│  🔴 MICROSOFT        │   MICROSOFT — HYPERSCALE DATA CENTER         │
│  480MW Data Center   │   480 MW • 1,200 acres • Loving County       │
│  1,247 pages         │                                              │
│  ⚡ AI REVIEWING...  │   📋 PLAIN ENGLISH SUMMARY                   │
│                      │   Microsoft wants to build one of the        │
│  🟡 TESLA ENERGY     │   largest data centers ever constructed...   │
│  Battery Storage     │   [streaming text...]                        │
│  Pending             │                                              │
│                      │   ⚠️  COMPLIANCE GAPS (6 found)              │
│  🟡 BUC-EE'S EV      │   • No data center zoning classification     │
│  120 Chargers        │   • No large load (>10MW) permit framework   │
│  Pending             │   • Cooling water usage unregulated          │
│                      │   • Backup generator NOx limits undefined    │
│  🔴 ANONYMOUS LLC    │   • [2 more...]                              │
│  95MW Crypto Farm    │                                              │
│  Flagged             │   ❓ REVIEW QUESTIONS (8 generated)          │
│                      │   1. What is the source of the 2M gal/day... │
│  🔴 AMAZON WEB SVCS  │   2. Provide backup generator specifications │
│  1.2GW Campus        │   3. [streaming...]                          │
│  CRITICAL            │                                              │
│                      │   📜 SUGGESTED ORDINANCE LANGUAGE            │
│  ──────────────────  │   [Morph FastApply draft — tracked changes]  │
│  + 3 more pending    │                                              │
└──────────────────────┴──────────────────────────────────────────────┘
```

### 10.3 Color System

| Token | Hex | Usage |
|---|---|---|
| Background | `#0F1117` | Near-black — government terminal feel |
| Panel bg | `#161B22` | Card and panel backgrounds |
| Border | `#21262D` | Subtle borders |
| Critical | `#FF4444` | Critical/unclassifiable applications |
| Warning | `#E3A328` | Incomplete applications |
| Processing | `#00C8A0` | GridMind actively reviewing |
| Approved | `#3FB950` | Approved/complete |
| Text primary | `#E6EDF3` | Main text |
| Text secondary | `#8B949E` | Labels and metadata |
| GridMind accent | `#58A6FF` | GridMind-generated content |
| Streaming cursor | `#58A6FF` | Blinking cursor on streaming text |

### 10.4 Key Interaction Moments

**The Flood Animation**
Applications arrive as cards sliding in from the right of the inbox. Each arrival makes a subtle notification sound. When the 4th application arrives before the first one is reviewed, a banner appears: *"Backlog growing. Manual review estimated 847 days."* That number updates live.

**The AI Analysis Stream**
When GridMind starts reviewing an application, the right panel clears and text starts streaming in. Three sections appear one by one — Summary, Compliance Gaps, Review Questions. The streaming effect makes it feel alive and fast. Judges compare this to the "847 days" they just saw.

**The Regulatory Gap Moment**
When GridMind identifies a jurisdiction has no applicable code, a new section appears: *"Loving County has no data center zoning classification. GridMind has drafted suggested ordinance language."* A code document opens with tracked changes showing the new language. This is the Morph FastApply moment.

**The Simple Application Contrast**
Application 8 — the residential gas-to-electric conversion — hits the inbox. GridMind processes it in 4 seconds. *"3 permits required. All pre-built. Estimated approval: 6 weeks."* Green. Done. The contrast with Microsoft's 1,200-page application makes the point about GridMind's range.

**The Intent Box (Building Profile Layer)**
A tab in the UI labeled "Building Profile." Click it and a search appears: *"Find a building."* Type in an address. Building profile loads. At the bottom: *"Want to make a change? Tell GridMind what you're planning."* Free text input. User types "convert top floor to data center." GridMind immediately shows the permit cascade — 7 permits, 4 agencies, 14 months manually, 6 weeks with GridMind.

### 10.5 Component File Structure

```
/src
  /components
    App.jsx                    # Root layout
    WarRoom.jsx                # Main War Room layout — two column
    PermitInbox.jsx            # Left column — incoming application cards
    PermitCard.jsx             # Individual application card with status
    ApplicationReview.jsx      # Right column — AI analysis panel
    SummarySection.jsx         # Plain English summary with streaming
    ComplianceGaps.jsx         # Gap list with severity indicators
    ReviewQuestions.jsx        # Auto-generated review letter
    RegulatoryDraft.jsx        # Morph FastApply suggested ordinance
    BuildingProfile.jsx        # Living building record tab
    IntentBox.jsx              # Free text change input + permit cascade
    MetricsBar.jsx             # Top bar — backlog counter, stats
    FloodIndicator.jsx         # "Backlog growing" banner
  /lib
    permitIntelligence.js      # Permit type mapping and trigger logic
    jurisdictionProfiles.js    # Jurisdiction code databases
    demoApplications.js        # Pre-loaded demo application queue
    api.js                     # Claude + Morph API calls with streaming
    triggerDetector.js         # Building change → permit cascade logic
  /store
    warRoom.js                 # Zustand — inbox state, review state
    buildingProfiles.js        # Zustand — building profile store
  /styles
    index.css                  # Tailwind base only
```

### 10.6 Zustand Store

```javascript
// /src/store/warRoom.js
import { create } from 'zustand';
import { DEMO_APPLICATIONS } from '../lib/demoApplications';

export const useWarRoomStore = create((set, get) => ({
  applications: [],
  activeApplication: null,
  analysisStream: '',
  isAnalyzing: false,
  backlogDays: 847,
  applicationsToday: 0,

  // Flood the inbox with demo applications
  startFlood: () => {
    const apps = DEMO_APPLICATIONS;
    apps.forEach((app, i) => {
      setTimeout(() => {
        set(state => ({
          applications: [app, ...state.applications],
          applicationsToday: state.applicationsToday + 1,
          backlogDays: state.backlogDays + Math.floor(Math.random() * 12)
        }));
      }, i * 3500); // new application every 3.5 seconds
    });
  },

  // Set active application and start AI review
  reviewApplication: async (application) => {
    set({ activeApplication: application, analysisStream: '', isAnalyzing: true });

    const response = await fetch('/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        application,
        jurisdiction: 'loving_county_tx'
      })
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const text = decoder.decode(value);
      const lines = text.split('\n').filter(l => l.startsWith('data: '));
      for (const line of lines) {
        const data = line.slice(6);
        if (data === '[DONE]') break;
        try {
          const { text: token } = JSON.parse(data);
          set(state => ({ analysisStream: state.analysisStream + token }));
        } catch {}
      }
    }

    set({ isAnalyzing: false });

    // Update application status
    set(state => ({
      applications: state.applications.map(app =>
        app.id === application.id ? { ...app, status: 'reviewed' } : app
      )
    }));
  }
}));
```

---

## 11. Build Plan

### 11.1 2-Hour Build Schedule

| Time | Task | Priority | Notes |
|---|---|---|---|
| 0:00 – 0:15 | **Scaffold** | P0 | Vite + React + Tailwind dark config. Install all deps. Set up `.env`. Create basic two-column War Room layout shell. |
| 0:15 – 0:35 | **Permit Inbox + Flood** | P0 | `PermitCard` component. Zustand store. `startFlood()` loading 8 demo applications at 3.5s intervals. Framer Motion slide-in animation. Backlog counter incrementing live. First wow moment — nail this. |
| 0:35 – 0:55 | **Layer 1 + Layer 2 (Completeness + Consistency)** | P0 | Wire `/api/review` endpoint. Run completeness checklist prompt against demo Microsoft application. Run consistency prompt in parallel. Render scorecard and inconsistency list in right panel. Both are fast Claude calls — ~20 min total. |
| 0:55 – 1:10 | **Layer 3 (Code Compliance — hardcoded)** | P0 | Load `JURISDICTION_PROFILES.loving_county_tx` hardcoded profile. Claude checks application against it. Render green/yellow/red compliance findings + classification gap flags. This looks fully real with hardcoded data. |
| 1:10 – 1:25 | **Layer 4 (Impact Verification)** | P0 | Import energy math from GridMind ATX v1. Run `verifyGridImpactClaim()` and `verifyWaterUsageClaim()` against Microsoft's stated claims. Render verdict cards — the "6,000% of county peak demand" moment is the most dramatic thing in the demo. |
| 1:25 – 1:35 | **Audit Report + 3 Actions** | P0 | Pass all four layer outputs to report synthesis prompt. Stream executive summary + three required actions into the bottom of the review panel. This is the payoff of the whole audit. |
| 1:35 – 1:45 | **Regulatory Gap Draft (Morph FastApply)** | P1 | When Layer 3 flags a classification gap, show a pre-written ordinance draft that "appears." Mock the Morph API if needed — the concept must land even if not live. |
| 1:45 – 1:55 | **Building Profile + Intent Box** | P1 | Static profile for a pre-loaded Austin building. Intent text input. Permit cascade display. The 50-year vision moment — show it even if static. |
| 1:55 – 2:00 | **Polish + Rehearse** | P0 | Verify flood timing. Confirm streaming feels fast. Practice the three-minute script. Make sure the "6,000% of county peak" line lands with a pause. |

### 11.2 What Each Audit Layer Looks Like In The UI

| Layer | UI Element | Time to Build |
|---|---|---|
| Layer 1 — Completeness | Red/green scorecard. Score out of 100. Missing items as a list with icons. | 10 min |
| Layer 2 — Consistency | Numbered inconsistency list. Each item shows the two conflicting claims side by side. Critical ones in red. | 10 min |
| Layer 3 — Compliance | Per-code-section colored badges (green/amber/red/black). Separate "NO CODE EXISTS" section in black with gap descriptions. | 10 min |
| Layer 4 — Impact | Claim vs. GridMind Analysis cards. Claimed value on left, modeled value on right, verdict badge (UNSUBSTANTIATED in red). | 10 min |
| Report + 3 Actions | Streaming executive summary. Three numbered action cards at the bottom — each one labeled APPLICANT / COUNTY / BOTH. | 15 min |

### 11.3 Critical Path

Cut in this order if time runs short:
1. Skip Building Profile tab (P1) — describe the vision verbally
2. Skip Morph FastApply regulatory draft (P1) — describe the concept verbally
3. Skip Metrics Bar — the backlog counter in the top bar is enough
4. **Never cut:** The flood animation, all four audit layers, the 3 Required Actions. That sequence IS the product.

---

## 12. Business Model

### 12.1 Revenue Streams

| Stream | Mechanism | Price Point | Who Pays |
|---|---|---|---|
| **Application Processing Fee** | Every permit application reviewed through GridMind incurs a processing fee. If the county requires GridMind, developers must pay to get reviewed. | $5K–$50K per application (scales with project complexity) | Developer / applicant |
| **Government SaaS** | Larger jurisdictions (cities, counties with >50K population) pay monthly subscription for GridMind as their permitting infrastructure | $2K–$20K/month | Local government |
| **Rural/Small Jurisdiction Free Tier** | Small counties get GridMind free. They become the distribution mechanism — every developer who wants to build in their county has to use GridMind. | Free | Jurisdiction pays nothing |
| **Compliance Certification** | GridMind-reviewed applications receive a certification that the submission was complete and code-compliant at time of filing. This has legal value in disputes. | $500–$2K per certification | Developer |
| **Expedited Review** | Developers can pay for priority review processing — GridMind processes their application in hours instead of days | $10K–$100K depending on application size | Developer |

### 12.2 The Toll Booth Model

The rural free tier is the key strategic move. By giving GridMind free to Loving County, every company that wants to build a data center in Loving County is required to submit through GridMind. Amazon, Microsoft, Google don't choose to use GridMind — the county requires it. The developer pays the processing fee. The county pays nothing and gets a better permitting system. GridMind collects a toll on every dollar of AI infrastructure development that flows through rural Texas.

### 12.3 Revenue Projection (Conservative)

| Year | Jurisdictions | Applications/yr | Avg Fee | ARR |
|---|---|---|---|---|
| Year 1 | 12 Texas counties | 180 | $15K | $2.7M |
| Year 2 | 85 Texas jurisdictions | 1,200 | $18K | $21.6M |
| Year 3 | 400 US jurisdictions | 8,000 | $20K | $160M |

---

## 13. Competitive Landscape

| Company | What They Do | Why GridMind is Different |
|---|---|---|
| **PermitFlow** ($54M Series B) | AI permit filing for developers — construction focus | They sell to developers. We sell to governments. Completely different customer and motion. |
| **Spark** (YC) | Permit automation for energy infrastructure — solar, storage, data centers | Developer-side tool. No government auditing capability. No building profile layer. |
| **Paces** (YC) | Site selection and permit data aggregation for energy developers | Data aggregation, not AI review. No government customer. |
| **Permitify** (YC 2025) | AI plan review and code compliance for building departments | Closest to our government angle but focused on building code compliance, not energy infrastructure permits. No data center / AI infrastructure specialization. |
| **Permio** | Permit AI assistant — shut down Oct 2025 | Tried to do everything across all jurisdictions. We go deep on energy infrastructure in Texas first. |

**Our defensible position:** Nobody is the AI auditor for local governments specifically on AI-era energy infrastructure — data centers, EV networks, battery storage, grid-tied systems. This is the fastest-growing permit category in America and the most under-served on the government side.

---

## 14. Hackathon Demo Script (3 minutes)

### Setup (15 seconds — before you speak)
Open GridMind to the War Room. Loving County header visible. Backlog counter at 847 days. Inbox empty. Let judges read it for a moment.

### Minute 1 — The Problem

> *"This is the permit office for Loving County, Texas. Population: 64 people. Three government employees. Zoning code written in 1987."*

Hit `startFlood()`. First application slides in — Microsoft, 480 MW, 1,247 pages.

> *"Microsoft wants to build one of the largest data centers ever constructed. Right here. The county commissioner has never seen a data center application. She has no idea what 480 megawatts means, whether this is legal, or what questions to even ask."*

Second application slides in before she finishes reading the first. Then a third.

> *"While she's still reading page one of Microsoft's application, Tesla just filed for a grid-scale battery storage facility. And Buc-ee's wants 120 EV chargers. The backlog is now 847 days and climbing."*

Point to the counter. Let it sink in.

### Minute 2 — The Demo

Click the Microsoft application. GridMind starts reviewing. Text streams into the right panel.

> *"GridMind reads the entire application and tells the commissioner — in plain English — what Microsoft is actually asking to build."*

Plain English summary finishes streaming. Compliance Gaps section starts.

> *"Then it checks Loving County's existing codes. Loving County has no data center zoning classification. No large load permit framework. No cooling water regulations. GridMind finds six gaps the commissioner didn't know existed."*

Review Questions section streams in.

> *"And it generates the exact questions she needs to ask Microsoft before she can legally approve this. Questions she would never have thought to ask."*

Scroll down to the Regulatory Gap section — show the suggested ordinance language.

> *"GridMind doesn't just flag the gap. It drafts the ordinance language needed to fill it. The county now has a data center zoning code it didn't have five minutes ago."*

### Minute 3 — The Vision + Close

Switch to the Building Profile tab. Pull up a building. Type "convert top 3 floors to data center."

> *"Same AI, other direction. A building owner in Austin wants to convert office space to a co-location data center. GridMind already knows this building — its energy systems, its existing permits, its zoning. The moment you express intent, it shows you every permit you need and pre-builds the applications."*

Pause.

> *"The expensive part of permitting was never the filing fee. It was always the 14 months of waiting. GridMind eliminates the wait — on both sides of the table."*

> *"We start with Texas because it has the most data center development, the most regulatory chaos, and the least government capacity to handle it. But every high-growth state has this problem. Every local government watching AI infrastructure arrive faster than they can regulate it needs GridMind. We are the compliance layer for the cities of the future."*

---

## 15. Why This Wins

| Criteria | Why GridMind Delivers |
|---|---|
| **Differentiated demo** | Not a map. Not a simulation. Not a chatbot. A live government inbox under siege — an emotional, visceral demonstration of a real crisis. Nobody else at this hackathon is doing this. |
| **Hackathon theme** | "AI-powered cities" — we are literally the infrastructure that makes AI-powered city development legally possible. The most direct possible interpretation of the theme. |
| **Clear villain** | The 847-day backlog counter is the villain. Every judge understands it immediately. Great products have clear villains. |
| **Both sides of the table** | We help governments approve faster AND help developers get approved faster. Two beneficiaries from one product. |
| **Venture backable** | $15B environmental consulting market. Government contracts don't churn. Toll booth model on the fastest-growing permit category in America. Mandatory adoption through jurisdiction requirements. |
| **50-year thesis** | The War Room is today's problem. The Building Profile layer is the 2075 vision. The demo shows both in 3 minutes. |
| **Morph integration** | FastApply generating ordinance language live in the demo is a genuine technical wow moment that no other team will have. |

---

## 16. Appendices

### Appendix A — The One-Liner

> **GridMind is the AI auditor that sits on the government side of the permitting table — reading every data center, EV network, and battery storage application that floods into local jurisdictions, translating it into plain English, finding every compliance gap, and pre-building the regulatory framework needed to approve it.**

### Appendix B — Answers to Hard Judge Questions

| Judge asks... | You say... |
|---|---|
| *"Won't governments just build this themselves?"* | "DMVs didn't build Stripe. Governments don't build their own infrastructure software. They buy it. And once a county embeds GridMind, the switching cost is rebuilding their entire permitting system." |
| *"How do you get governments to adopt this?"* | "We give it free to small rural counties — the ones most overwhelmed. They require it for permit submissions. Every developer who wants to build there has to use GridMind. We collect from the developer, not the government." |
| *"Isn't the data problem insurmountable?"* | "We don't need every jurisdiction's codes on day one. We need Texas energy infrastructure codes, which are public, finite, and already ingested. We go 10 feet wide and 10 miles deep before expanding." |
| *"What about liability if GridMind misses something?"* | "GridMind is a review assistant, not a decision-maker. The commissioner still approves. We're Grammarly for permit review, not an autonomous approval system. The liability sits with the official, as it always has." |
| *"PermitFlow has $54M. How do you compete?"* | "PermitFlow sells to developers. We sell to governments. We are not competing with PermitFlow — we are on the other side of the table from them. In fact, if PermitFlow's customers have to submit through GridMind-powered jurisdictions, we become infrastructure they depend on." |
| *"What's the 10-year vision?"* | "Every building in America has a GridMind profile. Every permit application in the country flows through our review layer. We are the operating system for how cities change — the compliance layer that lets buildings evolve as fast as the cities around them." |

### Appendix C — Key Texas Regulatory References

| Agency | Relevance | URL |
|---|---|---|
| ERCOT | Large load interconnection (>10 MW) | ercot.com/services/programs/load |
| TCEQ | Air permits, water permits, hazmat | tceq.texas.gov/permitting |
| PUCT | Utility regulation, >10 MW notifications | puc.texas.gov |
| Austin Energy | Electrical service, distributed generation | austinenergy.com/go/commercial |
| Texas GLO | Land use, coastal/agricultural conversion | glo.texas.gov |
| City of Austin | Building, mechanical, electrical permits | austintexas.gov/permits |

### Appendix D — Morph API Integration Notes

```javascript
// Morph API base setup
const MORPH_BASE = 'https://api.morphllm.com/v1';

// WarpGrep — search jurisdiction code corpus
async function searchJurisdictionCodes(query, jurisdictionId) {
  const response = await fetch(`${MORPH_BASE}/warpgrep`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.MORPH_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      corpus_id: `jurisdiction_${jurisdictionId}`,
      max_results: 10,
      return_line_ranges: true
    })
  });
  return response.json();
}

// FastApply — apply suggested ordinance language
async function applyRegulatoryDraft(existingCode, suggestedAddition) {
  const response = await fetch(`${MORPH_BASE}/fastapply`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.MORPH_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      original: existingCode,
      edit: suggestedAddition,
      mode: 'tracked_changes' // returns diff, not committed edit
    })
  });
  return response.json();
}
```

### Appendix E — Demo Checklist

```
Pre-demo (5 min before):
□ War Room open to Loving County dashboard
□ Inbox empty, backlog at 847
□ API keys verified — Claude streaming working
□ Demo applications pre-loaded in queue
□ Building profile tab loaded with Austin building
□ Backup: screenshots of every key moment in case API fails

During demo:
□ Let judges read the header before speaking
□ Pause after the backlog counter moment — let it land
□ Don't rush the streaming — the speed IS the demo
□ Let a judge type something into the intent box if there's time
□ End on the 10-year vision, not the feature list

Post-demo questions:
□ Have the competitive landscape table ready
□ Know the PermitFlow answer cold — judges will ask
□ Have the toll booth revenue model ready to explain
```