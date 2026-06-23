---
title: "Week 1: First Ship"
page_id: p1w1
phase: "1"
depth: "../"
breadcrumb:
  - label: Home
    url: ../index.html
  - label: "Phase 1"
    url: index.html
  - label: "Week 1"
---

<div class="week-header">
  <div class="week-number">01</div>
  <div class="week-header-text">
    <h1>First Ship</h1>
    <p class="week-theme">"Get something live on the internet by Friday."</p>
  </div>
</div>

<div class="callout goal">
  <span class="callout-title">This Week's Goal</span>
  <p>By Friday you will have a personal project deployed to a public URL — and you'll be able to explain every line of code in it. The app itself is simple. The habit of shipping is not.</p>
</div>

## What you'll learn this week

<ul class="outcomes-list">
  <li>How AI coding tools fit together and how to think about them</li>
  <li>Set up a professional dev environment end-to-end</li>
  <li>Use the AI-first engineering loop for the first time</li>
  <li>Write a structured engineering prompt</li>
  <li>Read code you didn't write and explain it to someone else</li>
  <li>Deploy a web app to a public URL</li>
</ul>

## Monday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Concept Session</span>
    <h4>The AI-First Engineer · 90 min</h4>
  </div>
  <div class="day-block-body">

**The big idea:** You are the architect and reviewer. AI is the builder. This session establishes that mental model and introduces every tool you'll use.

**What gets covered:**
- What changed in software engineering — and why AI fluency is now the baseline skill
- Tour of the tools: Claude Code, Cursor, GitHub Copilot, Antigravity — what each does and how they differ
- The context window: the most important concept to understand about AI coding tools
- The AI-first loop in six steps: **Spec → Prompt → Generate → Review → Test → Commit**

After this session you should be able to answer: *What is a context window, and why does it change how I structure my prompts?*

  </div>
</div>

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Lab</span>
    <h4>Environment Setup Sprint · 2–3 hrs</h4>
  </div>
  <div class="day-block-body">

Work through this checklist. Don't move on until every item is checked.

- [ ] Terminal: can navigate, create files, run scripts
- [ ] Git installed and configured, GitHub account linked
- [ ] Node.js + npm installed, Python installed
- [ ] VS Code + Cursor installed with recommended extensions
- [ ] Claude Code CLI installed and authenticated
- [ ] GitHub Copilot activated
- [ ] Test repo created → commit pushed → PR opened

**Stuck on setup for more than 30 minutes?** Stop and ask the AI Coach (Concept Tutor) for help. If that doesn't resolve it, flag your Engineering Coach.

<span class="ai-coach-touch">AI Coach · Concept Tutor</span> Use the Concept Tutor to walk through any setup blocker step by step.

  </div>
</div>

## Tuesday–Wednesday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Build</span>
    <h4>First Project · Your personal landing page</h4>
  </div>
  <div class="day-block-body">

**The brief:** Build and deploy a personal project landing page. It needs:
- A homepage with an "about" section personalised to you
- One interactive element — a form, a counter, a live API fetch, your choice
- A public URL that actually works

**Before you write any code**, fill in this prompt template completely:

```
I want to build: [description]
The tech stack should be: [frontend / backend / deployment]
The first thing it needs to do is: [specific feature]
The user will: [describe the interaction]
I do NOT want it to: [constraints]
Success looks like: [definition of done]
```

Then use this to prompt Claude Code. Iterate from the output.

<span class="ai-coach-touch">AI Coach · Prompt Coach</span> Submit your filled-in prompt template to the Prompt Coach before you generate. You'll get feedback on it before touching code — this is the first time you'll experience AI reviewing your AI usage.

<span class="ai-coach-touch">AI Coach · Course Coordinator</span> Log your project idea with the Course Coordinator so your progress is tracked from day one.

  </div>
</div>

## Thursday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Workshop</span>
    <h4>Code Reading · 60 min · Pairs</h4>
  </div>
  <div class="day-block-body">

Swap your codebase with a partner. You have 30 minutes to read theirs and prepare answers to these three questions:

1. **What does this file do, in plain English?**
2. **Find one thing that could break — and why**
3. **Find one thing you genuinely don't understand — look it up**

Then explain to each other.

This is not a code review. It's a reading exercise. The goal is to build the habit of *reading before trusting* — the most important habit for working with AI-generated code.

  </div>
</div>

## Friday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Demo</span>
    <h4>First Demo Day · 2–3 min each</h4>
  </div>
  <div class="day-block-body">

Demo your landing page to your squad. **The rule:** you must be able to explain every line of code. If someone asks "what does this function do?" and you can't answer — that's the most valuable moment of the week. Not a failure, a learning point.

  </div>
</div>

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Reflection</span>
    <h4>Weekly Check-in with AI Coach</h4>
  </div>
  <div class="day-block-body">

<span class="ai-coach-touch">AI Coach · Reflection Interviewer</span> The Reflection Interviewer will ask you four questions this week:

- What did you ship?
- What was harder than expected?
- What did the AI get wrong?
- What do you want to be able to do by next Friday?

This takes about 10 minutes. Do it before you close your laptop on Friday.

  </div>
</div>

## Tools this week

| Tool | What you're using it for |
|------|--------------------------|
| **Claude Code** | Generating your landing page from your prompt template |
| **Cursor** | Your main IDE — AI-assisted code editing |
| **Git + GitHub** | First commit, first PR |
| **Vercel** | Deploying your site to a public URL |

---

<div class="callout tip">
  <span class="callout-title">Things people get wrong in Week 1</span>
  <p>Accepting AI output without reading it. You don't need to understand every line immediately — but you need to read every line. The Code Reading workshop on Thursday is practice for this. Apply it to your own code too.</p>
</div>
