# Astro Basics

Astro is the framework powering this website. If you know HTML and CSS, you already know most of what you need! This guide explains what Astro is and how it works.

## What is Astro?

Astro is a web framework for building fast, content-focused websites. Think of it as a supercharged way to build websites using HTML, CSS, and JavaScript.

### Why Astro?

- **Familiar** - If you know HTML, you know most of Astro
- **Fast** - Ships minimal JavaScript, loads quickly
- **Flexible** - Use components from React, Vue, or just HTML
- **Simple** - No complex build configs or tooling to learn

## Astro Files (`.astro`)

Astro files end in `.astro` and look similar to HTML, but with superpowers.

### Basic Structure

An `.astro` file has two parts:

```astro
---
// 1. Component Script (JavaScript/TypeScript)
// This runs on the server when building
const greeting = 'Hello';
const name = 'World';
---

<!-- 2. Component Template (HTML) -->
<div>
  <h1>{greeting}, {name}!</h1>
</div>
```

**The two parts:**

1. **Script section** (between `---` lines) - JavaScript that runs at build time
2. **Template section** (below `---`) - HTML that gets rendered

### Key Concept: Build Time vs. Runtime

Important: The code between `---` runs when you **build** the site, not in the browser!

```astro
---
// This runs at build time (on your computer or server)
const articles = await getArticles(); // Fetch data
const currentDate = new Date(); // Gets build date, not visitor's date
---

<!-- This is the HTML sent to browsers -->
<div>Found {articles.length} articles</div>
```

## Understanding `.astro` Files

Let's break down a complete example:

```astro
---
// Import components
import Nav from '../components/layout/Nav.astro';
import Footer from '../components/layout/Footer.astro';

// Import data or utilities
import { siteConfig } from '../config/site';

// Run code to prepare data
const pageTitle = `${siteConfig.name} - Home`;
const currentYear = new Date().getFullYear();
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>{pageTitle}</title>
  </head>
  <body>
    <Nav />

    <main>
      <h1>Welcome to {siteConfig.name}</h1>
      <p>This site was built in {currentYear}</p>
    </main>

    <Footer />
  </body>
</html>
```

### Using Variables in Templates

Put variables in curly braces `{}`:

```astro
---
const title = 'My Page';
const count = 42;
---

<h1>{title}</h1>
<p>Count: {count}</p>
<p>Double: {count * 2}</p>
```

### Using JavaScript Expressions

You can use any JavaScript expression in `{}`:

```astro
---
const items = ['Apple', 'Banana', 'Cherry'];
const isLoggedIn = true;
---

<p>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</p>
<p>Total items: {items.length}</p>
<p>First item: {items[0]}</p>
```

## Components

Components are reusable pieces of UI. Think of them like custom HTML tags.

### Creating a Component

Create a file in `src/components/`:

```astro
---
// src/components/Greeting.astro
const { name } = Astro.props;
---

<div class="greeting">
  <h2>Hello, {name}!</h2>
</div>

<style>
  .greeting {
    padding: 1rem;
    border: 2px solid blue;
  }
</style>
```

### Using a Component

Import and use it like an HTML tag:

```astro
---
import Greeting from '../components/Greeting.astro';
---

<Greeting name="Alice" />
<Greeting name="Bob" />
```

### Passing Props (Properties)

Props are how you pass data to components:

```astro
---
// Define what props your component accepts
const { title, description, author } = Astro.props;
---

<article>
  <h2>{title}</h2>
  <p>{description}</p>
  <small>By {author}</small>
</article>
```

Use it:

```astro
---
import Article from '../components/Article.astro';
---

<Article title="My Post" description="A great article" author="Me" />
```

## Pages and Routing

Files in `src/pages/` automatically become routes (URLs).

### File-Based Routing

| File Path                  | URL                 |
| -------------------------- | ------------------- |
| `pages/index.astro`        | `/` (homepage)      |
| `pages/articles.astro`     | `/articles`         |
| `pages/about.astro`        | `/about`            |
| `pages/article/[id].astro` | `/article/any-slug` |
| `pages/blog/2024.astro`    | `/blog/2024`        |

### Static Pages

Regular pages are simple:

```astro
---
// src/pages/about.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="About Us">
  <h1>About Our Site</h1>
  <p>We write about web development...</p>
</Layout>
```

### Dynamic Routes

Files with `[brackets]` are dynamic:

```astro
---
// src/pages/article/[id].astro
// This handles /article/any-slug

export async function getStaticPaths() {
  // Tell Astro which pages to generate
  return [{ params: { id: 'first-post' } }, { params: { id: 'second-post' } }];
}

const { id } = Astro.params;
---

<h1>Article: {id}</h1>
```

You won't need to modify dynamic routes often - they're already set up!

## Layouts

Layouts are components that wrap page content. Think of them as page templates.

### Using a Layout

```astro
---
// src/pages/about.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="About">
  <h1>About Page</h1>
  <p>This content goes inside the layout.</p>
</Layout>
```

### How Layouts Work

```astro
---
// src/layouts/Layout.astro
const { title } = Astro.props;
---

<!doctype html>
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <header>Site Header</header>

    <main>
      <!-- Page content goes here -->
      <slot />
    </main>

    <footer>Site Footer</footer>
  </body>
</html>
```

The `<slot />` is where child content appears!

## Styling in Astro

### Scoped Styles

Styles in a `<style>` tag are automatically scoped to that component:

```astro
---
// Component script
---

<div class="card">
  <h2>Title</h2>
</div>

<style>
  /* Only affects THIS component */
  .card {
    border: 1px solid gray;
    padding: 1rem;
  }
</style>
```

### Global Styles

For site-wide styles, import CSS files:

```astro
---
import '../styles/global.css';
---
```

## Common Patterns

### Conditional Rendering

Show/hide content based on conditions:

```astro
---
const isLoggedIn = false;
const items = ['apple', 'banana'];
---

{isLoggedIn && <p>Welcome back!</p>}

{items.length > 0 ? <p>You have {items.length} items</p> : <p>No items</p>}
```

### Looping (Lists)

Render lists using `.map()`:

```astro
---
const fruits = ['Apple', 'Banana', 'Cherry'];
---

<ul>
  {fruits.map(fruit => <li>{fruit}</li>)}
</ul>
```

More complex example:

```astro
---
const articles = [
  { title: 'First Post', date: '2025-01-01' },
  { title: 'Second Post', date: '2025-01-02' },
];
---

<div>
  {
    articles.map(article => (
      <article>
        <h2>{article.title}</h2>
        <time>{article.date}</time>
      </article>
    ))
  }
</div>
```

### Importing and Using Data

```astro
---
import { siteConfig } from '../config/site';
---

<h1>{siteConfig.name}</h1>
<p>{siteConfig.description}</p>
```

## Content Collections

Your blog articles live in Content Collections. Astro knows how to find and display them.

### Querying Articles

```astro
---
import { getCollection } from 'astro:content';

// Get all articles
const allArticles = await getCollection('articles');

// Get only published articles
const published = await getCollection('articles', ({ data }) => {
  return data.draft !== true;
});
---

<div>
  {
    published.map(article => (
      <div>
        <h2>{article.data.title}</h2>
        <p>{article.data.description}</p>
      </div>
    ))
  }
</div>
```

The existing pages already do this - you usually don't need to change it!

## Key Differences from Plain HTML

### 1. Component Composition

**HTML:** Repeat code everywhere

```html
<!-- header on every page -->
<header>...</header>

<!-- footer on every page -->
<footer>...</footer>
```

**Astro:** Use components

```astro
<Nav />
<slot />
<Footer />
```

### 2. Dynamic Content

**HTML:** Static text

```html
<h1>Welcome to My Site</h1>
```

**Astro:** Dynamic variables

```astro
<h1>Welcome to {siteConfig.name}</h1>
```

### 3. Loops and Logic

**HTML:** Write out each item

```html
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
```

**Astro:** Generate from data

```astro
{items.map(item => <li>{item}</li>)}
```

## What You Don't Need to Learn (Yet)

These are advanced topics you can skip for now:

- Client-side JavaScript (unless you need interactivity)
- Framework integrations (React, Vue, etc.)
- API routes and server-side rendering
- Advanced build configurations
- Middleware and routing logic

Stick to editing content, styles, and simple component changes!

## Common Tasks

### Editing a Page

1. Find the page in `src/pages/`
2. Open the `.astro` file
3. Edit the HTML in the template section
4. Save and view in browser

### Editing a Component

1. Find the component in `src/components/`
2. Open the `.astro` file
3. Make changes to script, template, or styles
4. Save and refresh browser

### Adding a New Page

1. Create a new file in `src/pages/`: `src/pages/newpage.astro`
2. Copy the structure from an existing page
3. Modify the content
4. Visit `/newpage` in your browser

## Project Structure

Here's how Astro organizes this project:

```
src/
├── pages/          # Routes (URLs)
│   ├── index.astro          # Homepage
│   ├── articles.astro       # Articles list
│   └── article/[...id].astro # Individual articles
│
├── layouts/        # Page templates
│   └── Layout.astro         # Main layout
│
├── components/     # Reusable UI pieces
│   ├── layout/
│   │   ├── Nav.astro        # Navigation
│   │   └── Footer.astro     # Footer
│   └── article/
│       └── ArticleCard.astro # Article preview
│
├── content/        # Blog articles (MDX files)
│   └── articles/
│
├── styles/         # CSS files
│   ├── global.css
│   └── tokens.css
│
└── config/         # Configuration
    └── site.ts     # Site settings
```

## Tips for Working with Astro

1. **Think in components** - Break UI into reusable pieces
2. **Use the script section** - Prepare data before rendering
3. **Keep logic simple** - Complex code belongs in separate files
4. **Preview constantly** - See changes immediately with hot reload
5. **Read error messages** - Astro gives helpful error information

## When You Need Help

### Error Messages

Astro shows helpful errors in the browser during development. Read them carefully!

Common errors:

- **Missing import** - Did you forget to import a component?
- **Syntax error** - Check your `{}` braces and quotes
- **Missing props** - Did you pass required props to a component?

### Resources

- [Astro Documentation](https://docs.astro.build/)
- [Astro Discord](https://astro.build/chat) - Friendly community
- Existing code in this project - See how it's done!

## What's Next?

Now that you understand Astro basics:

- **Customize your site** - See [04-customizing-site.md](04-customizing-site.md)
- **Work with components** - See [07-components.md](07-components.md)
- **Style your site** - See [05-styling.md](05-styling.md)
- **Add icons** - See [06-using-icons.md](06-using-icons.md)

## Key Takeaways

- Astro files are like HTML with JavaScript superpowers
- Code between `---` runs at build time
- Components are reusable UI pieces
- Files in `src/pages/` become routes
- Use `{}` to output variables and expressions
- Styles are scoped by default
- You already know most of what you need!
