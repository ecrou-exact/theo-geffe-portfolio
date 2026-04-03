# 🚀 Théo Geffe — Personal Portfolio

> Personal portfolio of **Théo Geffe**, IT Developer at [CIRCL](https://www.circl.lu) (Computer Incident Response Center Luxembourg).  
> Co-author of [rulezet-core](https://github.com/ngsoti/rulezet-core) — co-funded by the European Union (FETTA/NGSOTI).

🌐 **Live**: [ecrou-exact.github.io/theo-geffe-portfolio](https://ecrou-exact.github.io/theo-geffe-portfolio/)

---

## ✨ Features

- **4 languages**: English 🇬🇧 / French 🇫🇷 / German 🇩🇪 / Italian 🇮🇹 (persisted in localStorage)
- **3 themes**: Dark 🌑 / Light ☀️ / Hacker 💻 (with live Matrix animation)
- **Live GitHub stats** fetched from the GitHub API (repos, followers)
- **Sticky navigation** with active section highlighting
- **↑ Back to top** button
- **Scroll animations** (IntersectionObserver)
- **Animated skill bars**
- **Scrolling marquee** banner
- **Full SEO**: meta, Open Graph, Twitter Card, Schema.org Person
- **Responsive**: mobile / tablet / desktop
- **Accessible**: ARIA roles, semantic HTML

---

## 📁 Project Structure

```
theo-geffe-portfolio/
│
├── index.html                  ← Main page (semantic HTML + SEO + i18n keys)
│
├── css/
│   ├── themes.css              ← CSS variables: Dark / Light / Hacker
│   ├── base.css                ← Reset, base styles, animations
│   ├── nav.css                 ← Sticky nav + lang & theme switchers
│   ├── hero.css                ← Hero section + marquee band
│   ├── sections.css            ← About, Timeline, Projects, Skills
│   ├── contact.css             ← Contact section + social links
│   └── responsive.css          ← Media queries (tablet + mobile)
│
├── js/
│   ├── i18n.js                 ← All translations (EN/FR/DE/IT) + setLang()
│   ├── github-stats.js         ← Live GitHub API fetch (repos, followers)
│   ├── marquee.js              ← Scrolling marquee content
│   ├── theme.js                ← Theme switcher (persisted in localStorage)
│   ├── nav.js                  ← Hamburger + active nav links
│   ├── reveal.js               ← Scroll reveal + skill bar animations
│   ├── matrix.js               ← Matrix rain effect (hacker mode)
│   └── backtotop.js            ← Back-to-top button
│
└── assets/                     ← (optional) favicon, images
```

---

## 🌐 Deploy to GitHub Pages — Step by Step

### Step 1 — Create the GitHub repository

1. Go to [github.com](https://github.com) and log in as **ecrou-exact**
2. Click **"New repository"**
3. **Repository name**: `theo-geffe-portfolio` ← exact name!
4. **Description**: `Personal portfolio — IT Developer @ CIRCL Luxembourg | Cybersecurity, Open-Source`
5. Set to **Public**
6. Do **NOT** check "Add a README" (we already have one)
7. Click **"Create repository"**

---

### Step 2 — Push the code

Open a terminal in the `theo-geffe-portfolio/` folder:

```bash
git init
git add .
git commit -m "🚀 Initial commit — Théo Geffe Portfolio"
git remote add origin https://github.com/ecrou-exact/theo-geffe-portfolio.git
git branch -M main
git push -u origin main
```

---

### Step 3 — Enable GitHub Pages

1. Go to your repo: `github.com/ecrou-exact/theo-geffe-portfolio`
2. Click **"Settings"** tab
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**, select:
   - Branch: **`main`**
   - Folder: **`/ (root)`**
5. Click **"Save"**
6. Wait 1–2 minutes ⏳
7. Your site will be live at:

   **👉 `https://ecrou-exact.github.io/theo-geffe-portfolio/`**

---

### Step 4 — Update the site

Every time you make changes:

```bash
git add .
git commit -m "✏️ Description of your change"
git push
```

GitHub Pages updates automatically within 1–2 minutes.

---

### Step 5 — Submit to Google (optional but recommended)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://ecrou-exact.github.io/theo-geffe-portfolio/`
3. Request indexing of the URL
4. Your portfolio will appear in Google results within a few days

---

## 🔍 SEO Checklist

| Element | Status |
|---------|--------|
| `<title>` optimized | ✅ |
| `<meta description>` | ✅ |
| `<meta keywords>` | ✅ |
| Open Graph (Facebook, LinkedIn) | ✅ |
| Twitter Card | ✅ |
| Schema.org `Person` (Google Rich Results) | ✅ |
| `rel="canonical"` | ✅ |
| ARIA attributes | ✅ |
| Semantic HTML (`<section>`, `<article>`, `<nav>`) | ✅ |
| `rel="noopener noreferrer"` on external links | ✅ |
| `lang` attribute updated on language change | ✅ |

---

## 👤 Author

**Théo Geffe** — IT Developer  
📍 Luxembourg 🇱🇺  
🏢 [CIRCL - Computer Incident Response Center Luxembourg](https://www.circl.lu)  
💻 [github.com/ecrou-exact](https://github.com/ecrou-exact)  
🔗 [linkedin.com/in/théo-geffe-348453359](https://www.linkedin.com/in/théo-geffe-348453359/)  
🌐 [rulezet.org](https://rulezet.org)

---

## 📄 License

© 2025 Théo Geffe — All rights reserved.
