# Working with Components

Components are reusable pieces of your site. Think of them like custom HTML tags that you can use over and over. This guide shows you how to understand, edit, and use the components in this project.

## What Are Components?

A component is a self-contained piece of UI. Instead of copying the same HTML everywhere, you create it once and reuse it.

**Without components:**

```html
<!-- Have to write this on every page -->
<nav>
  <a href="/">Home</a>
  <a href="/articles">Articles</a>
</nav>
```

**With components:**

```astro
<!-- Just use it anywhere -->
<Nav />
```

Much cleaner and easier to maintain!

## Components in This Project

Here are the main components you'll work with:

### Layout Components

Located in `src/components/layout/`

**Nav.astro** - Site navigation/header

- Displays site name and menu
- Uses navigation from `site.ts`
- Appears at the top of every page

**Footer.astro** - Site footer

- Copyright info
- Social links
- Appears at the bottom of every page

**ThemeToggle.astro** - Dark/light mode switcher

- Toggles between themes
- Remembers user preference

**SkipLink.astro** - Accessibility skip-to-content link

- Helps keyboard users jump to main content
- Required for accessibility

### Article Components

Located in `src/components/article/`

**ArticleCard.astro** - Article preview card

- Shows article title, description, date
- Used on articles list page
- Clickable to go to full article

**ArticleMetadata.astro** - Article info display

- Shows date, author, tags
- Reused in cards and full articles

### SEO Components

Located in `src/components/seo/`

**SEOHead.astro** - Meta tags for SEO

- Page titles, descriptions
- Open Graph (social media)
- Used in the Layout

**StructuredData.astro** - Schema.org markup

- Helps search engines understand your content
- Improves SEO

## Understanding a Component

Let's break down a simple component:

```astro
---
// 1. COMPONENT SCRIPT
// Props (data passed to component)
export interface Props {
  title: string;
  description?: string; // Optional (? means optional)
}

const { title, description } = Astro.props;
---

<!-- 2. COMPONENT TEMPLATE -->
<div class="card">
  <h3>{title}</h3>
  {description && <p>{description}</p>}
</div>

<!-- 3. COMPONENT STYLES -->
<style>
  .card {
    border: 1px solid var(--color-border-primary);
    padding: var(--spacing-md);
    border-radius: var(--border-radius-md);
  }
</style>
```

**Three parts:**

1. **Script** - Define props and logic
2. **Template** - HTML with variables
3. **Styles** - Scoped CSS (only affects this component)

## Using Components

### Import and Use

```astro
---
import Nav from '../components/layout/Nav.astro';
import Footer from '../components/layout/Footer.astro';
---

<Nav />
<main>
  <h1>My Page</h1>
</main>
<Footer />
```

### Passing Props

Send data to components:

```astro
---
import ArticleCard from '../components/article/ArticleCard.astro';
---

<ArticleCard title="My Article" description="A great read" date="2025-12-21" />
```

### Self-Closing vs. Regular Tags

**Self-closing (no children):**

```astro
<Nav />
<Footer />
```

**With children:**

```astro
<Layout title="Home">
  <h1>This content goes inside</h1>
</Layout>
```

## Editing Existing Components

### Example: Customizing the Navigation

**1. Open the file:**

```
src/components/layout/Nav.astro
```

**2. Find the template section:**

You'll see something like:

```astro
<nav>
  <a href="/" class="logo">
    {siteConfig.name}
  </a>

  <ul>
    {
      siteConfig.nav.map(item => (
        <li>
          <a href={item.href}>{item.label}</a>
        </li>
      ))
    }
  </ul>
</nav>
```

**3. Make your changes:**

Add an icon to the logo:

```astro
---
import { Icon } from 'astro-icon/components';
---

<nav>
  <a href="/" class="logo">
    <Icon name="lucide:home" size={20} />
    {siteConfig.name}
  </a>

  <!-- rest of the code... -->
</nav>
```

**4. Save and preview!**

### Example: Styling the Footer

**1. Open:**

```
src/components/layout/Footer.astro
```

**2. Find the `<style>` section:**

```astro
<style>
  footer {
    padding: var(--spacing-xl);
    text-align: center;
    border-top: 1px solid var(--color-border-primary);
  }
</style>
```

**3. Customize:**

```astro
<style>
  footer {
    padding: var(--spacing-2xl);
    text-align: center;
    border-top: 3px solid var(--color-primary-600); /* Thicker, colored border */
    background: var(--color-bg-tertiary); /* Background color */
  }
</style>
```

### Example: Modifying Article Cards

**1. Open:**

```
src/components/article/ArticleCard.astro
```

**2. Change the template:**

Add a "New" badge for recent articles:

```astro
---
// In the script section, check if article is recent
const isNew =
  new Date(article.data.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // Last 7 days
---

<article class="article-card">
  {isNew && <span class="new-badge">New!</span>}

  <!-- rest of the component... -->
</article>

<style>
  .new-badge {
    background: var(--color-accent-500);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-sm);
    font-weight: bold;
  }
</style>
```

## Creating Your Own Component

Let's create a simple callout component:

**1. Create the file:**

```
src/components/Callout.astro
```

**2. Write the component:**

```astro
---
export interface Props {
  type?: 'info' | 'warning' | 'success';
  title?: string;
}

const { type = 'info', title } = Astro.props;
---

<div class={`callout callout-${type}`}>
  {title && <h4>{title}</h4>}
  <slot />
</div>

<style>
  .callout {
    padding: var(--spacing-md);
    border-left: 4px solid;
    border-radius: var(--border-radius-sm);
    margin: var(--spacing-md) 0;
  }

  .callout-info {
    background: var(--color-primary-50);
    border-color: var(--color-primary-600);
  }

  .callout-warning {
    background: var(--color-accent-100);
    border-color: var(--color-accent-600);
  }

  .callout-success {
    background: #d1fae5;
    border-color: var(--color-success-500);
  }

  .callout h4 {
    margin-top: 0;
    margin-bottom: var(--spacing-sm);
  }
</style>
```

**3. Use it:**

```astro
---
import Callout from '../components/Callout.astro';
---

<Callout type="info" title="Pro Tip">
  <p>This is helpful information!</p>
</Callout>

<Callout type="warning">
  <p>Be careful with this!</p>
</Callout>
```

**4. Use in MDX articles:**

```mdx
---
title: My Article
---

import Callout from '../../components/Callout.astro';

# My Article

<Callout type="info" title="Did you know?">
  This is a cool fact!
</Callout>
```

## The `<slot />` Element

The `<slot />` is where child content appears:

```astro
<!-- Component definition -->
<div class="card">
  <slot />
</div>

<!-- Using it -->
<Card>
  <h1>This content goes in the slot!</h1>
  <p>So does this!</p>
</Card>
```

### Named Slots

For multiple content areas:

```astro
<!-- Component -->
<div class="card">
  <header>
    <slot name="header" />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <slot name="footer" />
  </footer>
</div>

<!-- Using it -->
<Card>
  <h1 slot="header">Title</h1>
  <p>Main content</p>
  <small slot="footer">Footer text</small>
</Card>
```

## Component Props

Props are how you pass data to components.

### Defining Props

```astro
---
export interface Props {
  title: string; // Required
  description?: string; // Optional (?)
  count?: number; // Optional with default
}

const {
  title,
  description = 'No description', // Default value
  count = 0,
} = Astro.props;
---
```

### Using Props

```astro
<MyComponent title="Hello" description="World" count={42} />
```

### Props with TypeScript

TypeScript helps catch errors:

```astro
---
export interface Props {
  variant: 'primary' | 'secondary'; // Only these values allowed
  size: 'sm' | 'md' | 'lg';
}
---
```

## Component Communication

### Parent to Child (Props)

Parent sends data down:

```astro
---
// Parent
import Child from './Child.astro';
---

<Child message="Hello from parent!" />
```

```astro
---
// Child
const { message } = Astro.props;
---

<p>{message}</p>
```

### Child to Parent (Slots)

Child exposes slots, parent fills them:

```astro
---
// Parent
import Card from './Card.astro';
---

<Card>
  <h2>Parent decides this content</h2>
</Card>
```

## Common Component Patterns

### Conditional Rendering

Show/hide parts based on conditions:

```astro
---
const { showImage, imageUrl, title } = Astro.props;
---

<div>
  {showImage && imageUrl && <img src={imageUrl} alt={title} />}
  <h2>{title}</h2>
</div>
```

### Looping

Render lists:

```astro
---
const { items } = Astro.props;
---

<ul>
  {items.map(item => <li>{item}</li>)}
</ul>
```

### Conditional Classes

Apply classes dynamically:

```astro
---
const { isActive, variant } = Astro.props;
---

<button class={`btn btn-${variant} ${isActive ? 'active' : ''}`}>
  Click me
</button>
```

Or use an array:

```astro
<button class:list={['btn', `btn-${variant}`, { active: isActive }]}>
  Click me
</button>
```

## Scoped Styles

Styles in components are automatically scoped:

```astro
<!-- Component A -->
<style>
  .title {
    color: blue;
  }
</style>

<!-- Component B -->
<style>
  .title {
    color: red; /* Won't affect Component A! */
  }
</style>
```

### Global Styles

To make styles global from a component:

```astro
<style is:global>
  .global-class {
    color: red;
  }
</style>
```

**Use sparingly!** Prefer scoped styles.

## Real-World Examples

### Button Component

```astro
---
export interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const { variant = 'primary', size = 'md', href } = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag class={`btn btn-${variant} btn-${size}`} href={href}>
  <slot />
</Tag>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-md);
    font-weight: 600;
    transition: all 0.2s;
  }

  .btn-primary {
    background: var(--color-interactive-primary);
    color: white;
  }

  .btn-secondary {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
  }

  .btn-sm {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-sm);
  }

  .btn-md {
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: var(--font-size-base);
  }

  .btn-lg {
    padding: var(--spacing-lg) var(--spacing-xl);
    font-size: var(--font-size-lg);
  }
</style>
```

**Using it:**

```astro
<Button>Click Me</Button>
<Button variant="secondary">Cancel</Button>
<Button size="lg" href="/signup">Sign Up</Button>
```

### Badge Component

```astro
---
export interface Props {
  color?: 'blue' | 'green' | 'red' | 'yellow';
}

const { color = 'blue' } = Astro.props;
---

<span class={`badge badge-${color}`}>
  <slot />
</span>

<style>
  .badge {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    font-size: var(--font-size-sm);
    font-weight: 600;
    border-radius: var(--border-radius-full);
  }

  .badge-blue {
    background: var(--color-primary-100);
    color: var(--color-primary-700);
  }

  .badge-green {
    background: #d1fae5;
    color: #065f46;
  }

  .badge-red {
    background: #fee2e2;
    color: #991b1b;
  }

  .badge-yellow {
    background: var(--color-accent-100);
    color: var(--color-accent-800);
  }
</style>
```

## Tips for Working with Components

1. **Keep them small** - One responsibility per component
2. **Use meaningful names** - `ArticleCard` not `Card1`
3. **Document props** - Use TypeScript interfaces
4. **Reuse styles** - Use CSS variables from tokens
5. **Test thoroughly** - Check different prop combinations
6. **Think reusability** - Make components flexible

## Troubleshooting

### Component Not Rendering

- Check the import path is correct
- Verify file name matches (case-sensitive!)
- Look for errors in browser console
- Make sure you're using `<ComponentName />` not `<componentname />`

### Props Not Working

- Check prop names match exactly
- Verify TypeScript interface if defined
- Make sure you're destructuring props correctly
- Check for typos in prop names

### Styles Not Applying

- Verify class names match
- Check CSS syntax (semicolons, brackets)
- Look for conflicting global styles
- Inspect element in browser DevTools

### Changes Not Showing

- Save the file
- Hard refresh browser (Cmd/Ctrl + Shift + R)
- Check terminal for build errors
- Restart dev server if needed

## What's Next?

Now that you understand components:

- **Quick reference** - See [09-common-tasks.md](09-common-tasks.md)
- **Create content** - See [02-creating-articles.md](02-creating-articles.md)
- **Customize styles** - See [05-styling.md](05-styling.md)

## Quick Reference

```astro
---
// 1. Define props
export interface Props {
  title: string;
  optional?: boolean;
}

const { title, optional = false } = Astro.props;

// 2. Import other components
import Icon from 'astro-icon/components';
---

<!-- 3. Template -->
<div class="component">
  <h2>{title}</h2>
  {optional && <p>Optional content</p>}
  <slot />
</div>

<!-- 4. Scoped styles -->
<style>
  .component {
    /* Styles only affect this component */
  }
</style>
```

**Component locations:**

- Layout: `src/components/layout/`
- Article: `src/components/article/`
- SEO: `src/components/seo/`
- Custom: `src/components/`
