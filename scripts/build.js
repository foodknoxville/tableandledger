#!/usr/bin/env node

/**
 * Table & Ledger -- Static Site Build Script
 * 
 * Reads markdown files from posts/, renders them into HTML using templates,
 * auto-generates the blog index, and outputs everything to dist/.
 * 
 * Usage: node scripts/build.js
 * 
 * Post format (frontmatter):
 *   ---
 *   title: Your Post Title
 *   date: 2026-03-09
 *   category: Case Study
 *   slug: your-post-slug
 *   lede: A one-paragraph summary that appears below the title.
 *   ---
 *   
 *   Your markdown content here.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const POSTS_DIR = path.join(__dirname, '..', 'posts');
const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');
const STATIC_DIR = path.join(__dirname, '..', 'static');
const DIST_DIR = path.join(__dirname, '..', 'dist');

// Configure marked for clean output
marked.setOptions({
    gfm: true,
    breaks: false,
    smartypants: false
});

// --- Utility functions ---

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function readTemplate(name) {
    return fs.readFileSync(path.join(TEMPLATES_DIR, name), 'utf-8');
}

function formatDate(dateInput) {
    // gray-matter may parse dates as Date objects or strings
    let d;
    if (dateInput instanceof Date) {
        d = dateInput;
    } else {
        d = new Date(dateInput + 'T12:00:00');
    }
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

function renderTemplate(template, vars) {
    let html = template;
    for (const [key, value] of Object.entries(vars)) {
        const pattern = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
        html = html.replace(pattern, value);
    }
    return html;
}

// --- Build posts ---

function buildPosts() {
    if (!fs.existsSync(POSTS_DIR)) {
        console.log('No posts/ directory found. Creating it...');
        ensureDir(POSTS_DIR);
        return [];
    }

    const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
    
    if (files.length === 0) {
        console.log('No markdown files found in posts/');
        return [];
    }

    const articleTemplate = readTemplate('article.html');
    const posts = [];

    for (const file of files) {
        const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
        const { data, content } = matter(raw);

        // Validate required frontmatter
        const required = ['title', 'date', 'category', 'slug', 'lede'];
        const missing = required.filter(f => !data[f]);
        if (missing.length > 0) {
            console.warn(`WARNING: ${file} missing frontmatter: ${missing.join(', ')}. Skipping.`);
            continue;
        }

        // Convert markdown to HTML
        const htmlContent = marked.parse(content);

        // Render into article template
        const pageHtml = renderTemplate(articleTemplate, {
            title: data.title,
            date_display: formatDate(data.date),
            category: data.category,
            slug: data.slug,
            lede: data.lede,
            content: htmlContent
        });

        // Write to dist/blog/{slug}/index.html
        const postDir = path.join(DIST_DIR, 'blog', data.slug);
        ensureDir(postDir);
        fs.writeFileSync(path.join(postDir, 'index.html'), pageHtml);

        // Normalize date to string (gray-matter may return Date object)
        const dateStr = data.date instanceof Date 
            ? data.date.toISOString().split('T')[0] 
            : String(data.date);

        posts.push({
            title: data.title,
            date: dateStr,
            date_display: formatDate(data.date),
            category: data.category,
            slug: data.slug,
            lede: data.lede
        });

        console.log(`  Built: /blog/${data.slug}/`);
    }

    // Sort by date descending (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return posts;
}

// --- Build blog index ---

function buildBlogIndex(posts) {
    const template = readTemplate('blog-index.html');

    let postsHtml = '';
    for (const post of posts) {
        postsHtml += `
            <div class="post-entry">
                <div class="post-entry-meta">
                    <span class="article-date">${post.date_display}</span>
                    <span class="section-label">${post.category}</span>
                </div>
                <h2><a href="/blog/${post.slug}/">${post.title}</a></h2>
                <p class="post-entry-lede">${post.lede}</p>
                <a href="/blog/${post.slug}/" class="read-link">Read &rarr;</a>
            </div>`;
    }

    if (posts.length === 0) {
        postsHtml = '<p style="padding: 2rem 0; color: var(--warm-gray);">No posts yet. Check back soon.</p>';
    }

    const pageHtml = renderTemplate(template, { posts: postsHtml });
    
    ensureDir(path.join(DIST_DIR, 'blog'));
    fs.writeFileSync(path.join(DIST_DIR, 'blog', 'index.html'), pageHtml);
    console.log(`  Built: /blog/ (${posts.length} posts)`);
}

// --- Copy static files ---

function copyStatic() {
    if (!fs.existsSync(STATIC_DIR)) return;

    const files = fs.readdirSync(STATIC_DIR);
    for (const file of files) {
        fs.copyFileSync(
            path.join(STATIC_DIR, file),
            path.join(DIST_DIR, file)
        );
        console.log(`  Copied: /${file}`);
    }
}

// --- Copy root files (homepage, images, etc.) ---

function copyRootFiles() {
    const rootDir = path.join(__dirname, '..');
    const rootFiles = fs.readdirSync(rootDir).filter(f => {
        // Copy index.html, images, favicon, etc. from project root
        const ext = path.extname(f).toLowerCase();
        return (
            f === 'index.html' ||
            f === 'donnie.jpg' ||
            f === 'favicon.ico' ||
            f === 'robots.txt' ||
            f === 'sitemap.xml' ||
            ext === '.png' ||
            ext === '.ico' ||
            ext === '.webp'
        );
    });

    for (const file of rootFiles) {
        fs.copyFileSync(
            path.join(rootDir, file),
            path.join(DIST_DIR, file)
        );
        console.log(`  Copied root: /${file}`);
    }
}

// --- Generate sitemap ---

function buildSitemap(posts) {
    const now = new Date().toISOString().split('T')[0];
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://tableandledger.com/</loc>
        <lastmod>${now}</lastmod>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://tableandledger.com/blog/</loc>
        <lastmod>${now}</lastmod>
        <priority>0.8</priority>
    </url>`;

    for (const post of posts) {
        xml += `
    <url>
        <loc>https://tableandledger.com/blog/${post.slug}/</loc>
        <lastmod>${post.date}</lastmod>
        <priority>0.7</priority>
    </url>`;
    }

    xml += '\n</urlset>\n';

    fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), xml);
    console.log('  Built: /sitemap.xml');
}

// --- Generate robots.txt ---

function buildRobots() {
    const robots = `User-agent: *
Allow: /

Sitemap: https://tableandledger.com/sitemap.xml
`;
    fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robots);
    console.log('  Built: /robots.txt');
}

// --- Main ---

function build() {
    console.log('\nTable & Ledger -- Building site...\n');

    // Clean dist
    if (fs.existsSync(DIST_DIR)) {
        fs.rmSync(DIST_DIR, { recursive: true });
    }
    ensureDir(DIST_DIR);

    // Build
    console.log('Static files:');
    copyStatic();
    copyRootFiles();

    console.log('\nPosts:');
    const posts = buildPosts();

    console.log('\nIndex:');
    buildBlogIndex(posts);

    console.log('\nSEO:');
    buildSitemap(posts);
    buildRobots();

    console.log(`\nDone. ${posts.length} posts built to dist/\n`);
}

build();
