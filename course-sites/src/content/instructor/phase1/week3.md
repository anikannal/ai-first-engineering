---
title: "Week 3: Connect Frontend to Backend — Facilitator Guide"
page_id: p1w3
phase: "1"
depth: "../"
breadcrumb:
  - label: Home
    url: ../index.html
  - label: Phase 1
    url: index.html
  - label: Week 3
---

<div class="week-header">
  <div class="week-number">03</div>
  <div class="week-header-text">
    <h1>Connect Frontend to Backend · Facilitator Guide</h1>
    <p class="week-theme">Intent: full-stack mental model, async handling, and the first UX perspective.</p>
  </div>
</div>

## Monday — Concept Session

**The async explanation that works:** Ordering food at a restaurant. You place an order (the request). You don't freeze at the table waiting — you talk, check your phone, drink water (the app continues running). When food arrives (the response), you handle it. If the kitchen is closed (an error), you handle that too. Async/await is just a way of writing this flow clearly.

**CORS:** Students will hit CORS errors this week. Explain it before they do: browsers block requests to different origins by default for security reasons. Your backend needs to explicitly allow your frontend's origin. AI generates CORS fixes reliably — the lesson is understanding why, not how to write the header.

**React scope:** Keep it narrow. Components, props, useState, useEffect. That's it for Week 3. Students who want to go deeper into React can — but the minimum for this week is: render a list of things from an API.

---

## The component mapping exercise

This is the architecture thinking exercise that prepares students for the Architecture Advisor. The point is not the map itself — it's the habit of thinking before generating.

**What good component maps look like:**
- Every UI element identified
- Data source for each element specified (API endpoint, local state, or parent prop)
- Loading and error states included for any async data

**What bad component maps look like:**
- Just a wireframe with no data flow
- Missing async states
- "Data comes from the backend" without specifying which endpoint

When you review maps before students start coding, look for the second type and ask questions: "What happens while this is loading? What if the API call fails?"

---

## Thursday — UX Peer Review

**Why this matters:** Students are building for demos, not users. This exercise breaks that pattern.

**Facilitation:** Enforce the no-explanation rule strictly. The builder cannot say anything while the tester uses the app. Watch the builder's face — the discomfort of watching someone confused by their app is itself the lesson.

**Debrief:** Ask builders: what surprised you? What did you think was obvious that wasn't?

---

## Week 3 escalation flags

| Signal | Your action |
|--------|-------------|
| Student's app shows blank screen on errors | Direct code review — this is the most common async failure |
| Student can't explain their component structure at demo | Ask them to draw it on the whiteboard before W4 |
| No loading states visible | Require fix before W4 starts |
