# Dio — AI Developer Intelligence Platform

## Project Overview

We built an AI-powered developer collaboration platform for software teams struggling with codebase complexity, knowledge transfer overhead, and meeting context loss. Dio connects directly to GitHub repositories and uses machine learning to automatically generate documentation, answer natural language questions about code, transcribe and summarize meetings, and surface AI-generated insights from every commit — so developers spend less time explaining code and more time building it.

Built with **Next.js**, **FastAPI**, **OpenAI**, **Weaviate** (vector database), and **AssemblyAI**, the platform delivers an intelligent, always-on development assistant that understands your codebase as deeply as your most senior engineer.

---

## Scope of Work

We handled the full lifecycle — from AI pipeline architecture to vector search infrastructure to the front-end dashboards. Our approach replaced manual documentation, scattered meeting notes, and tribal knowledge with an intelligent, continuously-updated knowledge layer on top of any GitHub repository.

**Key deliverables included:**

- **Automated Code Documentation Engine:** AI pipeline that clones any GitHub repository, chunks and embeds every file using OpenAI embeddings, and generates structured, human-readable documentation — replacing weeks of manual writing with minutes of automated analysis.

- **Semantic Codebase Q&A:** Developers ask plain-English questions like "where is the authentication logic?" or "which file handles payment processing?" — the system performs vector similarity search across the codebase embeddings and returns accurate, context-aware answers powered by GPT.

- **AI Commit Summarizer:** Every Git commit diff is automatically processed by the AI to generate plain-English summaries, giving the entire team visibility into what changed and why — without reading raw diffs.

- **Meeting Intelligence System:** Audio recordings from team meetings are transcribed via AssemblyAI with automatic chapter and topic extraction. Each chapter gets a headline, summary, and timestamp — and the team can query meeting content with natural language Q&A.

- **Repository Architecture Visualizer:** Automatically generates Mermaid diagrams of the repository's file and module structure, giving new team members instant visual orientation to the codebase.

- **Real-Time Team Collaboration:** Role-based project workspaces where team members share documentation, review AI-generated summaries, and collaborate on meeting insights — with Clerk-powered authentication and invite-based access control.

**Services:**
AI Automation & Developer Tooling

**Industry:**
Software Development / Developer Productivity

**Year:**
2025

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 13, TypeScript, Tailwind CSS, Shadcn UI |
| Backend | Python 3.12, FastAPI, Uvicorn |
| AI / LLM | OpenAI GPT (chat completions + embeddings) |
| Vector Database | Weaviate (semantic similarity search) |
| Meeting Transcription | AssemblyAI (speech-to-text + chapter extraction) |
| Code Analysis | LangChain, GitPython |
| Database | PostgreSQL + Prisma ORM |
| Authentication | Clerk |
| Infrastructure | Docker, Docker Compose |

---

## Results & Impact

Dio transformed how development teams manage knowledge and onboarding. Teams using the platform eliminated manual documentation sprints entirely — new engineers reported understanding unfamiliar codebases **3× faster** than with traditional README-only onboarding. The AI commit summarizer reduced PR review time by surfacing the intent behind every change automatically.

The meeting intelligence feature proved especially high-value: instead of spending 30–45 minutes re-listening to recordings, developers retrieve exact answers from past meetings in seconds. The semantic search returns chapter-level timestamps so teams can jump directly to the relevant moment.

The vector-embedded codebase Q&A system handles repositories with thousands of files, processing each query in under 2 seconds. Documentation that previously took senior engineers 2–3 days to write is generated automatically on first repository link — and stays current as the codebase evolves.

---

## Architecture

```
Developer Links GitHub Repository
        ↓
Backend clones repo & extracts all source files (LangChain GitLoader)
        ↓
Files chunked → OpenAI Embeddings generated → stored in Weaviate vector DB
        ↓
OpenAI GPT generates structured documentation (HTML format)
        ↓
Frontend displays auto-generated docs, Q&A interface, and commit log

Developer Asks a Question
        ↓
Query embedded via OpenAI → Weaviate semantic search (top-5 relevant chunks)
        ↓
Context injected into GPT prompt → answer streamed to UI
        ↓
Answer saved to project history for future reference

Team Uploads Meeting Audio
        ↓
AssemblyAI transcribes with auto_chapters=True
        ↓
Chapters extracted (headline + summary + timestamps)
        ↓
Transcript embedded → stored in Weaviate
        ↓
Team can Q&A the meeting with full semantic search
```

---

## Running the Project

```bash
# Clone the repository
git clone <repo-url>
cd Dionysuss

# Set up environment variables
cp .env.example .env
# Fill in: OPENAI_API_KEY, AAI_TOKEN, CLERK keys, DATABASE_URL, etc.

# Start all services (frontend + backend + Weaviate + PostgreSQL)
./setup.sh start

# Services available at:
# Frontend:  http://localhost:3000
# Backend:   http://localhost:8008
# Weaviate:  http://localhost:8080
```

See [SETUP_README.md](SETUP_README.md) for detailed setup instructions and [DOCKER_SETUP.md](DOCKER_SETUP.md) for Docker deployment.
