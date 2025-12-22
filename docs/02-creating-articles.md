# Creating Articles

Learn how to write and publish blog posts on your Astro site. Articles are written in Markdown (`.md`) or MDX (`.mdx`) files, which combine the simplicity of Markdown with the power of components.

## Quick Start: Create Your First Article

### 1. Create a New File

Navigate to the articles folder:

```
src/content/articles/
```

Create a new file with a descriptive name (use hyphens, not spaces):

```
my-first-post.mdx
web-accessibility-tips.mdx
getting-started-with-react.mdx
```

### 2. Add Frontmatter

Every article needs frontmatter at the top - this is metadata about your post. Copy this template:

```yaml
---
title: My First Blog Post
description: A short summary of what this article is about
date: 2025-12-21
author: Your Name
draft: false
tags: ['tutorial', 'getting-started']
---
```

**Frontmatter Fields Explained:**

- **title** (required) - The article title shown on the page
- **description** (required) - A summary for SEO and article previews
- **date** (required) - Publication date in `YYYY-MM-DD` format
- **author** (required) - Who wrote this article
- **draft** (required) - `true` hides the article, `false` publishes it
- **tags** (optional) - Array of topics for categorization

### 3. Write Your Content

After the closing `---`, write your article using Markdown:

```markdown
---
title: My First Blog Post
description: Learning how to create articles
date: 2025-12-21
author: Your Name
draft: false
tags: ['tutorial']
---

# Welcome to My Blog

This is my first blog post! I'm excited to share my thoughts.

## Why I Started This Blog

I wanted to share what I'm learning with others...

### Topics I'll Cover

Here are some things I plan to write about:

- Web accessibility
- Design tips
- Technology tutorials
```

## Markdown Basics

Markdown is a simple way to format text. Here's what you need to know:

### Headings

```markdown
# Heading 1 (Page Title)

## Heading 2 (Main Sections)

### Heading 3 (Subsections)

#### Heading 4 (Minor sections)
```

Use `#` for the article title, `##` for main sections, `###` for subsections.

### Text Formatting

```markdown
**bold text**
_italic text_
**_bold and italic_**
~~strikethrough~~
`inline code`
```

### Links

```markdown
[Link text](https://example.com)
[Link to another article](/article/other-post)
```

### Lists

**Unordered lists:**

```markdown
- First item
- Second item
- Third item
  - Nested item
  - Another nested item
```

**Ordered lists:**

```markdown
1. First step
2. Second step
3. Third step
```

### Images

```markdown
![Alt text describing the image](/path/to/image.jpg)
```

See the "Adding Images" section below for details.

### Quotes

```markdown
> This is a quote.
> It can span multiple lines.
```

### Code Blocks

For code examples, use triple backticks with the language:

````markdown
```javascript
function hello() {
  console.log('Hello, world!');
}
```

```css
.button {
  background: blue;
  color: white;
}
```

```html
<div class="container">
  <h1>Hello</h1>
</div>
```
````

### Horizontal Rules

```markdown
---
```

Creates a horizontal line to separate content.

## Adding Images

### 1. Put Images in the Public Folder

Place your images in:

```
public/images/
```

For example:

```
public/images/my-photo.jpg
public/images/screenshot.png
```

### 2. Reference Images in Articles

Use the path starting with `/`:

```markdown
![A description of the image](/images/my-photo.jpg)
```

**Always include alt text** (the text in brackets) for accessibility!

### Image Best Practices

- Use descriptive file names: `accessibility-checklist.png` not `img1.png`
- Optimize images before uploading (keep file sizes reasonable)
- Use appropriate formats: JPG for photos, PNG for graphics, SVG for icons
- Write meaningful alt text describing what's in the image

## Draft vs. Published

### Working on a Draft

While writing, set `draft: true`:

```yaml
---
title: Work in Progress
description: Still writing this one
date: 2025-12-21
author: Your Name
draft: true
tags: ['tutorial']
---
```

Draft articles won't appear on your site.

### Publishing an Article

When ready to publish, change to `draft: false`:

```yaml
---
draft: false
---
```

Then commit and push your changes with Git!

## MDX vs. Markdown

This project uses MDX (`.mdx`), which is Markdown with extra features.

### Why MDX?

MDX lets you use Astro components inside your articles:

```mdx
# My Article

Here's some regular markdown text.

<CustomComponent>You can mix in components!</CustomComponent>

And back to regular markdown.
```

### When to Use What

- **Use `.mdx`** - If you might want to use components (recommended for flexibility)
- **Use `.md`** - If you're writing simple articles with just text and images

For beginners, just use `.mdx` for everything - it works like regular Markdown too!

## Article URL Structure

The file name determines the URL:

| File Name                | URL                           |
| ------------------------ | ----------------------------- |
| `my-first-post.mdx`      | `/article/my-first-post`      |
| `accessibility-tips.mdx` | `/article/accessibility-tips` |
| `2025-review.mdx`        | `/article/2025-review`        |

**URL Best Practices:**

- Use lowercase letters
- Separate words with hyphens
- Keep it short and descriptive
- Avoid special characters

## Complete Example

Here's a complete article file:

```mdx
---
title: 10 Tips for Better Web Accessibility
description: Practical advice for making your websites more accessible to everyone, including people with disabilities.
date: 2025-12-21
author: Charles Hall
draft: false
tags: ['accessibility', 'web-development', 'best-practices']
---

## Next Steps

Want to learn more? Check out these resources:

- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

---

_Have questions? Feel free to reach out!_
```

## Publishing Workflow

### Complete Process:

1. **Create** the `.mdx` file in `src/content/articles/`
2. **Write** your article with frontmatter and content
3. **Preview** locally (make sure dev server is running)
4. **Check** your article at `http://localhost:4321/article/your-filename`
5. **Publish** by setting `draft: false`
6. **Commit** with Git:
   ```bash
   git add src/content/articles/your-article.mdx
   git commit -m "Add new article about [topic]"
   git push
   ```

## Editing Existing Articles

1. Open the article file in `src/content/articles/`
2. Make your changes
3. Save the file
4. Preview in browser (auto-refreshes)
5. Commit and push when satisfied

## Organizing Articles

### Using Tags

Tags help organize and categorize your content:

```yaml
tags: ['tutorial', 'javascript', 'beginner-friendly']
tags: ['accessibility', 'design']
tags: ['review', 'tools']
```

**Tag Best Practices:**

- Use lowercase
- Use hyphens for multi-word tags
- Be consistent (pick names and stick with them)
- Don't use too many tags per article (3-5 is good)

### Dates

Always use `YYYY-MM-DD` format:

```yaml
date: 2025-12-21  # ✓ Good
date: 12/21/2025  # ✗ Bad
date: Dec 21 2025 # ✗ Bad
```

## Tips for Better Articles

### Writing Tips

1. **Start with an outline** - Plan your sections first
2. **Use headings** - Break content into scannable sections
3. **Keep paragraphs short** - Easier to read online
4. **Use lists** - More scannable than long paragraphs
5. **Add code examples** - Show, don't just tell
6. **Include images** - Break up text, illustrate points

### SEO Tips

1. **Write good descriptions** - This appears in search results
2. **Use descriptive titles** - Clear and specific
3. **Include relevant keywords** - Naturally in your content
4. **Add internal links** - Link to your other articles
5. **Choose good file names** - Descriptive URLs help SEO

### Accessibility Tips

1. **Write alt text** - Describe images meaningfully
2. **Use heading hierarchy** - Don't skip levels (# → ## → ###)
3. **Make links descriptive** - "Read the tutorial" not "click here"
4. **Keep language clear** - Avoid unnecessary jargon
5. **Use sufficient contrast** - If you add custom styles

## Troubleshooting

### Article Not Showing Up

- Check `draft: false` in frontmatter
- Verify file is in `src/content/articles/`
- Check for syntax errors in frontmatter
- Restart dev server (`Ctrl+C`, then `npm run dev`)

### Images Not Loading

- Confirm image is in `public/images/`
- Check path starts with `/`: `/images/photo.jpg`
- Verify file name matches exactly (case-sensitive!)
- Try hard refresh (`Cmd+Shift+R` or `Ctrl+Shift+R`)

### Frontmatter Errors

- Ensure three dashes `---` before and after
- Check YAML syntax (colons, quotes, spacing)
- Verify all required fields are present
- Make sure dates are in `YYYY-MM-DD` format

## What's Next?

Now that you can create articles:

- **Learn about components** - See [07-components.md](07-components.md) to use components in articles
- **Customize styling** - See [05-styling.md](05-styling.md) to change appearance
- **Add icons** - See [06-using-icons.md](06-using-icons.md) to enhance articles with icons

## Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)
- [Writing Alt Text](https://www.w3.org/WAI/tutorials/images/)
