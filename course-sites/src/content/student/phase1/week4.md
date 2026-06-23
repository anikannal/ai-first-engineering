---
title: "Week 4: Persist Your Data"
page_id: p1w4
phase: "1"
depth: "../"
breadcrumb:
  - label: Home
    url: ../index.html
  - label: "Phase 1"
    url: index.html
  - label: "Week 4"
---

<div class="week-header">
  <div class="week-number">04</div>
  <div class="week-header-text">
    <h1>Persist Your Data</h1>
    <p class="week-theme">"Make your app remember things."</p>
  </div>
</div>

<div class="callout goal">
  <span class="callout-title">This Week's Goal</span>
  <p>Add a database to your app. By Friday you'll be able to create, read, update, and delete records — with data that survives a page refresh and a server restart.</p>
</div>

## What you'll learn this week

<ul class="outcomes-list">
  <li>Understand why databases exist and when you need one</li>
  <li>Design a basic data schema — the most human part of this week</li>
  <li>Connect your app to a Postgres database using an ORM</li>
  <li>Build full CRUD: create, read, update, delete</li>
  <li>Think about data integrity and what can go wrong</li>
</ul>

## Monday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Concept Session</span>
    <h4>Data and Persistence · 90 min</h4>
  </div>
  <div class="day-block-body">

**The big idea:** AI is very good at generating database code — but it doesn't know your data. Schema design is a human job. The AI executes; you architect.

**What gets covered:**
- Why not just use files? What databases actually give you
- Relational databases: tables, rows, columns, relationships
- SQL fundamentals: SELECT, INSERT, UPDATE, DELETE — enough to read what AI generates
- ORMs: what they are and why they exist
- Introduction to Supabase: provisioning a database in 5 minutes
- Schema design: how to think about your data before writing any code

  </div>
</div>

## Tuesday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Design</span>
    <h4>Schema Design (Before Any Code)</h4>
  </div>
  <div class="day-block-body">

**Before you touch code on Tuesday**, sketch your schema on paper:
- What are your **entities** — the things your app cares about?
- What are the **attributes** of each entity?
- How do they **relate** to each other? (At least one relationship required)

Example: a simple task app might have `users`, `projects`, and `tasks` — where tasks belong to projects, and projects belong to users.

<span class="ai-coach-touch">AI Coach · Architecture Advisor</span> Submit your schema sketch to the Architecture Advisor for feedback. It'll flag missing relationships, naming issues, and structural problems before they become migration headaches.

**Schema review:** Present your schema to your Engineering Coach for a 10-minute check. Code only starts after sign-off.

  </div>
</div>

## Wednesday–Thursday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Build</span>
    <h4>Database Integration Sprint</h4>
  </div>
  <div class="day-block-body">

**The brief:** Add a database to your full-stack app. At minimum:
- Users can **create** records (POST → INSERT)
- Users can **view** records (GET → SELECT)
- Data **persists** across page refreshes and server restarts
- At least **one relationship** between two tables

**Prompting tip:** Give the AI your schema explicitly — paste it into the prompt. AI-generated ORM code and migration files are dramatically better when the model has the schema in context.

  </div>
</div>

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Workshop</span>
    <h4>Data Integrity Workshop · Thursday · 60 min</h4>
  </div>
  <div class="day-block-body">

Squads try to break each other's databases:
- Submit empty forms
- Submit SQL injection strings in text fields
- Create duplicate records
- Delete a record that other records depend on

The goal: develop an instinct for edge cases. Patch what you find.

<span class="ai-coach-touch">AI Coach · Debugging Partner</span> Use the Debugging Partner to understand any vulnerability found and how to fix it properly.

<span class="ai-coach-touch">AI Coach · Prompt Coach</span> The Prompt Coach will review the prompts you use to fix the vulnerabilities — fixing security issues requires precise prompting.

  </div>
</div>

## Friday

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Demo</span>
    <h4>Full CRUD Demo</h4>
  </div>
  <div class="day-block-body">

Show the complete data lifecycle: create something, show it persisted, update it, delete it. Then show the database state directly (Supabase dashboard or a DB viewer) so everyone can verify the data is actually there — not just in the UI.

  </div>
</div>

<div class="day-block">
  <div class="day-block-header">
    <span class="day-tag">Reflection</span>
    <h4>Weekly Check-in</h4>
  </div>
  <div class="day-block-body">

<span class="ai-coach-touch">AI Coach · Reflection Interviewer</span> This week's focus: *"What did you design yourself this week, vs. let the AI design? How do you feel about that choice looking back?"*

  </div>
</div>

---

<div class="callout warning">
  <span class="callout-title">Common Week 4 blockers</span>
  <p>Database connection errors, environment variable issues, and ORM configuration are the most common blockers this week. If you're stuck for more than 30 minutes, don't wrestle alone — ask the Debugging Partner with your full error message and config (with secrets removed).</p>
</div>
