/**
 * Site Configuration
 *
 * Central configuration for your Astro project.
 *
 * 🚀 CUSTOMIZE THIS FILE FOR YOUR PROJECT:
 * 1. Update name, title, description with your project details
 * 2. Set your domain URL (important for SEO and social sharing)
 * 3. Add your social media handles
 * 4. Customize navigation items
 */

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  social: {
    github?: string;
    linkedin?: string;
  };
  nav: Array<{
    label: string;
    href: string;
  }>;
}

export const siteConfig: SiteConfig = {
  // 📝 Update with your project name (appears in page titles, footer, etc.)
  name: 'access.today',

  // 📝 Main site title (used for homepage and meta tags)
  title: 'access.today',

  // 📝 Brief description for SEO and social sharing
  description:
    'A blog about accessibility, technology, and inclusive design by Charles Hall.',

  // 🌐 Your domain URL (update this for production!)
  url: 'https://access.today',

  // 👤 Your name or organization
  author: 'Charles Hall',

  // 📱 Social media handles (uncomment and update as needed)
  social: {
    github: 'github-username',
    linkedin: 'linkedin-username',
  },

  // 🧭 Main navigation menu
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Articles', href: '/articles' },
  ],
};
