---
title: Assessment Rubrics
page_id: assessments
depth: ""
breadcrumb:
  - label: Home
    url: index.html
  - label: Assessment Rubrics
---

<div class="page-header">
  <span class="eyebrow">Assessments · Full Rubrics + Assessor Notes</span>
  <h1>Assessment Rubrics</h1>
  <p class="subtitle">Three assessments across the program. Each tests a different dimension of AI-first engineering competence. No written exams.</p>
</div>

## Assessment 1: Code Walkthrough

**Format:** 10–15 min, 1:1, human coach  
**When:** End of Phase 1 (W5), Phase 2 (W11), Phase 3 (W16)

### Assessor preparation

Before the walkthrough, review the student's GitHub activity for the phase and the Course Coordinator's pre-brief. Select 2–3 code sections:
- At least one AI-generated (visible in PR descriptions)
- At least one connecting to other parts of the system
- Vary across the squad

### Dimension 1: Comprehension

<div class="score-grid">
  <div class="score-row">
    <div class="score-label s1">1</div>
    <div class="score-text">Cannot explain the code's purpose. Describes syntax ("it's a function, it has parameters") without meaning.</div>
  </div>
  <div class="score-row">
    <div class="score-label s2">2</div>
    <div class="score-text">Explains the general purpose but misses key details or gets some behaviour wrong.</div>
  </div>
  <div class="score-row">
    <div class="score-label s3">3</div>
    <div class="score-text">Accurately explains inputs, outputs, and side effects. May need a prompt or two.</div>
  </div>
  <div class="score-row">
    <div class="score-label s4">4</div>
    <div class="score-text">Explains fluently and precisely, including edge cases and system fit, without prompting.</div>
  </div>
</div>

### Dimension 2: Critical Evaluation

<div class="score-grid">
  <div class="score-row">
    <div class="score-label s1">1</div>
    <div class="score-text">Accepts code as-is. Cannot identify any potential issues even when prompted.</div>
  </div>
  <div class="score-row">
    <div class="score-label s2">2</div>
    <div class="score-text">Identifies one obvious issue when explicitly asked, but can't explain why it matters.</div>
  </div>
  <div class="score-row">
    <div class="score-label s3">3</div>
    <div class="score-text">Proactively identifies at least one issue or improvement and explains the reasoning.</div>
  </div>
  <div class="score-row">
    <div class="score-label s4">4</div>
    <div class="score-text">Identifies multiple issues, reasons about tradeoffs, suggests a concrete path forward.</div>
  </div>
</div>

### Dimension 3: AI Awareness

<div class="score-grid">
  <div class="score-row">
    <div class="score-label s1">1</div>
    <div class="score-text">Cannot distinguish AI-generated from human-written sections. Has not thought about this.</div>
  </div>
  <div class="score-row">
    <div class="score-label s2">2</div>
    <div class="score-text">Aware AI generated some code but can't explain what they verified, changed, or decided to keep.</div>
  </div>
  <div class="score-row">
    <div class="score-label s3">3</div>
    <div class="score-text">Can articulate what AI generated, what they changed, what they verified, and why they trusted the output.</div>
  </div>
  <div class="score-row">
    <div class="score-label s4">4</div>
    <div class="score-text">Demonstrates sophisticated judgment: knows when to accept, modify, or reject AI output and explains the heuristics developed.</div>
  </div>
</div>

### Dimension 4: System Thinking

<div class="score-grid">
  <div class="score-row">
    <div class="score-label s1">1</div>
    <div class="score-text">Can only discuss code in isolation. Cannot reason about its place in the system.</div>
  </div>
  <div class="score-row">
    <div class="score-label s2">2</div>
    <div class="score-text">Vague sense of the code's place in the system but cannot trace dependencies clearly.</div>
  </div>
  <div class="score-row">
    <div class="score-label s3">3</div>
    <div class="score-text">Can explain how this code connects to adjacent parts and what would break if it changed.</div>
  </div>
  <div class="score-row">
    <div class="score-label s4">4</div>
    <div class="score-text">Reasons fluently about system role, identifies implicit dependencies, considers downstream effects.</div>
  </div>
</div>

### Scoring

| Score | Outcome |
|-------|---------|
| 13–16 | Distinction |
| 10–12 | Pass |
| 7–9 | Borderline — coaching conversation required |
| 4–6 | Does not meet standard — remediation required |

**Note:** A score of 1 on any dimension, regardless of total, triggers a mandatory coaching conversation.

### Assessor question bank

**Comprehension:** "Walk me through what this function does." / "What happens if this input is null?" / "Why is this structured this way?"

**Critical evaluation:** "Is there anything here you'd change?" / "What edge cases does this miss?" / "If this was AI-generated, what would you verify before shipping?"

**AI awareness:** "Did you write this, or did the AI?" / "What did you change from what the AI generated?" / "How did you decide to trust this output?"

**System thinking:** "What would break if this function was removed?" / "Where does this data come from?" / "What happens downstream if this returns an error?"

---

## Assessment 2: PR History Review

**Format:** Async review + 15-min feedback conversation  
**When:** End of Phase 2 (W11) and Phase 3 (W16)

Review both PRs authored and PRs reviewed across the phase.

### Dimension 1: PR Communication

<div class="score-grid">
  <div class="score-row"><div class="score-label s1">1</div><div class="score-text">PR descriptions absent or minimal ("fixed stuff"). No context given.</div></div>
  <div class="score-row"><div class="score-label s2">2</div><div class="score-text">Descriptions focus on what changed technically, not why.</div></div>
  <div class="score-row"><div class="score-label s3">3</div><div class="score-text">PRs explain purpose, reference the relevant task, note what reviewer should check.</div></div>
  <div class="score-row"><div class="score-label s4">4</div><div class="score-text">PRs are exemplary: context, tradeoffs considered, AI sections flagged explicitly.</div></div>
</div>

### Dimension 2: Commit Discipline

<div class="score-grid">
  <div class="score-row"><div class="score-label s1">1</div><div class="score-text">Commits are infrequent, enormous, or have no meaningful messages.</div></div>
  <div class="score-row"><div class="score-label s2">2</div><div class="score-text">Commits are inconsistently sized and messaged. Hard to follow.</div></div>
  <div class="score-row"><div class="score-label s3">3</div><div class="score-text">Reasonably atomic commits with clear messages describing what changed.</div></div>
  <div class="score-row"><div class="score-label s4">4</div><div class="score-text">Commit history reads as a clear narrative. Anyone could follow the development from commits alone.</div></div>
</div>

### Dimension 3: AI Collaboration Transparency

<div class="score-grid">
  <div class="score-row"><div class="score-label s1">1</div><div class="score-text">No evidence AI's role was considered. AI-generated sections undifferentiated.</div></div>
  <div class="score-row"><div class="score-label s2">2</div><div class="score-text">Occasionally notes AI involvement but inconsistently, without reflection.</div></div>
  <div class="score-row"><div class="score-label s3">3</div><div class="score-text">Consistently notes AI contributions, explains what was verified or modified.</div></div>
  <div class="score-row"><div class="score-label s4">4</div><div class="score-text">Treats AI as a collaborator to be cited. PR descriptions include clear attribution and critical judgment about AI output quality.</div></div>
</div>

### Dimension 4: Review Quality

<div class="score-grid">
  <div class="score-row"><div class="score-label s1">1</div><div class="score-text">Reviews absent or approvals only.</div></div>
  <div class="score-row"><div class="score-label s2">2</div><div class="score-text">Superficial comments (typos, formatting) — no substantive issues raised.</div></div>
  <div class="score-row"><div class="score-label s3">3</div><div class="score-text">At least one substantive comment per PR: real issue, clarifying question, or meaningful improvement.</div></div>
  <div class="score-row"><div class="score-label s4">4</div><div class="score-text">Thorough reviews that add clear value. AI-generated code scrutinised explicitly. Reasoning explained.</div></div>
</div>

---

## Assessment 3: Portfolio Artifact

**Format:** Written (1,500–2,500 words), video (8–12 min), or presentation (15 slides + notes)  
**When:** Submitted W15, prior to Demo Day

### Dimension 1: Honesty and Depth of Reflection

<div class="score-grid">
  <div class="score-row"><div class="score-label s1">1</div><div class="score-text">Reads as a product description. No real reflection on process or AI use.</div></div>
  <div class="score-row"><div class="score-label s2">2</div><div class="score-text">Generic reflection ("AI helped me code faster"). No specific examples.</div></div>
  <div class="score-row"><div class="score-label s3">3</div><div class="score-text">Specific, honest reflection on both successes and failures. Reader learns something real about how this student worked.</div></div>
  <div class="score-row"><div class="score-label s4">4</div><div class="score-text">Exceptionally honest and insightful. Non-obvious lessons, genuine mistakes acknowledged, mature relationship with AI as a tool.</div></div>
</div>

### Dimension 2: Technical Credibility

<div class="score-grid">
  <div class="score-row"><div class="score-label s1">1</div><div class="score-text">Technical content vague or incorrect. Could have been written without building anything.</div></div>
  <div class="score-row"><div class="score-label s2">2</div><div class="score-text">Technical content present but superficial. Describes what was built without demonstrating understanding.</div></div>
  <div class="score-row"><div class="score-label s3">3</div><div class="score-text">Accurate and appropriately detailed. The reader can tell this student knows what they built.</div></div>
  <div class="score-row"><div class="score-label s4">4</div><div class="score-text">Precise and confident. Architectural decisions and tradeoffs explained. Goes beyond describing code to reasoning about it.</div></div>
</div>

### Dimension 3: Specificity of AI Examples

<div class="score-grid">
  <div class="score-row"><div class="score-label s1">1</div><div class="score-text">AI examples absent or entirely generic.</div></div>
  <div class="score-row"><div class="score-label s2">2</div><div class="score-text">Some specific examples but without enough context to be instructive.</div></div>
  <div class="score-row"><div class="score-label s3">3</div><div class="score-text">Clear, specific examples with enough context (task, prompt, output, changes) that a reader could learn from them.</div></div>
  <div class="score-row"><div class="score-label s4">4</div><div class="score-text">Exemplary case studies. Actual prompts included, output evaluated, evaluation process described. Genuinely instructive.</div></div>
</div>

### Dimension 4: Communication Quality

<div class="score-grid">
  <div class="score-row"><div class="score-label s1">1</div><div class="score-text">Poorly structured, hard to follow. Not appropriate to share with an employer.</div></div>
  <div class="score-row"><div class="score-label s2">2</div><div class="score-text">Readable but unpolished. Technical terminology inconsistent.</div></div>
  <div class="score-row"><div class="score-label s3">3</div><div class="score-text">Well-structured, clearly written, appropriate for a technical audience. Would represent the student well.</div></div>
  <div class="score-row"><div class="score-label s4">4</div><div class="score-text">Distinctive and compelling. Student's voice comes through. Would stand out in any hiring context.</div></div>
</div>

### Portfolio scoring

| Score | Outcome |
|-------|---------|
| 13–16 | Distinction |
| 10–12 | Pass |
| 7–9 | Borderline — revision opportunity offered |
| 4–6 | Does not meet standard — full revision required |
