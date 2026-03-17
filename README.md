# Table & Ledger

Static site with markdown-powered blog. Built with Node.js, deployed on Cloudflare Pages.

## How it works

1. Homepage (`index.html`) lives in the project root. Edit it directly.
2. Blog posts live in `posts/` as markdown files with frontmatter.
3. Run `npm run build` to generate the site into `dist/`.
4. Cloudflare Pages runs the build automatically on every git push.

## Writing a new post

Create a `.md` file in `posts/`. Name it whatever you want (the `slug` in frontmatter controls the URL).

Every post needs this frontmatter block at the top:

```
---
title: Your Post Title Here
date: 2026-03-17
category: Case Study
slug: your-url-slug
lede: A one-paragraph summary. Shows below the title and on the blog index.
---

Your markdown content here.
```

### Frontmatter fields

| Field | Required | What it does |
|-------|----------|-------------|
| `title` | Yes | Post title. Shows in header, browser tab, OG tags. |
| `date` | Yes | Publication date. Format: YYYY-MM-DD. Controls sort order. |
| `category` | Yes | Label above title. Examples: Case Study, Essay, Musing, Field Note |
| `slug` | Yes | URL path. Post will live at `/blog/{slug}/` |
| `lede` | Yes | Summary paragraph. Shows italic below title and on blog index. |

### Custom HTML in markdown

You can embed raw HTML in your markdown for special elements. The CSS supports:

- `.pullquote` - Large serif text with top/bottom borders
- `.stat-row` > `.stat` - Grid of big numbers with labels
- `.stack-block` > `.stack-item` - Tool/role description grid
- `.flow-block` > `.flow-step` - Numbered step sequence

See existing posts for examples.

## Categories used so far

- **Case Study** - Documented implementations with results
- **Essay** - Longer analytical pieces
- **Musing** - Shorter opinion/observation pieces

## Local development

```bash
npm install
npm run build
# Open dist/index.html in a browser, or use any static server:
npx serve dist
```

## Cloudflare Pages settings

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | 18+ |

## File structure

```
tableandledger/
  index.html          # Homepage (hand-edited, copied to dist on build)
  donnie.jpg          # Headshot (copied to dist on build)
  package.json
  posts/              # Markdown blog posts
    food-cost-visibility-one-day.md
    distributed-computing-restaurant.md
    the-last-thing-you-need-to-learn.md
  templates/          # HTML templates for generated pages
    article.html      # Single post template
    blog-index.html   # Blog listing page template
  static/             # CSS and static assets
    style.css         # Shared design system
  scripts/
    build.js          # Build script
  dist/               # Generated output (gitignored, built by Cloudflare)
```
