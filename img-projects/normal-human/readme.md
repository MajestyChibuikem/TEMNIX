# Normal Human — AI-Powered Email Client

> A minimalistic, intelligent email client that brings AI-native workflows to modern inbox management.

---

## Overview

**Normal Human** is a full-stack SaaS email client that connects to Gmail via the Nylas API, indexes every message with OpenAI vector embeddings, and surfaces an AI copilot directly inside the compose window. It was built to solve a specific problem: existing email clients treat AI as a bolt-on feature. Normal Human puts AI at the center — from real-time writing suggestions to a chat interface that can reason over your entire inbox history.

The application is production-ready, subscription-gated, and deployable with a single `DATABASE_URL`.

---

## Scope of Work

### 1. Email Infrastructure
- Full Gmail integration via **Nylas v7** OAuth flow — users connect their account in one click
- Incremental delta-sync with `nextDeltaToken` tracking, ensuring the database stays in sync without redundant full-fetches
- Thread-based data model (Thread → Email → EmailAddress → Attachment) mirroring Gmail's conversation view
- Webhook support for real-time push updates from Nylas when new mail arrives
- Status flags per thread (`inboxStatus`, `sentStatus`, `draftStatus`, `done`) enabling GTD-style inbox-zero workflows

### 2. AI Features

| Feature | Model | Description |
|---|---|---|
| **Ask AI (RAG chat)** | GPT-4 | Chat with your inbox — answers questions using vector-retrieved email context |
| **AI Compose** | GPT-3.5-turbo | Full email drafting from a short prompt, context-aware from past threads |
| **Copilot Suggestions** | GPT-3.5-turbo | Ghost-text inline completions as you type, accepted with Tab |
| **Semantic Search** | text-embedding-ada-002 | Finds emails by meaning, not just keywords |

### 3. Search Engine
- **Orama** in-memory vector database runs client-side with a persisted binary index stored per-account in PostgreSQL
- Hybrid search: full-text BM25 + 1536-dim cosine similarity, threshold 0.80
- Index survives page reloads — no re-embedding on every visit

### 4. Authentication & Payments
- **Clerk** for user auth (sign-up, sign-in, session management, webhook-based user sync to DB)
- **Stripe** subscription billing — free tier (50 AI interactions/day), premium tier (unlimited)
- Graceful fallback: if Clerk keys are absent, a mock user is injected so the app runs in local dev without credentials

### 5. UI/UX
- Three-panel resizable layout (sidebar / thread list / reading pane) with panel sizes persisted via cookies
- **TipTap** rich-text compose editor with custom AI extensions
- **kbar** command palette with keyboard shortcuts for navigation, theme switching, and account switching
- Dark/light mode with CSS variable theming
- Fully responsive — panels collapse on smaller viewports

### 6. Data Layer
- **PostgreSQL** + **Prisma ORM** — typed schema with relational integrity across threads, emails, participants, attachments, subscriptions, and usage metering
- `ChatbotInteraction` model tracks daily AI usage per user for rate limiting
- tRPC end-to-end type safety from database to React component

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui + Radix UI |
| State | Jotai (UI atoms) + TanStack Query (server state) |
| Database | PostgreSQL via Prisma ORM |
| Email API | Nylas v7 |
| AI/ML | OpenAI GPT-4, GPT-3.5-turbo, text-embedding-ada-002 |
| Search | Orama (vector + full-text, in-memory) |
| Auth | Clerk |
| Payments | Stripe |
| Rich Text | TipTap |
| Command Palette | kbar |
| Animation | Framer Motion |

---

## Results & Impact

### What was delivered
- A complete, production-deployable SaaS email client — not a prototype
- End-to-end type safety from PostgreSQL schema to UI via Prisma + tRPC + TypeScript
- AI features that are deeply integrated into the email workflow, not isolated sidebars
- A search experience powered by semantic understanding of email content
- A monetization layer (Stripe) ready to go live with real customers

### Technical highlights
- **Zero cold-start AI latency** on search — embeddings are pre-computed at sync time and stored in a persisted Orama binary index
- **Streaming AI responses** — both the chat and compose endpoints stream tokens to the browser, making AI feel instant
- **Graceful degradation** — the app runs without Clerk, without Stripe, and without Nylas keys in local dev, making onboarding friction-free for contributors
- **Delta sync architecture** — email sync is incremental by design, meaning the app scales to large mailboxes without hammering the Nylas API

### Product scope
- 6 major API integration surfaces (Nylas, OpenAI, Orama, Stripe, Clerk, PostgreSQL)
- 15+ tRPC endpoints covering all mail, search, webhook, and subscription operations
- 50+ UI components from Radix UI / shadcn/ui, fully themed and dark-mode aware
- Complete subscription funnel from landing page → auth → email connect → AI usage → upgrade prompt

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── mail/                 # Protected email client
│   │   └── components/       # Thread list, editor, AI chat, sidebar
│   └── api/                  # REST endpoints (chat, stripe, webhooks)
├── server/
│   └── api/routers/          # tRPC routers (mail, search, webhooks)
├── lib/
│   ├── nylas-account.ts      # Nylas integration
│   ├── orama.ts              # Vector search
│   ├── embeddings.ts         # OpenAI embeddings
│   └── sync-to-db.ts         # Email → PostgreSQL sync
├── components/ui/            # 50+ shadcn/ui components
└── trpc/                     # tRPC client + server setup

prisma/
└── schema.prisma             # Database schema
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# Fill in DATABASE_URL, NYLAS_API_KEY, OPENAI_API_KEY, STRIPE_SECRET_KEY

# 3. Start the database
./start-database.sh

# 4. Run migrations
npx prisma db push

# 5. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page. Navigate to `/mail` to access the email client.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `NYLAS_API_KEY` | Yes | Nylas API credentials |
| `NYLAS_CLIENT_ID` | Yes | Nylas OAuth client ID |
| `OPENAI_API_KEY` | Yes | OpenAI API key |
| `STRIPE_SECRET_KEY` | Yes | Stripe secret key |
| `STRIPE_PRICE_ID` | Yes | Stripe premium price ID |
| `STRIPE_WEBHOOK_SECRET` | Yes | Stripe webhook signing secret |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Optional | Clerk auth (falls back to mock user) |
| `CLERK_SECRET_KEY` | Optional | Clerk server key |
| `NEXT_PUBLIC_URL` | Yes | Base URL for webhooks |

---

*Built with Next.js 14, Nylas, OpenAI, and PostgreSQL.*
