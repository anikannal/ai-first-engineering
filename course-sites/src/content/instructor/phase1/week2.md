---
title: "Week 2: Build a Backend — Facilitator Guide"
page_id: p1w2
phase: "1"
depth: "../"
breadcrumb:
  - label: Home
    url: ../index.html
  - label: Phase 1
    url: index.html
  - label: Week 2
---

<div class="week-header">
  <div class="week-number">02</div>
  <div class="week-header-text">
    <h1>Build a Backend · Facilitator Guide</h1>
    <p class="week-theme">Intent: build backend mental models and introduce structured AI debugging.</p>
  </div>
</div>

## Monday — Concept Session

**Duration:** 90 minutes  
**Key concept to land:** The backend exists because some things shouldn't run in the browser. Data needs to persist. Secrets need protection. Logic needs a server.

### Live demo approach

Build a simple Express.js (or FastAPI) server live with Claude Code. Narrate every decision:
- Show the prompt you used to generate the initial scaffold
- Show what you changed in the generated output and why
- Demonstrate a 500 error — and show how you'd prompt to fix it vs. how you'd debug it yourself
- Show what happens when you don't give the AI enough context vs. when you do

### HTTP fundamentals — keep it tight

Students don't need to memorise status codes. They need to understand: requests have a method and a path, responses have a status code and a body. That's enough to start. Don't spend more than 15 minutes on HTTP theory.

### Where AI stumbles with backend code

This is worth 5–10 minutes explicitly:
- AI generates optimistic code — it assumes things will work, often skips error handling
- AI doesn't know your server's runtime environment — it may generate code for the wrong Node version, wrong framework version
- AI can generate security vulnerabilities silently — especially around input handling

Plant these seeds now. Students will encounter them this week.

---

## The deliberate bug exercise

This is the most pedagogically important moment of Week 2. Do not skip it or make it optional.

**What students do:** Introduce a bug they understand, let AI try to fix it, document what happened.

**Why it matters:** Students default to trusting AI debugging. This exercise forces them to watch AI debug — to see both its capabilities and its failure modes. Many will be surprised that AI confidently diagnoses the wrong thing.

**Common outcomes:**
- AI fixes the surface symptom, not the root cause (very common)
- AI introduces a new bug while fixing the original (happens regularly)
- AI correctly identifies and fixes the bug (also happens — the lesson is still about the process of verification)

**Debrief on Thursday:** Ask squads to share what they observed. Build a shared vocabulary: "AI fixed the symptom," "AI overcorrected," "AI was right but I still verified it."

---

## Thursday — API Testing Workshop

**What you want students to take away:**

An API that can't be tested by someone who didn't build it isn't done. The one-paragraph API contract exercise surfaces whether students actually understand what their backend does. Read the contracts — vague language is a signal of shallow understanding.

**Common API contract failure mode:** Students describe the implementation ("it uses Express and queries the database") rather than the contract ("it accepts a user ID and returns all posts belonging to that user"). Redirect toward the latter.

---

## Week 2 escalation flags

| Signal | Your action |
|--------|-------------|
| Student can't explain their API endpoints at Friday demo | Schedule W3 pre-check before Wednesday |
| Student's deliberate bug exercise shows AI accepted without verification | Direct conversation about critical evaluation habit |
| Backend not functional by Thursday | Check in on Wednesday — don't wait |

---

## Week 2 success criteria

- [ ] REST API with 3+ endpoints deployed and tested via Postman
- [ ] External API call integrated and working
- [ ] Deliberate bug exercise documented
- [ ] API contract written
- [ ] Reflection submitted
