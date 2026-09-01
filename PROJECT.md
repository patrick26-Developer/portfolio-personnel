# Portfolio Patrick de Grâce — Carnet d'architecture

> Document de suivi vivant. Mis à jour à chaque étape de la refonte. Sert de référence pour respecter les décisions prises (design, contenu, conventions) et suivre l'avancement.

## 1. Objectif

Portfolio crédible, professionnel, orienté recruteurs : vrais projets (pas de contenu inventé), UI/UX soignée (carousels/sliders type 21st.dev), palette sobre sans dégradé "SaaS générique", code structuré comme un vrai produit (composants, data, lib séparés).

## 2. Règles à respecter (ne pas régresser)

- **Zéro contenu inventé.** Chaque projet, chiffre, lien affiché doit être vérifiable (site réel, repo réel). Si une info manque, laisser un placeholder explicite plutôt qu'inventer.
- **Palette** : neutres `zinc`, un seul accent (indigo/bleu, 2 arrêts de dégradé max). Interdit : dégradé texte bleu→violet→rose, blobs flous multicolores en pulse.
- **Photo de profil** : `public/photo-du-portefolio.png` partout (plus `patrick.jpg`).
- **Visuels projets** : dossier `public/gallery/<slug>/` par projet. Tant qu'une capture réelle n'est pas déposée par l'utilisateur, afficher un placeholder stylé (mockup navigateur + accent), jamais une image cassée ni un stock photo Unsplash.
- **Composants UI** générés/gérés via `shadcn/ui` (CLI `npx shadcn@latest add ...`) plutôt qu'écrits à la main quand un composant équivalent existe dans le registre — cohérent avec la demande de composants type 21st.dev.
- **Accessibilité** : modals avec focus trap + Escape (radix dialog), navigation clavier sur les carousels.
- **Aucune dépendance superflue** : n'ajouter que ce qui sert un besoin réel du design.

## 3. Contenu réel de référence

### Projets en production (section phare)
| Projet | URL | Résumé vérifié |
|---|---|---|
| BANKI | https://banki-five.vercel.app/ | Banque digitale du Congo, 100% mobile-first, compte en ~5min, IBAN instantané, Visa, transferts temps réel, multi-devises (XAF/USD/EUR), mobile money (Airtel/MTN/Orange), biométrie |
| TravelHub | https://travelhub-platform.vercel.app/ | Réservation de billets de bus interurbains (Pointe-Noire, Congo), recherche/réservation en <2min, paiement sécurisé, billet électronique instantané |
| S.I.S. | https://sis-ashen.vercel.app/public | Plateforme internationale santé/prévention des maladies non-transmissibles, 6 programmes thématiques, édition Brazzaville 2025, alignée ODD 3/10/11/17 |
| Causerie Admin | https://dashboard-admin-app-causerie-nine.vercel.app/ | Dashboard admin pour messagerie temps réel "Causerie" (branding "TRUE"), auth par code email (passwordless), gestion utilisateurs/notifications |

### Repos GitHub (section secondaire, format compact)
- `mboka-marketplace-cg` — marketplace e-commerce congolais (électronique/gaming)
- `Toyebana` — messagerie instantanée temps réel (React Native)
- `budget-tracker-mobile` — suivi de dépenses personnelles (mobile)
- `Akieni-RH-Dashboard` — dashboard Python de suivi de performance d'apprenants

### Applications Desktop
| Projet | Repo | Résumé vérifié (README) |
|---|---|---|
| DevDesk | https://github.com/patrick26-Developer/devdesk | Boîte à outils développeur Electron/React/TypeScript, 13 outils (JSON, Base64, UUID, Regex, JWT, Hash, Markdown, QR code, client API...), 100% local sauf l'API Tester, architecture Electron de référence (main/renderer séparés, IPC via contextBridge), thème clair/sombre + interface bilingue FR/EN. Statut "En développement" (aucune release GitHub publiée, version interne v1.0.0). |

### Data Science & Visualisation (freeCodeCamp, D3.js/Python)
`bar-chart-visualization`, `heatmap-project`, `choropleth-map`, `treemap-diagram`, `Scatterplot-Graph`

### Certifications (réelles, avec lien de vérification)
1. Data Analysis with Python V7 — freeCodeCamp — 2024 — [vérifier](https://www.freecodecamp.org/certification/fccd2ead9c3-9411-4503-861e-c4920b34172c/data-analysis-with-python-v7)
2. Data Visualization — freeCodeCamp — 2024 — [vérifier](https://www.freecodecamp.org/certification/fccd2ead9c3-9411-4503-861e-c4920b34172c/data-visualization)
3. Python Development & Data Science — Akieni Académie — 2023-2024

### Formation (corrigé via CV Canva réels — voir §6)
- Licence en Développement Informatique — Institut International Polytechnique Commerce et Juridique — **2023-2024** (et non 2021-2024) — [lien de vérification officiel](https://2i-security.com/verification/verify/e4f25932-6b41-42b4-8e0e-ecb1e87d605b)
- Baccalauréat Scientifique (série C) — École privée ALCAR, Pointe-Noire — 2019-2020

### Contact
Deux emails et deux téléphones sont affichés (demande explicite de l'utilisateur — ne pas revenir à un seul contact) :
- Email principal `mb.patrickdegrace@gmail.com` (+ bouton copier) · secondaire `makossobayonnepatrickdegrace@outlook.com`
- Tél principal `+242 05 052 91 68` · secondaire `+242 06 897 04 25`
- **Brazzaville** (Moungali), Congo · GitHub `patrick26-Developer` · LinkedIn (lien existant)
> Correction : les CV réels donnent une adresse à Moungali (Brazzaville), pas Pointe-Noire (le Bac a été fait à Pointe-Noire en 2019-2020, mais la résidence actuelle est à Brazzaville).

## 6. Source de vérité : CV Canva (mis à jour régulièrement par l'utilisateur)

L'utilisateur maintient plusieurs versions de CV sur Canva (adaptées à différentes candidatures : AKIENI, BDO Congo audit, Ministère de la Jeunesse, Cabinet MPTEN). Il les partage au fil de l'eau pour garder ce document et les données à jour. Contenu déjà extrait et intégré :
- Bio de référence (voir `site.ts` → `bio`)
- Description détaillée + réalisations chiffrées de TravelHub et S.I.S. (voir `projects.ts`)
- Diplôme avec lien de vérification officiel (2i-security.com)
- Niveau d'anglais réel : A2 (en progression) — ne pas survendre la maîtrise de l'anglais si affiché un jour
- Compétences confirmées et intégrées dans `skills.ts` (catégorie "Gestion & Outils IA") : outils IA génératives (Claude, ChatGPT, Gemini), gestion de projet/reporting, Trello, Office/Canva
- Qualités professionnelles intégrées dans `skills.ts` → `softSkills` et affichées en bas de la section Compétences : rigueur, esprit d'analyse, sens du service, communication, travail en équipe, gestion des priorités, résolution de problèmes, veille technologique

**Règle** : à chaque nouveau partage de CV/info par l'utilisateur, mettre à jour `src/data/*.ts` en conséquence ET cette section.

### En attente de l'utilisateur
- D'autres captures d'écran pour BANKI, TravelHub, S.I.S. (seul Causerie a des visuels réels pour l'instant, voir §7)
- Éventuelles certifications Python supplémentaires

## 7. Galerie d'images — structure réelle et convention

L'utilisateur a créé sa propre arborescence (différente du `public/gallery/<slug>/` plat prévu initialement au plan) :
```
public/gallery/
  app-web/<slug>/       captures des sites web (ex: app-web/causerie/*.png)
  app-mobile/<Slug>/    captures + logo des apps mobiles (ex: app-mobile/Causerie/*.png)
  desktop/<Slug>/       captures + icône des apps desktop (ex: desktop/DevDesk/*.png)
```
On s'aligne sur **cette** structure existante plutôt que d'en imposer une autre.

**Les fichiers arrivent souvent non renommés** (ex: `Screenshot_20260731-134451.png`, `Capture d'écran 2026-07-30 170648.png`). Convention adoptée : ouvrir chaque image avec l'outil Read pour identifier visuellement à quel projet/écran elle correspond (le nom de fichier n'est pas fiable), puis référencer son chemin réel directement dans `src/data/projects.ts` (`cover`, `screens`, `mobileScreens`, `mobileLogo`). Pas besoin de renommer les fichiers.

**Filtrage obligatoire avant d'utiliser une capture** (vérifié à chaque nouvel ajout) :
- Exclure toute capture montrant des emails/données personnelles de tiers en clair (ex: `users.png` de Causerie Admin liste 3 emails réels — non utilisée)
- Exclure les captures "bureau complet" (fenêtre navigateur/émulateur avec barre de favoris, onglets, icônes du bureau visibles) — non professionnel (ex: `app-mobile/Causerie/1.png` et `screen-1.png`, captures d'écran complètes de l'émulateur Android avec le bureau Windows en fond — non utilisées)
- Exclure les conversations privées/casual entre l'utilisateur et des proches quand une alternative plus neutre existe (ex: liste de conversations ou vue de groupe plutôt qu'un DM perso)

**État actuel (Causerie, le seul projet web/mobile avec captures réelles pour l'instant)** :
- Web (`app-web/causerie/`) : `dashboard-accueil-dark.png` (cover), `auth-dark.png`, `Notif.png` — utilisées. Non utilisées : `users.png` (PII), les 2 `Capture d'écran ...png` (bureau complet avec onglets personnels), `auth-admin.png`, `Verify-auth.png` (non regardées, pas nécessaires pour l'instant)
- Mobile (`app-mobile/Causerie/`) : logo `true-logo.png` (utilisé comme `mobileLogo`), 4 captures parmi les 16 `Screenshot_2026...png` sélectionnées pour montrer les fonctionnalités clés (liste de discussions, chat de groupe, et les thèmes de couleur clair/sombre personnalisables — bleu, rose, vert) : `134451`, `134639`, `134733`, `134901`. Non utilisées : `1.png`/`screen-1.png` (bureau complet), `134509` (DM personnel avec numéro de téléphone visible), le reste non examiné individuellement (pas nécessaire, 4 captures suffisent pour l'aperçu)

**Desktop (`desktop/DevDesk/`)** :
- `devdesk-icon.png` : icône officielle de l'app fournie par l'utilisateur (haute résolution, fond transparent) — utilisée telle quelle comme `icon`.
- Utilisées comme `screens` : `1.png` (accueil, thème clair), `1_1.png` (accueil, thème sombre), `5.png` (Settings — thème + langue FR/EN, écho direct au sélecteur de langue du portfolio), `6.png` (.env → JSON), `7.png` (QR Code Generator), `4.png` (HTTP Status Codes).
- Non utilisées : `1_1_1.png` (bureau Windows complet visible avec icônes personnelles — même règle que Causerie ci-dessus), `3.png` (API Client affichant un mot de passe de test en clair — évité par prudence même si c'est une donnée factice locale).

## 4. Architecture réelle

```
src/
  app/            layout.tsx (metadata + ThemeProvider next-themes + LanguageProvider), page.tsx (composition, Server Component), globals.css
  components/
    layout/       navbar, footer
    sections/     hero, featured-projects (carousel → "use client" obligatoire), mobile-apps, desktop-apps, github-highlights, data-science, skills, certifications, contact
    ui/           shadcn (style "base-nova", primitives @base-ui/react — PAS radix) + custom : browser-frame, window-frame, phone-frame,
                  project-card, mobile-app-card, desktop-app-card,
                  peek-carousel (carousel "peek" avec autoplay fait main, pas de dépendance embla-carousel-autoplay),
                  section-heading, scroll-to-top, theme-toggle, language-toggle
  data/           site.ts, projects.ts, mobile-apps.ts, desktop-apps.ts, certifications.ts, skills.ts
  i18n/           types.ts (Localized, Lang), language-provider.tsx (contexte FR/EN + hooks), dictionary.ts (chaînes UI FR/EN)
  lib/            utils.ts (cn helper, généré par shadcn)
public/
  gallery/app-web/<slug>/, gallery/app-mobile/<Slug>/  (voir §7 pour la convention réelle)
```

**Décisions techniques notables :**
- shadcn utilise `@base-ui/react` (successeur moderne de Radix, mêmes auteurs), pas `@radix-ui/*`. Les composants (Button, Dialog, Badge...) utilisent un prop `render={<a .../>}` pour se composer avec un lien/élément natif — PAS de prop `asChild`. Toujours utiliser `render`, jamais `asChild`, avec ces primitives.
- L'utilisateur a lancé `npx shadcn@latest add --all` de son côté : tout le registre shadcn est dans `src/components/ui/`, y compris des composants non utilisés (chart, sidebar, command, calendar...). Ce sont des fichiers vendor — ne pas les modifier pour "corriger" leurs lint warnings internes (label.tsx, slider.tsx, spinner.tsx, etc. ont des a11y hints pré-existants, ignorés).
- `lint/a11y/useAnchorContent` est désactivé globalement dans `biome.json` : ce rule donne des faux positifs systématiques sur le pattern `<Button render={<a href=... />}>Contenu</Button>` (Biome ne comprend pas que le contenu de Button se retrouve dans le `<a>` via la composition base-ui/mergeProps — comportement vérifié dans le code source de `@base-ui/react/internals/useRenderElement.js`).
- Carrousel "peek" (`ui/peek-carousel.tsx`) construit à la main sur le `Carousel` embla de shadcn : autoplay via `setInterval` + pause au survol/focus, dots de navigation — pas de dépendance `embla-carousel-autoplay` ajoutée (demande explicite de l'utilisateur de vérifier l'existant avant d'installer).
- `FeaturedProjects` doit rester un Client Component (`"use client"`) car il passe des fonctions (`renderItem`, `keyOf`) à `PeekCarousel` — un Server Component ne peut pas transmettre de fonctions à un Client Component (erreur runtime Next.js rencontrée et corrigée).
- `site.ts` : le tableau `education` est typé explicitement (`EducationEntry[]`) en dehors de l'objet `site as const`, car `as const` unifie les objets d'un tableau et fait perdre le champ optionnel `verifyUrl` sur l'entrée qui ne l'a pas (erreur de build rencontrée et corrigée).
- Chaque `<Button render={<a .../>}>` doit avoir `nativeButton={false}` (prop de `@base-ui/react/button`) — sinon avertissement console "expected a native <button>". Vérifié en testant dans un vrai navigateur (Playwright), pas seulement au build.
- `S.I.S.` a maintenant une vraie capture (`app-web/SIS/Home.png`, homepage propre) — premier projet avec un cover réel en plus de Causerie.
- Section **Applications Mobiles** séparée des projets web (`sections/mobile-apps.tsx`, `data/mobile-apps.ts`, `ui/phone-frame.tsx`, `ui/mobile-app-card.tsx`) : statut "En développement" (badge ambre) au lieu de "En production" (émeraude), pas de bouton "Voir le site" (pas encore publiée sur les stores), mockup téléphone au lieu du navigateur.
- Vraies icônes de marque via `@icons-pack/react-simple-icons` (`lib/tech-icons.tsx`), en monochrome (`currentColor`) pour rester dans la palette sobre plutôt que réintroduire une mosaïque de couleurs de marque. Utilisées dans Compétences et les tags tech des cartes projet. Certaines technologies n'ont pas d'icône dans ce set (Oracle, Java, ChatGPT, Canva, Zustand, D3.js, MS Office) → fallback silencieux (pas d'icône affichée), assumé plutôt que d'inventer.
- **Sécurité** : Vercel a flagué au premier déploiement une faille RCE critique (CVSS 10, GHSA-9qr9-h5gf-34mp) dans Next.js 15.5.4. Mis à jour vers `15.5.22` (fix officiel). `npm audit` signale encore 3 vulnérabilités "high" sur `postcss`/`sharp` mais uniquement nichées *à l'intérieur* de la propre arborescence de dépendances de `next` — le seul correctif que `npm audit fix --force` propose est de **downgrader** vers `next@9.3.3`, une régression absurde à ne jamais appliquer. Laissé tel quel ; à surveiller lors des prochaines mises à jour de Next.js.
- **i18n FR/EN** : sélecteur de langue client-side (pas de routing `/en`, `/fr` — portfolio one-page à ancres, une segmentation par locale aurait cassé la navigation par ancre). `i18n/language-provider.tsx` expose un contexte React (`useLanguage`, `useL`) persisté en `localStorage` (`portfolio-lang`), lu après montage façon `next-themes` pour éviter un mismatch d'hydratation (flash FR→EN bref plutôt qu'un warning React) ; défaut `"fr"` côté serveur et au premier rendu client. `i18n/dictionary.ts` centralise toutes les chaînes d'UI fixes (`useT()`) ; le contenu éditorial (descriptions de projets, bio, achievements...) est directement porté par les objets `data/*.ts` via le type `Localized = { fr; en }` et résolu avec `useL()`. Les métadonnées Next.js (`layout.tsx`, SSR) restent toujours en français (`site.bio.fr`), seul le contenu client bascule.
- Les noms de technos (`skills.ts` `items`, tags `tech[]` des projets) restent des `string[]` non traduits (identiques FR/EN : Next.js, Docker, PostgreSQL...) sauf les libellés descriptifs (ex. catégorie Data Science → `{ fr; en }`) via un type `(string | Localized)[]` — évite de dupliquer des noms propres dans le dictionnaire.
- Catégories de projet (`Fintech`, `Mobilité`...) et statuts (`En production`, `En développement`...) sont stockés comme des *clés* stables (`category: "fintech"`, `status: "production"`) dans `data/*.ts`, traduits à l'affichage via `dictionary.ts` (`t.categories`, `t.projectStatus`, `t.mobileStatus`) — évite de dupliquer ces libellés courts dans chaque entrée de données.
- Section **Applications Desktop** (`sections/desktop-apps.tsx`, `data/desktop-apps.ts`, `ui/window-frame.tsx`, `ui/desktop-app-card.tsx`) : même pattern que Mobile (statut développement/publiée, mockup dédié — fenêtre OS avec barre de titre, sans barre d'adresse). `desktopApps` est vide tant que l'utilisateur n'a pas fourni de projet réel (zéro contenu inventé, cf. §2) : la section affiche un état "Bientôt disponible" plutôt qu'un projet fictif ou une grille vide.

## 5. Suivi d'avancement

- [x] Exploration codebase existant + collecte contenu réel (GitHub + sites live + CV Canva)
- [x] Plan validé avec l'utilisateur
- [x] Init shadcn/ui + composants (button, badge, dialog, carousel, sheet, + registre complet ajouté par l'utilisateur)
- [x] `lib/utils.ts` + `data/` (site, projects, certifications, skills)
- [x] `globals.css` — palette neutre + accent indigo (`--brand`/`--primary`)
- [x] Composants `ui/` custom (browser-frame, project-card, peek-carousel, section-heading, scroll-to-top, theme-toggle)
- [x] Composants `layout/` et `sections/`
- [x] `layout.tsx` + `page.tsx` réécrits
- [x] Contenu enrichi avec les vraies captures Causerie (web + mobile) et double contact (emails/téléphones)
- [x] Lint (biome) propre sur tout le code écrit par nous — build Next.js en cours de vérification
- [x] Test navigateur complet (Playwright headless) : thème clair/sombre + persistance après reload OK, carousel (flèches/dots/autoplay) OK, modal Causerie (web+mobile) OK, placeholders BANKI/TravelHub propres (pas d'image cassée), responsive mobile (menu burger) OK, zéro erreur console après le fix `nativeButton`
- [ ] Captures réelles restantes (BANKI, TravelHub) — S.I.S. et Causerie ont déjà de vraies captures
- [x] Sélecteur de langue FR/EN (`i18n/`) : tout le contenu affiché (UI + data) traduit, métadonnées SSR restent en FR
- [x] Section **Applications Desktop** ajoutée (structure + état "Bientôt disponible") — en attente des projets réels (captures, nom, description) que l'utilisateur doit fournir
- [x] Premier projet Desktop intégré : **DevDesk** (`data/desktop-apps.ts`), captures + icône réelles dans `public/gallery/desktop/DevDesk/`

---
*Dernière mise à jour : premier projet Desktop réel ajouté (DevDesk — boîte à outils développeur Electron/React/TypeScript), avec icône recadrée et captures filtrées (bureau Windows complet et identifiants de test exclus, cf. §7) ; suite du travail = prochaines captures BANKI/TravelHub, et tout nouveau projet desktop/mobile/web que l'utilisateur partage, en suivant la convention du §7.*
