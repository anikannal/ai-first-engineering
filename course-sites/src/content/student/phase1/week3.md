---
title: "Week 3: Connect Frontend to Backend"
page_id: p1w3
phase: "1"
depth: "../"
breadcrumb:
  - label: Home
    url: ../index.html
  - label: "Phase 1"
    url: index.html
  - label: "Week 3"
---

<div class="week-header">
  <div class="week-number">03</div>
  <div class="week-header-text">
    <h1>Connect Frontend to Backend</h1>
    <p class="week-theme">"Make it feel like a real product."</p>
  </div>
</div>

<div class="callout goal">
  <span class="callout-title">This Week's Goal</span>
  <p>Build a UI that actually talks to your backend — fetches real data, sends real input, handles loading and errors gracefully. By Friday it should feel like something a real person could use.</p>
</div>

## What you'll learn this week

<ul class="outcomes-list">
  <li>Understand the full request lifecycle in a browser app</li>
  <li>Handle async operations: loading, error, and success states</li>
  <li>Build React components that consume real API data</li>
  <li>Think about user experience, not just functionality</li>
  <li>Use component mapping to structure AI prompts effectively</li>
</ul>

## Monday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Concept Session</span>
    <h4>The Full-Stack Mental Model · 90 min</h4>
  </div>
  <div class="day-block-body">

**The big idea:** What actually happens between a user clicking a button and seeing a result? This session traces that full journey and gives you the mental model to debug it when things go wrong.

**What gets covered:**
- The request lifecycle: browser → API → database → response → UI update
- Async JavaScript: promises, async/await — why this exists and how to think about it
- State in a frontend: what it is, why it matters
- React fundamentals: components, props, state — just enough to render API data
- Common CORS errors and how to fix them (you will hit these)

  </div>
</div>

## Tuesday–Thursday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Build</span>
    <h4>Full-Stack Sprint</h4>
  </div>
  <div class="day-block-body">

**The brief:** Build a frontend that talks to your backend. The UI must:
- **Fetch data** from at least one API endpoint on page load
- Let the user **submit data** via a form (POST to your API)
- Show a **loading state** while waiting for responses
- **Handle errors gracefully** — no blank screens, no console-only errors

**Component mapping exercise (do this before writing code):**

Sketch your UI on paper or a whiteboard tool. For each element, identify:
- What data does it need?
- Where does that data come from? (local state, API, props)
- What happens while it's loading?
- What happens if the request fails?

Include this map in your prompt to Claude Code. The difference in output quality with vs. without it is dramatic.

<span class="ai-coach-touch">AI Coach · Architecture Advisor</span> Submit your component map to the Architecture Advisor before you start coding. First use of this capability — it'll flag structural issues before they become code problems.

  </div>
</div>

## Thursday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Workshop</span>
    <h4>UX Peer Review · 60 min</h4>
  </div>
  <div class="day-block-body">

Spend 10 minutes using a squadmate's app as a real user — no explanations from the builder allowed. Note:
- What confused you
- What didn't work as expected
- What you wanted to do but couldn't

Give written feedback. Builders address at least one piece of it before Friday's demo.

This is your first introduction to building for users, not just for demos.

  </div>
</div>

## Friday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Demo</span>
    <h4>Full User Journey Demo</h4>
  </div>
  <div class="day-block-body">

Show the complete flow — no Postman, no database viewer. Just the UI, used as a real person would use it. Show what happens when the data loads, when a form is submitted, and what the app does when something goes wrong.

  </div>
</div>

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Reflection</span>
    <h4>Weekly Check-in</h4>
  </div>
  <div class="day-block-body">

<span class="ai-coach-touch">AI Coach · Reflection Interviewer</span> This week's focus: *"What's one decision you made this week that you made yourself, without asking the AI? Why did you make it that way?"*

  </div>
</div>

---

<div class="callout tip">
  <span class="callout-title">On async and AI</span>
  <p>AI-generated async code often works — but it rarely handles edge cases. Loading states get forgotten. Errors get swallowed silently. Network failures aren't handled. Make checking for these a standard part of your review process whenever AI generates async code.</p>
</div>
