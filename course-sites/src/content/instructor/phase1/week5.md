---
title: "Week 5: MVP Sprint — Facilitator Guide"
page_id: p1w5
phase: "1"
depth: "../"
breadcrumb:
  - label: Home
    url: ../index.html
  - label: Phase 1
    url: index.html
  - label: Week 5
---

<div class="week-header">
  <div class="week-number">05</div>
  <div class="week-header-text">
    <h1>MVP Sprint · Facilitator Guide</h1>
    <p class="week-theme">Intent: run a real sprint, ship a live MVP, conduct Phase 1 Code Walkthroughs.</p>
  </div>
</div>

## Monday — Sprint Planning

**Your role in product discovery:** You are not a product advisor. Let squads choose their own ideas. Your one constraint: scope. Almost every squad will overscope on day one.

**Scope challenge questions to use:**
- "Can a user do the core thing in 3 clicks? If not, what can you cut?"
- "What happens if you remove [feature X] — does the product still make sense?"
- "What's the riskiest technical piece? Do you have 5 days to figure it out?"

**What makes a good MVP scope:**
- One primary user action that solves a clear problem
- Frontend + backend + database all present
- Deployable and demoed with a real URL
- Achievable by Thursday evening

**Red flags in sprint plans:**
- More than 6 user-facing features
- "We'll add auth" (auth is a Phase 2 feature — defer it)
- Vague definitions of done ("the app works")
- No AI-assistance plan for tasks

---

## Tuesday–Thursday — Build Sprint

**Your presence:** Check in with each squad once per day — 10 minutes, standing, at their workspace. Ask: what did you merge yesterday, what's being worked on today, what's at risk?

**Wednesday mid-sprint check-ins:** Each squad gets 15 minutes with you. Come in with the Course Coordinator's progress summary for each squad. Ask directly: what needs to be cut? Help them make the decision — don't make it for them.

**PR discipline enforcement:** Check GitHub. If students are committing directly to main, stop them in the moment. Explain: this is not bureaucracy — it's how you work safely with AI-generated code in a team context. Every PR is a review checkpoint.

---

## Friday — Demo Day

**Logistics:**
- Invite external guests at least 1 week in advance
- Squads need 5 minutes each — calculate total time + buffer
- Have a backup plan if a live demo breaks (encourage squads to have a 60-second recovery plan)

**Framing for the audience:** Brief external guests that this is a student program, that the apps are 5-day MVPs, and that the goal is not polish — it's working software built by a squad of students who started the week with nothing.

**Your role during demos:** Don't intervene if something breaks. Let the squad handle it. Note how they respond to adversity — it's diagnostic.

---

## Code Walkthrough Assessment

**Logistics:** 10 minutes per student. Schedule across Friday afternoon and Monday morning. Warn students the previous Monday — not so they can over-prepare, but so they're not surprised.

**Selecting sections to assess:**
- Choose 2–3 sections per student
- Always include at least one AI-generated section (check PR descriptions)
- Include at least one section connecting to other parts of the system (not an isolated utility function)
- Vary across the squad — don't assess everyone on the same section

**Running the walkthrough:**
- Show the code on screen. Don't introduce it — just point and say "walk me through this."
- Let silence happen. Students who know the code will start talking. Students who don't will look uncomfortable — that's useful data.
- Follow up: "What would break if this function returned null instead?"
- If a student can't explain AI-generated code: "Did the AI write this? What did you verify before using it?"

**Scoring in the moment:** Fill in the rubric during or immediately after the walkthrough while it's fresh. Don't wait until end of day.

**After walkthroughs:**
- Share scores with students individually before Phase 2 starts
- Students scoring below 10: mandatory coaching conversation before W6
- Identify systemic gaps across the cohort (e.g., if most students score 1 on AI Awareness — that informs how you run Phase 2)

<div><a class="card" style="margin-top:16px" href="../assessments.html">
  <span class="card-label">Assessment</span>
  <h3>Full Code Walkthrough rubric and question bank →</h3>
</a></div>

---

## Phase 1 completion check

Before Phase 2 begins, confirm every student has:
- [ ] A deployed MVP (with a live URL)
- [ ] Passed or been remediated on the Code Walkthrough
- [ ] Submitted all 5 weekly reflections (Course Coordinator has this)
- [ ] A GitHub account with visible commit history across Phase 1
