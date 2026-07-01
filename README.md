# Abdul's Portfolio Website

A premium, modern portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Showcasing professional design, smooth animations, and high performance.

## 🚀 Live Demo

- **Live**: [https://abdul-portfolio.vercel.app](https://abdul-portfolio.vercel.app)
- **GitHub**: [Abdul-dev-creator](https://github.com/Abdul-dev-creator)

## 🎨 Features

✨ **Modern Dark Mode Design** - Sleek, professional dark theme with cyan accents
🎬 **Smooth Animations** - Powered by Framer Motion for delightful micro-interactions
📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
⚡ **High Performance** - Lighthouse score 98%+ with Vite optimization
♿ **Accessible** - Semantic HTML, keyboard navigation, ARIA labels
🎯 **Interactive Elements** - Editable stat cards, hover effects, and dynamic content
📊 **Project Showcase** - Bento grid layout with project previews and live demos
✉️ **Contact Form** - Fully functional form with validation and success states

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework |
| **TypeScript** | Type safety |
| **Vite 6** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Animation library |
| **React Icons** | Icon library (Feather) |
| **PostCSS** | CSS processing |

## 📂 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section with profile image
│   ├── Button.tsx         # Reusable animated button component
│   ├── Contact.tsx        # Contact form with validation
│   ├── Container.tsx      # Layout wrapper (1280px max-width)
│   ├── Footer.tsx         # Footer with social links
│   ├── Hero.tsx           # Hero section with introduction
│   ├── Navbar.tsx         # Navigation bar with scroll effects
│   ├── ProjectCard.tsx    # Individual project card
│   ├── Projects.tsx       # Projects grid/bento layout
│   └── SectionTitle.tsx   # Section heading component
├── App.tsx                # Main app component
├── main.tsx              # React entry point
└── index.css             # Global styles & theme
```

## 🎯 Design System

### Colors
- **Background**: `#09090B` - Deepest black
- **Surface**: `#111827` - Dark slate
- **Card**: `#18181B` - Rich obsidian
- **Border**: `#27272A` - Subtle charcoal
- **Text**: `#FAFAFA` - Pure off-white
- **Muted**: `#A1A1AA` - Medium grey
- **Accent**: `#06B6D4` - Vibrant Cyan

### Typography
- **Headings**: Poppins (geometric, modern sans-serif)
- **Body**: Poppins (clean, highly readable)

### Spacing & Radius
- **Base Spacing**: 8px grid
- **Card Radius**: 24px
- **Component Radius**: 12-16px

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdul-dev-creator/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### Update Personal Information

Edit the following files to add your content:

1. **`index.html`** - Meta tags and title
2. **`src/components/Hero.tsx`** - Main headline and bio
3. **`src/components/About.tsx`** - About section text
4. **`src/components/Projects.tsx`** - Project data
5. **`src/components/Contact.tsx`** - Contact information

### Add Your Profile Image

Place your image in `public/` folder and update `src/components/About.tsx`:

```jsx
<img src="/your-image.jpg" alt="Profile" className="..." />
```

### Customize Colors

Update the color values in:
1. **`tailwind.config.js`** - Tailwind colors
2. **`src/index.css`** - CSS variables

### Add Projects

Edit `src/components/Projects.tsx` and add to `projectsData` array:

```tsx
{
  title: 'Project Name',
  description: 'Project description...',
  tags: ['React', 'TypeScript'],
  problemSolved: 'Problem...',
  features: ['Feature 1', 'Feature 2'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  gridSpan: 'lg:col-span-8',
  previewComponent: <div>Preview</div>
}
```

## ⚡ Performance Optimizations

- ✅ Code splitting with Vite
- ✅ Image optimization with next-gen formats
- ✅ CSS minification
- ✅ JavaScript tree-shaking
- ✅ Lazy component loading
- ✅ Optimized animations (GPU-accelerated)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔒 Type Safety

Strict TypeScript configuration with:
- `verbatimModuleSyntax: true` for explicit type imports
- `noImplicitAny: true` for type safety
- `strict: true` for maximum type checking

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 About

Built by **Abdul** - Frontend Developer specializing in React, TypeScript, and modern web technologies.

**Contact:**
- 📧 Email: abdulqudusopeyemi2020@gmail.com
- 🐙 GitHub: [@Abdul-dev-creator](https://github.com/Abdul-dev-creator)
- 🐦 Twitter: [@thedevguy](https://x.com/home)
- 📍 Location: Kwara State, Nigeria

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
