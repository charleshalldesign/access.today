# Styles Architecture

This project uses a token-based design system with CSS `@layer` for cascade control and separate theme files for maintainability.

## File Structure

```
src/styles/
├── tokens.css       # Base design tokens (@layer tokens)
├── theme-light.css  # Light theme semantic tokens (@layer theme)
├── theme-dark.css   # Dark theme semantic tokens (@layer theme)
└── global.css       # Base styles (@layer base) + utilities (@layer utilities)
```

## CSS Layers

We use CSS `@layer` to control the cascade order:

```css
@layer tokens, theme, base, utilities;
```

This means:

1. **tokens** - Lowest priority, primitive values
2. **theme** - Semantic theme tokens
3. **base** - Global resets and base styles
4. **utilities** - Highest priority, utility classes

Benefits:

- Predictable cascade regardless of source order
- Utility classes always win (no `!important` needed)
- Easy to override base styles in component-scoped CSS

## How It Works

### 1. Base Tokens (`tokens.css`)

Contains **primitive values** that don't change between themes:

- Color primitives (neutral-50 through neutral-950, primary-50 through primary-900, etc.)
- Typography (font families, sizes, weights, line heights)
- Spacing scale (fixed and responsive)
- Layout constraints (max-widths)
- Border radii, shadows, transitions, z-index scale

**Do not reference these directly in components** (except color primitives in theme files).

### 2. Light Theme (`theme-light.css`)

Defines **semantic tokens** for light mode using the base primitives:

```css
@layer theme {
  :root {
    --color-bg-primary: var(--color-neutral-50);
    --color-text-primary: var(--color-neutral-900);
    --color-interactive-primary: var(--color-primary-600);
    /* etc... */
  }
}
```

### 3. Dark Theme (`theme-dark.css`)

Defines **semantic tokens** for dark mode:

```css
@layer theme {
  [data-theme='dark'] {
    --color-bg-primary: var(--color-neutral-950);
    --color-text-primary: var(--color-neutral-50);
    --color-interactive-primary: var(--color-primary-500);
    /* etc... */
  }
}
```

**Note:** Theme switching is JavaScript-driven via `data-theme` attribute on `<html>`. The JavaScript in Layout.astro detects `prefers-color-scheme` and `localStorage` preference.

### 4. Global Styles (`global.css`)

Imports all token files and provides:

- `@layer base` - CSS resets, typography, links, forms, focus styles
- `@layer utilities` - Utility classes (.sr-only, .container, .flow)

## Token Categories

### Semantic Color Tokens (Use These!)

Always use semantic tokens in your components:

**Backgrounds:**

- `--color-bg-primary` - Main background
- `--color-bg-secondary` - Card/panel backgrounds
- `--color-bg-tertiary` - Subtle backgrounds
- `--color-bg-inverted` - Footer, inverted sections
- `--color-bg-hover` - Hover states
- `--color-bg-active` - Active/selected states
- `--color-bg-code` - Inline code background
- `--color-bg-code-block` - Code block background

**Text:**

- `--color-text-primary` - Main content
- `--color-text-secondary` - Secondary content
- `--color-text-tertiary` - De-emphasized text
- `--color-text-inverted` - Text on dark backgrounds
- `--color-text-muted` - Disabled/placeholder text
- `--color-text-link` - Link default color
- `--color-text-link-hover` - Link hover color
- `--color-text-code` - Inline code text

**Borders:**

- `--color-border-primary` - Default borders
- `--color-border-secondary` - Subtle borders
- `--color-border-focus` - Focus ring
- `--color-border-hover` - Hover borders
- `--color-border-inverted` - Borders on dark backgrounds

**Interactive:**

- `--color-interactive-primary` - Buttons, links
- `--color-interactive-primary-hover` - Hover state
- `--color-interactive-secondary` - Secondary actions
- `--color-interactive-secondary-hover` - Secondary hover

**Status:**

- `--color-status-warning-bg` / `--color-status-warning-text`
- `--color-status-error-bg` / `--color-status-error-text`

### Typography

```css
font-family: var(--font-family-sans);
font-size: var(--font-size-lg);
font-weight: var(--font-weight-bold);
line-height: var(--line-height-relaxed);
letter-spacing: var(--letter-spacing-wide);
```

### Spacing

```css
/* Fixed */
padding: var(--space-4);
gap: var(--space-8);

/* Responsive */
margin: var(--space-responsive-lg);
padding: var(--space-container-padding);
```

### Layout

```css
max-width: var(--max-width-container);
max-width: var(--max-width-content);
max-width: var(--max-width-prose);
```

### Other

```css
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);
transition: var(--transition-colors);
z-index: var(--z-modal);
```

## Link Utility Classes

We provide a comprehensive set of link utilities as the **single source of truth** for link styling. Use these instead of writing custom link styles in components.

### Available Classes

| Class                  | Purpose                            | Example                    |
| ---------------------- | ---------------------------------- | -------------------------- |
| `.link`                | Text links in content (underlined) | Article body links         |
| `.link-nav`            | Navigation links (no underline)    | Header/footer nav items    |
| `.link-button`         | Pill/button-shaped links           | Nav items with backgrounds |
| `.link-inverted`       | Links on dark backgrounds          | Footer links               |
| `.link-brand`          | Logo/site name links               | Header logo                |
| `.link-brand-inverted` | Logo on dark backgrounds           | Footer logo                |
| `.link-card`           | Full-card clickable wrapper        | Article cards              |
| `.link-back`           | Arrow-prefixed navigation          | "← Back to articles"       |
| `.link-cta`            | Call-to-action links               | "View all →"               |
| `.link-external`       | Adds external arrow indicator      | Third-party links          |

### Modifiers

- `.active` - For current page indication (works with `.link-button`)

### Usage Examples

```astro
<!-- Content link -->
<a href="/about" class="link">Learn more</a>

<!-- Navigation -->
<a href="/articles" class="link-button active">Articles</a>

<!-- Footer -->
<a href="/privacy" class="link-inverted">Privacy Policy</a>

<!-- Back navigation -->
<a href="/articles" class="link-back">← Back to all articles</a>

<!-- CTA link -->
<a href="/articles" class="link-cta">View all articles</a>

<!-- External link -->
<a href="https://astro.build" class="link link-external" target="_blank"
  >Astro</a
>
```

### When to Use Component Styles Instead

Use scoped component styles when:

- The link has **unique visual treatment** not covered by utilities
- The link requires **complex state management** (hover effects on parent elements)
- The link is part of a **larger interactive pattern** (card hover states affecting title)

### Motion Preferences

All link utilities respect `prefers-reduced-motion` automatically. Transitions are only applied when motion is acceptable.

## Adding a New Theme

To add a new theme (e.g., high contrast):

1. Create `src/styles/theme-highcontrast.css`
2. Define all semantic tokens (copy from theme-light.css as template)
3. Add selector: `[data-theme='highcontrast'] { ... }`
4. Import in `global.css`: `@import './theme-highcontrast.css';`
5. Update ThemeToggle component to include new option

## Benefits

✅ **Clear separation** - Easy to see what changes between themes  
✅ **Single source of truth** - Color primitives defined once  
✅ **Maintainable** - Update one theme file instead of searching entire codebase  
✅ **Consistent** - Semantic naming enforces design system usage  
✅ **Extensible** - Add new themes without touching existing ones  
✅ **Predictable cascade** - `@layer` ensures utilities always override base styles  
✅ **No specificity wars** - Layer order controls cascade, not selector complexity  
✅ **Type-safe** - Can generate TypeScript types from token files
