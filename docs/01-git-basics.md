# Git Basics

Git is a version control system - think of it as a "save" button for your entire project, but with superpowers. It tracks every change you make, lets you go back in time, and helps you collaborate with others.

## Why Use Git?

- **Track changes** - See what you changed, when, and why
- **Undo mistakes** - Go back to any previous version
- **Backup** - Keep your code safe on GitHub
- **Collaborate** - Work with others without overwriting their work
- **History** - Understand how your project evolved

## Core Concepts

Think of Git like a camera for your project:

- **Repository (repo)** - Your project folder with Git tracking
- **Commit** - A snapshot of your project at a specific time
- **Branch** - A separate timeline for trying new things
- **Remote** - A copy of your repo on GitHub (or similar service)

## The Basic Workflow

Here's what you'll do regularly:

1. **Make changes** to your files
2. **Stage** the changes (choose what to save)
3. **Commit** the changes (take a snapshot)
4. **Push** to GitHub (backup online)

## Essential Git Commands

### Check Status

See what files have changed:

```bash
git status
```

This shows:

- Files you've modified
- Files ready to commit (staged)
- Files not tracked by Git

**Use this often!** It helps you understand what's happening.

### Stage Changes (Add)

After editing files, tell Git which changes to include in your next commit:

```bash
# Stage a specific file
git add src/config/site.ts

# Stage all files in a folder
git add src/content/articles/

# Stage everything that changed
git add .
```

The `.` means "everything in the current folder and below."

### Commit Changes

Save a snapshot with a message describing what you did:

```bash
git commit -m "Update site title and description"
```

**Good commit messages:**

- `"Add new blog post about accessibility"`
- `"Fix navigation menu styling"`
- `"Update author bio and social links"`

**Bad commit messages:**

- `"stuff"`
- `"changes"`
- `"asdfgh"`

Write messages that future-you will understand!

### Push to GitHub

Upload your commits to GitHub:

```bash
git push
```

This backs up your work and makes it available online.

### Pull from GitHub

Download changes from GitHub (useful if you work from multiple computers or with others):

```bash
git pull
```

## Complete Workflow Example

Let's say you created a new blog post. Here's the full process:

```bash
# 1. Check what changed
git status
# Shows: src/content/articles/my-new-post.mdx (untracked)

# 2. Stage the new file
git add src/content/articles/my-new-post.mdx

# 3. Check status again (good habit!)
git status
# Shows: new file: src/content/articles/my-new-post.mdx (staged)

# 4. Commit with a clear message
git commit -m "Add blog post about web accessibility"

# 5. Push to GitHub
git push
```

Done! Your changes are saved and backed up.

## Common Scenarios

### Scenario 1: Multiple File Changes

You edited several files and want to save everything:

```bash
git add .
git commit -m "Update site config and add two new articles"
git push
```

### Scenario 2: Made a Typo in Commit Message

If you just committed and realize the message is wrong:

```bash
git commit --amend -m "Corrected commit message"
```

**Warning:** Only do this BEFORE pushing!

### Scenario 3: See Your Commit History

View past commits:

```bash
# Detailed view
git log

# Compact view (better)
git log --oneline

# Exit by pressing 'q'
```

### Scenario 4: Undo Uncommitted Changes

Made changes but want to start over?

```bash
# Undo changes to one file
git checkout -- src/config/site.ts

# Undo all changes (careful!)
git reset --hard
```

**Warning:** This permanently deletes uncommitted changes!

### Scenario 5: Forgot to Stage a File

Already committed but forgot to include a file?

```bash
# Stage the forgotten file
git add src/components/Footer.astro

# Add it to the previous commit
git commit --amend --no-edit
```

## Daily Git Routine

Here's a typical workflow:

### Starting Work

```bash
# Make sure you have the latest version
git pull

# Start making changes...
```

### Saving Work

```bash
# Check what changed
git status

# Stage your changes
git add .

# Commit with a message
git commit -m "Describe what you did"

# Push to GitHub
git push
```

Do this several times a day - commit often!

## Branches (Optional, But Useful)

Branches let you try things without affecting your main work.

```bash
# Create and switch to a new branch
git checkout -b new-design

# Make changes, commit them...

# Switch back to main branch
git checkout main

# Merge your changes from the new branch
git merge new-design
```

For beginners, working on the `main` branch is fine. Learn branches later when you need them.

## Understanding Git States

Your files can be in different states:

1. **Modified** - You changed the file, but haven't staged it
2. **Staged** - You ran `git add`, ready to commit
3. **Committed** - Saved in a snapshot
4. **Pushed** - Uploaded to GitHub

```
Modified → git add → Staged → git commit → Committed → git push → Pushed
```

## Viewing Changes

See exactly what you changed:

```bash
# See unstaged changes
git diff

# See staged changes
git diff --staged

# See changes in a specific file
git diff src/config/site.ts
```

Press `q` to exit the diff view.

## Getting Help

Every Git command has built-in help:

```bash
# Get help on any command
git help add
git help commit
git help push
```

## Common Mistakes & Fixes

### "I committed to the wrong branch"

Don't worry! It happens. Look up "git cherry-pick" when you need it.

### "I pushed something I shouldn't have"

You can't really "undo" a push, but you can revert:

```bash
git revert HEAD
git push
```

### "Everything is broken!"

Stay calm:

```bash
# See what changed
git status

# Undo all uncommitted changes
git reset --hard

# Get the latest from GitHub
git pull
```

## Quick Reference

| Task                  | Command                    |
| --------------------- | -------------------------- |
| Check status          | `git status`               |
| Stage one file        | `git add filename`         |
| Stage all changes     | `git add .`                |
| Commit                | `git commit -m "message"`  |
| Push to GitHub        | `git push`                 |
| Pull from GitHub      | `git pull`                 |
| View history          | `git log --oneline`        |
| Undo unstaged changes | `git checkout -- filename` |
| Undo all changes      | `git reset --hard`         |

## Best Practices

1. **Commit often** - Small commits are better than big ones
2. **Write clear messages** - Explain what and why
3. **Pull before starting** - Get the latest version
4. **Push regularly** - Don't lose your work
5. **Check status frequently** - Know what's happening
6. **Don't commit sensitive data** - Passwords, API keys, etc.

## What's Next?

Now that you understand Git, you can:

- **Create articles** - See [02-creating-articles.md](02-creating-articles.md)
- **Customize your site** - See [04-customizing-site.md](04-customizing-site.md)
- **Learn about Astro** - See [03-astro-basics.md](03-astro-basics.md)

## Resources

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Guides](https://guides.github.com/)
- When stuck, search: "git how to [what you want to do]"
