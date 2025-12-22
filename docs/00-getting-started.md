# Getting Started

Welcome! This guide will help you get your Astro website up and running. This documentation is designed for people who know HTML and CSS but may be new to Astro and Git.

## What is This Project?

This is an Astro website for blogging and content publishing. Astro is a modern web framework that lets you build fast websites using components. Think of it like building with HTML, but with reusable pieces and better organization.

## Prerequisites

Before you begin, make sure you have:

1. **Node.js** installed (version 18 or higher)
   - Check if you have it: Open Terminal and type `node --version`
   - If you don't have it, download from [nodejs.org](https://nodejs.org/)

2. **A text editor**
   - VS Code is recommended (free from [code.visualstudio.com](https://code.visualstudio.com/))
   - Or use any editor you're comfortable with

3. **Terminal/Command Line access**
   - On macOS: Use the built-in Terminal app
   - On Windows: Use Command Prompt or PowerShell

## First-Time Setup

### 1. Navigate to the Project

Open your Terminal and go to the project folder:

```bash
cd /Users/daniel/repos/access.today
```

### 2. Install Dependencies

The project needs to download various tools and libraries. Run:

```bash
npm install
```

This will take a minute or two. You only need to do this once (or when dependencies change).

### 3. Start the Development Server

Now start the local development server:

```bash
npm run dev
```

You should see output like:

```
🚀 astro v5.16.1 started in 123ms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

### 4. View Your Site

Open your browser and go to: **http://localhost:4321/**

You should see your website running locally! 🎉

## Understanding the File Structure

Here's what the main folders and files do:

```
access.today/
├── src/                    # All your website code lives here
│   ├── pages/             # Website pages (creates routes)
│   ├── components/        # Reusable UI pieces
│   ├── content/           # Your blog articles
│   │   └── articles/      # Put blog posts here
│   ├── layouts/           # Page templates
│   ├── styles/            # CSS files
│   └── config/            # Site settings
│       └── site.ts        # Main configuration file
├── public/                # Static files (images, fonts, etc.)
├── docs/                  # This documentation!
└── package.json           # Project dependencies and scripts
```

### Key Folders Explained

- **`src/pages/`** - Each file here becomes a page on your site
  - `index.astro` → Homepage (/)
  - `articles.astro` → Articles page (/articles)
  - `404.astro` → Page not found

- **`src/content/articles/`** - Write your blog posts here
  - Create `.mdx` or `.md` files
  - Each file becomes an article

- **`src/components/`** - Reusable pieces of your site
  - Navigation, footer, article cards, etc.
  - Used across multiple pages

- **`src/styles/`** - All your CSS
  - `global.css` - Styles that apply everywhere
  - `theme-light.css` & `theme-dark.css` - Color themes
  - `tokens.css` - Reusable design values

- **`public/`** - Files that don't need processing
  - Images, fonts, favicon, robots.txt

## Common Commands

Here are the commands you'll use frequently:

```bash
# Start development server
npm run dev

# Stop the server
# Press Ctrl+C in the terminal

# Build for production
npm run build

# Preview production build
npm run preview

# Check for TypeScript errors
npm run check

# Format code
npm run format

# Lint code
npm run lint
```

## Making Changes

When the development server is running (`npm run dev`):

1. Make changes to any file
2. Save the file
3. Your browser will automatically refresh
4. You see your changes instantly!

This is called "hot reload" and makes development much faster.

## What's Next?

Now that your site is running, you can:

1. **Learn about Git** - See [01-git-basics.md](01-git-basics.md) to understand version control
2. **Create your first article** - See [02-creating-articles.md](02-creating-articles.md)
3. **Customize your site** - See [04-customizing-site.md](04-customizing-site.md)
4. **Understand Astro** - See [03-astro-basics.md](03-astro-basics.md)

## Getting Help

If you get stuck:

1. Check the other docs in this folder
2. Look at the [Common Tasks](09-common-tasks.md) guide
3. Check the [Astro documentation](https://docs.astro.build/)
4. Read error messages carefully - they often tell you what's wrong!

## Troubleshooting

### Port already in use

If you see "port 4321 is already in use":

- Another instance is probably running
- Close other terminal windows or use `Ctrl+C` to stop them
- Try running `npm run dev` again

### Command not found: npm

You need to install Node.js first. See Prerequisites above.

### Changes not showing

- Make sure you saved the file
- Check the terminal for errors
- Try stopping the server (Ctrl+C) and starting again
- Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
