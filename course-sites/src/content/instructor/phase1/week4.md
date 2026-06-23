---
title: "Week 4: Persist Your Data — Facilitator Guide"
page_id: p1w4
phase: "1"
depth: "../"
breadcrumb:
  - label: Home
    url: ../index.html
  - label: Phase 1
    url: index.html
  - label: Week 4
---

<div class="week-header">
  <div class="week-number">04</div>
  <div class="week-header-text">
    <h1>Persist Your Data · Facilitator Guide</h1>
    <p class="week-theme">Intent: schema design as a human skill, database integration, data integrity thinking.</p>
  </div>
</div>

## Monday — Concept Session

**The key point to establish explicitly:** AI is very good at writing ORM queries and migration files. But AI doesn't know your data. Schema design is a human judgment — it encodes how you think about your domain. Once the schema is right, the AI can execute perfectly. If the schema is wrong, perfect execution produces a broken system.

**SQL fundamentals:** Students only need to read SQL at this stage, not write it. Focus on SELECT with WHERE and JOIN — these are the queries they'll see AI generate most. Understanding what a JOIN does conceptually is enough.

---

## Tuesday schema reviews

Every squad presents their schema before coding starts. This is the most important facilitation moment of Week 4.

**What to look for:**

*Missing relationships:* A schema with three unrelated tables is almost certainly missing something. Ask: "How does a user own a post? How does a post belong to a category?" If they can't point to a foreign key, the schema isn't done.

*Naming inconsistencies:* `userId` in one table, `user_id` in another. AI will generate inconsistent names if not given a consistent schema. Point this out — it matters for query generation.

*Overly ambitious schemas:* Students sometimes design for their dream product, not their MVP. The schema should support the Week 5 MVP, not Phase 3. Ask: "Do you need this table for what you're building next week?"

*Missing timestamps:* `created_at` and `updated_at` should be on every table. Most students forget. Remind them.

**Sign-off:** Only sign off once a schema has at least one relationship, consistent naming, timestamps, and scope appropriate for the MVP.

---

## Thursday — Data Integrity Workshop

**Facilitation approach:** Frame this as "adversarial testing" — squads are trying to help each other find problems, not embarrass each other. The energy should be collaborative.

**What usually breaks:**
- SQL injection (if students used raw queries instead of parameterised ones — AI sometimes generates raw queries)
- Empty strings accepted as valid (no backend validation)
- Duplicate records created (no unique constraints)
- Cascading deletes not handled (deleting a user orphans their posts)

**After the workshop:** Every squad should have a short list of issues found. These get fixed before the MVP sprint.

---

## Week 4 escalation flags

| Signal | Your action |
|--------|-------------|
| Schema submitted with no relationships | Require revision, don't sign off |
| Database connection not working by Wednesday | Direct technical support — don't let this block the sprint |
| Student submits reflection saying "I let AI design everything" | Conversation about the schema as a human responsibility |
