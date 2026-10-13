---
name: LucAds
description: Site d'un media buyer indépendant. Fond sombre, accent bleu, mouvement vivant.
colors:
  ink: "#0b0d10"
  ink-raised: "#11141a"
  paper: "#fafaf8"
  paper-soft: "#f1f1ee"
  ink-900: "#14161a"
  slate: "#5b5f68"
  slate-muted: "#9a9fa8"
  accent: "#4f8dff"
  accent-deep: "#2f6fed"
  accent-light: "#74a6ff"
  accent-night: "#1c3f8f"
  whatsapp-green: "#25d366"
  whatsapp-green-light: "#45e07f"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  accent:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.1em"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "6px"
  full: "50%"
spacing:
  space-1: "8px"
  space-2: "16px"
  space-3: "24px"
  space-4: "32px"
  space-5: "48px"
  space-6: "64px"
  space-7: "96px"
  space-8: "128px"
---

# DESIGN.md · LucAds

Ce fichier décrit le design en ligne (celui d'avant la refonte du 9 octobre 2026, restauré à la demande de Lucas).
Les valeurs font foi dans les variables `:root` de `styles.css`.

## Direction

Fond noir profond, accent bleu, typographie Instrument Sans avec des mots-clés en Instrument Serif italique.
Mouvement vivant : formes organiques qui se déforment derrière la photo, bandeau de logos qui défile, anneau qui suit le curseur.

## Couleurs

- Fonds : ink `#0b0d10` (sombre), ink-raised `#11141a`, paper `#fafaf8` (clair), paper-soft `#f1f1ee`.
- Texte : ink-900 `#14161a` sur clair, paper sur sombre. Secondaire : slate `#5b5f68` sur clair, slate-muted `#9a9fa8` sur sombre.
- Accent : bleu `#4f8dff` (sur sombre), `#2f6fed` (sur clair et en texte). Survol du bouton : `#74a6ff`. Dégradé des formes : `#4f8dff` vers `#1c3f8f`.
- WhatsApp : `#25d366`, survol `#45e07f`.

## Typographie

- Instrument Sans 400 à 700 pour tout le texte, Instrument Serif italique pour un mot-clé par titre.
- Titre principal : clamp(2.4rem, 4.5vw, 3.8rem). Titres de section : clamp(2rem, 3.6vw, 3rem). Texte : 1rem.

## Formes

- Boutons 4 px, cartes 6 px, pastilles et bulle WhatsApp en cercle.
- Photos dans des formes organiques (« coup de pinceau ») animées.

## Mouvement

- Apparition au défilement (opacité, décalage et léger zoom).
- Formes organiques en déformation continue derrière les photos.
- Bandeau de logos clients en défilement continu, avec bouton pause.
- Parallaxe de la photo du haut de page selon la souris.
- Anneau qui suit le curseur.
- Pulsation de la bulle WhatsApp à l'arrivée (3 fois).
- Tout est coupé avec « réduire les animations ».

## Ton des textes

Vouvoiement, « je ». Phrases courtes et concrètes. Pas de « booster », pas de chiffre invérifiable. Le nom s'écrit LucAds.
