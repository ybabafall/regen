# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (runs on port 8080)
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build

## Project Architecture

This is a React salon booking website for RE-GEN, a high-end Korean hair treatment salon. The project uses:

### Core Stack
- **React 18.3.1** + **TypeScript 5.8.3** + **Vite 5.4.19**
- **React Router DOM 6.30.1** for routing (BrowserRouter)
- **TanStack React Query 5.83.0** for state management
- **React Hook Form 7.61.1** + **Zod 3.25.76** for forms and validation

### UI Framework
- **Tailwind CSS 3.4.17** with custom design system
- **Shadcn/ui** components (full Radix UI primitives)
- **Lucide React** for icons
- **Class Variance Authority** for component variants

### Key Directories
```
src/
├── components/
│   ├── ui/              # Shadcn/ui design system components
│   ├── Header.tsx       # Navigation with routing
│   ├── Hero.tsx         # Landing hero section
│   ├── Services.tsx     # Service catalog display
│   ├── BookingSystem.tsx # Main booking functionality
│   ├── Gallery.tsx      # Image gallery
│   ├── About.tsx        # About section
│   └── Contact.tsx      # Contact information
├── pages/
│   ├── Index.tsx        # Homepage (main landing)
│   ├── Booking.tsx      # Dedicated booking page
│   ├── About.tsx        # About page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utilities (utils.ts)
└── assets/              # Static images and resources
```

### Routing Structure
- `/` - Homepage with all sections
- `/booking` - Dedicated booking page
- `/about` - About page
- `*` - 404 NotFound page

### Design System - Laboratory Luxe Theme
The project uses a 2025 laboratory-luxe design system with:
- **Color Palette**:
  - Cold laboratory grays: `hsl(210 20% 35%)` to `hsl(210 30% 4%)`
  - Ice blue accents: `hsl(200 85% 45%)`, `hsl(200 70% 65%)`
  - Preserved gold luxury: `hsl(45 85% 35%)`, `hsl(45 90% 75%)`
- **Fonts**: Playfair Display (display), Inter (body), JetBrains Mono (technical/code)
- **Molecular Animations**: molecular-float, droplet-fall, chrome-flow, ice-pulse
- **Laboratory Effects**: molecular glass, chrome elements, scientific typography
- **Advanced Glassmorphism** with molecular particle effects

### Important Patterns
- All UI components use the `@/` alias for imports (configured in vite.config.ts)
- Form validation uses Zod schemas with React Hook Form
- Toast notifications via Sonner
- Dark mode support via next-themes
- Responsive design with custom Tailwind breakpoints (xs to 3xl)

### TypeScript Configuration
- Loose TypeScript settings: `noImplicitAny: false`, `strictNullChecks: false`
- Path aliases: `@/*` maps to `./src/*`

### Build Configuration
- Vite with React SWC plugin for fast builds
- Server runs on `::` (all interfaces) port 8080
- Tailwind processes all src files for styling