# Astro Project Template 🚀

A modern, production-ready Astro project template with TypeScript, comprehensive tooling, and best practices built-in.

![Astro](https://img.shields.io/badge/Astro-v5.11.1-orange?logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![ESLint](https://img.shields.io/badge/ESLint-9.31.0-purple?logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-3.6.2-ff69b4?logo=prettier)

## ✨ Features

- 🎯 **Astro v5.11.1** - Latest version with all modern features
- 🔧 **TypeScript** - Strict configuration with path aliases
- 🎨 **Prettier** - Code formatting with Astro plugin
- 🔍 **ESLint** - Comprehensive linting with accessibility rules
- 🪝 **Git Hooks** - Pre-commit quality checks with Husky
- 🚀 **Performance** - View transitions, prefetching, image optimization
- ♿ **Accessibility** - Built-in accessibility features and testing
- 📱 **SEO Ready** - Meta tags, Open Graph social sharing
- 🔄 **CI/CD** - GitHub Actions with quality checks
- 📁 **Organized** - Clean project structure with conventions

## 🚀 Quick Start

### 1. Use This Template

```bash
# Create a new project from this template
npx degit danhendersonede/template-astro my-new-project
cd my-new-project
```

### 2. Set Up Your Project

```bash
# Install dependencies
npm install

# Customize your project configuration
# Edit src/config/site.ts with your project details

# Start development server
npm run dev
```

**📝 Important**: Edit `src/config/site.ts` to customize:

- Project name and description
- Site URL and author information
- Social media links
- Navigation menu

## 📁 Project Structure

```
/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/            # Build-time processed assets
│   ├── components/        # Reusable components
│   │   └── SEOHead.astro  # SEO meta tags component
│   ├── config/            # Configuration files
│   │   └── site.ts        # Site-wide configuration
│   ├── content/           # Content collections
│   │   └── config.ts      # Content schema definitions
│   ├── layouts/           # Layout components
│   │   └── Layout.astro   # Base layout with SEO
│   ├── pages/             # File-based routing
│   │   ├── index.astro    # Homepage
│   │   ├── 404.astro      # Not found page
│   │   └── 500.astro      # Error page
│   └── utils/             # Utility functions
│       └── index.ts       # Common utilities
├── .github/workflows/     # GitHub Actions CI/CD
├── .husky/               # Git hooks
├── .vscode/              # VS Code settings
├── eslint.config.js      # ESLint configuration
├── prettier.config.js    # Prettier configuration
├── tsconfig.json         # TypeScript configuration
└── astro.config.mjs      # Astro configuration
```

## 🛠️ Available Scripts

| Command           | Description                                  |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Start development server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |
| `npm run check`   | Run Astro type checking                      |
| `npm run lint`    | Run ESLint                                   |
| `npm run format`  | Format code with Prettier                    |

## ⚙️ Configuration

### Site Configuration

Update `src/config/site.ts` to customize your site:

```typescript
export const siteConfig: SiteConfig = {
  name: 'Your Project Name',
  title: 'Your Site Title',
  description: 'Your site description',
  url: 'https://your-domain.com',
  author: 'Your Name',
  social: {
    github: 'yourusername',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ],
};
```

## 🎨 Customization

### Adding New Pages

1. Create `.astro` files in `src/pages/`
2. Use the `Layout` component for consistency
3. Add navigation links to `src/config/site.ts`

### Creating Components

1. Add components to `src/components/`
2. Use TypeScript for props interfaces
3. Follow Astro component conventions

### Content Collections

Define content schemas in `src/content/config.ts` and add content files to `src/content/[collection]/`.

## 🔧 Development Tools

### VS Code Extensions

Recommended extensions (auto-suggested):

- Astro
- TypeScript Importer
- ESLint
- Prettier
- Error Lens

### Git Hooks

Pre-commit hooks automatically run:

- Type checking
- Linting with auto-fix
- Code formatting
- Build verification

## 💡 Tips

- Update `src/config/site.ts` first for site-wide changes
- Use TypeScript interfaces for better development experience
- Leverage Astro's component islands for interactive elements
- Keep accessibility in mind when adding new features
- Test your changes across different devices and browsers

---

Built with ❤️ using [Astro](https://astro.build/)
