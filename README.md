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
