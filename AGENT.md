# Agent Instructions & Project Guidelines

This file serves as a guide for AI agents and developers working on this project. It outlines the design system, codebase structure, and technical requirements.

---

## 🚀 Technical Stack
- **Framework**: React 19 + Vite 6
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 + PostCSS (using CSS-first configuration)
- **Animations**: Framer Motion
- **Icons**: React Icons (specifically Feather Icons `react-icons/fi`)

---

## 🎨 Design System

### Theme
- **Dark Mode Only** (No light mode support required).

### Color Palette
- **Background**: `#09090B` (Deepest black-grey)
- **Surface**: `#111827` (Dark slate)
- **Cards**: `#18181B` (Rich obsidian)
- **Border**: `#27272A` (Subtle charcoal border)
- **Text**: `#FAFAFA` (Pure off-white)
- **Muted Text**: `#A1A1AA` (Medium grey)
- **Primary Accent**: `#3B82F6` (Electric Blue)
- **Secondary Accent**: `#8B5CF6` (Vibrant Violet)

### Typography
- **Headings**: `Space Grotesk` (geometric, modern sans-serif)
- **Body Text**: `Inter` (neutral, highly readable sans-serif)

---

## 🛠️ Code Quality & Strict Compilation Rules

### 1. Type-Only Imports
Due to `"verbatimModuleSyntax": true` in `tsconfig.json`, all TypeScript types must be imported using the `import type` keyword.
```tsx
// Correct
import { ProjectCard } from './ProjectCard';
import type { ProjectData } from './ProjectCard';

// Incorrect (will fail build)
import { ProjectCard, ProjectData } from './ProjectCard';
```

### 2. Framer Motion Transition Types
When declaring animation variants in object literals, explicitly type them as `Variants` from `framer-motion` to ensure correct type-safety for easing curves and transition properties.
```tsx
import type { Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Allowed under Variants type
    },
  },
};
```

### 3. Windows Execution Policy Bypass
On Windows systems where script execution is disabled, do **not** run raw `npm` or `npx` commands since PowerShell will try to run `.ps1` files and fail. Instead, run the `.cmd` version or execute via `cmd.exe`:
- **Build**: `npm.cmd run build`
- **Development**: `npm.cmd run dev`
- **Package Installation**: `npm.cmd install <package>` or `cmd.exe /c "npm install <package>"`

---

## 📂 Project Structure

```text
├── index.html                # Main entry HTML (configured with SEO metadata)
├── postcss.config.js         # PostCSS configuration using @tailwindcss/postcss
├── src/
│   ├── App.tsx               # Main assembly file
│   ├── index.css             # Global styles + Tailwind v4 theme & classes
│   ├── main.tsx              # React client entrypoint
│   ├── components/
│   │   ├── Container.tsx     # 1280px max-width wrapper
│   │   ├── Button.tsx        # Framer Motion animated buttons & links
│   │   ├── SectionTitle.tsx  # Section headings with gradient underlines
│   │   ├── Navbar.tsx        # Scroll-linked glassmorphic header
│   │   ├── Hero.tsx          # Full-viewport introduction & mockups
│   │   ├── About.tsx         # About me text & editable stat cards
│   │   ├── ProjectCard.tsx   # Individual project card with specifications
│   │   ├── Projects.tsx      # Projects Bento grid & dashboard previews
│   │   ├── Contact.tsx       # Validation form & success panel
│   │   └── Footer.tsx        # Social links & floating scroll-to-top
```
