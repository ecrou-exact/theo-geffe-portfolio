# À propos de moi — infos pour le nouveau portfolio

> Ce fichier regroupe toutes les infos que j'ai trouvées dans l'ancien site (index.html, README, meta SEO, schema.org...).
> Corrige, complète ou supprime ce que tu veux avant qu'on parte sur le design du nouveau site.
> Rien n'a été supprimé du repo pour l'instant — j'attends qu'on soit d'accord sur ce fichier + le design.

---

## Identité

- **Nom complet** : Théo Geffe
- **Rôle** : IT Developer
- **Localisation** : Luxembourg 🇱🇺
- **Employeur** : [CIRCL](https://www.circl.lu) — Computer Incident Response Center Luxembourg (le CERT national, "Luxembourg House of Cybersecurity" / lhc)
- **Statut** : Disponible ("Available · Luxembourg")
- **Langues parlées** : Français (natif), Anglais (courant)
- **Passions** : 🥁 Batterie, ⚽ Sport / esprit d'équipe

---

## Pitch / positionnement

- **Titre affiché** : "IT Developer & Open-Source Contributor"
- **Sous-titre** : "IT Dev @ CIRCL · Luxembourg House of Cybersecurity"
- **Description courte** : Développeur passionné, construit des outils open-source de cybersécurité utilisés dans le monde entier. Co-auteur de **rulezet-core**, cofinancé par l'Union européenne (FETTA/NGSOTI). Batteur 🥁 · Sportif ⚽ · basé au Luxembourg.
- **Fait marquant mis en avant** : reconnu publiquement pour son travail sur les releases de rulezet lors de l'atelier **hack.lu**.

---

## Expérience professionnelle

https://www.first.org/conference/firstcti26/program#pCollaborative-Detection-Engineering-with-Rulezet

### IT Developer — CIRCL (2024 — Présent)
Développement et maintenance de plateformes open-source de cybersécurité au CERT national luxembourgeois.
- Co-auteur légal de **rulezet-core**
- Contributeur actif à l'écosystème **MISP** via **cti-transmute**
- Présentation publique à l'atelier international **hack.lu**
- Stack : JavaScript, Python, MISP, YARA, Sigma, Open-Source, Luxembourg

### Contributeur Open-Source — Projet NGSOTI (2024 — Présent)
Projet financé par le programme **Digital Europe** (DIGITAL-ECCC-2022-CYBER-03, Project 101127921).
- Développement de **rulezet.org** : moteur de similarité, intégration des taxonomies MISP, API RESTful complète
- Stack / tags : FETTA, NGSOTI, EU Digital, CTI, Detection Engineering

### Contributeur — MISP Project (Actif)
Contribution via **cti-transmute** — service de conversion de formats CTI (STIX, MISP, OpenCTI…).
- ⭐ 20 étoiles, utilisé par des équipes de sécurité dans le monde entier
- Tags : CTI, STIX, Interoperability, JavaScript

---

## Projets phares

1. **rulezet-core** ✦ — [github.com/ngsoti/rulezet-core](https://github.com/ngsoti/rulezet-core)
   - Org : ngsoti · CIRCL · financé par l'UE
   - Plateforme open-source pour partager, évaluer et gérer des règles de détection cyber (YARA, Sigma, Suricata…)
   - Version live : [rulezet.org](https://rulezet.org) — 122 000+ règles indexées
   - Moteur de similarité, intégration MISP, API RESTful
   - Reconnu à l'atelier hack.lu 2025
   - ⭐ 43 · JavaScript · 🇪🇺 EU-Funded · co-auteur

2. **cti-transmute** — [github.com/MISP/cti-transmute](https://github.com/MISP/cti-transmute)
   - Org : MISP Project
   - Service de conversion de formats CTI (STIX, MISP, OpenCTI…), interopérabilité entre outils de sécurité
   - Live : cti-transmute.org
   - ⭐ 20 · JavaScript · tag MISP

3. **ptit-crolle** — [github.com/DavidCruciani/ptit-crolle](https://github.com/DavidCruciani/ptit-crolle)
   - Org : DavidCruciani
   - Template d'application Flask pour bootstrapper rapidement un projet web Python
   - Contributeur actif · ⭐ 5 · Flask

4. **rulezet.org** 🌐 — service live
   - Version publique de rulezet-core, 122 000+ règles de sécurité
   - Intégré avec vulnerability-lookup.org pour corrélation règles/CVE en temps réel

( tu peux aller voir dautre projet ur githubb pour le github/ecrou-exact) [pour me mettre en avnt]

> Stats mises en avant sur l'ancien site : GitHub Repos (dynamique via API), Followers (dynamique via API), 27+ étoiles cumulées, 🇪🇺 EU-Funded Project.

---

## Compétences

**Langages & frameworks**
- JavaScript / Vue.js
- Python / Flask
- HTML / CSS
- SQL / Bases de données
- Bash / Shell

**Cybersécurité & CTI**
- YARA / Sigma / Suricata
- MISP / plateformes CTI
- Linux / API REST
- Git / GitHub
- YAML / JSON

**Soft skills & langues**
- 🇫🇷 Français (natif)
- 🇬🇧 Anglais (niveau normal)
- 🥁 Batterie
- ⚽ Sport & esprit d'équipe
- 🚀 Adaptabilité

---

## Contact & réseaux

- **Email** : geffetheo@gmail.com
- **GitHub** : [github.com/ecrou-exact](https://github.com/ecrou-exact)
- **LinkedIn** : [linkedin.com/in/théo-geffe-348453359](https://www.linkedin.com/in/théo-geffe-348453359/)
- **Facebook** : profil Théo Geffe (lien présent dans l'ancien site)
- **YouTube** : [@jeff2.016](https://www.youtube.com/@jeff2.016)
- **Site pro / EU** : [rulezet.org](https://rulezet.org)


---

## Financement européen (à mentionner si tu veux garder ce point fort)

- 🇪🇺 EU-Funded · NGSOTI · FETTA · référence programme : DIGITAL-ECCC-2022-CYBER-03 (Project 101127921)

---



---

## Ce que faisait l'ancien site (pour référence, à garder ou jeter)

- Site one-page en anglais avec i18n **4 langues** (EN/FR/DE/IT), persistées en localStorage
- **3 thèmes** : Dark / Light / Hacker (avec animation Matrix en fond en mode hacker)
- Stats GitHub live via API (repos, followers)
- Navigation sticky avec highlight de section active
- Bouton "back to top"
- Animations au scroll (IntersectionObserver), barres de compétences animées
- Bandeau marquee défilant
- SEO complet : meta tags, Open Graph, Twitter Card, Schema.org Person
- Sections : Hero, About, Experience (timeline), Projects, Skills, Contact, Footer
- URL live actuelle : https://ecrou-exact.github.io/theo-geffe-portfolio/

---
e/sport) ?
