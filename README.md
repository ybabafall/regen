# RE-GEN | Salon de Coiffure Haut de Gamme

## À propos du projet

**RE-GEN** est une application web moderne de réservation en ligne pour un salon de coiffure haut de gamme spécialisé dans les traitements capillaires coréens innovants. Le projet propose une interface élégante et premium pour réserver des services de lissage et soins capillaires d'exception.

## Fonctionnalités principales

- **Système de réservation complet** avec sélection de services, dates et créneaux horaires
- **Catalogue de services premium** : AURÉA NOVA (lissage coréen), FLOWLESS SILVER (anti-frisottis), coupes et colorations luxe
- **Interface responsive ultra-moderne** avec design métallique et doré inspiré des tendances 2025
- **Gestion des rendez-vous** avec simulation de stockage
- **Sections complètes** : Hero immersif, Services premium, Réservation VIP, Galerie, À propos, Contact

## Stack technique

### Frontend & Build
- **React 18.3.1** avec **TypeScript 5.8.3**
- **Vite 5.4.19** (build tool ultra-rapide)
- **React Router DOM 6.30.1** pour la navigation

### UI & Design System
- **Tailwind CSS 3.4.17** avec configuration personnalisée
- **Shadcn/ui** (système de composants moderne basé sur Radix UI)
- **Radix UI** (primitives accessibles)
- **Lucide React** pour les icônes premium
- **Class Variance Authority** pour la gestion des variants

### Gestion d'état & Forms
- **React Hook Form 7.61.1** avec **Hookform Resolvers**
- **Zod 3.25.76** pour la validation de schémas
- **TanStack React Query 5.83.0** pour la gestion des données

### Composants UI avancés
- **React Day Picker** pour le calendrier
- **Date-fns** pour la manipulation des dates (locale française)
- **Embla Carousel** pour les carrousels
- **Recharts** pour les graphiques
- **Sonner** pour les notifications toast premium

## Installation et développement

### Prérequis
- Node.js (version 18+)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone <YOUR_GIT_URL>

# Naviguer vers le projet
cd regen-elite-booking-main

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts disponibles
- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build de production
- `npm run build:dev` - Build en mode développement
- `npm run lint` - Vérification ESLint
- `npm run preview` - Prévisualisation du build

## Architecture du projet

```
src/
├── components/        # Composants métier
│   ├── ui/           # Système de design Shadcn
│   ├── Header.tsx    # Navigation premium
│   ├── Hero.tsx      # Section héro immersive
│   ├── Services.tsx  # Catalogue services premium
│   ├── BookingSystem.tsx  # Système de réservation VIP
│   └── ...
├── pages/            # Pages principales
├── hooks/            # Hooks personnalisés
├── lib/              # Utilitaires
└── assets/           # Images et ressources
```

## Design System 2025

Le projet utilise un système de design premium inspiré des tendances 2025 :

### Palette de couleurs
- **Métallique avancé** : Argent, chrome et titanium
- **Or raffiné** : Champagne gold et bronze premium
- **Noir sophistiqué** : OLED inspired blacks

### Effets visuels
- **Glassmorphism** avancé avec blur effects
- **Gradients mesh** luxueux
- **Animations fluides** avec micro-interactions
- **Effets de parallax** et transitions premium

### Typography
- **Inter** pour le corps de texte
- **Playfair Display** pour les titres premium
- **JetBrains Mono** pour les éléments techniques

## Déploiement

Le projet peut être déployé sur n'importe quelle plateforme supportant les applications React statiques :
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Licence

Ce projet est la propriété de RE-GEN Salon. Tous droits réservés.

---

**RE-GEN** - Laboratoire Capillaire d'Excellence