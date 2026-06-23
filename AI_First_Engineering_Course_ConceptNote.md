# AI-First Software Engineering
### Concept Note & Broad Program Design
*Draft v1.0 — June 2026*

---

## 1. The Problem

Something fundamental has shifted in how software is built — and engineering education hasn't caught up.

Fresh graduates entering software companies today find themselves in environments where AI-assisted coding is the norm: developers use tools like Claude Code, Codex, Cursor, and Antigravity to generate, review, refactor, and test code at a pace that would have been impossible two years ago. The expectation is that an engineer can fluidly move between being a *direction-setter*, a *reviewer*, and a *builder* — often within the same hour.

The gap is not in raw coding ability. Most graduates can write Python or JavaScript. The gap is in **workflow fluency** — knowing how to decompose a problem into AI-executable tasks, how to review and validate AI-generated code, how to maintain system coherence across an AI-augmented codebase, and how to operate effectively in a team where everyone is using AI tools simultaneously.

Universities teach students to write code. The industry now needs engineers who know how to **orchestrate** code — using themselves, AI agents, and automated pipelines in concert.

---

## 2. The Vision

**AI-First Software Engineering** is a standalone bootcamp for 3rd and 4th year engineering students that closes this gap through immersive, project-based learning.

The course does not teach AI as a subject. It treats AI-assisted development as *the methodology* — the water students swim in from day one. Every skill, every concept, every assessment is grounded in building real full-stack web applications using the tools and workflows that modern software companies actually use.

By the end of the program, graduates should feel as comfortable opening a Claude Code session as they are opening a terminal. They should know how to write a great prompt, how to spot a hallucinated dependency, how to structure a codebase so AI tools work well within it, and how to ship software as part of a team that moves fast.

**Core conviction:** AI fluency is not a feature to bolt onto an engineering education. It is the new baseline.

---

## 3. Target Learner

**Primary audience:** 3rd and 4th year undergraduate engineering students (Computer Science, Software Engineering, Information Technology, and adjacent disciplines).

**What they bring:**
- Foundational programming knowledge (at least one language, basic data structures, some exposure to web concepts)
- Academic project experience, but limited industry workflow exposure
- Familiarity with AI tools as consumers (ChatGPT, Copilot) but not as engineering practitioners

**What they lack:**
- Experience decomposing large problems into AI-executable work
- Comfort reading and validating AI-generated code critically
- Exposure to real engineering workflows: version control discipline, PR reviews, CI/CD, sprint ceremonies
- The habit of thinking about architecture, not just syntax

---

## 4. Pedagogical Approach

### 4.1 Experiential First

Every concept is introduced through doing, not lecturing. The program follows a *build → break → understand → rebuild* cycle. Students encounter a real problem, attempt to solve it with AI tools, hit limitations or errors, develop a conceptual model for why, and then refine their approach.

### 4.2 Authentic Tooling from Day One

Students use the same tools professionals use: Claude Code, Codex/GitHub Copilot, Cursor, Antigravity (or equivalent agentic coding platforms), Git/GitHub, Vercel/Railway for deployment, and standard testing frameworks. There is no "training wheels" version of these tools.

### 4.3 Collaboration as a Skill

Software engineering is a team sport. Students work in squads of 3–4, simulating a real product team. They run sprint planning, do code reviews on each other's (and AI's) work, and present to simulated stakeholders. The AI is a team member, not a shortcut.

### 4.4 Critical AI Literacy

Speed is not the only goal. The program embeds a thread of *critical evaluation* throughout: when to trust AI output, how to verify correctness, how to avoid accumulating AI-generated technical debt, and how to maintain authorship and understanding of your own codebase.

### 4.5 Flexible Duration

The program is designed as a modular system of **3 phases**, each roughly 4–6 weeks. Bootcamps can run all three phases (5–6 months) or offer Phase 1 + Phase 2 as a condensed version (3 months). Universities can map phases to semesters.

---

## 5. What Students Build

The through-line of the program is a **real, deployed, full-stack web application**. Students do not build toy projects that disappear at the end of a module. They build one product — incrementally, with growing complexity — that is live on the internet by graduation day.

Projects are intentionally open-ended in domain but constrained in scope: a marketplace, a productivity tool, a community platform, a SaaS dashboard. Each phase layers in new complexity: Phase 1 is a working MVP; Phase 2 adds authentication, data persistence, and third-party integrations; Phase 3 adds performance, security, team-scale engineering practices, and a public launch.

---

## 6. Outcomes

Graduates of this program will be able to:

1. Set up and operate AI-assisted development environments (Claude Code, Codex, Cursor, Antigravity) proficiently
2. Decompose product requirements into AI-executable engineering tasks
3. Review, validate, and refactor AI-generated code with critical judgment
4. Build and deploy full-stack web applications from scratch
5. Work effectively in small engineering teams using Git workflows, sprint cycles, and code review practices
6. Communicate technical decisions clearly to non-technical stakeholders
7. Identify when AI assistance is helpful vs. harmful to code quality and system design

---

---

# Broad Program Design

---

## Program Structure Overview

| Phase | Duration | Theme | Deliverable |
|-------|----------|-------|-------------|
| **Phase 1: Foundations** | 4–5 weeks | AI workflow fluency + MVP | Working MVP deployed publicly |
| **Phase 2: Depth** | 5–6 weeks | Full-stack complexity + team workflows | Feature-complete v1 product |
| **Phase 3: Craft** | 4–5 weeks | Engineering quality + launch | Polished v1 launch + portfolio |

Total: **13–16 weeks** (3-month track) or extend Phase 2 and 3 for a **5–6 month** track with additional project depth, guest speakers, and a larger capstone.

---

## Phase 1: Foundations (Weeks 1–5)
*Theme: Getting AI to work for you, not instead of you*

### What students learn:
- How AI coding tools actually work (mental model, not theory): context windows, prompting, agentic loops
- Setting up a professional development environment: Git, VS Code/Cursor, CLI, environment variables, package management
- The AI-first engineering loop: spec → prompt → generate → review → test → commit
- Basic full-stack anatomy: what is a frontend, backend, API, database — and how they connect
- Writing prompts that produce useful code (prompt engineering for engineers)
- Reading and understanding code you didn't write (critical skill for AI-generated output)
- Version control discipline: branching, commits, PRs, merge conflicts

### Weekly flow:
- **Week 1** — Environment setup, tool orientation, first AI-generated project (a simple dynamic webpage). The goal: get something live on the internet on day 5.
- **Week 2** — Backend basics. Build a REST API with AI assistance. Learn to test it. Learn to debug AI-generated bugs.
- **Week 3** — Connecting frontend to backend. Forms, state, data flow. First taste of something that feels like a real app.
- **Week 4** — Introduction to databases. Persist data. Students extend their app to store and retrieve user input.
- **Week 5** — MVP sprint. Squads define their product idea, scope an MVP, and ship it. First stakeholder demo.

### Assessment:
Deployed MVP + a "code walkthrough" where each student explains a non-trivial section of their codebase (including AI-generated sections). This tests comprehension, not just output.

---

## Phase 2: Depth (Weeks 6–11)
*Theme: Building software at team scale*

### What students learn:
- Authentication and authorization (users, sessions, permissions)
- Third-party API integrations (payments, email, maps, AI APIs)
- Effective team Git workflows: feature branches, PR reviews, CI/CD basics
- Using AI tools in a team context: shared context, avoiding duplication, reviewing each other's prompts
- Data modeling and schema design
- Component architecture and code organization at scale
- Testing: unit tests, integration tests — and how to prompt AI to write them
- Basic DevOps: environment variables, deployment pipelines, monitoring

### Weekly flow:
- **Week 6** — Auth sprint: add user accounts to the MVP. First PR review cycle between squads.
- **Week 7** — Data modeling deep dive. Redesign the database schema with AI help. Learn when AI gets schema design wrong.
- **Week 8** — Integrations week. Each squad adds at least two external service integrations relevant to their product.
- **Week 9** — Testing sprint. Write tests for what you've built. Introduce CI: tests must pass before PRs merge.
- **Week 10** — Feature sprint: scope and build v1's headline features, running full sprint ceremonies (standup, planning, retro).
- **Week 11** — Internal beta. Squads swap products and try to break each other's apps. Bug triage and fixes.

### Assessment:
Feature-complete v1 product + PR history demonstrating team Git workflow + individual reflection on AI usage patterns (what worked, what didn't, what they caught).

---

## Phase 3: Craft (Weeks 12–16)
*Theme: Engineering quality and shipping with confidence*

### What students learn:
- Performance: profiling, caching, optimizing AI-generated code (which is often naive on performance)
- Security fundamentals: common vulnerabilities, input validation, secrets management — and why AI-generated code can introduce these
- Refactoring AI-generated codebases: tackling accumulated technical debt
- Documentation and maintainability
- The ethics and limits of AI in engineering: IP, over-reliance, accountability
- Communicating technical work: demos, changelogs, technical writing
- Open source contribution basics (optional, for 6-month track)

### Weekly flow:
- **Week 12** — Security audit sprint. Squads audit each other's v1 for vulnerabilities (with AI help). Fix and harden.
- **Week 13** — Performance sprint. Profile, identify bottlenecks, optimize. Compare AI's optimization suggestions vs. manual analysis.
- **Week 14** — Polish and docs. UI refinement, error states, empty states, onboarding flow. Write a README that would let someone else run the project.
- **Week 15** — Launch prep. Final QA, load testing, launch checklist, stakeholder presentation prep.
- **Week 16** — Demo Day. Public product launch + live demo to external guests (industry professionals, faculty, recruiters).

### Assessment:
Live product + demo presentation + individual portfolio artifact (a written or video case study of their build journey, including honest reflection on AI tool usage).

---

## Tools & Platforms

| Category | Tools |
|----------|-------|
| **AI coding assistants** | Claude Code, GitHub Copilot/Codex, Cursor, Antigravity |
| **Version control** | Git, GitHub |
| **Frontend** | React or Next.js (AI-chosen stack, but standardized per cohort) |
| **Backend** | Node.js/Express or Python/FastAPI |
| **Database** | PostgreSQL (via Supabase or Railway) |
| **Deployment** | Vercel (frontend), Railway or Render (backend) |
| **Project management** | Linear or GitHub Projects |
| **Communication** | Slack/Discord (squad channels) |
| **Testing** | Vitest, Pytest, or Jest |

---

## Staffing Model

The delivery model is itself AI-first. Students are supported by a blended team of human facilitators and an always-on AI coaching layer — mirroring the kind of human + AI collaboration the course is training them for.

### AI Coach (Primary Day-to-Day Support)

Every squad has access to a purpose-built **AI Coach** — a curated collection of AI tools and configured agents that provide continuous, on-demand guidance throughout the program. This is not a generic chatbot; it is a structured coaching system scoped specifically to the program's curriculum, tools, and projects.

The AI Coach is the *first point of contact* for most student questions, replacing the instinct to Google or ask a human for things an AI can handle well. Learning to use it effectively is itself part of the curriculum.

| AI Coach Capability | What it does |
|---|---|
| **Code Review Agent** | Reviews PRs against a rubric: correctness, security, readability, test coverage, and — uniquely — flags over-reliance on AI patterns (e.g. copy-pasted boilerplate, unvalidated generated logic) |
| **Debugging Partner** | Walks students through bugs Socratically — asks questions rather than giving answers, building diagnostic habits |
| **Architecture Advisor** | Reviews system design decisions, suggests tradeoffs, flags anti-patterns before they become technical debt |
| **Prompt Coach** | Reviews the prompts students write to their coding AI tools and suggests improvements — meta-AI literacy |
| **Sprint Assistant** | Helps squads decompose product requirements into tasks, estimate scope, and write user stories |
| **Concept Tutor** | Answers conceptual questions about full-stack development, engineering practice, and AI tools — with curriculum-aware context |
| **Weekly Reflection Interviewer** | Conducts a structured async check-in with each student, surfaces blockers, and escalates to human coaches when needed |
| **Course Coordinator** | The connective layer across all other AI Coach functions. Maintains a live picture of each student's and squad's progress — modules completed, assessments submitted, blockers logged, and what comes next. Proactively nudges students when they're falling behind, briefs human coaches before check-ins with a squad summary, and gives students a clear "where am I in the program?" view on demand. Effectively the program's memory and pacing engine. |

The AI Coach is configured using Claude's API (or equivalent) with system prompts, tool access, and project context. Building and customising this coach is also a meta-learning exercise — advanced students in Phase 3 can contribute to improving it.

### Human Team (Facilitation & High-Touch Moments)

Human staff are reserved for what AI cannot yet do well: relationship-building, judgment calls, motivation, and real-world perspective.

| Role | Responsibility |
|------|---------------|
| **Lead Facilitator** | Program rhythm, concept sessions (1–2x/week), curriculum stewardship, escalation from AI Coach |
| **Engineering Coach** (1 per 4–5 squads) | Weekly squad check-ins, Demo Day prep, high-complexity unblocking, AI Coach oversight |
| **Industry Mentors** | Bi-weekly squad sessions, real-world context, Demo Day judges |

The human-to-student ratio is intentionally leaner than a traditional bootcamp because the AI Coach absorbs the high-frequency, low-complexity support load — freeing human coaches for the interactions where human judgment matters most.

---

## What Makes This Different

Most programming courses teach syntax and algorithms. Most AI courses teach how AI works. This program teaches something neither covers: **how to be a productive engineer in a world where AI is your coding partner**.

The closest analog is a software engineering apprenticeship — except compressed, structured, and designed to develop AI-fluency as the primary skill, alongside real full-stack engineering fundamentals.

Crucially, the program **eats its own cooking**: the delivery model is AI-first. Students are coached day-to-day by an AI system — getting code reviews, debugging support, and architectural feedback from AI agents — while human facilitators focus on the high-judgment moments AI can't handle. Students aren't just learning about AI-assisted workflows; they're living inside one.

Students leave with: a live product, a GitHub portfolio, a working mental model of AI-assisted development, and the workflow habits that let them contribute from their first week on the job.

---

*Next steps: Detailed module design, assessment rubrics, facilitator guide, tool procurement and licensing plan.*
