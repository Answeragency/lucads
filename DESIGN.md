---
name: LucAds
description: Site d'un media buyer indépendant. Sobre et direct.
colors:
  encre: "#15171b"
  encre-2: "#202329"
  papier: "#f6f5f2"
  papier-2: "#ecebe6"
  gris: "#5d6068"
  gris-clair: "#a3a6ad"
  brique: "#c2410c"
  brique-fonce: "#9a3412"
  blanc: "#ffffff"
typography:
  display:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  base: "6px"
spacing:
  s1: "8px"
  s2: "16px"
  s3: "24px"
  s4: "32px"
  s5: "48px"
  s6: "64px"
  s7: "96px"
---

# DESIGN.md · LucAds

Ce fichier fait foi. Tout ce qui n'y figure pas n'existe pas sur le site.
Avant d'ajouter une couleur, une taille ou une animation, on l'ajoute ici.

## Direction

**Un consultant qui parle clairement : beaucoup d'espace, une typo nette, un seul accent, aucune décoration.**

Pas de site de référence. On part de la photo noir et blanc de Lucas : le site
reste en noir, blanc et gris, et l'accent brique sert uniquement à guider vers
l'action (réserver l'appel).

## Couleurs

Toutes les couleurs passent par les variables CSS de `styles.css` (`:root`).
Aucune couleur écrite en dur ailleurs.

| Rôle | Nom | Code | Usage |
|---|---|---|---|
| Principale | encre | `#15171b` | Texte, sections sombres (haut de page, services, contact, pied de page) |
| Principale, surface | encre-2 | `#202329` | Cartes sur fond encre |
| Accent | brique | `#c2410c` | Fond du bouton principal, icônes de coche |
| Accent, texte | brique-foncé | `#9a3412` | Texte d'accent, survol du bouton principal |
| Texte sur accent | blanc | `#ffffff` | Texte du bouton principal uniquement |
| Neutre | papier | `#f6f5f2` | Fond clair |
| Neutre | papier-2 | `#ecebe6` | Cartes sur fond papier |
| Neutre | gris | `#5d6068` | Texte secondaire sur fond clair |
| Neutre | gris-clair | `#a3a6ad` | Texte secondaire sur fond encre |
| Traits | trait | encre ou papier à 12 % d'opacité | Bordures et séparateurs |

Règles :
- Texte d'accent (étiquettes, numéros, liens) : toujours en **brique-foncé**, sur fond clair uniquement (6,1:1 minimum).
- La **brique** sert au fond du bouton principal (texte blanc, 5,2:1) et aux icônes de coche sur fond clair (4,3:1, suffisant pour un élément graphique).
- Sur fond encre, les étiquettes passent en gris-clair.
- Aucun dégradé, sans exception.

## Typographie

Deux polices, hébergées sur le site (`assets/fonts/`, aucun appel à Google) :
- **Schibsted Grotesk** : tout le texte. Graisses 400 (texte), 500 (boutons, menu), 700 (titres).
- **IBM Plex Mono** 400 : uniquement les petites étiquettes (sur-titres de section, numéros d'étapes).

| Niveau | Taille | Graisse | Interligne | Approche |
|---|---|---|---|---|
| Titre principal (h1) | clamp(2.25rem, 5vw, 3.5rem) | 700 | 1.08 | -0.03em |
| Titre de section (h2) | clamp(1.75rem, 3.2vw, 2.5rem) | 700 | 1.15 | -0.02em |
| Titre de carte (h3) | 1.125rem | 700 | 1.3 | 0 |
| Chapeau | 1.125rem | 400 | 1.55 | 0 |
| Texte | 1rem | 400 | 1.6 | 0 |
| Petit texte | 0.875rem | 400 | 1.5 | 0 |
| Étiquette (mono, majuscules) | 0.75rem | 400 | 1.4 | 0.06em |

Pas de mot en italique ou en couleur au milieu d'un titre.

## Formes et espacements

- **Un seul arrondi : 6 px.** Boutons, cartes, photo, champs, contours de focus. Pas de pilule, pas de cercle.
- Grille de 8 px : 8, 16, 24, 32, 48, 64, 96.
- Largeur de contenu maximale : 1120 px. Marges latérales : 24 px (16 px sur mobile).
- Pas d'ombre portée. La hiérarchie se fait avec le fond (papier / papier-2, encre / encre-2) et les traits.

## Boutons

- **Principal** : fond brique, texte blanc. Un seul usage : réserver l'appel.
- **Secondaire** : fond transparent, trait 1 px, texte de la couleur du fond opposé.
- Hauteur 48 px, padding 0 24 px, graisse 500. Survol : changement de couleur. Clic : `scale(0.98)`.

## Icônes

**Lucide** (lucide-static 0.460.0), en SVG intégré dans le HTML.
24 × 24, trait 1,75, `currentColor`, bouts arrondis. Affichées en 20 px.
Aucun emoji, aucun caractère (✓, +) utilisé comme icône.

Utilisées : `users` (Meta), `search` (Google), `briefcase` (LinkedIn), `file-text` (bilan),
`check`, `plus`, `message-circle` (WhatsApp), `mail`, `menu`, `x`.

## Mouvement

Seules animations autorisées :
1. Apparition au défilement : opacité 0 → 1 et décalage de 12 px, 400 ms, une seule fois.
2. Survol : couleur de fond, de texte ou de trait, 150 ms.
3. Clic sur un bouton : `scale(0.98)`, 100 ms.
4. Ouverture et fermeture des questions de la FAQ : hauteur, 250 ms.
5. Menu mobile : fondu, 200 ms.

Interdit : parallaxe, curseur personnalisé, formes qui bougent en boucle, défilement
automatique, éléments qui rebondissent, pulsations.
Avec « réduire les animations » activé dans le système : tout est instantané.

## Ton des textes

- **Vouvoiement** pour le visiteur, **« je »** pour Lucas. Jamais « nous ».
- Phrases courtes : 20 mots maximum, une idée par phrase.
- On dit ce que Lucas fait, pour qui, et ce que le client y gagne. Concret avant tout.
- Ponctuation : pas de tiret long (—) ni de tiret court (–) comme ponctuation. On utilise le point, la virgule ou les deux-points.
- Pas de liste de trois adjectifs.
- Aucun chiffre, avis ou logo qui n'est pas vérifiable.
- Le nom s'écrit **LucAds**.

Mots et formules interdits : booster, boostez, transformer votre business, libérer votre potentiel,
solution tout-en-un, sur-mesure, expert, passionné, synergie, révolutionner, propulser,
n'hésitez pas, à 360°, ROI garanti, « Prêt à… ? ».
