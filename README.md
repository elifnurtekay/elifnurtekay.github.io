# Elif Nur Tekay — Engineering Portfolio

A static, content-driven GitHub Pages portfolio for full-stack software engineering, AI engineering, research, and hackathon applications.

## Live site

The production site is published from this repository through GitHub Pages at the configured custom/domain URL. The canonical configuration currently targets `https://elifnurtekay.github.io/`.

## Technology stack

- Semantic HTML5
- Modern CSS with responsive layout, dark/light themes, and reduced-motion support
- Vanilla JavaScript for data rendering, project filtering, dialog behavior, navigation, and clipboard interaction
- GitHub Pages-compatible static hosting (no server, API key, or build dependency)

## Features

- Centralized verified content in `data.js`
- Project filters and accessible case-study dialog
- Keyboard-accessible mobile navigation, visible focus styles, skip link, and Escape-enabled native dialog
- System-aware theme with persisted manual override
- SEO metadata, Open Graph tags, Person JSON-LD, `robots.txt`, and `sitemap.xml`
- Local project screenshots where verified; intentionally labeled placeholders for missing visuals

## Local development

No dependency installation or build is required.

```bash
python3 -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173). Do not open the HTML file directly: a local server better reflects GitHub Pages behavior.

## Production deployment

GitHub Pages can publish the repository root because the site is static. In GitHub, choose **Settings → Pages**, select the branch and **/(root)** folder, then save. Commit and push to the selected branch; Pages will publish the updated files. If the production URL changes, update the canonical URL, Open Graph URL/image, JSON-LD URL, `robots.txt`, and `sitemap.xml` in the root files.

## Content editing

All portfolio records are in `data.js`:

- `projects`: cards, filters, case studies, availability labels, images, and technologies
- `experience`, `publications`, `awards`, `skills`, `certificates`, and `highlights`: corresponding sections

Add a project by creating one object that follows the existing project fields. Use `repository` only after the public URL has been verified. For non-public work, set a truthful `privacyStatus`. Do not duplicate project copy in `index.html`.

## Screenshots

Existing screenshots are in `assets/img/projects/`. Add future project media under `assets/img/projects/<project-slug>/` using descriptive, lowercase filenames (WebP where conversion is safe), then set `image`, `imageWidth`, `imageHeight`, and `imageAlt` in the matching data record. Keep the original source image if converting it.

## Folder structure

```text
├── assets/                 # CV, profile, and project imagery
├── data.js                 # Verified portfolio content
├── index.html              # Semantic page structure and metadata
├── script.js               # Rendering and accessible UI interactions
├── styles.css              # Responsive design system
├── robots.txt / sitemap.xml
└── PORTFOLIO_TODO.md       # Only unresolved content and verification items
```

## Accessibility notes

The site uses landmark elements, hierarchical headings, native buttons, a skip link, focus styles, labeled controls, meaningful existing-image alt text, and a native `<dialog>` that supports Escape closing. CSS respects `prefers-reduced-motion`.

## License

No license has been supplied. All portfolio content and assets remain with their respective owner.
