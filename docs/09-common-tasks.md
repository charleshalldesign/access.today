# Common Tasks - Quick Reference

A cheat sheet of frequent tasks you'll perform on your site. Use this as a quick reference guide.

## Table of Contents

- [Starting & Stopping](#starting--stopping)
- [Creating Content](#creating-content)
- [Git Workflows](#git-workflows)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

## Starting & Stopping

### Start Development Server

```bash
npm run dev
```

Opens at: `http://localhost:4321/`

### Stop Development Server

Press: **Ctrl+C** in the terminal

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Creating Content

### Create a New Article

**1. Create file:**

```
src/content/articles/my-new-post.mdx
```

**2. Add frontmatter:**

```yaml
---
title: My Article Title
description: A brief description
date: 2025-12-21
author: Your Name
draft: false
tags: ['tutorial', 'guide']
---
```

**3. Write content:**

```markdown
# Article Title

Your content here...
```

**4. View at:**

```
http://localhost:4321/article/my-new-post
```

### Add an Image

**1. Put image in:**

```
public/images/photo.jpg
```

**2. Reference in article:**

```markdown
![Description of image](/images/photo.jpg)
```

### Publish a Draft

Change in frontmatter:

```yaml
draft: false
```

## Git Workflows

### Save Your Work (Full Workflow)

```bash
# 1. Check what changed
git status

# 2. Stage all changes
git add .

# 3. Commit with message
git commit -m "Add new blog post about accessibility"

# 4. Push to GitHub
git push
```

### Quick Save (One Command)

```bash
git add . && git commit -m "Your message" && git push
```

### Check Your History

```bash
git log --oneline
```

### Undo Uncommitted Changes

```bash
# Undo changes to one file
git checkout -- filename

# Undo all changes (careful!)
git reset --hard
```

### Get Latest Changes

```bash
git pull
```

## Customization

### Change Site Name & Info

**Edit:** `src/config/site.ts`

```typescript
export const siteConfig = {
  name: 'Your Site Name',
  title: 'Your Site Title',
  description: 'Your description',
  url: 'https://yoursite.com',
  author: 'Your Name',
  // ...
};
```

### Update Navigation Menu

**Edit:** `src/config/site.ts`

```typescript
nav: [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'About', href: '/about' },
],
```

### Change Social Links

**Edit:** `src/config/site.ts`

```typescript
social: {
  github: 'your-username',
  linkedin: 'your-handle',
},
```

### Change Primary Color

**Edit:** `src/styles/tokens.css`

Replace the primary color palette (search for "Primary"):

```css
--color-primary-600: #2563eb; /* Your brand color */
```

### Adjust Typography

**Edit:** `src/styles/global.css`

```css
:root {
  --font-size-base: 1.125rem; /* Bigger text */
  --line-height-normal: 1.75; /* More spacing */
}
```

### Add Custom CSS

**Edit:** `src/styles/global.css`

Add at the end:

```css
/* Your custom styles */
.my-class {
  color: blue;
}
```

## Working with Components

### Add Icon to Navigation

**Edit:** `src/components/layout/Nav.astro`

```astro
---
import { Icon } from 'astro-icon/components';
---

<a href="/">
  <Icon name="lucide:home" size={20} />
  Home
</a>
```

### Edit Footer

**Edit:** `src/components/layout/Footer.astro`

Modify the template and styles.

### Use Icon in Article

```mdx
import { Icon } from 'astro-icon/components';

<Icon name="lucide:star" /> Featured content!
```

## File & Folder Operations

### Find a File

**Use VS Code search:**

- Press: **Cmd+P** (Mac) or **Ctrl+P** (Windows)
- Type filename

### Search Within Files

**Use VS Code search:**

- Press: **Cmd+Shift+F** (Mac) or **Ctrl+Shift+F** (Windows)
- Type search term

### Create New File

Right-click folder → New File

Or use terminal:

```bash
touch src/pages/newpage.astro
```

### Create New Folder

```bash
mkdir src/components/custom
```

## Troubleshooting

### Changes Not Showing

1. **Save the file** (look for dot indicator)
2. **Hard refresh browser:** Cmd+Shift+R or Ctrl+Shift+R
3. **Check terminal** for errors
4. **Restart server:** Ctrl+C, then `npm run dev`

### Port Already in Use

```bash
# Kill the process using port 4321
# macOS/Linux:
lsof -ti:4321 | xargs kill -9

# Or just use a different port:
npm run dev -- --port 3000
```

### Git Errors

**"Nothing to commit"**

- No changes to save
- Check `git status`

**"Merge conflict"**

- Get help! Conflicts need careful resolution

**"Permission denied"**

- Check GitHub credentials
- May need to set up SSH keys

### Build Errors

**TypeScript errors:**

```bash
npm run check
```

**Clear and rebuild:**

```bash
rm -rf node_modules .astro
npm install
npm run dev
```

### Page Not Found (404)

- Check file exists in `src/pages/`
- Verify URL matches filename
- Restart dev server

### Styles Not Working

- Check CSS syntax (semicolons, brackets)
- Verify CSS variable names
- Look in browser DevTools (F12)
- Check for typos in class names

## Command Reference

| Task                 | Command           |
| -------------------- | ----------------- |
| Start dev server     | `npm run dev`     |
| Build site           | `npm run build`   |
| Preview build        | `npm run preview` |
| Check types          | `npm run check`   |
| Format code          | `npm run format`  |
| Lint code            | `npm run lint`    |
| Install dependencies | `npm install`     |

## File Path Reference

| File                    | Purpose                     |
| ----------------------- | --------------------------- |
| `src/config/site.ts`    | Site configuration          |
| `src/content/articles/` | Blog posts                  |
| `src/pages/`            | Website pages               |
| `src/components/`       | Reusable components         |
| `src/styles/`           | CSS files                   |
| `src/layouts/`          | Page templates              |
| `public/`               | Static files (images, etc.) |
| `public/images/`        | Image assets                |

## Color Reference

| Color Token              | Purpose         |
| ------------------------ | --------------- |
| `--color-bg-primary`     | Main background |
| `--color-bg-secondary`   | Cards, panels   |
| `--color-text-primary`   | Main text       |
| `--color-text-secondary` | Secondary text  |
| `--color-text-link`      | Links           |
| `--color-border-primary` | Borders         |
| `--color-primary-600`    | Brand color     |

## Spacing Reference

| Token           | Size | Use For         |
| --------------- | ---- | --------------- |
| `--spacing-xs`  | 4px  | Tiny gaps       |
| `--spacing-sm`  | 8px  | Small spacing   |
| `--spacing-md`  | 16px | Default spacing |
| `--spacing-lg`  | 24px | Large spacing   |
| `--spacing-xl`  | 32px | Extra large     |
| `--spacing-2xl` | 48px | Section spacing |

## Common Icon Names

### UI Icons

- `lucide:home` - Home
- `lucide:menu` - Menu
- `lucide:x` - Close
- `lucide:search` - Search
- `lucide:chevron-right` - Arrow right

### Social Icons

- `lucide:github` - GitHub
- `lucide:linkedin` - LinkedIn
- `lucide:twitter` - Twitter
- `lucide:mail` - Email

### Content Icons

- `lucide:file-text` - Document
- `lucide:image` - Image
- `lucide:calendar` - Date
- `lucide:tag` - Tag

### Status Icons

- `lucide:check-circle` - Success
- `lucide:alert-circle` - Info
- `lucide:alert-triangle` - Warning
- `lucide:x-circle` - Error

[Browse all icons →](https://icon-sets.iconify.design/)

## Daily Workflow

**Start of day:**

```bash
cd /Users/daniel/repos/access.today
git pull
npm run dev
```

**Working:**

1. Make changes
2. Preview in browser
3. Test thoroughly

**End of day:**

```bash
git add .
git commit -m "Describe what you did"
git push
```

## Keyboard Shortcuts

### VS Code

| Action          | Mac            | Windows      |
| --------------- | -------------- | ------------ |
| Save            | Cmd+S          | Ctrl+S       |
| Find file       | Cmd+P          | Ctrl+P       |
| Search in files | Cmd+Shift+F    | Ctrl+Shift+F |
| Command palette | Cmd+Shift+P    | Ctrl+Shift+P |
| Toggle terminal | Ctrl+`         | Ctrl+`       |
| Format document | Shift+Option+F | Shift+Alt+F  |

### Browser

| Action       | Mac          | Windows      |
| ------------ | ------------ | ------------ |
| Hard refresh | Cmd+Shift+R  | Ctrl+Shift+R |
| DevTools     | Cmd+Option+I | F12          |
| View source  | Cmd+U        | Ctrl+U       |

## When to Ask for Help

Get assistance if you encounter:

- Merge conflicts in Git
- Build errors you can't resolve
- TypeScript errors you don't understand
- Breaking changes (site won't load)
- Complex component modifications
- Performance issues
- Security concerns

## Quick Fixes

### "Cannot find module"

```bash
npm install
```

### "Permission denied" (npm)

```bash
sudo npm install
```

### Styles look weird

```bash
# Hard refresh
Cmd+Shift+R (or Ctrl+Shift+R)
```

### Git won't push

```bash
git pull
# Resolve conflicts if any
git push
```

### Lost changes?

```bash
git reflog
# Shows recent commits
```

## Best Practices

✅ **DO:**

- Commit often with clear messages
- Test in browser before committing
- Use meaningful file names
- Keep components small and focused
- Write alt text for images
- Check both light and dark themes

❌ **DON'T:**

- Commit broken code
- Use vague commit messages ("fix stuff")
- Hardcode colors (use CSS variables)
- Skip accessibility features
- Forget to test on mobile
- Push sensitive data (passwords, keys)

## Resources

### Documentation

- [Astro Docs](https://docs.astro.build/)
- [MDX Guide](https://mdxjs.com/)
- [Iconify Icons](https://icon-sets.iconify.design/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

### Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)

### Local Docs

- [Getting Started](00-getting-started.md)
- [Git Basics](01-git-basics.md)
- [Creating Articles](02-creating-articles.md)
- [Astro Basics](03-astro-basics.md)
- [Customizing Site](04-customizing-site.md)
- [Styling](05-styling.md)
- [Using Icons](06-using-icons.md)
- [Components](07-components.md)

## Emergency Commands

### Start Fresh

```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Undo Everything

```bash
# Undo all uncommitted changes
git reset --hard
git clean -fd
```

### Check Everything

```bash
# Run all checks
npm run check
npm run lint
npm run build
```

## Need More Help?

1. **Read error messages** - They often explain the problem
2. **Check browser console** (F12) - Look for errors
3. **Search the docs** - Use the search in each guide
4. **Check Git status** - `git status` shows current state
5. **Ask for help** - Don't struggle alone!

---

**Pro Tip:** Bookmark this page for quick access to common commands and solutions!
