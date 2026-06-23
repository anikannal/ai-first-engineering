---
title: "Week 2: Build a Backend"
page_id: p1w2
phase: "1"
depth: "../"
breadcrumb:
  - label: Home
    url: ../index.html
  - label: "Phase 1"
    url: index.html
  - label: "Week 2"
---

<div class="week-header">
  <div class="week-number">02</div>
  <div class="week-header-text">
    <h1>Build a Backend</h1>
    <p class="week-theme">"Teach your app to talk to the world."</p>
  </div>
</div>

<div class="callout goal">
  <span class="callout-title">This Week's Goal</span>
  <p>Add a backend to your project — a REST API with real endpoints, a call to an external API, and error handling that gives useful messages. Then deliberately break it and learn what AI debugging looks like under pressure.</p>
</div>

## What you'll learn this week

<ul class="outcomes-list">
  <li>Understand what a backend is and why it exists</li>
  <li>Build a REST API using Express.js or FastAPI with AI assistance</li>
  <li>Read and understand API documentation</li>
  <li>Integrate an external public API</li>
  <li>Debug AI-generated code with a systematic approach</li>
  <li>Test API endpoints with Postman or Bruno</li>
</ul>

## Monday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Concept Session</span>
    <h4>APIs and the Backend Mental Model · 90 min</h4>
  </div>
  <div class="day-block-body">

**The big idea:** The backend exists because some things can't (or shouldn't) run in the browser — data that needs to persist, secrets that can't be exposed, logic that needs to run on a server.

**What gets covered:**
- What a backend actually is, and why we need one
- HTTP fundamentals: requests, responses, status codes — just enough to be dangerous
- REST APIs: the four verbs (GET, POST, PUT, DELETE) and when to use each
- How to read API documentation (a survival skill)
- Where AI tools tend to stumble with backend code

<span class="ai-coach-touch">AI Coach · Concept Tutor</span> After the session, ask the Concept Tutor one question you've been confused about since Week 1. This helps surface common gaps across the cohort.

  </div>
</div>

## Tuesday–Wednesday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Build</span>
    <h4>Backend Sprint</h4>
  </div>
  <div class="day-block-body">

**The brief:** Add a backend to your Week 1 project. It must have:
- At least **3 API endpoints** (GET, POST, and one of your choice)
- A call to **one external public API** (weather, quotes, a public dataset — your pick)
- **Error handling** that returns useful messages — not just blank responses or 500 errors

**The deliberate bug exercise:** At some point during your build, introduce a bug you understand, let the AI try to fix it, and document:
- What the bug was
- What the AI diagnosed
- Whether the fix worked
- What you learned about how AI approaches debugging

This is not a gotcha. It's how you develop critical judgment about AI debugging.

<span class="ai-coach-touch">AI Coach · Debugging Partner</span> Before you ask the Debugging Partner for help, tell it what you've already tried. The prompt: *"I've tried X and Y. The error is Z. Here's my code."* This habit of showing your work makes the AI's help more targeted — and builds your own diagnostic thinking.

  </div>
</div>

## Thursday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Workshop</span>
    <h4>API Testing · 60 min</h4>
  </div>
  <div class="day-block-body">

**Tool introduced:** Postman (or Bruno, or curl)

Test each other's APIs. The goal: can you get a useful response from every endpoint? Can you get a useful error from a bad request?

After testing, write a **one-paragraph API contract** for your backend — what it does, what it expects, what it returns. No technical jargon. If you can't explain it simply, you don't fully understand it yet.

  </div>
</div>

## Friday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Demo</span>
    <h4>API Demo · via Postman or simple frontend</h4>
  </div>
  <div class="day-block-body">

Show your API working. Walk through one endpoint in detail — what it does, why it's structured that way, what happens if it gets bad input. No slides, no screenshots — live requests in front of the squad.

  </div>
</div>

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Reflection</span>
    <h4>Weekly Check-in</h4>
  </div>
  <div class="day-block-body">

<span class="ai-coach-touch">AI Coach · Reflection Interviewer</span> This week's focus question: *"Describe a moment where the AI gave you code you didn't fully understand. What did you do about it?"*

  </div>
</div>

## Tools this week

| Tool | What you're using it for |
|------|--------------------------|
| **Claude Code** | Generating API endpoints and error handling |
| **Node.js/Express or Python/FastAPI** | Your backend framework |
| **Postman or Bruno** | Testing your API endpoints |
| **External API of your choice** | Integrating real-world data |

---

<div class="callout tip">
  <span class="callout-title">On AI and debugging</span>
  <p>AI is genuinely good at debugging — but it doesn't know your system. It's working from the code snippet you give it, not the full picture. The more context you provide (what you expected, what actually happened, what you've tried), the better its diagnosis will be. Vague inputs produce vague fixes.</p>
</div>
