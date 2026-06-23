#!/usr/bin/env python3
"""
AI-First Engineering Course Sites Builder
Usage: python build.py
Output: build/student/  and  build/instructor/
"""

import os
import re
import shutil
from pathlib import Path

import frontmatter
import markdown
from jinja2 import Environment, FileSystemLoader

# ── Paths ──────────────────────────────────────────────────────────────────
BASE      = Path(__file__).parent
SRC       = BASE / "src"
BUILD     = BASE / "build"
SHARED    = SRC / "shared"

SITES = {
    "student":    { "content": SRC / "content" / "student",    "template": SRC / "templates" / "student" },
    "instructor": { "content": SRC / "content" / "instructor",  "template": SRC / "templates" / "instructor" },
}

# ── Markdown extensions ────────────────────────────────────────────────────
MD_EXTENSIONS = ["tables", "fenced_code", "attr_list"]

# ── Helpers ────────────────────────────────────────────────────────────────

def load_template(site_name):
    env = Environment(
        loader=FileSystemLoader(str(SITES[site_name]["template"])),
        autoescape=False,
    )
    return env.get_template("base.html")

def md_to_html(text):
    return markdown.markdown(text, extensions=MD_EXTENSIONS)

def compute_depth(rel_path: Path) -> str:
    """Return relative path prefix to reach root from a file's location."""
    parts = rel_path.parent.parts
    if not parts or parts == (".",):
        return ""
    return "../" * len(parts)

def copy_shared(out_root: Path):
    shared_out = out_root / "shared"
    shared_out.mkdir(parents=True, exist_ok=True)
    for f in SHARED.iterdir():
        shutil.copy2(f, shared_out / f.name)

def build_site(site_name: str):
    content_root = SITES[site_name]["content"]
    out_root     = BUILD / site_name
    template     = load_template(site_name)

    # Ensure output root exists; files are overwritten in place
    out_root.mkdir(parents=True, exist_ok=True)

    # Copy shared assets
    copy_shared(out_root)

    # Walk all markdown files
    for md_path in sorted(content_root.rglob("*.md")):
        rel      = md_path.relative_to(content_root)
        out_path = (out_root / rel).with_suffix(".html")
        out_path.parent.mkdir(parents=True, exist_ok=True)

        post     = frontmatter.load(str(md_path))
        meta     = post.metadata
        body_md  = post.content

        # Depth: override from frontmatter, or compute automatically
        depth = meta.get("depth", compute_depth(rel))

        # Render markdown body to HTML
        body_html = md_to_html(body_md)

        # Build template context
        ctx = {
            "title":      meta.get("title", rel.stem.replace("-", " ").title()),
            "page_id":    meta.get("page_id", ""),
            "phase":      meta.get("phase", ""),
            "breadcrumb": meta.get("breadcrumb", None),
            "depth":      depth,
            "content":    body_html,
        }

        html = template.render(**ctx)
        out_path.write_text(html, encoding="utf-8")
        print(f"  {site_name}: {rel} → {out_path.relative_to(BUILD)}")

# ── Main ───────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("Building AI-First Engineering course sites...\n")
    for site in SITES:
        print(f"[ {site.upper()} ]")
        build_site(site)
        print()
    print("Done. Open build/student/index.html or build/instructor/index.html")
