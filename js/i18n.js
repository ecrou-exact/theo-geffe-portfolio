/**
 * i18n.js
 * All translations: English (default), French, German, Italian
 * Usage: t('key') returns the string for the current language
 */

const TRANSLATIONS = {

  en: {
    // Nav
    nav_about:      'About',
    nav_exp:        'Experience',
    nav_projects:   'Projects',
    nav_skills:     'Skills',
    nav_contact:    'Contact',

    // Hero
    hero_eyebrow:   'IT Developer & Open-Source Contributor',
    hero_sub:       'IT Dev @ CIRCL · Luxembourg House of Cybersecurity',
    hero_desc:      'Passionate developer building open-source cybersecurity tools used worldwide.\nCo-author of <strong>rulezet-core</strong> — co-funded by the <strong>European Union</strong> (FETTA/NGSOTI).\nDrummer 🥁 · Sports enthusiast ⚽ · Based in Luxembourg.',
    hero_cta1:      'See my projects',
    hero_cta2:      'GitHub →',
    hero_cta3:      'Contact me →',
    hero_status:    'Available · Luxembourg 🇱🇺',
    hero_scroll:    'Scroll to explore',
    stat_repos:     'GitHub Repos',
    stat_contrib:   'Contributions',
    stat_stars:     'Cumulated Stars',
    stat_eu:        'EU-Funded Project',

    // About
    sec_about:      'About',
    title_about:    'Who am I?',
    about_p1:       'I\'m <strong>Théo Geffe</strong>, an IT developer based in the <strong>Grand Duchy of Luxembourg</strong>. I work at <a href="https://www.circl.lu" target="_blank" rel="noopener noreferrer">CIRCL</a> — the <em>Computer Incident Response Center Luxembourg</em> — the national CERT responsible for cybersecurity incident response for private companies, municipalities and NGOs.',
    about_p2:       'My work sits at the intersection of <strong>web development</strong> and <strong>cybersecurity</strong>: I design and maintain collaborative open-source platforms used by security professionals across Europe and worldwide. My flagship project, <strong>rulezet-core</strong>, is co-copyrighted with CIRCL and funded by the EU under the <strong>FETTA</strong> (Federated European Team for Threat Analysis) project. Its live version — <a href="https://rulezet.org" target="_blank" rel="noopener noreferrer">rulezet.org</a> — indexes over <strong>122,000 detection rules</strong>.',
    about_p3:       'Highly adaptable and deeply motivated, I was publicly recognized by colleagues for my <strong>hard work</strong> on rulezet releases at the hack.lu workshop. Outside of code, I\'m a passionate drummer and sports enthusiast — disciplines that teach me discipline, rhythm and teamwork.',
    ic_name:        'Full Name',
    ic_role:        'Role',
    ic_org:         'Organisation',
    ic_location:    'Location',
    ic_github:      'GitHub',
    ic_youtube:     'YouTube',
    ic_passion1:    'Passion 1',
    ic_passion2:    'Passion 2',
    ic_val_passion1:'🥁 Drums',
    ic_val_passion2:'⚽ Sports',

    // Experience
    sec_exp:        'Experience',
    title_exp:      'Career',
    exp1_date:      '2024 — Present',
    exp1_role:      'IT Developer',
    exp1_org:       'CIRCL · Computer Incident Response Center Luxembourg',
    exp1_desc:      'Development and maintenance of open-source cybersecurity platforms at the Luxembourg national CERT. Legal co-author of <strong>rulezet-core</strong> (copyright CIRCL + Théo Geffe) — a platform for sharing and managing YARA, Sigma and Suricata detection rules. Active contributor to the MISP ecosystem via <strong>cti-transmute</strong>. Public release presentation at the international hack.lu workshop.',
    exp2_date:      '2024 — Present',
    exp2_role:      'Open-Source Contributor · NGSOTI Project',
    exp2_org:       'NGSOTI · European Union Funded',
    exp2_desc:      'Contribution to the NGSOTI project (Next Generation Security Operator Training Infrastructure) — funded by the Digital Europe programme (DIGITAL-ECCC-2022-CYBER-03, Project 101127921). Consortium: CIRCL, Restena, University of Luxembourg, Tenzir. Development of <strong>rulezet.org</strong> with a similarity engine for rule deduplication, MISP taxonomy integration, and a full RESTful API.',
    exp3_date:      'Active',
    exp3_role:      'Contributor · MISP Project',
    exp3_org:       'MISP — Malware Information Sharing Platform',
    exp3_desc:      'Contributing to the MISP project via <strong>cti-transmute</strong> — a service for converting CTI formats (STIX, MISP, OpenCTI…). ⭐ 20 stars, used by security teams around the world. Available live at cti-transmute.org.',

    // Projects
    sec_projects:   'Projects',
    title_projects: 'Open-source projects',
    proj1_org:      'ngsoti · CIRCL · EU-Funded',
    proj1_name:     'rulezet-core ✦',
    proj1_desc:     'Open-source platform for sharing, evaluating and managing cyber detection rules (YARA, Sigma, Suricata…). Available at rulezet.org with 122,000+ rules. Similarity engine, MISP taxonomy integration, full RESTful API. Recognized at hack.lu workshop 2025.',
    proj2_org:      'MISP Project',
    proj2_name:     'cti-transmute',
    proj2_desc:     'CTI format conversion service (STIX, MISP, OpenCTI…). Promotes interoperability between security tools. Available live at cti-transmute.org, used by security teams worldwide.',
    proj3_org:      'DavidCruciani',
    proj3_name:     'ptit-crolle',
    proj3_desc:     'Flask application template to quickly bootstrap a Python web project. Active contributor to this CIRCL ecosystem project. ⭐ 5 stars.',
    proj4_org:      'Live Service',
    proj4_name:     'rulezet.org 🌐',
    proj4_desc:     'The public live version of rulezet-core. 122,000+ security rules. Integrated with vulnerability-lookup.org for real-time rule/CVE correlation. Open to everyone, no restrictions.',
    proj_see_all:   'See all repos on GitHub →',
    badge_live:     '🌍 Live',
    badge_public:   'Public',

    // Skills
    sec_skills:     'Skills',
    title_skills:   'Technical skills',
    sg1_title:      '// Languages & Frameworks',
    sg2_title:      '// Cybersecurity & CTI',
    sg3_title:      '// Soft Skills & Languages',
    skill_js:       'JavaScript / Node.js',
    skill_py:       'Python / Flask',
    skill_html:     'HTML / CSS',
    skill_sql:      'SQL / Databases',
    skill_bash:     'Bash / Shell',
    skill_yara:     'YARA / Sigma / Suricata',
    skill_misp:     'MISP / CTI platforms',
    skill_stix:     'STIX / OpenCTI',
    skill_linux:    'Linux / Docker',
    skill_git:      'Git / GitHub',
    skill_api:      'REST API / JSON',
    skill_drums:    '🥁 Drums',
    skill_sport:    '⚽ Sport & Teamwork',
    skill_adapt:    '🚀 Adaptability',
    skill_french:   '🇫🇷 French (Native)',
    skill_english:  '🇬🇧 English (Fluent)',

    // Contact
    sec_contact:    'Contact',
    title_contact:  'Let\'s get in touch',
    contact_lead:   'Have a project, an idea, an opportunity?\nWant to contribute to open-source, talk cybersecurity, CTI… or drums?\n<strong>Find me on my networks.</strong>',
    qf_title:       '// Quick info',
    qf_name:        'Full Name',
    qf_role:        'Role',
    qf_employer:    'Employer',
    qf_location:    'Location',
    qf_eu:          'EU Project',
    qf_contrib:     'Contributions',
    qf_avail:       'Availability',
    qf_avail_val:   '● Available',

    // Footer
    footer_rights:  'All rights reserved.',
    footer_built:   'Built with ❤️ in',
  },

  fr: {
    nav_about:      'À propos',
    nav_exp:        'Expérience',
    nav_projects:   'Projets',
    nav_skills:     'Compétences',
    nav_contact:    'Contact',

    hero_eyebrow:   'Développeur IT & Contributeur Open-Source',
    hero_sub:       'Dev IT @ CIRCL · Luxembourg House of Cybersecurity',
    hero_desc:      'Développeur passionné, je construis des outils de cybersécurité open-source utilisés à l\'échelle mondiale.\nCo-auteur de <strong>rulezet-core</strong> — co-financé par l\'<strong>Union Européenne</strong> (FETTA/NGSOTI).\nBatteur 🥁 · Sportif ⚽ · Luxembourg.',
    hero_cta1:      'Voir mes projets',
    hero_cta2:      'GitHub →',
    hero_cta3:      'Me contacter →',
    hero_status:    'Disponible · Luxembourg 🇱🇺',
    hero_scroll:    'Scroll pour explorer',
    stat_repos:     'Repos GitHub',
    stat_contrib:   'Contributions',
    stat_stars:     'Stars cumulées',
    stat_eu:        'Projet co-financé UE',

    sec_about:      'À propos',
    title_about:    'Qui suis-je ?',
    about_p1:       'Je suis <strong>Théo Geffe</strong>, développeur IT basé au <strong>Grand-Duché de Luxembourg</strong>. Je travaille au sein de <a href="https://www.circl.lu" target="_blank" rel="noopener noreferrer">CIRCL</a> — le <em>Computer Incident Response Center Luxembourg</em> — le CERT national en charge de la réponse aux incidents cyber pour les entreprises privées, communes et ONG du pays.',
    about_p2:       'Mon travail croise <strong>développement web</strong> et <strong>cybersécurité</strong> : je conçois et maintiens des plateformes open-source collaboratives utilisées par des professionnels de la sécurité en Europe et dans le monde. Mon projet phare, <strong>rulezet-core</strong>, est co-signé au copyright avec CIRCL et financé par l\'UE dans le cadre du projet <strong>FETTA</strong>. Sa version live — <a href="https://rulezet.org" target="_blank" rel="noopener noreferrer">rulezet.org</a> — indexe plus de <strong>122 000 règles de détection</strong>.',
    about_p3:       'Très adaptable et profondément motivé, j\'ai été publiquement mentionné par des collègues pour mon <strong>travail acharné</strong> sur les releases de rulezet lors du workshop hack.lu. En dehors du code, je suis batteur et sportif passionné : des disciplines qui m\'enseignent rigueur, rythme et esprit d\'équipe.',
    ic_name:        'Prénom & Nom',
    ic_role:        'Rôle',
    ic_org:         'Organisation',
    ic_location:    'Localisation',
    ic_github:      'GitHub',
    ic_youtube:     'YouTube',
    ic_passion1:    'Passion 1',
    ic_passion2:    'Passion 2',
    ic_val_passion1:'🥁 Batterie',
    ic_val_passion2:'⚽ Sport',

    sec_exp:        'Expérience',
    title_exp:      'Parcours',
    exp1_date:      '2024 — Présent',
    exp1_role:      'Développeur IT',
    exp1_org:       'CIRCL · Computer Incident Response Center Luxembourg',
    exp1_desc:      'Développement et maintenance de plateformes open-source de cybersécurité au sein du CERT national luxembourgeois. Co-auteur légal de <strong>rulezet-core</strong> (copyright CIRCL + Théo Geffe). Contribution active à l\'écosystème MISP via <strong>cti-transmute</strong>. Présentation publique des releases lors du workshop international hack.lu.',
    exp2_date:      '2024 — Présent',
    exp2_role:      'Contributeur Open-Source · Projet NGSOTI',
    exp2_org:       'NGSOTI · Financement Union Européenne',
    exp2_desc:      'Contribution au projet NGSOTI (Next Generation Security Operator Training Infrastructure) — financé par le programme Digital Europe (DIGITAL-ECCC-2022-CYBER-03, Projet 101127921). Consortium : CIRCL, Restena, Université du Luxembourg, Tenzir. Développement de <strong>rulezet.org</strong> avec moteur de similarité, intégration taxonomies MISP, et API RESTful complète.',
    exp3_date:      'Actif',
    exp3_role:      'Contributeur · MISP Project',
    exp3_org:       'MISP — Malware Information Sharing Platform',
    exp3_desc:      'Contribution au projet MISP via <strong>cti-transmute</strong> — service de conversion de formats CTI (STIX, MISP, OpenCTI…). ⭐ 20 étoiles, utilisé par des équipes de sécurité à travers le monde. Disponible sur cti-transmute.org.',

    sec_projects:   'Projets',
    title_projects: 'Projets open-source',
    proj1_org:      'ngsoti · CIRCL · EU-Funded',
    proj1_name:     'rulezet-core ✦',
    proj1_desc:     'Plateforme de partage, évaluation et gestion de règles de détection cyber (YARA, Sigma, Suricata…). Disponible sur rulezet.org avec +122 000 règles. Moteur de similarité, intégration MISP, API RESTful. Reconnu au workshop hack.lu 2025.',
    proj2_org:      'MISP Project',
    proj2_name:     'cti-transmute',
    proj2_desc:     'Service de conversion de formats CTI (STIX, MISP, OpenCTI…). Favorise l\'interopérabilité entre outils de sécurité. Disponible sur cti-transmute.org.',
    proj3_org:      'DavidCruciani',
    proj3_name:     'ptit-crolle',
    proj3_desc:     'Template d\'application Flask pour démarrer rapidement un projet Python. Contributeur actif. ⭐ 5 étoiles.',
    proj4_org:      'Service Live',
    proj4_name:     'rulezet.org 🌐',
    proj4_desc:     'Version live publique de rulezet-core. +122 000 règles de sécurité. Intégré à vulnerability-lookup.org pour corrélation règles/CVE en temps réel.',
    proj_see_all:   'Voir tous les repos GitHub →',
    badge_live:     '🌍 En production',
    badge_public:   'Public',

    sec_skills:     'Compétences',
    title_skills:   'Compétences techniques',
    sg1_title:      '// Langages & Frameworks',
    sg2_title:      '// Cybersécurité & CTI',
    sg3_title:      '// Soft Skills & Langues',
    skill_js:       'JavaScript / Node.js',
    skill_py:       'Python / Flask',
    skill_html:     'HTML / CSS',
    skill_sql:      'SQL / Bases de données',
    skill_bash:     'Bash / Shell',
    skill_yara:     'YARA / Sigma / Suricata',
    skill_misp:     'MISP / Plateformes CTI',
    skill_stix:     'STIX / OpenCTI',
    skill_linux:    'Linux / Docker',
    skill_git:      'Git / GitHub',
    skill_api:      'API REST / JSON',
    skill_drums:    '🥁 Batterie',
    skill_sport:    '⚽ Sport & Esprit d\'équipe',
    skill_adapt:    '🚀 Adaptabilité',
    skill_french:   '🇫🇷 Français (Natif)',
    skill_english:  '🇬🇧 Anglais (Courant)',

    sec_contact:    'Contact',
    title_contact:  'Entrons en contact',
    contact_lead:   'Tu as un projet, une idée, une opportunité ?\nTu veux contribuer à l\'open-source, parler cybersécurité, CTI… ou de la batterie ?\n<strong>Retrouve-moi sur mes réseaux.</strong>',
    qf_title:       '// Fiche rapide',
    qf_name:        'Nom',
    qf_role:        'Rôle',
    qf_employer:    'Employeur',
    qf_location:    'Localisation',
    qf_eu:          'Projet EU',
    qf_contrib:     'Contributions',
    qf_avail:       'Disponibilité',
    qf_avail_val:   '● Disponible',

    footer_rights:  'Tous droits réservés.',
    footer_built:   'Fait avec ❤️ au',
  },

  de: {
    nav_about:      'Über mich',
    nav_exp:        'Erfahrung',
    nav_projects:   'Projekte',
    nav_skills:     'Fähigkeiten',
    nav_contact:    'Kontakt',

    hero_eyebrow:   'IT-Entwickler & Open-Source-Beitragender',
    hero_sub:       'IT Dev @ CIRCL · Luxembourg House of Cybersecurity',
    hero_desc:      'Leidenschaftlicher Entwickler, der weltweit eingesetzte Open-Source-Cybersicherheitstools entwickelt.\nMitautor von <strong>rulezet-core</strong> — mitfinanziert von der <strong>Europäischen Union</strong> (FETTA/NGSOTI).\nSchlagzeuger 🥁 · Sportbegeisterter ⚽ · Luxemburg.',
    hero_cta1:      'Meine Projekte ansehen',
    hero_cta2:      'GitHub →',
    hero_cta3:      'Kontaktieren →',
    hero_status:    'Verfügbar · Luxemburg 🇱🇺',
    hero_scroll:    'Scrollen zum Entdecken',
    stat_repos:     'GitHub Repos',
    stat_contrib:   'Beiträge',
    stat_stars:     'Gesammelte Stars',
    stat_eu:        'EU-gefördertes Projekt',

    sec_about:      'Über mich',
    title_about:    'Wer bin ich?',
    about_p1:       'Ich bin <strong>Théo Geffe</strong>, IT-Entwickler im <strong>Großherzogtum Luxemburg</strong>. Ich arbeite bei <a href="https://www.circl.lu" target="_blank" rel="noopener noreferrer">CIRCL</a> — dem <em>Computer Incident Response Center Luxembourg</em> — dem nationalen CERT für Cybersicherheitsvorfälle.',
    about_p2:       'Meine Arbeit verbindet <strong>Webentwicklung</strong> und <strong>Cybersicherheit</strong>: Ich entwickle und pflege kollaborative Open-Source-Plattformen. Mein Hauptprojekt, <strong>rulezet-core</strong>, ist mit CIRCL gemeinsam urheberrechtlich geschützt und von der EU im Rahmen des <strong>FETTA</strong>-Projekts finanziert. Die Live-Version — <a href="https://rulezet.org" target="_blank" rel="noopener noreferrer">rulezet.org</a> — indiziert über <strong>122.000 Erkennungsregeln</strong>.',
    about_p3:       'Sehr anpassungsfähig und hochmotiviert, wurde ich von Kollegen öffentlich für meine <strong>harte Arbeit</strong> an rulezet-Releases beim hack.lu-Workshop erwähnt. Außerhalb des Codes bin ich leidenschaftlicher Schlagzeuger und Sportbegeisterter.',
    ic_name:        'Vollständiger Name',
    ic_role:        'Rolle',
    ic_org:         'Organisation',
    ic_location:    'Standort',
    ic_github:      'GitHub',
    ic_youtube:     'YouTube',
    ic_passion1:    'Leidenschaft 1',
    ic_passion2:    'Leidenschaft 2',
    ic_val_passion1:'🥁 Schlagzeug',
    ic_val_passion2:'⚽ Sport',

    sec_exp:        'Erfahrung',
    title_exp:      'Werdegang',
    exp1_date:      '2024 — Heute',
    exp1_role:      'IT-Entwickler',
    exp1_org:       'CIRCL · Computer Incident Response Center Luxembourg',
    exp1_desc:      'Entwicklung und Wartung von Open-Source-Cybersicherheitsplattformen beim nationalen CERT Luxemburgs. Rechtlicher Mitautor von <strong>rulezet-core</strong> (Copyright CIRCL + Théo Geffe). Aktiver Beitrag zum MISP-Ökosystem via <strong>cti-transmute</strong>.',
    exp2_date:      '2024 — Heute',
    exp2_role:      'Open-Source-Beitragender · NGSOTI-Projekt',
    exp2_org:       'NGSOTI · Europäische Union',
    exp2_desc:      'Beitrag zum NGSOTI-Projekt (Next Generation Security Operator Training Infrastructure) — finanziert durch das Digital-Europe-Programm (DIGITAL-ECCC-2022-CYBER-03). Konsortium: CIRCL, Restena, Universität Luxemburg, Tenzir. Entwicklung von <strong>rulezet.org</strong> mit Ähnlichkeitsengine und MISP-Integration.',
    exp3_date:      'Aktiv',
    exp3_role:      'Beitragender · MISP-Projekt',
    exp3_org:       'MISP — Malware Information Sharing Platform',
    exp3_desc:      'Beitrag zum MISP-Projekt via <strong>cti-transmute</strong> — einem CTI-Format-Konvertierungsdienst (STIX, MISP, OpenCTI…). ⭐ 20 Sterne, weltweit von Sicherheitsteams genutzt.',

    sec_projects:   'Projekte',
    title_projects: 'Open-Source-Projekte',
    proj1_org:      'ngsoti · CIRCL · EU-gefördert',
    proj1_name:     'rulezet-core ✦',
    proj1_desc:     'Open-Source-Plattform zum Teilen, Bewerten und Verwalten von Cyber-Erkennungsregeln (YARA, Sigma, Suricata…). Verfügbar auf rulezet.org mit 122.000+ Regeln. Anerkannt beim hack.lu-Workshop 2025.',
    proj2_org:      'MISP-Projekt',
    proj2_name:     'cti-transmute',
    proj2_desc:     'CTI-Format-Konvertierungsdienst (STIX, MISP, OpenCTI…). Fördert die Interoperabilität zwischen Sicherheitstools.',
    proj3_org:      'DavidCruciani',
    proj3_name:     'ptit-crolle',
    proj3_desc:     'Flask-Anwendungsvorlage für schnelle Python-Webprojekte. Aktiver Mitarbeiter. ⭐ 5 Sterne.',
    proj4_org:      'Live-Dienst',
    proj4_name:     'rulezet.org 🌐',
    proj4_desc:     'Die öffentliche Live-Version von rulezet-core. 122.000+ Sicherheitsregeln. Integriert mit vulnerability-lookup.org für Echtzeit-Regel/CVE-Korrelation.',
    proj_see_all:   'Alle Repos auf GitHub ansehen →',
    badge_live:     '🌍 Live',
    badge_public:   'Öffentlich',

    sec_skills:     'Fähigkeiten',
    title_skills:   'Technische Fähigkeiten',
    sg1_title:      '// Sprachen & Frameworks',
    sg2_title:      '// Cybersicherheit & CTI',
    sg3_title:      '// Soft Skills & Sprachen',
    skill_js:       'JavaScript / Node.js',
    skill_py:       'Python / Flask',
    skill_html:     'HTML / CSS',
    skill_sql:      'SQL / Datenbanken',
    skill_bash:     'Bash / Shell',
    skill_yara:     'YARA / Sigma / Suricata',
    skill_misp:     'MISP / CTI-Plattformen',
    skill_stix:     'STIX / OpenCTI',
    skill_linux:    'Linux / Docker',
    skill_git:      'Git / GitHub',
    skill_api:      'REST-API / JSON',
    skill_drums:    '🥁 Schlagzeug',
    skill_sport:    '⚽ Sport & Teamgeist',
    skill_adapt:    '🚀 Anpassungsfähigkeit',
    skill_french:   '🇫🇷 Französisch (Muttersprache)',
    skill_english:  '🇬🇧 Englisch (Fließend)',

    sec_contact:    'Kontakt',
    title_contact:  'Kontakt aufnehmen',
    contact_lead:   'Haben Sie ein Projekt, eine Idee, eine Gelegenheit?\nMöchten Sie über Open-Source, Cybersicherheit, CTI… oder Schlagzeug sprechen?\n<strong>Finden Sie mich in meinen Netzwerken.</strong>',
    qf_title:       '// Kurzinfo',
    qf_name:        'Name',
    qf_role:        'Rolle',
    qf_employer:    'Arbeitgeber',
    qf_location:    'Standort',
    qf_eu:          'EU-Projekt',
    qf_contrib:     'Beiträge',
    qf_avail:       'Verfügbarkeit',
    qf_avail_val:   '● Verfügbar',

    footer_rights:  'Alle Rechte vorbehalten.',
    footer_built:   'Mit ❤️ gebaut in',
  },

  it: {
    nav_about:      'Chi sono',
    nav_exp:        'Esperienza',
    nav_projects:   'Progetti',
    nav_skills:     'Competenze',
    nav_contact:    'Contatto',

    hero_eyebrow:   'Sviluppatore IT & Contributore Open-Source',
    hero_sub:       'IT Dev @ CIRCL · Luxembourg House of Cybersecurity',
    hero_desc:      'Sviluppatore appassionato che costruisce strumenti di cybersicurezza open-source usati in tutto il mondo.\nCoautore di <strong>rulezet-core</strong> — cofinanziato dall\'<strong>Unione Europea</strong> (FETTA/NGSOTI).\nBatteria 🥁 · Sport ⚽ · Lussemburgo.',
    hero_cta1:      'Vedi i miei progetti',
    hero_cta2:      'GitHub →',
    hero_cta3:      'Contattami →',
    hero_status:    'Disponibile · Lussemburgo 🇱🇺',
    hero_scroll:    'Scorri per esplorare',
    stat_repos:     'Repos GitHub',
    stat_contrib:   'Contributi',
    stat_stars:     'Stelle cumulate',
    stat_eu:        'Progetto cofinanziato UE',

    sec_about:      'Chi sono',
    title_about:    'Chi sono?',
    about_p1:       'Sono <strong>Théo Geffe</strong>, sviluppatore IT nel <strong>Granducato di Lussemburgo</strong>. Lavoro presso <a href="https://www.circl.lu" target="_blank" rel="noopener noreferrer">CIRCL</a> — il <em>Computer Incident Response Center Luxembourg</em> — il CERT nazionale responsabile della risposta agli incidenti di cybersicurezza.',
    about_p2:       'Il mio lavoro si trova all\'intersezione tra <strong>sviluppo web</strong> e <strong>cybersicurezza</strong>: progetto e mantengo piattaforme open-source collaborative usate da professionisti della sicurezza in Europa e nel mondo. Il mio progetto principale, <strong>rulezet-core</strong>, è coprodotto con CIRCL e finanziato dall\'UE nell\'ambito del progetto <strong>FETTA</strong>. La sua versione live — <a href="https://rulezet.org" target="_blank" rel="noopener noreferrer">rulezet.org</a> — indicizza oltre <strong>122.000 regole di rilevamento</strong>.',
    about_p3:       'Molto adattabile e profondamente motivato, sono stato menzionato pubblicamente dai colleghi per il mio <strong>duro lavoro</strong> sulle release di rulezet all\'workshop hack.lu. Fuori dal codice, sono un batterista appassionato e sportivo.',
    ic_name:        'Nome completo',
    ic_role:        'Ruolo',
    ic_org:         'Organizzazione',
    ic_location:    'Posizione',
    ic_github:      'GitHub',
    ic_youtube:     'YouTube',
    ic_passion1:    'Passione 1',
    ic_passion2:    'Passione 2',
    ic_val_passion1:'🥁 Batteria',
    ic_val_passion2:'⚽ Sport',

    sec_exp:        'Esperienza',
    title_exp:      'Carriera',
    exp1_date:      '2024 — Presente',
    exp1_role:      'Sviluppatore IT',
    exp1_org:       'CIRCL · Computer Incident Response Center Luxembourg',
    exp1_desc:      'Sviluppo e manutenzione di piattaforme open-source di cybersicurezza presso il CERT nazionale del Lussemburgo. Coautore legale di <strong>rulezet-core</strong> (copyright CIRCL + Théo Geffe). Contribuzione attiva all\'ecosistema MISP tramite <strong>cti-transmute</strong>.',
    exp2_date:      '2024 — Presente',
    exp2_role:      'Contributore Open-Source · Progetto NGSOTI',
    exp2_org:       'NGSOTI · Unione Europea',
    exp2_desc:      'Contribuzione al progetto NGSOTI (Next Generation Security Operator Training Infrastructure) — finanziato dal programma Digital Europe. Sviluppo di <strong>rulezet.org</strong> con motore di similarità e integrazione MISP.',
    exp3_date:      'Attivo',
    exp3_role:      'Contributore · MISP Project',
    exp3_org:       'MISP — Malware Information Sharing Platform',
    exp3_desc:      'Contribuzione al progetto MISP tramite <strong>cti-transmute</strong> — servizio di conversione di formati CTI (STIX, MISP, OpenCTI…). ⭐ 20 stelle, usato da team di sicurezza in tutto il mondo.',

    sec_projects:   'Progetti',
    title_projects: 'Progetti open-source',
    proj1_org:      'ngsoti · CIRCL · Finanziato UE',
    proj1_name:     'rulezet-core ✦',
    proj1_desc:     'Piattaforma open-source per condividere, valutare e gestire regole di rilevamento cyber (YARA, Sigma, Suricata…). Disponibile su rulezet.org con 122.000+ regole. Riconosciuto all\'workshop hack.lu 2025.',
    proj2_org:      'MISP Project',
    proj2_name:     'cti-transmute',
    proj2_desc:     'Servizio di conversione di formati CTI (STIX, MISP, OpenCTI…). Promuove l\'interoperabilità tra strumenti di sicurezza.',
    proj3_org:      'DavidCruciani',
    proj3_name:     'ptit-crolle',
    proj3_desc:     'Template applicazione Flask per avviare rapidamente un progetto Python. Contributore attivo. ⭐ 5 stelle.',
    proj4_org:      'Servizio Live',
    proj4_name:     'rulezet.org 🌐',
    proj4_desc:     'Versione live pubblica di rulezet-core. 122.000+ regole di sicurezza. Integrato con vulnerability-lookup.org per correlazione regole/CVE in tempo reale.',
    proj_see_all:   'Vedi tutti i repos su GitHub →',
    badge_live:     '🌍 Live',
    badge_public:   'Pubblico',

    sec_skills:     'Competenze',
    title_skills:   'Competenze tecniche',
    sg1_title:      '// Linguaggi & Framework',
    sg2_title:      '// Cybersicurezza & CTI',
    sg3_title:      '// Soft Skills & Lingue',
    skill_js:       'JavaScript / Node.js',
    skill_py:       'Python / Flask',
    skill_html:     'HTML / CSS',
    skill_sql:      'SQL / Database',
    skill_bash:     'Bash / Shell',
    skill_yara:     'YARA / Sigma / Suricata',
    skill_misp:     'MISP / Piattaforme CTI',
    skill_stix:     'STIX / OpenCTI',
    skill_linux:    'Linux / Docker',
    skill_git:      'Git / GitHub',
    skill_api:      'REST API / JSON',
    skill_drums:    '🥁 Batteria',
    skill_sport:    '⚽ Sport & Lavoro di squadra',
    skill_adapt:    '🚀 Adattabilità',
    skill_french:   '🇫🇷 Francese (Madrelingua)',
    skill_english:  '🇬🇧 Inglese (Fluente)',

    sec_contact:    'Contatto',
    title_contact:  'Mettiamoci in contatto',
    contact_lead:   'Hai un progetto, un\'idea, un\'opportunità?\nVuoi contribuire all\'open-source, parlare di cybersicurezza, CTI… o di batteria?\n<strong>Trovami sui miei social.</strong>',
    qf_title:       '// Info rapide',
    qf_name:        'Nome',
    qf_role:        'Ruolo',
    qf_employer:    'Datore di lavoro',
    qf_location:    'Posizione',
    qf_eu:          'Progetto EU',
    qf_contrib:     'Contributi',
    qf_avail:       'Disponibilità',
    qf_avail_val:   '● Disponibile',

    footer_rights:  'Tutti i diritti riservati.',
    footer_built:   'Fatto con ❤️ in',
  }
};

// ── Current language ──
let currentLang = 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
    || TRANSLATIONS['en'][key]
    || key;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  try { localStorage.setItem('theo-lang', lang); } catch(_) {}
  applyTranslations();
  updateLangButtons();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lb').forEach(btn => {
    btn.classList.toggle('on', btn.dataset.l === currentLang);
    btn.setAttribute('aria-pressed', String(btn.dataset.l === currentLang));
  });
}

function initI18n() {
  let saved = 'en';
  try { saved = localStorage.getItem('theo-lang') || 'en'; } catch(_) {}
  currentLang = saved;
  document.documentElement.setAttribute('lang', currentLang);
  applyTranslations();
  updateLangButtons();

  document.querySelectorAll('.lb').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.l));
  });
}
