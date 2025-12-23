import type { CollectionEntry } from 'astro:content';

/**
 * Format a date for display
 * @param date - The date to format
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

/**
 * Convert text to URL-friendly slug
 * @param text - The text to slugify
 * @returns URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Sort articles by date (newest first)
 * @param articles - Array of article entries
 * @returns Sorted articles
 */
export function sortArticlesByDate(
  articles: CollectionEntry<'articles'>[]
): CollectionEntry<'articles'>[] {
  return articles.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Filter out draft articles (unless in dev mode)
 * @param articles - Array of article entries
 * @param includeDrafts - Whether to include drafts (default: false in production)
 * @returns Filtered articles
 */
export function filterDrafts(
  articles: CollectionEntry<'articles'>[],
  includeDrafts = import.meta.env.DEV
): CollectionEntry<'articles'>[] {
  if (includeDrafts) return articles;
  return articles.filter(article => !article.data.draft);
}

/**
 * Get published articles, sorted by date
 * @param articles - Array of article entries
 * @returns Published articles sorted by date
 */
export function getPublishedArticles(
  articles: CollectionEntry<'articles'>[]
): CollectionEntry<'articles'>[] {
  return sortArticlesByDate(filterDrafts(articles));
}
