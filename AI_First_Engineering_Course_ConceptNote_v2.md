# AI-First Software Engineering
### Concept Note & Program Design — v2.0
*Draft v2.0 — November 2026*

---

## 1. The Problem

Something fundamental has shifted in how software is built — and engineering education hasn't caught up.

Fresh graduates entering software companies today find themselves in environments where AI-assisted coding is the norm: developers use tools like Claude Code, Codex, Cursor, and Antigravity to generate, review, refactor, and test code at a pace that would have been impossible two years ago. The expectation is that an engineer can fluidly move between being a *direction-setter*, a *reviewer*, and a *builder* — often within the same hour.

The gap is not in raw coding ability. Most graduates can write Python or JavaScript. The gap is in **workflow fluency** — knowing how to decompose a problem into AI-executable tasks, how to review and validate AI-generated code, how to maintain system coherence across an AI-augmented codebase, and how to operate effectively in a team where everyone is using AI tools simultaneously.

Universities teach students to write code. The industry now needs engineers who know how to **orchestrate** code — using themselves, AI agents, and automated pipelines in concert.

---

## 2. The Vision

**AI-First Software Engineering** is a standalone 4-month bootcamp for 3rd and 4th year engineering students that closes this gap through immersive, project-based learning followed by a structured industry placement.

The course does not teach AI as a subject. It treats AI-assisted development as *the methodology* — the water students swim in from day one. Every skill, every concept, every assessment is grounded in building real full-stack web applications using the tools and workflows that modern software companies actually use.

The program runs in two parts:
- **3 months of experiential learning** — building a real product, in a squad, using AI tools throughout
- **1 month of industry practice** — applying those skills in a real company, on a real codebase, with real stakes

By graduation, students don't just know how to use AI tools. They've shipped something, survived a codebase that wasn't theirs, and worked on a team under real deadlines.

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

### 4.5 Industry Integration

The fourth month is not an add-on — it is a core part of the design. Industry practice is where everything learned in months 1–3 is stress-tested against real conditions: an unfamiliar codebase, a team that doesn't have time to explain everything, deadlines that don't move. Students are placed with partner companies where they contribute meaningfully, not just observe.

---

## 5. What Students Build

### During the program (Months 1–3)

The through-line of the experiential phase is a **real, deployed, full-stack web application**. Students do not build toy projects that disappear at the end of a module. They build one product — incrementally, with growing complexity — that is live on the internet by the end of Month 3.

Projects are intentionally open-ended in domain but constrained in scope: a marketplace, a productivity tool, a community platform, a SaaS dashboard. Each month layers in new complexity:
- Month 1: a working MVP, live and demoed
- Month 2: auth, integrations, testing, team-scale workflows
- Month 3: security hardening, performance, polish, public launch

### During industry practice (Month 4)

Students contribute to a real codebase at a partner company. The specific work depends on the placement — but it must involve meaningful code contribution (not shadowing), AI-assisted development, and at least one PR that gets reviewed by a professional engineer. Students submit a written reflection comparing the real-world context to what they experienced in the program.

---

## 6. Program Structure

| | Duration | Theme | Deliverable |
|---|---|---|---|
| **Month 1: Foundations** | 4 weeks | AI workflow fluency + first live product | Working MVP deployed publicly |
| **Month 2: Depth** | 4 weeks | Full-stack complexity + team engineering | Feature-complete v1 product |
| **Month 3: Craft** | 4 weeks | Quality, security, polish + public launch | Polished v1 live + case study |
| **Month 4: Industry Practice** | 4 weeks | Real company, real codebase, real team | Placement completion + reflection |

**Total: 4 months**

---

## 7. Month-by-Month Design

---

### Month 1: Foundations
*Theme: Get AI to work for you, not instead of you*

**What students learn:**
- How AI coding tools actually work (mental model): context windows, prompting, agentic loops
- Setting up a professional development environment: Git, VS Code/Cursor, CLI, environment variables
- The AI-first engineering loop: spec → prompt → generate → review → test → commit
- Basic full-stack anatomy: frontend, backend, API, database — and how they connect
- Writing structured engineering prompts
- Reading and understanding code you didn't write (critical for AI-generated output)
- Version control discipline: branching, commits, PRs, merge conflicts

**Weekly flow:**
- **Week 1** — Environment setup, tool orientation, first AI-generated project. Goal: something live on the internet by Friday.
- **Week 2** — Backend + frontend integration. Build a REST API, connect a UI to it. First taste of a real full-stack app.
- **Week 3** — Database integration. Persist data. Students extend their app to store and retrieve user input using an ORM and Postgres.
- **Week 4** — MVP Sprint. Squads define a product idea, scope an MVP, and ship it. First stakeholder demo with external guests.

**Assessment:**
Deployed MVP + Code Walkthrough (10–15 min 1:1 where each student explains 2–3 sections of their codebase, including AI-generated sections).

---

### Month 2: Depth
*Theme: Building software at team scale*

**What students learn:**
- Authentication and authorisation (users, sessions, permissions)
- Third-party API integrations (payments, email, maps, AI APIs)
- Effective team Git workflows: feature branches, PR reviews, CI/CD basics
- Using AI tools in a team context: shared context, reviewing each other's prompts
- Data modelling and schema design — when AI gets it wrong
- Testing: unit tests, integration tests — prompting AI to write them
- Basic DevOps: environment variables, deployment pipelines, monitoring

**Weekly flow:**
- **Week 5** — Auth sprint: add user accounts to the MVP. First cross-squad PR review cycle.
- **Week 6** — Data modelling deep dive + integrations. Redesign the schema with AI help; add at least two external service integrations.
- **Week 7** — Testing sprint. Write tests for existing features. Introduce CI: tests must pass before PRs merge.
- **Week 8** — Feature sprint + internal beta. Build v1's headline features under full sprint ceremonies. Squads swap and try to break each other's apps; fix what's found.

**Assessment:**
Feature-complete v1 product + PR history demonstrating team Git workflow + individual reflection on AI usage patterns.

---

### Month 3: Craft
*Theme: Engineering quality and shipping with confidence*

**What students learn:**
- Performance: profiling, caching, optimising AI-generated code (which is often naive on performance)
- Security fundamentals: common vulnerabilities, input validation, secrets management
- Refactoring AI-generated codebases: tackling accumulated technical debt
- Documentation and maintainability — writing a README that actually works
- The ethics and limits of AI in engineering: IP, over-reliance, accountability
- Communicating technical work: demos, changelogs, technical writing

**Weekly flow:**
- **Week 9** — Security audit sprint. Squads audit each other's v1 for vulnerabilities (with AI help). Fix and harden.
- **Week 10** — Performance sprint + polish. Profile, identify bottlenecks, optimise. UI refinement, error states, empty states.
- **Week 11** — Documentation + launch prep. Write a README that lets someone else run the project. Final QA, launch checklist, stakeholder presentation prep.
- **Week 12** — Demo Day. Public product launch + live demo to external guests (industry professionals, faculty, recruiters). Portfolio case study submitted.

**Assessment:**
Live product + demo presentation + portfolio artifact (written or video case study of their build journey, with honest reflection on AI tool usage).

---

### Month 4: Industry Practice
*Theme: Real company. Real codebase. Real team.*

**What this is:**
A structured placement with a partner company where students contribute meaningfully as junior engineers for four weeks. This is not a shadowing exercise — students write code, open PRs, attend standups, and work on tasks assigned by real engineering teams.

**What students do:**
- Onboard to a real codebase (a deliberately challenging experience — this is the point)
- Contribute at least one meaningful PR reviewed and merged by a professional engineer
- Use AI-assisted development tools in a real-world context, with real constraints (security policies, style guides, team conventions)
- Attend at least two engineering team ceremonies (sprint planning, retro, or design review)
- Keep a weekly journal of observations, surprises, and comparisons to the program

**What companies commit to:**
- Assigning a named engineering mentor for the student
- Providing a real task (not a training exercise) within the first week
- Giving honest feedback at the end of the placement (shared with the program team)

**Assessment:**
Placement completion (confirmed by company mentor) + a written reflection (1,500–2,000 words) comparing the real-world engineering environment to the program experience: what transferred directly, what was different, and what they would do differently in the program knowing what they know now.

---

## 8. Outcomes

Graduates of this program will be able to:

1. Set up and operate AI-assisted development environments (Claude Code, Codex, Cursor, Antigravity) proficiently
2. Decompose product requirements into AI-executable engineering tasks
3. Review, validate, and refactor AI-generated code with critical judgment
4. Build and deploy full-stack web applications from scratch
5. Work effectively in small engineering teams using Git workflows, sprint cycles, and code review practices
6. Contribute to an unfamiliar real-world codebase under real deadlines
7. Communicate technical decisions clearly to non-technical stakeholders
8. Identify when AI assistance is helpful vs. harmful to code quality and system design

---

## 9. Tools & Platforms

| Category | Tools |
|----------|-------|
| **AI coding assistants** | Claude Code, GitHub Copilot/Codex, Cursor, Antigravity |
| **Version control** | Git, GitHub |
| **Frontend** | React or Next.js (standardised per cohort) |
| **Backend** | Node.js/Express or Python/FastAPI |
| **Database** | PostgreSQL (via Supabase or Railway) |
| **Deployment** | Vercel (frontend), Railway or Render (backend) |
| **Project management** | Linear or GitHub Projects |
| **Testing** | Vitest, Pytest, or Jest |

---

## 10. Staffing Model

The delivery model is itself AI-first. Students are supported by a blended team of human facilitators and an always-on AI coaching layer — mirroring the kind of human + AI collaboration the course is training them for.

### AI Coach (Primary Day-to-Day Support)

Every squad has access to a purpose-built **AI Coach** — a curated collection of AI tools and configured agents that provide continuous, on-demand guidance throughout the program.

| AI Coach Capability | What it does |
|---|---|
| **Course Coordinator** | Maintains a live picture of each student's progress. Nudges students when falling behind, briefs human coaches before check-ins. |
| **Code Review Agent** | Reviews PRs against a rubric: correctness, security, readability, test coverage, and flags over-reliance on AI patterns |
| **Debugging Partner** | Walks students through bugs Socratically — asks questions rather than giving answers |
| **Architecture Advisor** | Reviews system design decisions, flags anti-patterns before they become technical debt |
| **Prompt Coach** | Reviews the prompts students write to their coding AI tools and suggests improvements |
| **Sprint Assistant** | Helps squads decompose requirements into tasks, estimate scope, and write user stories |
| **Concept Tutor** | Answers conceptual questions about full-stack development with curriculum-aware context |
| **Reflection Interviewer** | Conducts structured async weekly check-ins, surfaces blockers, escalates to human coaches when needed |

### Human Team

| Role | Responsibility |
|------|---------------|
| **Lead Facilitator** | Program rhythm, concept sessions (1–2×/week), curriculum stewardship, escalation from AI Coach |
| **Engineering Coach** (1 per 4–5 squads) | Weekly squad check-ins, demo day prep, high-complexity unblocking, AI Coach oversight |
| **Industry Mentors** | Bi-weekly squad sessions, real-world context, Demo Day judges |
| **Placement Coordinators** | Partner company relationships, placement logistics, Month 4 student welfare |

---

## 11. What Makes This Different

Most programming courses teach syntax and algorithms. Most AI courses teach how AI works. This program teaches something neither covers: **how to be a productive engineer in a world where AI is your coding partner** — and then puts that to the test in a real company.

The closest analog is a software engineering apprenticeship — except compressed, structured, and designed to develop AI-fluency as the primary skill, alongside real full-stack engineering fundamentals.

Crucially, the program **eats its own cooking**: the delivery model is AI-first. Students are coached day-to-day by an AI system — getting code reviews, debugging support, and architectural feedback from AI agents — while human facilitators focus on the high-judgment moments AI can't handle.

Students leave with: a live product, a GitHub portfolio, a real placement on their CV, and the workflow habits that let them contribute from their first week on the job.

---

*Next steps: Month-by-month detailed module design, updated assessment rubrics, facilitator guide, industry partner outreach framework.*
