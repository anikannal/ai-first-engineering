---
title: "Week 1: First Ship — Facilitator Guide"
page_id: p1w1
phase: "1"
depth: "../"
breadcrumb:
  - label: Home
    url: ../index.html
  - label: Phase 1
    url: index.html
  - label: Week 1
---

<div class="week-header">
  <div class="week-number">01</div>
  <div class="week-header-text">
    <h1>First Ship · Facilitator Guide</h1>
    <p class="week-theme">Intent: establish the AI-first mental model and get everyone shipped by Friday.</p>
  </div>
</div>

## Monday — Concept Session

**Duration:** 90 minutes  
**Format:** Live demo-first, minimal slides

### Opening (10 min)

Don't start with an agenda. Start with a demo. Take a real, non-trivial task — something like "build a REST endpoint that fetches weather data and formats it for display" — and do it twice:

1. Without AI: open a file, start typing, fumble through docs
2. With Claude Code: structured prompt, generated output, you reviewing and modifying

The contrast sets expectations clearly. You're not showing off — you're showing the workflow.

### Core content (50 min)

Walk through these points. Keep them grounded in the demo you just ran.

**The shift:** Software engineering has changed. AI-assisted development is the default at most companies hiring today. The question isn't whether to use these tools — it's how to use them with skill and judgment.

**The mental model:** You are the architect and reviewer. AI is the builder. This framing matters because it assigns the hard thinking to the human (what to build, whether it's correct, how it fits together) and the execution to the AI.

**The tool landscape:**
- *Claude Code:* CLI-based, strong for structured multi-file tasks, excellent context management
- *Cursor:* IDE with AI embedded, good for interactive iteration
- *GitHub Copilot:* Inline suggestions, lower friction, less control
- *Antigravity:* Agentic workflows, multi-step task execution

No need for deep comparison. The point is that each tool has a sweet spot, and they can be used together.

**The context window:** Spend time here. This is the most important concept for understanding why AI coding tools sometimes work brilliantly and sometimes fail confusingly. The model can only see what's in its context. If you don't include the schema, it guesses. If you don't include the error, it theorises. Managing context is a core engineering skill with these tools.

**The loop — 6 steps:** Spec → Prompt → Generate → Review → Test → Commit. Write these on the board. Return to them throughout the week.

### Discussion + Q&A (30 min)

Open questions. Common ones:
- *"Will AI replace developers?"* — Acknowledge, briefly redirect: the question for this program is what skills make you valuable in a world where AI is a tool.
- *"How do I know when AI output is wrong?"* — This is the right question. You develop that judgment through the program, starting this week.

<div class="callout instructor">
  <span class="callout-title">Facilitation note</span>
  <p>Don't get drawn into philosophical debates about AI in Week 1. Students are energised and curious — keep the momentum toward doing. The time for nuance about AI limitations is Week 2 (the deliberate bug exercise) and beyond.</p>
</div>

---

## Monday Lab — Environment Setup

**Duration:** 2–3 hours  
**Common issues by platform:**

| Issue | Platform | Fix |
|-------|----------|-----|
| Node version conflicts | All | Use `nvm` — install it first |
| Claude Code auth failures | All | Check API key is set in env, not hardcoded |
| WSL2 path confusion | Windows | Enforce work inside WSL path from the start |
| Git credential issues | All | `gh auth login` resolves most cases |
| Cursor extension conflicts | macOS | Disable other AI extensions, restart |

**Your role:** Don't sit and wait for problems. Walk the room (or monitor the shared chat). Students who haven't made a commit by 90 minutes into the lab need direct intervention.

**The 30-minute rule:** Any setup blocker not resolved in 30 minutes escalates to you. The AI Coach handles the first-pass troubleshooting — you handle the edge cases.

---

## Tuesday–Wednesday — First Build

**Your role:** Light-touch monitoring. Check Prompt Coach interactions if you have access — you'll see patterns in how students are prompting that inform your Wednesday workshop.

**What to look for:**
- Students generating without reading: the output gets pasted and run without review
- Students abandoning the template: going back to conversational prompts
- Students stuck in configuration loops: should have been caught in Monday lab

---

## Thursday — Code Reading Workshop

**Duration:** 60 minutes  
**Format:** Pairs

This workshop is more important than it looks. It's the first time students read code they didn't write, and many will find it uncomfortable.

**Setup:** Assign pairs — don't let students choose. Mixed-ability pairing works well here.

**Facilitation during the 30-minute reading:**
Walk around. If a student says "I don't understand any of this" — that's fine. Tell them to pick the smallest function they can find and start there. The goal is reading discipline, not comprehension of everything.

**Debrief (15 min):** Ask the group:
- What patterns did you notice across codebases?
- What was commonly confusing?
- What would have made it easier to understand?

Listen for: inconsistent naming, missing comments on complex logic, AI-generated boilerplate that students couldn't explain. These are teaching moments, not failures.

**The key point to land:** Every time AI generates code for you, you are the reader who needs to understand it. This workshop is practice for that relationship.

---

## Friday — First Demo Day

**Format:** Each student demos to the squad, 2–3 minutes  
**The one rule you must enforce:** If a student can't explain a line of code when asked, don't let it slide. Ask the question, wait for the answer, and if they can't answer — say "that's the most important moment of your week. Find out before Monday."

This sets the culture for Code Walkthroughs later.

**Weekly reflection:** Confirm every student submits their reflection before end of day. The Course Coordinator flags non-submissions — follow up Saturday if needed.

---

## Escalation triggers this week

- Student hasn't deployed anything by Friday → check in first thing Monday W2
- Student can't explain any section of their code during Friday demo → schedule 1:1 for early W2
- Environment still not fully set up by Wednesday → escalate to program coordinator

---

## Week 1 success criteria

By end of Friday, every student should have:
- [ ] Full dev environment working (evidenced by a commit on GitHub)
- [ ] Something deployed to a public URL
- [ ] Completed their weekly reflection
- [ ] Participated in the Code Reading workshop
