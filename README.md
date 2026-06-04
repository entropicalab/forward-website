# forward energy · website

Marketing site for **Forward Energy**, a Panama-based engineering and services firm for
renewable energy projects. Built with [Astro](https://astro.build), bilingual (ES default /
EN), deployed to GitHub Pages.

> Same coding structure as the entrópica site: Astro + content collections, ES/EN i18n,
> git-based `lastmod`, GitHub Pages via `withastro/action`.

## Local development

Requires **Node 22.12+**.

```bash
npm install
npm run dev      # http://localhost:4321  (es)  ·  /en  (english)
```

On Windows you can also double-click `dev.bat` (or right-click `dev.ps1` → Run with
PowerShell). These set the local TLS cert workaround automatically.

```bash
npm run build    # static build into dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  components/    Header, Footer, Analytics, ConsentBanner
  config/        analytics.ts        — GA4 measurement id (placeholder until set)
  content/
    projects/    es/ · en/  project case studies (one file per locale)
    blog/        es/ · en/  insights / knowledge-center articles
  content.config.ts          — collection schemas (projects, blog)
  i18n/          strings.ts (nav/footer/labels) · utils.ts (locale routing)
  layouts/       BaseLayout.astro    — head, SEO, hreflang, last-updated
  lib/           lastmod.mjs         — per-file git dates
  pages/         es (root) + en/     mirrored page tree
  styles/        forward.css (brand tokens) · pages.css (sections) · global.css (chrome)
public/          brand logos, CNAME, robots.txt, favicon
reference/       brandbook + brief (not deployed)
```

## Content

- **Add a project:** create `src/content/projects/es/<slug>.md` and
  `src/content/projects/en/<slug>.md` with matching `slug`. Set `comingSoon: false` and
  `featured: true` to surface it on the home page. See `proyecto-ejemplo.md` for the shape.
- **Locale routing:** Spanish is the default (no prefix); English lives under `/en`.

## Deployment

Push to `main` → GitHub Actions builds and deploys to GitHub Pages
(`.github/workflows/deploy.yml`). Custom domain set via `public/CNAME` → `forward-nrg.com`.

## To wire up later

- **Analytics:** add the GA4 measurement id in `src/config/analytics.ts` (consent banner
  appears automatically once it's set).
- **Contact form:** add a Formspree (or similar) endpoint in `src/pages/contact.astro` and
  `src/pages/en/contact.astro`.
- **DNS:** point `forward-nrg.com` at GitHub Pages, then enable the custom domain in repo
  Settings → Pages.
