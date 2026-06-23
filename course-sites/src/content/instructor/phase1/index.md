---
title: "Phase 1 Facilitator Guide"
page_id: phase1
phase: "1"
depth: "../"
breadcrumb:
  - label: Home
    url: ../index.html
  - label: "Phase 1 Facilitator Guide"
---

<div class="page-header">
  <span class="eyebrow">Facilitator Guide · Phase 1 · Weeks 1–5</span>
  <h1>Foundations</h1>
  <p class="subtitle">Get students into the AI-first development loop fast. Ship something real by Week 5. Build comprehension habits from day one.</p>
</div>

## Phase 1 assessments at a glance

| Assessment | Format | When | Details |
|---|---|---|---|
| [Code Walkthrough](#code-walkthrough-detail) | 10–15 min 1:1 with coach | End of Week 5 | Student explains 2–3 code sections including AI-generated ones |

---

## Phase intent

Phase 1 has one job: establish productive AI-assisted development as a habit, not a novelty. By end of Week 5, every student should be able to generate code with AI, read and evaluate that code critically, and ship something to a real URL.

The tone is deliberately fast and uncomfortable. Students will not fully understand everything they build in Week 1. That's correct — the goal is productive engagement with ambiguity, not mastery of every concept before moving forward.

<div class="callout instructor">
  <span class="callout-title">Facilitator posture for Phase 1</span>
  <p>Your job is not to explain everything. It's to create conditions where students learn by doing, hit real problems, and develop their own debugging and evaluation habits. Resist the urge to over-explain. Ask questions instead of giving answers wherever possible. The AI Coach handles the high-frequency support load — you handle the human moments.</p>
</div>

## Phase 1 outcomes checklist

By end of Week 5, each student should be able to:

- [ ] Set up and use a full AI-assisted dev environment
- [ ] Apply the Spec → Prompt → Generate → Review → Test → Commit loop
- [ ] Build and deploy a basic full-stack web app
- [ ] Write a structured engineering prompt
- [ ] Read and explain AI-generated code
- [ ] Use Git with basic team discipline (branches, commits, PRs)
- [ ] Demo a product to a non-technical audience

If a student cannot do any of these by Week 5, a remediation plan is required before Phase 2 starts.

## Week-by-week facilitator guides

<div class="card-grid">
  <a class="card" href="week1.html">
    <span class="card-label">Week 1</span>
    <h3>First Ship</h3>
    <p>Concept session script, environment setup logistics, Code Reading workshop facilitation, common W1 pitfalls.</p>
  </a>
  <a class="card" href="week2.html">
    <span class="card-label">Week 2</span>
    <h3>Build a Backend</h3>
    <p>API mental model session, deliberate bug exercise facilitation, debugging culture building.</p>
  </a>
  <a class="card" href="week3.html">
    <span class="card-label">Week 3</span>
    <h3>Connect Frontend to Backend</h3>
    <p>Async concept session, component mapping exercise, UX peer review facilitation.</p>
  </a>
  <a class="card" href="week4.html">
    <span class="card-label">Week 4</span>
    <h3>Persist Your Data</h3>
    <p>Schema design review process, data integrity workshop, common W4 blockers.</p>
  </a>
  <a class="card" href="week5.html">
    <span class="card-label">Week 5</span>
    <h3>MVP Sprint</h3>
    <p>Sprint planning facilitation, scope challenge guidance, Demo Day logistics, Code Walkthrough assessment.</p>
  </a>
</div>

## Common Phase 1 student pitfalls

**Accepting AI output without reading it**
The most common issue. Address it directly in the Week 1 Code Reading workshop and reinforce it throughout. If you see a student unable to explain their code during any check-in, address it immediately — this is the single most important habit.

**Prompting in vague, conversational language**
Students default to "can you make a login page?" rather than structured engineering briefs. The Prompt Coach helps, but you should model good prompting in your concept session live demos.

**Getting stuck on environment setup for too long**
Timebox: if any setup issue isn't resolved in 30 minutes, escalate to the Engineering Coach. Don't let a Windows driver issue consume half of Week 1.

**Treating the MVP sprint as solo work**
Despite squads, many students default to solo coding during Week 5. Enforce PR discipline — if someone is committing directly to main, stop them and explain why it matters.

**Demoing to impress rather than to learn**
Students often present polished, rehearsed demos that obscure what's actually working. Reframe the demo explicitly: it's a learning tool, not a performance. A live app that breaks during the demo and gets debugged in real time is often more valuable.

## Escalation flags from AI Coach

The Course Coordinator will flag the following to you:

| Flag | Trigger | Your action |
|------|---------|-------------|
| No ship by W1 Friday | Student hasn't deployed | Check in Monday of W2, diagnose blocker |
| API comprehension gap | W2 reflection reveals confusion | 1:1 before W3 starts |
| Schema submitted without relationships | Advisor flags at schema review | Require revision before code starts |
| Missing standups in W5 | Coordinator tracks attendance | Contact squad lead same day |
| Reflection not submitted | Friday end of day | Nudge Saturday, required by Monday |

---

<div id="code-walkthrough-detail"></div>

## Code Walkthrough — Assessor Guide

**Format:** 10–15 minutes · 1:1 · Human coach only (no AI involvement during the assessment itself)

**When:** End of Week 5. Schedule across Friday afternoon and the following Monday morning.

### Selecting code sections

Choose 2–3 sections per student before the session. Rules:
- At least one section that is AI-generated (visible in PR descriptions or commit messages)
- At least one section that connects to other parts of the system — not an isolated utility
- Vary across the squad so not everyone is assessed on the same code

### Running it

Show the code on screen. Don't introduce it — just point and say *"walk me through this."* Let silence happen. Students who understand the code will start talking. Students who don't will look uncomfortable — that discomfort is diagnostic data.

Good follow-up questions:
- *"What would happen if this returned null?"*
- *"Did the AI write this? What did you verify before using it?"*
- *"What would break in the rest of the system if this function was removed?"*

### The four dimensions

**Comprehension** — Can they accurately explain what the code does, including inputs, outputs, and side effects?

**Critical evaluation** — Do they evaluate the code, not just describe it? Can they spot a potential issue without being prompted?

**AI awareness** — Can they describe what AI generated, what they changed, and why they trusted (or modified) the output?

**System thinking** — Can they reason about this code's place in the system and trace the effects of changing it?

### Scoring

| Score | Outcome |
|-------|---------|
| 13–16 | Distinction |
| 10–12 | Pass |
| 7–9 | Borderline — coaching conversation required before Phase 2 |
| 4–6 | Does not meet standard — remediation plan required |

A score of **1 on any single dimension**, regardless of total, triggers a mandatory 1:1 before Phase 2 starts.

<div><a class="card" href="assessments.html">
  <span class="card-label">Full Rubric</span>
  <h3>Complete scoring rubric with question bank →</h3>
  <p>All four dimensions with descriptor text for scores 1–4, plus a full assessor question bank.</p>
</a></div>
