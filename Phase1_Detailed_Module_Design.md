# Phase 1: Foundations — Detailed Module Design
### AI-First Software Engineering Bootcamp
*Weeks 1–5 | Theme: Getting AI to work for you, not instead of you*

---

## Phase 1 Overview

Phase 1 has one job: get students into a productive AI-assisted development workflow as fast as possible, with something real and live to show for it by Week 5.

By end of Phase 1, every student will have:
- A professional dev environment set up and working
- Shipped a live full-stack web application (their squad's MVP)
- Internalized the core AI-first engineering loop
- Demonstrated that they understand code they didn't write

The tone is fast, hands-on, and deliberately uncomfortable. Students will not fully understand everything they build in Week 1. That's intentional. Comfort with productive ambiguity is a core professional skill.

---

## Phase 1 Learning Outcomes

By the end of Week 5, students will be able to:

1. Set up and operate a full AI-assisted dev environment (Claude Code, Cursor/Copilot, Git, terminal)
2. Apply the AI-first engineering loop (spec → prompt → generate → review → test → commit) to real tasks
3. Build and deploy a basic full-stack web application (frontend + backend + database + deployment)
4. Write prompts that produce useful, targeted code from AI tools
5. Read, explain, and critically evaluate code they did not write themselves
6. Use Git with basic team discipline (branches, commits, PRs)
7. Demo a product coherently to a non-technical audience

---

## Weekly Structure

Each week follows a consistent rhythm:

| Day | Activity |
|-----|----------|
| **Monday** | Concept session (1–1.5 hrs) + hands-on lab |
| **Tuesday** | Squad build time + AI Coach check-in |
| **Wednesday** | Skill workshop (focused, 1 hr) + build time |
| **Thursday** | Build time + peer review activity |
| **Friday** | Demo/share-out (30 min) + weekly reflection with AI Coach |

---

## Week 1: First Ship
*"Get something live on the internet by Friday."*

### Learning Goals
- Understand the landscape of AI coding tools and how they fit together
- Set up a working dev environment end-to-end
- Experience the full development loop (idea → code → deploy) with AI assistance
- Ship something real, however simple

### Monday — Concept Session: The AI-First Engineer

**Duration:** 90 minutes

**Content:**
- What changed in software engineering between 2022 and today (brief, data-driven, not nostalgic)
- The AI-first engineering mental model: you are the architect and reviewer; AI is the builder
- Tour of the tools: Claude Code, Cursor, GitHub Copilot, Antigravity — what each does, how they differ
- The context window: the most important concept to understand about AI coding tools. What it is, why it matters, how to work with it rather than against it
- The AI-first loop in 6 steps: Spec → Prompt → Generate → Review → Test → Commit

**Facilitator notes:**
- Open with a live demo: take a real, non-trivial coding task and do it with and without AI in front of the class. The contrast is motivating and sets expectations.
- Avoid slides-heavy delivery. This session should feel like watching a senior engineer think out loud.
- Do not get into debates about "will AI replace developers." Acknowledge it briefly, redirect to what they can control: their own skill development.

**AI Coach touchpoint:**
- Students introduce themselves to the AI Coach (Course Coordinator) and log their starting context: what they've built before, what they're most uncertain about, what they want to build during the bootcamp.

---

**Monday Lab — Environment Setup Sprint**

**Duration:** 2–3 hours (with async completion if needed)

**Setup checklist:**
1. Terminal proficiency check (navigation, file operations, running scripts)
2. Git installed and configured, GitHub account linked
3. Node.js + npm installed, Python installed
4. VS Code + Cursor installed, extensions configured
5. Claude Code CLI installed and authenticated
6. GitHub Copilot activated
7. A test repo created, a commit pushed, a PR opened — just to verify the pipeline works

**AI Coach role:** The Setup Tutor walks students through blockers step by step. Any environment issue that isn't resolved in 30 minutes gets escalated to the Engineering Coach.

**Facilitator notes:**
- Environment setup always takes longer than expected. Build in buffer.
- Students on Windows will have more friction. Have WSL2 setup instructions ready.
- The goal isn't perfection — it's a working baseline. Students will refine their setup throughout Phase 1.

---

### Tuesday–Wednesday — First Build

**The brief:** Build and deploy a personal project landing page with dynamic content. It should have: a homepage, an "about" section personalised to the student, and one interactive element (a form, a counter, a live API fetch — their choice).

This sounds trivial. It isn't — for many students it will be the first time they've deployed anything to a public URL.

**Scaffolded prompting exercise:**
Students are given a prompt template and asked to fill it in before writing a single line of code:

```
I want to build: [description]
The tech stack should be: [frontend / backend / deployment]
The first thing it needs to do is: [specific feature]
The user will: [describe the interaction]
I do NOT want it to: [constraints]
Success looks like: [definition of done]
```

They then use this to prompt Claude Code and iterate from the output.

**AI Coach touchpoint:** Prompt Coach reviews their initial prompt and gives feedback before they generate. This is the first time students experience AI reviewing their AI usage.

---

### Thursday — Code Reading Workshop

**Duration:** 1 hour

**Format:** Pairs

**Activity:** Each student swaps their generated codebase with a partner. They have 30 minutes to read through and prepare to answer three questions about the other person's code:
1. What does this file do, in plain English?
2. Find one thing you think could break — and why
3. Find one thing you genuinely don't understand — and look it up

Then pairs explain to each other. The point is not to judge code quality. It's to build the habit of *reading before trusting*.

**Facilitator notes:**
- Many students will be uncomfortable reading code they didn't write, especially AI-generated code which can look unfamiliar. Normalise this discomfort explicitly.
- Debrief as a group: what patterns did people notice? What was commonly confusing?

---

### Friday — First Demo Day (Internal)

**Format:** Each student demos their landing page to the squad (2–3 minutes each)

**The rule:** You must be able to explain every line of code in your project. If someone asks "what does this function do?" and you can't answer, that's the learning moment — not a failure.

**Weekly Reflection (AI Coach):**
The Reflection Interviewer conducts a 10-minute async check-in:
- What did you ship this week?
- What was harder than expected?
- What did the AI get wrong?
- What do you want to be able to do by next Friday?

**Course Coordinator** logs completion status and flags any students who didn't ship.

---

## Week 2: Build a Backend
*"Teach your app to talk to the world."*

### Learning Goals
- Understand what a backend is and why it exists
- Build a REST API with AI assistance
- Call an external API and use the response
- Debug AI-generated code with a systematic approach

### Monday — Concept Session: APIs and the Backend Mental Model

**Duration:** 90 minutes

**Content:**
- What is a backend? Why can't everything run in the browser? (Data persistence, secrets, server-side logic)
- HTTP fundamentals: requests, responses, status codes, headers — just enough to be dangerous
- What is a REST API? The four verbs (GET, POST, PUT, DELETE) and when to use them
- Reading API documentation — a survival skill
- How AI tools handle backend code differently from frontend (and where they stumble)

**Live demo:** Build a simple Express.js (or FastAPI) server from scratch using Claude Code, live, with the class watching. Narrate every decision: what prompt was used, what was changed, what was wrong in the first output.

**AI Coach touchpoint:** Students ask the Concept Tutor one question they've been confused about since Week 1. The Tutor logs these to the Course Coordinator to identify common gaps.

---

### Tuesday–Wednesday — Backend Build Sprint

**The brief:** Add a backend to your Week 1 project. It must have:
- At least 3 API endpoints (GET, POST, and one of their choice)
- A call to one external public API (weather, quotes, a public dataset — their choice)
- Error handling that returns useful messages (not just 500 errors)

**Key exercise — Debugging with the AI:**
At some point during the build, each student must introduce a deliberate bug (something they understand), let the AI try to fix it, and observe what happens. They document:
- What the bug was
- What the AI diagnosed
- Whether the AI's fix worked
- What they learned about the AI's debugging approach

This surfaces an early lesson: AI debugging is powerful but not infallible, and understanding the bug yourself is the only reliable check.

**AI Coach touchpoint:** Debugging Partner is available throughout. The prompt given to students: "Before you ask the AI Coach to help debug, tell it what you've already tried." This builds systematic thinking.

---

### Thursday — API Testing Workshop

**Duration:** 1 hour

**Tool introduced:** Postman (or Bruno, or just curl)

**Activity:** Students test each other's APIs. Can you get a useful response from every endpoint? Can you get a useful error from a bad request? If the API is a black box to a stranger, it's not done.

Students write a one-paragraph "API contract" for their backend in plain English — what it does, what it expects, what it returns. No technical jargon allowed. If they can't explain it simply, they don't fully understand it yet.

---

### Friday — Demo + Reflection

**Demo format:** Show the API working via Postman or a simple frontend. Explain one endpoint in detail — what it does, why it's structured that way, what happens if it gets bad input.

**Weekly Reflection (AI Coach):** Focus question this week: *"Describe a moment where the AI gave you code you didn't fully understand. What did you do about it?"*

---

## Week 3: Connect Frontend to Backend
*"Make it feel like a real product."*

### Learning Goals
- Understand client-server communication in a browser app
- Handle async operations (loading, error, success states)
- Build a UI that reacts to real data
- Think about user experience, not just functionality

### Monday — Concept Session: The Full-Stack Mental Model

**Duration:** 90 minutes

**Content:**
- The request lifecycle: what happens between a user clicking a button and seeing a result
- Async JavaScript: promises, async/await — why this exists and how to think about it
- State in a frontend: what it is, why it matters, how to not make a mess of it
- Introduction to React (or Next.js, depending on cohort stack choice): components, props, state
- Common mistakes when connecting frontend to backend (CORS, async timing, environment variables)

**Facilitator notes:**
- Async is the concept most students struggle with. Spend extra time here. Use a concrete analogy: ordering food at a restaurant (request goes out, you don't freeze while waiting, response comes back and you handle it).
- React is a big surface area. Keep the focus narrow: just enough to render data from an API.

---

### Tuesday–Thursday — Full-Stack Sprint

**The brief:** Build a frontend that talks to your backend. The UI must:
- Fetch data from at least one of your API endpoints on load
- Let the user submit data via a form (POST to your API)
- Show a loading state while waiting for responses
- Handle errors gracefully (don't just show a blank screen or a console error)

**Scaffolded exercise — Component mapping:**
Before writing a single component, students draw (on paper or a whiteboard tool) a map of:
- What UI elements exist
- What data each one needs
- Where that data comes from (local state, API, props)

They then give this map to Claude Code as part of their prompt. Students compare the output with and without the map — the difference is usually dramatic.

**AI Coach touchpoint:** Architecture Advisor reviews the component map before students start coding. First use of this capability.

---

### Thursday — UX Peer Review

**Duration:** 1 hour

**Format:** Each student spends 10 minutes using another squad member's app as a real user — no explanations from the builder. They note:
- What confused them
- What didn't work as expected
- What they'd want to do that they couldn't

Builders get written feedback and have one day to address at least one piece of it. This introduces the concept of building for users, not for demos.

---

### Friday — Demo + Reflection

**Demo format:** Full user journey demo — show the UI, use the form, show the data update. No Postman. It should look like something a real person could use.

**Weekly Reflection focus:** *"What's one decision you made this week that you made yourself, without asking the AI? Why did you make it that way?"*

---

## Week 4: Persist Your Data
*"Make your app remember things."*

### Learning Goals
- Understand why databases exist and when you need one
- Design a basic data schema
- Connect an app to a database using an ORM or query builder
- Handle data lifecycle: create, read, update, delete (CRUD)

### Monday — Concept Session: Data and Persistence

**Duration:** 90 minutes

**Content:**
- Why not just use files? What databases actually give you
- Relational databases: tables, rows, columns, relationships — the mental model
- Introduction to SQL: SELECT, INSERT, UPDATE, DELETE — just enough to read what AI generates
- ORMs: what they are, why they exist, the tradeoff vs. raw SQL
- Introduction to Supabase (or Railway + Postgres): provisioning a database in 5 minutes
- Schema design basics: how to think about your data before you write any code

**Key concept to emphasise:** AI is very good at generating SQL and ORM code — but it doesn't know your data. Schema design is a human job. The AI executes; you architect.

---

### Tuesday–Thursday — Database Integration Sprint

**The brief:** Add a database to your full-stack app. At minimum:
- Users can create records (POST → INSERT)
- Users can view records (GET → SELECT)
- Data persists across page refreshes and server restarts
- At least one relationship between two tables (e.g. users and their posts, items and their categories)

**Schema design exercise (Tuesday):**
Before touching code, each student sketches their schema on paper:
- What are your entities (the things your app cares about)?
- What are the attributes of each entity?
- How do they relate to each other?

They present their schema to the AI Coach (Architecture Advisor) for feedback, then to a human coach for a 10-minute schema review. Code only starts after the schema is signed off.

**Facilitator notes:**
- This is the week most students hit their first real blocking bug. Database connection errors, environment variable issues, and ORM confusion are common. Have the Engineering Coach on high alert.
- Emphasise: the AI is very good at writing migration files and ORM queries once you give it the schema. Feed it the schema explicitly.

---

### Thursday — Data Integrity Workshop

**Duration:** 1 hour

**Activity:** Squads try to break each other's databases:
- Submit empty forms
- Submit forms with SQL injection strings
- Create duplicate records
- Delete records that other records depend on

The goal is not to break things for sport — it's to develop an instinct for thinking about edge cases and data integrity. Students patch what they find.

**AI Coach touchpoint:** Students ask the Debugging Partner to help them understand any vulnerability found. The Prompt Coach reviews the prompts they used to fix issues.

---

### Friday — Demo + Reflection

**Demo format:** Show the full CRUD loop. Create something, show it persisted, update it, delete it. Show the database state directly (via Supabase dashboard or a DB viewer) so everyone can see the data is actually there.

**Weekly Reflection focus:** *"What did you design yourself this week (vs. let the AI design)? How do you feel about that choice looking back?"*

---

## Week 5: MVP Sprint
*"Build something real, together, and ship it."*

### Learning Goals
- Apply everything from Weeks 1–4 in a collaborative squad context
- Experience a real sprint: planning, execution, review, demo
- Practice scoping — deciding what's in and what's out
- Present a product to an external audience

### Monday — Product Discovery & Sprint Planning

**Morning (2 hours) — Product Discovery:**

Each squad aligns on their MVP idea. Constraints:
- Must be a full-stack web app (frontend + backend + database)
- Must solve a real, specific problem for a real, specific type of user
- Must be demoable in 3 minutes
- Must be achievable in one week

Squads use the AI Coach (Sprint Assistant) to:
1. Draft a one-paragraph product brief
2. Identify their target user and their core problem
3. Define what "done" looks like for the MVP

**Afternoon (2 hours) — Sprint Planning:**

Squads break the MVP into tasks and assign them. Each task must have:
- A clear description
- An owner
- A definition of done
- An AI-assistance plan (what will you prompt the AI to do? what will you do yourself?)

The Sprint Assistant helps decompose tasks and flags scope creep in real-time.

**Human Coach involvement:** Every squad presents their plan to a human coach for a 20-minute sanity check. The coach's job is to challenge scope (most squads will overscope) and surface risks.

---

### Tuesday–Thursday — Build Sprint

**Format:** Full squad collaboration. Daily standups (15 min each morning, async-friendly).

**Rules:**
- All code goes through PRs — no direct commits to main
- Every PR requires at least one review from a squad member
- The AI Coach Code Review Agent reviews every PR before humans do
- The Course Coordinator tracks task completion daily and flags squads falling behind

**Wednesday — Mid-sprint check-in:**
Each squad presents current status to a human coach (15 minutes). Focus: what's done, what's at risk, what do you need to cut?

**AI Coach touchpoints throughout:**
- Code Review Agent on every PR
- Debugging Partner for blockers
- Sprint Assistant for scope decisions
- Architecture Advisor if significant design questions emerge
- Course Coordinator surfaces progress summary each morning

---

### Friday — MVP Demo Day

**Format:** External audience (invite faculty, industry contacts, other students)

**Each squad gets 5 minutes:**
- 3 minutes: live product demo (no slides, no video — the real thing)
- 2 minutes: Q&A

**Individual code walkthrough assessment (same day or following Monday):**
Each student does a 10-minute 1:1 with a human coach. They are shown a section of their squad's codebase — including AI-generated sections — and asked to explain it. See Assessment Rubrics document for full criteria.

**Weekly Reflection (final Phase 1 reflection):**
The Reflection Interviewer runs a longer end-of-phase retrospective:
- What's the most important thing you learned in Phase 1?
- What's the biggest gap between how you thought AI coding tools worked at the start vs. now?
- What will you do differently in Phase 2?

The Course Coordinator compiles a Phase 1 completion report for each student, shared with human coaches before Phase 2 begins.

---

## Phase 1 AI Coach Touchpoint Summary

| Week | AI Coach Capability Used | Purpose |
|------|--------------------------|---------|
| 1 | Course Coordinator | Onboarding, progress tracking |
| 1 | Prompt Coach | First prompt review |
| 1 | Reflection Interviewer | Weekly check-in |
| 2 | Concept Tutor | Gap identification |
| 2 | Debugging Partner | Systematic debugging habit |
| 2 | Reflection Interviewer | Weekly check-in |
| 3 | Architecture Advisor | Component mapping review |
| 3 | Reflection Interviewer | Weekly check-in |
| 4 | Architecture Advisor | Schema design review |
| 4 | Debugging Partner | Vulnerability patching |
| 4 | Prompt Coach | Fix prompt review |
| 4 | Reflection Interviewer | Weekly check-in |
| 5 | Sprint Assistant | Product brief + task decomposition |
| 5 | Code Review Agent | PR reviews throughout sprint |
| 5 | Course Coordinator | Daily progress tracking |
| 5 | Reflection Interviewer | End-of-phase retrospective |

---

## Phase 1 Facilitator Notes

**Pacing:** Week 1 always feels too fast. That's correct. Students need to experience productive overwhelm early — it builds tolerance for ambiguity and urgency. Pull back if students are genuinely lost, but resist the urge to slow down because things feel rushed.

**Common student pitfalls in Phase 1:**
- Accepting AI output without reading it (address with code reading workshops and walkthroughs)
- Prompting in vague, conversational language rather than structured engineering briefs (address with Prompt Coach)
- Getting stuck on environment issues for too long (timebox: if not resolved in 30 minutes, escalate)
- Treating the MVP sprint as a solo exercise within the squad (reinforce PR discipline and daily standups)
- Demoing to impress rather than to learn (reframe: the demo is a learning tool, not a performance)

**Signs a student is falling behind:**
- Missing the Week 1 deployment (nothing live by Friday)
- Unable to explain their Week 2 API endpoints
- Schema submitted without relationship between tables
- Absent from standups during MVP sprint

All of these are flagged automatically by the Course Coordinator and escalated to the Engineering Coach.

---

*Next: Phase 2 Detailed Module Design | Assessment Rubrics*
