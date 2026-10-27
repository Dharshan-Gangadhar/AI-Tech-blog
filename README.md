# AI Journal — Technical Publication & Engineering Platform

> An independent, production-grade technical publication exploring Artificial Intelligence, Machine Learning algorithms, compiler memory internals, and scalable systems architecture.

**Live Production Site:** [https://ai-tech-blog-gilt.vercel.app/](https://ai-tech-blog-gilt.vercel.app/)  
**Author:** Dharshan Gangathar  
**Repository Branch:** `feature/ai-journal-upgrade`

---

## 🌟 Key Features

### 📰 Editorial Publication System
- **Repository-Controlled MDX:** Articles are authored in Markdown/MDX within `content/blog/` as the single source of truth.
- **Rich Technical Components:** Includes `<Callout>`, `<Note>`, `<Tip>`, `<Warning>`, `<KeyTakeaways>`, `<ComparisonTable>`, `<YouTubeEmbed>`, and pre-styled `<CodeBlock>` components.
- **Enhanced Code Experience:** Monospace syntax container with detected language headers, horizontal overflow scrolling, and one-click copy-to-clipboard with visual confirmation.
- **Reading Progress & ToC:** Top progress indicator tracking scroll completion, plus an automated Table of Contents with section highlighting.
- **Focus Reading Mode:** Distraction-reduced reading view and font scaling controls.

### 🔍 Discovery & Advanced SEO
- **Instant Search:** Local multi-term search across titles, descriptions, categories, and tags with URL query synchronization (`/search?q=...`) and zero external search subscription costs.
- **Structured Taxonomies:** Dynamic category pages (`/categories/[category]`) and tag pages (`/tags/[tag]`).
- **Syndication Feeds:** Full RSS 2.0 XML feed (`/rss.xml`), dynamic sitemap (`/sitemap.xml`), and search engine crawl rules (`/robots.txt`).
- **Rich Structured Data:** JSON-LD schemas for `TechArticle`, `BreadcrumbList`, and `Organization`.

### 🧪 Interactive AI Demonstrations & Labs
- **Vector Cosine Similarity Simulator:** Interactive mathematical explorer calculating $\cos(\theta) = \frac{A \cdot B}{\|A\| \|B\|}$ with real NLP concept vector presets (`/experiments`).
- **Tokenizer Playground:** Browser-based token chunker and subword vocabulary ID explorer based on Dharshan's NLP article.

### 🤖 Article-Aware AI Assistant
- Server-side route (`/api/ai/assistant`) with input length limits and prompt sandboxing.
- Provides immediate article summaries, simplified conceptual explanations, and practice quizzes.
- Decoupled provider abstraction: operates in high-performance local mode by default, or seamlessly connects to live Gemini (`GEMINI_API_KEY`) or OpenAI (`OPENAI_API_KEY`).

### 💌 Permission-Based Newsletter & Reader Interactions
- Consent-based double opt-in subscription API (`/api/newsletter`).
- Unsubscribe and topic preference management (`/unsubscribe`).
- Like counters and bookmarks with optimistic UI updates and local storage fallbacks.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16.2 (Turbopack, App Router)
- **UI Engine:** React 19.2 (Server Components & `useSyncExternalStore`)
- **Styling:** Tailwind CSS 4 (`@tailwindcss/postcss`, `@tailwindcss/typography`)
- **Content:** `next-mdx-remote` (v6.0 RSC), `gray-matter`, `reading-time`, `remark-gfm`
- **Database Schema:** PostgreSQL via Prisma (`prisma/schema.prisma`)
- **Icons:** `lucide-react`
- **Deployment:** Vercel

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/darshan75462020-eng/AI-Tech-blog.git
cd AI-Tech-blog
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the publication.

### 4. Run Verification Checks
```bash
# Static analysis and linting
npm run lint

# Production compilation
npm run build
```

---

## ✍️ Authoring Workflow: Adding a New Article

To publish a new article:
1. Create a new `.mdx` file in `content/blog/` (e.g., `content/blog/understanding-transformers.mdx`).
2. Add the required frontmatter block at the top:

```markdown
---
title: "Understanding Transformer Attention from Scratch"
date: "2026-10-15"
description: "A first-principles guide to self-attention matrices and scaled dot products."
tags: ["AI", "Transformers", "Machine Learning", "Mathematics"]
category: "Machine Learning"
difficulty: "Intermediate"
author: "Dharshan Gangathar"
---

## 1. The Core Problem with Recurrent Networks

Your article content in standard Markdown or MDX...

<Callout type="tip" title="Pro Tip">
Attention allows constant-time paths between distant words.
</Callout>

```python
import numpy as np

def scaled_dot_product_attention(Q, K, V):
    d_k = K.shape[-1]
    scores = np.matmul(Q, K.transpose()) / np.sqrt(d_k)
    return np.matmul(softmax(scores), V)
```
```

3. Run `npm run build` to verify frontmatter and formatting.
4. Push to GitHub — Vercel will automatically build and deploy the new article!

---

## 📚 Documentation Links

- [System Architecture](file:///docs/ARCHITECTURE.md)
- [Security & Trust Boundaries](file:///docs/SECURITY.md)
- [Deployment & Release Guide](file:///docs/DEPLOYMENT.md)
- [Audit & Implementation Plan](file:///docs/IMPLEMENTATION_PLAN.md)

---

## 📄 Licensing

- **Articles & Content:** Licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).
- **Code Snippets & Software:** Licensed under the [MIT License](LICENSE).
