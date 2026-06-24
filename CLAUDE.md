# tableandledger — public website

Public marketing and blog site for Table & Ledger, deployed to www.tableandledger.com on Cloudflare Pages on every push to main. Static build: Markdown posts in `posts/` are compiled by `scripts/build.js` into `dist/`. The homepage `index.html` is hand-edited. See `README.md` for the full build and authoring flow.

## Posts

Each file in `posts/` carries frontmatter (title, date, category, slug, lede). `npm run build` regenerates `dist/`. Cloudflare Pages rebuilds on push.

## Keep this repo clean

This is a public surface. Never commit private business detail, client names, contract or paid status, or any internal operational note here. When in doubt, leave it out.

The `logs/` directory holds local working notes only and its contents are gitignored. Nothing in `logs/` is published or committed.

## Line endings

`.gitattributes` pins text files to LF so Cloudflare and tooling see consistent bytes regardless of who edited them.
