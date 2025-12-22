# Customizing Your Site

This guide shows you how to customize your site's configuration, navigation, branding, and overall appearance. Most customizations start in one key file: `src/config/site.ts`.

## The Main Configuration File

Open `src/config/site.ts` - this is mission control for your site!

### What's in site.ts

```typescript
export const siteConfig: SiteConfig = {
  name: 'access.today',
  title: 'access.today',
  description:
    'A blog about accessibility, technology, and inclusive design by Charles Hall.',
  url: 'https://access.today',
  author: 'Charles Hall',
  social: {
    github: 'github-username',
    linkedin: 'linkedin-username',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Articles', href: '/articles' },
  ],
};
```

## Customizing Site Information

### Change Site Name

The `name` appears in page titles, the footer, and meta tags:

```typescript
name: 'My Awesome Blog',
```

### Change Site Title

The `title` is used for the homepage and meta tags:

```typescript
title: 'My Awesome Blog - Web Development Tips',
```

**Tip:** Title can be longer/more descriptive than name.

### Update Description

This appears in search results and social media previews:

```typescript
description: 'Practical web development tutorials, tips, and insights for modern developers.',
```

**Best practices:**

- Keep it under 160 characters
- Make it compelling (this is what people see in Google!)
- Include relevant keywords naturally

### Set Your URL

Update this to your actual domain:

```typescript
url: 'https://yourdomain.com',
```

**During development:** This doesn't affect local preview, but it's important for:

- SEO (canonical URLs)
- Social sharing (Open Graph)
- RSS feeds
- Sitemaps

### Change Author Name

Your name or organization:

```typescript
author: 'Jane Smith',
```

This appears in:

- Article metadata
- Footer
- Structured data (SEO)

## Adding Social Media Links

### Available Social Platforms

The config supports GitHub and LinkedIn by default:

```typescript
social: {
  github: 'your-github-username',
  linkedin: 'your-linkedin-username',
},
```

### Examples

```typescript
social: {
  github: 'janedoe',
  linkedin: 'jane-doe-123',
},
```

**Note:** Use just the username, not the full URL!

### Removing Social Links

To hide a social link, comment it out or remove it:

```typescript
social: {
  github: 'janedoe',
  // linkedin: 'jane-doe-123',  // Hidden
},
```

### Adding More Social Platforms

To add Twitter, Instagram, etc., you'll need to:

1. Update the `SiteConfig` interface (advanced - ask for help!)
2. Edit the Footer component to display them

## Customizing Navigation

The navigation menu appears in the header.

### Default Navigation

```typescript
nav: [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
],
```

### Adding Navigation Items

Add items to the array:

```typescript
nav: [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
],
```

**Remember:** You need to create the corresponding pages in `src/pages/`!

### External Links

Link to external sites:

```typescript
nav: [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'GitHub', href: 'https://github.com/yourusername' },
],
```

### Reordering Navigation

Just change the order in the array:

```typescript
nav: [
  { label: 'About', href: '/about' },      // First
  { label: 'Articles', href: '/articles' }, // Second
  { label: 'Home', href: '/' },            // Last
],
```

### Removing Navigation Items

Simply delete the line:

```typescript
nav: [
  { label: 'Home', href: '/' },
  // Removed Articles link
],
```

## Complete Customization Example

Here's a fully customized configuration:

```typescript
export const siteConfig: SiteConfig = {
  name: 'DevTips Daily',
  title: 'DevTips Daily - JavaScript & Web Development',
  description:
    'Daily tips, tutorials, and insights about JavaScript, TypeScript, React, and modern web development.',
  url: 'https://devtipsdaily.com',
  author: 'Alex Chen',
  social: {
    github: 'alexchen',
    linkedin: 'alex-chen-dev',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Tutorials', href: '/articles' },
    { label: 'About Me', href: '/about' },
    { label: 'Newsletter', href: '/newsletter' },
  ],
};
```

## Saving Your Changes

After editing `site.ts`:

1. **Save the file** (Cmd+S or Ctrl+S)
2. **Check your browser** - should auto-refresh
3. **Verify changes** - Look at the header, footer, page title
4. **Commit with Git**:
   ```bash
   git add src/config/site.ts
   git commit -m "Update site configuration"
   git push
   ```

## Where These Settings Appear

### Site Name

- Browser tab title
- Footer copyright notice
- Navigation logo (if enabled)
- Social media cards

### Site Description

- Meta description tag (search results)
- Open Graph description (social media)
- RSS feed description

### Author

- Article bylines
- Footer
- Schema.org structured data

### Social Links

- Footer social icons
- Contact information

### Navigation

- Header menu
- Mobile menu

## Customizing the Footer

The footer is a separate component but uses data from `site.ts`.

### Location

```
src/components/layout/Footer.astro
```

### What You Can Change

1. **Copyright text** - Uses `siteConfig.name`
2. **Social links** - Uses `siteConfig.social`
3. **Additional links** - Add manually in the component

### Adding Footer Links

Open `Footer.astro` and look for the structure. Add links in the HTML:

```astro
<footer>
  <p>&copy; {currentYear} {siteConfig.name}</p>

  <!-- Add custom links -->
  <nav>
    <a href="/privacy">Privacy Policy</a>
    <a href="/terms">Terms of Service</a>
  </nav>

  <!-- Social links render automatically -->
</footer>
```

## Customizing the Navigation Component

### Location

```
src/components/layout/Nav.astro
```

The navigation automatically uses items from `siteConfig.nav`.

### Logo/Site Name

To change how the site name appears in the navigation, edit `Nav.astro`:

```astro
<nav>
  <a href="/" class="logo">
    {siteConfig.name}
  </a>

  <!-- Navigation items -->
</nav>
```

You can replace the text with an image logo if you prefer.

## Creating New Pages

When you add navigation items, create the corresponding pages:

### 1. Create the Page File

```
src/pages/about.astro
```

### 2. Use the Layout

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="About">
  <h1>About Me</h1>
  <p>Welcome to my site...</p>
</Layout>
```

### 3. Add to Navigation

Update `site.ts`:

```typescript
nav: [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'About', href: '/about' },  // New!
],
```

## SEO Configuration

### Meta Tags

These are controlled in `src/components/seo/SEOHead.astro`, which pulls from `site.ts`.

The component automatically generates:

- `<title>` tags
- Meta descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Cards
- Canonical URLs

### Customizing Page Titles

Page titles follow this pattern:

```
[Page Name] | [Site Name]
```

For example: "About | DevTips Daily"

This is set in each page's `Layout` component:

```astro
<Layout title="About" />
```

### Favicons and Manifest

Located in the `public/` folder:

- `public/favicon.ico` - Browser tab icon
- `public/manifest.json` - PWA configuration

Replace these files with your own branded versions.

## Branding Colors and Logos

### Adding a Logo

1. **Put logo in public folder:**

   ```
   public/images/logo.png
   ```

2. **Update Nav component:**
   ```astro
   <a href="/" class="logo">
     <img src="/images/logo.png" alt={siteConfig.name} />
   </a>
   ```

### Changing Colors

See [05-styling.md](05-styling.md) for detailed color customization.

Quick preview - colors are in `src/styles/tokens.css`:

```css
:root {
  --color-primary: #0066cc;
  --color-secondary: #6c757d;
}
```

## Testing Your Changes

After making changes:

### 1. Visual Check

- Look at every page
- Check mobile view (browser DevTools)
- Test navigation links

### 2. Functionality Check

- Click all navigation links
- Verify social links (if added)
- Check footer information

### 3. SEO Check

- View page source (Cmd+U or Ctrl+U)
- Look for `<title>` tag
- Find `<meta name="description">`
- Check Open Graph tags (`og:title`, `og:description`)

## Common Customizations

### Personal Blog

```typescript
name: 'Jane Doe',
title: 'Jane Doe - Personal Blog',
description: 'Thoughts on design, code, and creativity.',
author: 'Jane Doe',
nav: [
  { label: 'Home', href: '/' },
  { label: 'Writing', href: '/articles' },
  { label: 'About', href: '/about' },
],
```

### Company Blog

```typescript
name: 'TechCorp',
title: 'TechCorp Blog - Industry Insights',
description: 'The latest news and insights from TechCorp.',
author: 'TechCorp Team',
nav: [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/articles' },
  { label: 'Products', href: 'https://techcorp.com/products' },
  { label: 'Contact', href: '/contact' },
],
```

### Portfolio Site

```typescript
name: 'Alex Designer',
title: 'Alex Designer - Creative Portfolio',
description: 'UI/UX designer specializing in accessible, beautiful interfaces.',
author: 'Alex Designer',
nav: [
  { label: 'Work', href: '/articles' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
],
```

## Troubleshooting

### Changes Not Showing

1. **Save the file** (check for unsaved indicator)
2. **Hard refresh browser** (Cmd+Shift+R or Ctrl+Shift+R)
3. **Check for TypeScript errors** in terminal
4. **Restart dev server** (Ctrl+C, then `npm run dev`)

### Syntax Errors

If you see red errors:

- Check for missing commas between items
- Ensure quotes match (`'` or `"`)
- Verify brackets and braces are balanced
- Look at the error message - it usually points to the problem!

### Navigation Not Updating

- Verify you edited `src/config/site.ts`
- Check the `nav` array syntax
- Make sure you saved the file
- Clear browser cache

## What's Next?

Now that your site is customized:

- **Style your site** - See [05-styling.md](05-styling.md)
- **Add icons** - See [06-using-icons.md](06-using-icons.md)
- **Edit components** - See [07-components.md](07-components.md)
- **Create content** - See [02-creating-articles.md](02-creating-articles.md)

## Quick Reference

| Setting           | Purpose         | Example                    |
| ----------------- | --------------- | -------------------------- |
| `name`            | Site name       | `'My Blog'`                |
| `title`           | SEO title       | `'My Blog - Web Dev Tips'` |
| `description`     | SEO description | `'Tutorials and tips...'`  |
| `url`             | Domain          | `'https://myblog.com'`     |
| `author`          | Your name       | `'Jane Smith'`             |
| `social.github`   | GitHub username | `'janesmith'`              |
| `social.linkedin` | LinkedIn handle | `'jane-smith'`             |
| `nav`             | Menu items      | `[{ label, href }, ...]`   |
