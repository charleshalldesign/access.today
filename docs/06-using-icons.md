# Using Astro Icons

Learn how to add and customize icons throughout your site. This project uses Astro Icon, which gives you access to thousands of icons from Iconify.

## What is Astro Icon?

Astro Icon is a component that lets you use icons from the Iconify library. Iconify includes popular icon sets like:

- **Lucide** (clean, consistent icons - default for this project)
- **Material Design Icons**
- **Font Awesome**
- **Heroicons**
- **Bootstrap Icons**
- And 100+ more!

## Finding Icons

### 1. Browse Iconify

Visit: **[https://icon-sets.iconify.design/](https://icon-sets.iconify.design/)**

### 2. Search for an Icon

Use the search bar. For example, search "home" or "user" or "heart".

### 3. Choose an Icon Set

This project uses **Lucide** icons by default. Stick with one set for consistency!

### 4. Get the Icon Name

Click an icon to see its name. Example:

- **Lucide home icon:** `lucide:home`
- **Lucide user icon:** `lucide:user`
- **Lucide heart icon:** `lucide:heart`

The format is always: `{set-name}:{icon-name}`

## Adding Icons to Your Site

### Basic Usage

```astro
---
import { Icon } from 'astro-icon/components';
---

<Icon name="lucide:home" />
```

That's it! The icon will render.

### With Size

```astro
<Icon name="lucide:user" size={24} />
<Icon name="lucide:heart" size={32} />
<Icon name="lucide:star" size={48} />
```

Size is in pixels.

### With Custom Styling

```astro
<Icon name="lucide:sun" size={24} class="my-icon" />

<style>
  .my-icon {
    color: orange;
  }
</style>
```

Icons inherit the current text color by default!

## Common Icon Use Cases

### In Navigation

**Open:** `src/components/layout/Nav.astro`

Add icons to navigation items:

```astro
---
import { Icon } from 'astro-icon/components';
---

<nav>
  <a href="/">
    <Icon name="lucide:home" size={20} />
    Home
  </a>

  <a href="/articles">
    <Icon name="lucide:newspaper" size={20} />
    Articles
  </a>
</nav>
```

### In Footer

**Open:** `src/components/layout/Footer.astro`

Social media icons:

```astro
---
import { Icon } from 'astro-icon/components';
---

<footer>
  <a href="https://github.com/username">
    <Icon name="lucide:github" size={24} />
    GitHub
  </a>

  <a href="https://linkedin.com/in/username">
    <Icon name="lucide:linkedin" size={24} />
    LinkedIn
  </a>

  <a href="mailto:email@example.com">
    <Icon name="lucide:mail" size={24} />
    Email
  </a>
</footer>
```

### In Articles

You can use icons in your MDX articles too!

```mdx
---
title: My Article
---

import { Icon } from 'astro-icon/components';

# Welcome!

Here's a tip: <Icon name="lucide:lightbulb" /> Always test your code!

## Features

- <Icon name="lucide:check" /> Fast performance
- <Icon name="lucide:check" /> Easy to use
- <Icon name="lucide:check" /> Well documented
```

### As Decorations

Add visual interest:

```astro
<div class="callout">
  <Icon name="lucide:info" size={20} />
  <p>This is important information!</p>
</div>

<div class="warning">
  <Icon name="lucide:alert-triangle" size={20} />
  <p>Warning: Be careful here!</p>
</div>

<div class="success">
  <Icon name="lucide:check-circle" size={20} />
  <p>Success! Everything worked!</p>
</div>
```

## Styling Icons

### Color

Icons inherit the text color:

```astro
<p style="color: blue;">
  <Icon name="lucide:star" />
  Blue star
</p>

<p style="color: red;">
  <Icon name="lucide:heart" />
  Red heart
</p>
```

Or use CSS:

```astro
<Icon name="lucide:sun" class="sun-icon" />

<style>
  .sun-icon {
    color: orange;
  }
</style>
```

### Size

Three ways to control size:

**1. Size prop (recommended):**

```astro
<Icon name="lucide:home" size={32} />
```

**2. CSS font-size:**

```astro
<Icon name="lucide:home" class="big-icon" />

<style>
  .big-icon {
    font-size: 2rem;
  }
</style>
```

**3. CSS width/height:**

```astro
<style>
  .icon {
    width: 40px;
    height: 40px;
  }
</style>
```

### Inline with Text

Icons automatically align with text:

```astro
<button>
  <Icon name="lucide:download" size={16} />
  Download
</button>

<a href="/profile">
  <Icon name="lucide:user" size={18} />
  My Profile
</a>
```

Adjust vertical alignment if needed:

```astro
<style>
  svg {
    vertical-align: middle;
  }
</style>
```

## Common Icons Reference

Here are popular Lucide icons you might use:

### Navigation & UI

- `lucide:home` - Home
- `lucide:menu` - Hamburger menu
- `lucide:x` - Close
- `lucide:chevron-right` - Right arrow
- `lucide:chevron-left` - Left arrow
- `lucide:chevron-down` - Down arrow
- `lucide:chevron-up` - Up arrow
- `lucide:external-link` - External link
- `lucide:search` - Search

### Actions

- `lucide:edit` - Edit
- `lucide:trash` - Delete
- `lucide:save` - Save
- `lucide:download` - Download
- `lucide:upload` - Upload
- `lucide:share` - Share
- `lucide:copy` - Copy
- `lucide:check` - Checkmark
- `lucide:x` - X / Cancel

### Social Media

- `lucide:github` - GitHub
- `lucide:linkedin` - LinkedIn
- `lucide:twitter` - Twitter/X
- `lucide:facebook` - Facebook
- `lucide:instagram` - Instagram
- `lucide:youtube` - YouTube
- `lucide:mail` - Email

### Content

- `lucide:file-text` - Document
- `lucide:image` - Image
- `lucide:video` - Video
- `lucide:music` - Audio
- `lucide:folder` - Folder
- `lucide:bookmark` - Bookmark
- `lucide:tag` - Tag
- `lucide:calendar` - Calendar
- `lucide:clock` - Time

### Status & Feedback

- `lucide:check-circle` - Success
- `lucide:alert-circle` - Info
- `lucide:alert-triangle` - Warning
- `lucide:x-circle` - Error
- `lucide:info` - Information
- `lucide:help-circle` - Help

### User & Settings

- `lucide:user` - User
- `lucide:users` - Multiple users
- `lucide:settings` - Settings
- `lucide:lock` - Locked
- `lucide:unlock` - Unlocked
- `lucide:eye` - Show
- `lucide:eye-off` - Hide

### Other

- `lucide:sun` - Light mode
- `lucide:moon` - Dark mode
- `lucide:heart` - Like
- `lucide:star` - Favorite
- `lucide:bell` - Notifications
- `lucide:message-circle` - Comments
- `lucide:lightbulb` - Idea

## Using Different Icon Sets

Want to use icons from other sets? You need to install them first.

### Example: Adding Material Design Icons

**1. Install the icon set:**

```bash
npm install @iconify-json/mdi
```

**2. Use in your code:**

```astro
<Icon name="mdi:home" />
<Icon name="mdi:account" />
<Icon name="mdi:heart" />
```

### Popular Icon Sets

| Set                   | NPM Package               | Prefix       |
| --------------------- | ------------------------- | ------------ |
| Lucide                | `@iconify-json/lucide`    | `lucide:`    |
| Material Design Icons | `@iconify-json/mdi`       | `mdi:`       |
| Font Awesome Solid    | `@iconify-json/fa6-solid` | `fa6-solid:` |
| Heroicons             | `@iconify-json/heroicons` | `heroicons:` |
| Bootstrap Icons       | `@iconify-json/bi`        | `bi:`        |

**Note:** Lucide is already installed in this project!

## Advanced Icon Techniques

### Dynamic Icons

Choose icons based on data:

```astro
---
const iconName = isDarkMode ? 'lucide:moon' : 'lucide:sun';
---

<Icon name={iconName} size={24} />
```

### Icons in Loops

```astro
---
const socialLinks = [
  { name: 'GitHub', icon: 'lucide:github', url: '...' },
  { name: 'LinkedIn', icon: 'lucide:linkedin', url: '...' },
  { name: 'Twitter', icon: 'lucide:twitter', url: '...' },
];
---

{
  socialLinks.map(link => (
    <a href={link.url}>
      <Icon name={link.icon} size={20} />
      {link.name}
    </a>
  ))
}
```

### Animated Icons

Add CSS animations:

```astro
<Icon name="lucide:loader" class="spinning" />

<style>
  .spinning {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
```

### Icon Buttons

Create button components with icons:

```astro
<button class="icon-button">
  <Icon name="lucide:heart" size={18} />
  <span>Like</span>
</button>

<style>
  .icon-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-border-primary);
    border-radius: var(--border-radius-md);
    background: var(--color-bg-secondary);
    cursor: pointer;
  }

  .icon-button:hover {
    background: var(--color-bg-hover);
  }
</style>
```

## Accessibility

Icons need to be accessible to all users!

### Decorative Icons

If the icon is purely decorative (meaning is clear from text):

```astro
<a href="/profile">
  <Icon name="lucide:user" />
  My Profile <!-- Text explains purpose -->
</a>
```

No additional work needed - screen readers will read "My Profile".

### Icon-Only Buttons

If there's NO visible text, add an aria-label:

```astro
<button aria-label="Close menu">
  <Icon name="lucide:x" size={24} />
</button>

<a href="https://github.com/username" aria-label="Visit my GitHub profile">
  <Icon name="lucide:github" size={24} />
</a>
```

### Icons Conveying Meaning

If the icon adds important meaning:

```astro
<div class="warning">
  <Icon name="lucide:alert-triangle" aria-label="Warning" />
  <span>Be careful with this action!</span>
</div>
```

## Complete Example: Social Footer

Here's a complete example of a social media footer:

```astro
---
// src/components/layout/Footer.astro
import { Icon } from 'astro-icon/components';
import { siteConfig } from '../../config/site';

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'lucide:github',
    url: `https://github.com/${siteConfig.social.github}`,
    show: !!siteConfig.social.github,
  },
  {
    name: 'LinkedIn',
    icon: 'lucide:linkedin',
    url: `https://linkedin.com/in/${siteConfig.social.linkedin}`,
    show: !!siteConfig.social.linkedin,
  },
];
---

<footer>
  <div class="social-links">
    {
      socialLinks
        .filter(link => link.show)
        .map(link => (
          <a
            href={link.url}
            aria-label={`Visit my ${link.name} profile`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name={link.icon} size={24} />
          </a>
        ))
    }
  </div>

  <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
</footer>

<style>
  footer {
    padding: var(--spacing-xl);
    border-top: 1px solid var(--color-border-primary);
    text-align: center;
  }

  .social-links {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    margin-bottom: var(--spacing-md);
  }

  .social-links a {
    color: var(--color-text-secondary);
    transition: color 0.2s;
  }

  .social-links a:hover {
    color: var(--color-interactive-primary);
  }
</style>
```

## Troubleshooting

### Icon Not Showing

1. **Check the icon name** - Must be exact: `lucide:home` not `lucide:Home`
2. **Verify icon exists** - Search on [Iconify](https://icon-sets.iconify.design/)
3. **Check import** - Did you import `Icon` from `'astro-icon/components'`?
4. **Install icon set** - Run `npm install @iconify-json/lucide` if missing

### Icon Too Small/Big

- Use the `size={24}` prop
- Or set CSS `font-size`, `width`, or `height`
- Check parent container isn't constraining size

### Icon Wrong Color

- Icons inherit text color
- Set color on parent or directly: `style="color: blue"`
- Check CSS specificity (your styles might be overridden)

### Icons in MDX Articles Not Working

Make sure to import at the top of your MDX file:

```mdx
---
title: My Article
---

import { Icon } from 'astro-icon/components';

Now use icons: <Icon name="lucide:star" />
```

## Tips

1. **Be consistent** - Stick with one icon set (Lucide recommended)
2. **Use appropriate sizes** - 16-20px for inline, 24px for standalone
3. **Consider accessibility** - Add aria-labels for icon-only buttons
4. **Match your style** - Icons should fit your design aesthetic
5. **Don't overuse** - Too many icons can be distracting

## What's Next?

Now that you can use icons:

- **Edit components** - See [07-components.md](07-components.md) to add icons everywhere
- **Common tasks** - See [09-common-tasks.md](09-common-tasks.md) for quick reference
- **Styling** - See [05-styling.md](05-styling.md) to style your icons

## Quick Reference

```astro
---
import { Icon } from 'astro-icon/components';
---

<!-- Basic icon -->
<Icon name="lucide:home" />

<!-- With size -->
<Icon name="lucide:user" size={24} />

<!-- With styling -->
<Icon name="lucide:heart" class="red-icon" />

<!-- With aria-label (icon-only) -->
<button aria-label="Close">
  <Icon name="lucide:x" />
</button>
```

**Browse icons:** [https://icon-sets.iconify.design/](https://icon-sets.iconify.design/)
