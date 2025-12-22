# Styling Your Site

Learn how to customize the look and feel of your site using CSS. This guide covers colors, typography, spacing, and how the styling system works.

## How Styling Works

This site uses a three-layer CSS system:

1. **Tokens** (`tokens.css`) - Raw color values and primitives
2. **Themes** (`theme-light.css` & `theme-dark.css`) - Semantic color assignments
3. **Global Styles** (`global.css`) - Typography, spacing, base styles

### The CSS Files

All styling lives in:

```
src/styles/
├── tokens.css        # Color primitives
├── theme-light.css   # Light mode colors
├── theme-dark.css    # Dark mode colors
└── global.css        # Typography, spacing, base styles
```

## Quick Color Changes

### Changing the Primary Color

The primary color is used for links, buttons, and accents throughout the site.

**Open:** `src/styles/tokens.css`

**Find the Primary palette:**

```css
/* Primary (Indigo palette) */
--color-primary-50: #eef2ff;
--color-primary-100: #e0e7ff;
--color-primary-200: #c7d2fe;
--color-primary-300: #a5b4fc;
--color-primary-400: #818cf8;
--color-primary-500: #6366f1;
--color-primary-600: #4f46e5; /* Main brand color */
--color-primary-700: #4338ca;
--color-primary-800: #3730a3;
--color-primary-900: #312e81;
```

**To change your brand color:**

Replace all the values with colors from your palette. You need light to dark variants (50-900).

**Example - Change to blue:**

```css
/* Primary (Blue palette) */
--color-primary-50: #eff6ff;
--color-primary-100: #dbeafe;
--color-primary-200: #bfdbfe;
--color-primary-300: #93c5fd;
--color-primary-400: #60a5fa;
--color-primary-500: #3b82f6;
--color-primary-600: #2563eb; /* Main brand color */
--color-primary-700: #1d4ed8;
--color-primary-800: #1e40af;
--color-primary-900: #1e3a8a;
```

**Need color palettes?** Use [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) or [Coolors](https://coolors.co/) for inspiration.

### Changing Neutral Colors (Grays)

Neutrals are used for text, backgrounds, and borders.

**In:** `src/styles/tokens.css`

```css
/* Neutrals (Slate palette) */
--color-neutral-50: #f8fafc; /* Lightest */
--color-neutral-100: #f1f5f9;
--color-neutral-200: #e2e8f0;
--color-neutral-300: #cbd5e1;
--color-neutral-400: #94a3b8;
--color-neutral-500: #64748b; /* Mid-tone */
--color-neutral-600: #475569;
--color-neutral-700: #334155;
--color-neutral-800: #1e293b;
--color-neutral-900: #0f172a;
--color-neutral-950: #020617; /* Darkest */
```

**Common alternatives:**

- **Warmer grays** - Use "Stone" or "Neutral" from Tailwind
- **Cooler grays** - Use "Zinc" or "Gray" from Tailwind
- **Blue-tinted grays** - Keep "Slate" (current)

## Understanding Semantic Colors

Semantic colors define what colors mean (e.g., "text color", "background color") rather than specific hex values.

### Light Theme Semantic Colors

**Open:** `src/styles/theme-light.css`

**Most important variables:**

```css
/* Backgrounds */
--color-bg-primary: var(--color-neutral-50); /* Page background */
--color-bg-secondary: #ffffff; /* Card backgrounds */
--color-bg-tertiary: var(--color-neutral-100); /* Subtle backgrounds */

/* Text */
--color-text-primary: var(--color-neutral-900); /* Main text */
--color-text-secondary: var(--color-neutral-600); /* Secondary text */
--color-text-link: var(--color-primary-600); /* Links */

/* Borders */
--color-border-primary: var(--color-neutral-200); /* Default borders */
```

### Dark Theme Semantic Colors

**Open:** `src/styles/theme-dark.css`

Same variables, but with different values for dark mode:

```css
/* Backgrounds */
--color-bg-primary: var(--color-neutral-950); /* Dark page background */
--color-bg-secondary: var(--color-neutral-900); /* Dark cards */

/* Text */
--color-text-primary: var(--color-neutral-50); /* Light text on dark bg */
--color-text-link: var(--color-primary-400); /* Lighter links */
```

## Customizing Typography

**Open:** `src/styles/global.css`

### Font Families

```css
:root {
  --font-family-sans: system-ui, -apple-system, sans-serif;
  --font-family-serif: Georgia, 'Times New Roman', serif;
  --font-family-mono: 'Courier New', monospace;
}
```

**To use a custom font:**

1. **Add Google Font** (or similar):

   ```html
   <!-- In src/layouts/Layout.astro, in <head> -->
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link
     href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
     rel="stylesheet"
   />
   ```

2. **Update the CSS:**
   ```css
   --font-family-sans: 'Inter', system-ui, sans-serif;
   ```

### Font Sizes

```css
--font-size-xs: 0.75rem; /* 12px */
--font-size-sm: 0.875rem; /* 14px */
--font-size-base: 1rem; /* 16px */
--font-size-lg: 1.125rem; /* 18px */
--font-size-xl: 1.25rem; /* 20px */
--font-size-2xl: 1.5rem; /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem; /* 36px */
--font-size-5xl: 3rem; /* 48px */
```

**To make all text slightly larger:**

Increase the base size:

```css
--font-size-base: 1.125rem; /* Was 1rem (16px), now 18px */
```

### Line Height

```css
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
--line-height-loose: 2;
```

**For easier reading:**

```css
--line-height-normal: 1.75; /* More spacious */
```

## Customizing Spacing

Spacing controls margins, padding, and gaps.

```css
--spacing-xs: 0.25rem; /* 4px */
--spacing-sm: 0.5rem; /* 8px */
--spacing-md: 1rem; /* 16px */
--spacing-lg: 1.5rem; /* 24px */
--spacing-xl: 2rem; /* 32px */
--spacing-2xl: 3rem; /* 48px */
--spacing-3xl: 4rem; /* 64px */
--spacing-4xl: 6rem; /* 96px */
```

These are used throughout components:

```css
.article-card {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}
```

## Common Customizations

### Making Links Stand Out

**In:** `src/styles/theme-light.css`

```css
--color-text-link: var(--color-primary-700); /* Darker/bolder */
--color-text-link-hover: var(--color-primary-900); /* Even darker on hover */
```

Add underlines in `global.css`:

```css
a {
  color: var(--color-text-link);
  text-decoration: underline; /* Add this */
}

a:hover {
  color: var(--color-text-link-hover);
}
```

### Adjusting Content Width

**In:** `src/styles/global.css`

Find the max-width setting:

```css
.container {
  max-width: 65ch; /* Characters wide */
  margin-inline: auto;
}
```

**Options:**

- **Narrower (easier to read):** `max-width: 55ch;`
- **Wider (more content):** `max-width: 75ch;`
- **Full width:** `max-width: 100%;`

### Changing Border Radius

Make things more or less rounded:

```css
--border-radius-sm: 0.25rem; /* 4px */
--border-radius-md: 0.5rem; /* 8px - default for cards */
--border-radius-lg: 1rem; /* 16px */
--border-radius-full: 9999px; /* Fully rounded (pills) */
```

**For sharper design:**

```css
--border-radius-md: 0; /* No rounding */
```

**For softer design:**

```css
--border-radius-md: 1rem; /* More rounded */
```

### Adjusting Shadows

**In:** `src/styles/theme-light.css` (and `theme-dark.css`)

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
```

**For flat design (no shadows):**

```css
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
```

**For more dramatic shadows:**

```css
--shadow-md: 0 8px 16px -2px rgb(0 0 0 / 0.15);
```

## Component-Specific Styles

Many components have scoped styles within their `.astro` files.

### Example: Styling Article Cards

**Open:** `src/components/article/ArticleCard.astro`

Look for the `<style>` section at the bottom:

```astro
<style>
  .article-card {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border-primary);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-md);
  }

  .article-card:hover {
    border-color: var(--color-border-hover);
    box-shadow: var(--shadow-md);
  }
</style>
```

You can change these styles directly!

### Example: Customizing Navigation

**Open:** `src/components/layout/Nav.astro`

Find the `<style>` tag and modify:

```astro
<style>
  nav {
    background: var(--color-bg-secondary);
    padding: var(--spacing-md);
    /* Add your custom styles */
    border-bottom: 2px solid var(--color-primary-600);
  }
</style>
```

## Dark Mode

Dark mode automatically activates based on user's system preference.

### Testing Dark Mode

**In your browser:**

1. **macOS:** System Preferences → General → Appearance → Dark
2. **Windows:** Settings → Personalization → Colors → Dark
3. **Browser DevTools:**
   - Open DevTools (F12)
   - Cmd/Ctrl + Shift + P
   - Type "Render" → "Emulate CSS prefers-color-scheme"

### Customizing Dark Mode

Edit `src/styles/theme-dark.css` to change dark mode colors.

**Example - Less dark background:**

```css
--color-bg-primary: var(--color-neutral-900); /* Was 950 */
--color-bg-secondary: var(--color-neutral-800); /* Was 900 */
```

### Disabling Dark Mode

If you only want light mode:

1. **Open:** `src/styles/theme-dark.css`
2. **Comment out or delete** all the dark mode CSS
3. Site will stay light mode always

## Adding Custom CSS

### Method 1: Global Styles

Add to `src/styles/global.css`:

```css
/* At the end of the file */

/* Custom article styling */
article img {
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
}

/* Custom button style */
.button {
  background: var(--color-interactive-primary);
  color: white;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  text-decoration: none;
}
```

### Method 2: Component Styles

Add `<style>` tags in your `.astro` component:

```astro
<div class="my-component">
  <!-- content -->
</div>

<style>
  .my-component {
    /* styles automatically scoped to this component */
    background: var(--color-bg-secondary);
    padding: var(--spacing-lg);
  }
</style>
```

### Method 3: Inline Styles

For one-off styling:

```astro
<div style="color: red; font-weight: bold;">Special text</div>
```

**Note:** Prefer CSS classes over inline styles for maintainability!

## Responsive Design

The site is mobile-friendly by default. To customize for different screens:

```css
/* Mobile first (default) */
.container {
  padding: var(--spacing-md);
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: var(--spacing-xl);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: var(--spacing-2xl);
  }
}
```

**Common breakpoints:**

- `640px` - Small tablets
- `768px` - Tablets
- `1024px` - Desktops
- `1280px` - Large desktops

## Color Contrast & Accessibility

Always ensure sufficient contrast between text and backgrounds.

### Testing Contrast

Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/):

- **AA (minimum):** 4.5:1 for normal text
- **AAA (enhanced):** 7:1 for normal text

### Tips

- Dark text on light backgrounds: Use at least `neutral-700` on `neutral-50`
- Light text on dark backgrounds: Use at least `neutral-200` on `neutral-900`
- Never use pure black on pure white (too harsh)
- Test with different color combinations

## Complete Example: Custom Color Scheme

Let's create a warm, earthy color scheme:

**1. Update tokens.css:**

```css
/* Primary (Warm Orange) */
--color-primary-50: #fff7ed;
--color-primary-100: #ffedd5;
--color-primary-200: #fed7aa;
--color-primary-300: #fdba74;
--color-primary-400: #fb923c;
--color-primary-500: #f97316;
--color-primary-600: #ea580c; /* Main brand color */
--color-primary-700: #c2410c;
--color-primary-800: #9a3412;
--color-primary-900: #7c2d12;

/* Neutrals (Warm Stone) */
--color-neutral-50: #fafaf9;
--color-neutral-100: #f5f5f4;
--color-neutral-200: #e7e5e4;
--color-neutral-300: #d6d3d1;
--color-neutral-400: #a8a29e;
--color-neutral-500: #78716c;
--color-neutral-600: #57534e;
--color-neutral-700: #44403c;
--color-neutral-800: #292524;
--color-neutral-900: #1c1917;
--color-neutral-950: #0c0a09;
```

**2. Adjust global.css for a warm feel:**

```css
body {
  background: linear-gradient(to bottom, #fff7ed, #ffffff);
}
```

**3. Test in browser - should see warm orange accents throughout!**

## Tips for Styling

1. **Use CSS variables** - `var(--color-text-primary)` instead of `#000000`
2. **Work with tokens** - Don't hardcode colors
3. **Test dark mode** - Always check both themes
4. **Check mobile** - Use browser DevTools device mode
5. **Be consistent** - Use the same spacing/sizing patterns
6. **Preview often** - See changes immediately with hot reload

## Troubleshooting

### Changes Not Showing

1. **Hard refresh:** Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. **Clear cache:** Browser settings
3. **Check file saved:** Look for save indicator in editor
4. **Restart dev server:** Ctrl+C, then `npm run dev`

### Styles Look Broken

- Check for syntax errors (missing semicolons, brackets)
- Verify CSS variable names are correct
- Look for browser console errors (F12 → Console)
- Make sure you're editing the right file

### Dark Mode Not Working

- Check browser/system settings
- Verify `theme-dark.css` exists and is imported
- Use DevTools to emulate dark mode preference
- Check for CSS syntax errors

## What's Next?

Now that you understand styling:

- **Add icons** - See [06-using-icons.md](06-using-icons.md)
- **Edit components** - See [07-components.md](07-components.md)
- **Quick reference** - See [09-common-tasks.md](09-common-tasks.md)

## Quick Reference

| File              | Purpose                          |
| ----------------- | -------------------------------- |
| `tokens.css`      | Raw color values (50-900 scales) |
| `theme-light.css` | Light mode semantic colors       |
| `theme-dark.css`  | Dark mode semantic colors        |
| `global.css`      | Typography, spacing, base styles |

| Variable Type | Example                  |
| ------------- | ------------------------ |
| Background    | `--color-bg-primary`     |
| Text          | `--color-text-primary`   |
| Border        | `--color-border-primary` |
| Spacing       | `--spacing-md`           |
| Font size     | `--font-size-lg`         |
| Shadow        | `--shadow-md`            |
