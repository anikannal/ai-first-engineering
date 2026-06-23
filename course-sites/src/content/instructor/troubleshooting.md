---
title: Troubleshooting Guide
page_id: troubleshooting
depth: ""
breadcrumb:
  - label: Home
    url: index.html
  - label: Troubleshooting
---

<div class="page-header">
  <span class="eyebrow">Operations</span>
  <h1>Troubleshooting Guide</h1>
  <p class="subtitle">What to do when students hit common blockers, fall behind, or struggle with AI collaboration.</p>
</div>

## Student is accepting AI output without reading it

**Signs:** Can't explain their own code at demos or check-ins. PR descriptions say nothing about what the code does. Friday demo shows something working but student can't answer basic questions about it.

**What to do:**
- Address it directly in the next 1:1: "I noticed you couldn't explain [section] during the demo. Let's walk through it now."
- Don't frame it as a failure. Frame it as the most important skill to develop.
- Assign the Code Reading workshop as a one-on-one exercise: they read their own codebase section by section and explain it back to you.
- If it persists into Phase 2, this becomes a Code Walkthrough risk. Flag it in the Course Coordinator and increase check-in frequency.

---

## Student is not shipping by end of week

**Signs:** Nothing deployed by Friday. Demo shows a localhost screenshot instead of a live URL. MVP sprint produces no working features.

**What to do:**
- Check in Wednesday — don't wait until Friday. The Course Coordinator flags this automatically, but act before the end of week.
- Diagnose: is it scope (they planned too much), blocking bugs (they're stuck), or avoidance (they're overwhelmed)?
- For scope: help them cut immediately. What's the one thing that must work?
- For blocking bugs: escalate to Engineering Coach for direct technical help.
- For overwhelm: 1:1 conversation about what's making it feel impossible. Often it's a single misunderstanding that's blocking everything.

---

## Student is over-relying on AI (not developing their own skills)

**Signs:** All code is AI-generated with no modifications. Student can't debug without asking AI first. Reflections always say "the AI did it, it worked."

**What to do:**
- This is subtle — over-reliance often looks like productivity in the short term.
- Introduce a "no AI" constraint for one specific task each week. Ask them to build something small without AI assistance and reflect on what was hard.
- In Code Walkthroughs, specifically probe AI Awareness: "What did you change from what the AI generated? Why?"
- If the student is genuinely not developing judgment, have an explicit conversation: the goal of this program is not to produce someone who uses AI well when the AI works perfectly. It's to produce someone who knows when AI is wrong.

---

## Squad is not using PRs / committing directly to main

**Signs:** GitHub shows direct commits to main. No PR history. Squad "collaborating" by sharing files in chat.

**What to do:**
- Stop it immediately the first time you see it. Don't let it become a habit.
- Be clear about why: "Every PR is a review checkpoint. It's how you work safely with AI-generated code in a team. It's also what your PR History assessment is based on."
- Check their GitHub daily during the MVP sprint. The Course Coordinator tracks this — act on flags same day.

---

## Student is falling significantly behind the cohort

**Signs:** Missing milestones two weeks in a row. Reflection responses are short or not submitted. Visible disengagement.

**What to do:**
- Schedule a 1:1 focused on what's getting in the way — not on catching up. Catching up follows from removing the blocker.
- Assess whether the issue is: conceptual (they're lost), technical (they're blocked), or personal (something outside the program).
- For conceptual gaps: identify the specific gap (async? databases? prompting?). Give a focused exercise to close it.
- For personal issues: be human first. The program can flex; a struggling student cannot.
- Don't let a student reach the Phase 2 transition significantly behind without a clear plan.

---

## Student disputes their Code Walkthrough score

**Signs:** Student thinks their score is unfair, particularly on AI Awareness or System Thinking.

**What to do:**
- Review your notes from the walkthrough. If the scoring was based on a single unclear question, that's a process issue — be open to revisiting.
- If the score reflects a consistent pattern across the walkthrough, walk through each dimension with the student and explain specifically what you observed.
- The rubric descriptors are your reference — share them with the student directly. This is also valuable because it shows them exactly what to work on.
- Scores below 10 trigger a coaching conversation regardless — use this as that conversation.

---

## AI Coach capability not working as expected

**Signs:** Students report the Debugging Partner "just gave me the answer" rather than asking questions, or the Code Review Agent is not flagging obvious issues.

**What to do:**
- Check the system prompt configuration — prompts can drift if edited. Compare against the canonical version in this guide.
- Report to the program coordinator with a specific example of unexpected behaviour.
- In the meantime, direct students to use the AI Coach with explicit framing: "Tell it what you've already tried before asking for help."

---

## Phase 2 or 3 content not yet published

**Signs:** Students asking about Phase 2 in the student guide, which shows placeholder content.

**What to do:**
- Phase 2 content will be published before Week 6 starts. Students can see the Phase 2 overview in the concept note.
- If students are progressing faster than expected and want to read ahead, share the module design documents from the program materials directly.
