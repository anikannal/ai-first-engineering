---
title: AI Coach Setup
page_id: ai-coach
depth: ""
breadcrumb:
  - label: Home
    url: index.html
  - label: AI Coach Setup
---

<div class="page-header">
  <span class="eyebrow">Program Infrastructure</span>
  <h1>AI Coach Setup</h1>
  <p class="subtitle">Eight capabilities, configured in your IDE. Your first point of contact for most things — code review, debugging, architecture questions, and more.</p>
</div>

<div class="callout info">
  <span class="callout-title">What the AI Coach is</span>
  <p>The AI Coach is a set of configured system prompts you install into Claude Code or Cursor. Each capability is a separate prompt, scoped to a specific type of support. The AI Coach is not hosted on external infrastructure — it runs in your IDE using your API key or the program's shared credentials.</p>
</div>

## The eight capabilities

| Capability | What it does | When to use it |
|---|---|---|
| **Course Coordinator** | Tracks your progress, tells you what's next, briefs coaches before check-ins | Daily — log completions, check your status |
| **Code Review Agent** | Reviews PRs: correctness, security, test coverage, AI-generated code flags | Every PR before human review |
| **Debugging Partner** | Walks through bugs Socratically — asks questions before giving answers | When stuck on a bug for >15 min |
| **Architecture Advisor** | Reviews system design, flags anti-patterns, suggests tradeoffs | Before building a new feature or component |
| **Prompt Coach** | Reviews prompts you write to your coding AI tools | Before any significant code generation |
| **Sprint Assistant** | Decomposes requirements, estimates scope, writes user stories | Sprint planning, feature scoping |
| **Concept Tutor** | Answers technical questions with curriculum-aware context | Any time you're confused about a concept |
| **Reflection Interviewer** | Weekly async check-in — surfaces blockers, logs your progress | Every Friday |

## How to install

Each capability is installed as a custom command in Claude Code or a system prompt in Cursor.

### In Claude Code

Your program coordinator will provide a `.claude/commands/` directory with pre-configured `.md` files for each capability. Drop this directory into your project root and the commands will be available as `/ai-coach-[capability]`.

```bash
# Example: run the Code Review Agent on your current branch
/ai-coach-review

# Example: start a debugging session
/ai-coach-debug

# Example: get your weekly check-in
/ai-coach-reflect
```

### In Cursor

Each capability is available as a system prompt preset. Open **Cursor Settings → AI → Custom Instructions** and paste the relevant prompt from your program materials. Name each one clearly (e.g. "AI Coach — Debugging Partner").

## How to use each capability well

### Course Coordinator

The Coordinator needs context to be useful. At the start of each week, tell it:
- What phase and week you're in
- What you completed last week
- What your goal is this week

It will track this and surface it to your coaches before check-ins.

### Code Review Agent

Paste the diff (or the full file for smaller changes) and include:
- What the PR is meant to do
- Whether any sections are AI-generated
- Anything you're unsure about

The agent will flag issues under four categories: correctness, security, readability, and AI-generated code quality.

### Debugging Partner

Don't just paste the error. Include:
- What you expected to happen
- What actually happened
- What you've already tried

The Debugging Partner will ask clarifying questions before suggesting a fix. This is deliberate — the goal is to build your debugging reasoning, not just get an answer.

### Architecture Advisor

Use this **before** writing code, not after. Give it:
- What you're trying to build
- Your current system structure (even a rough description)
- The constraints you're working within

### Prompt Coach

Paste the prompt you're about to use and ask for a review. It will suggest improvements to make the output more targeted and easier to validate.

### Sprint Assistant

Give it your product brief and time constraint. It will break the work into tasks, flag scope risks, and suggest what to cut if you need to.

## The rule: AI Coach first, human coach second

For most questions, go to the AI Coach first. If the AI Coach can't resolve it in 2–3 exchanges, escalate to your Engineering Coach. This isn't about rationing human time — it's about building the habit of structured problem-solving before seeking help, which is exactly how effective AI-first engineers work.

<div class="callout tip">
  <span class="callout-title">The meta-skill</span>
  <p>The AI Coach is itself an AI system. Getting good at using it — writing clear prompts, giving useful context, evaluating its suggestions critically — is practice for exactly the skills this program is building. Treat your interactions with the AI Coach as deliberate practice, not just task completion.</p>
</div>
