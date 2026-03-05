# 🔬 Livs Labor – Einkaufsliste

Eine interaktive Einkaufsliste für Livs Heimlabor-Ausstattung. Alles, was ein kleines echtes Forschungslabor für eine 8-jährige Forscherin braucht.

**Live:** [voku.github.io/LaborShoppingList](https://voku.github.io/LaborShoppingList/)

## Features

- ✅ Abhak-Funktion mit lokalem Speicher (localStorage)
- 🔗 Direkte Amazon-Suchlinks für alle Artikel
- 💰 Automatische Gesamtkostenberechnung
- 📱 Responsives Design für Smartphone und Desktop
- 🚀 Statisch – kein Server, keine API-Keys nötig

## Run Locally

**Prerequisites:** Node.js ≥ 18

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main React component with UI and state logic |
| `src/data.ts` | Shopping list data (sections, items, prices, links) |
| `src/index.css` | Global styles |
| `index.html` | HTML entry point with metadata and OG tags |
| `vite.config.ts` | Vite build configuration |
| `public/favicon.svg` | Emoji favicon |
| `.github/workflows/deploy.yml` | GitHub Actions → GitHub Pages deployment |

## Key Files Detector

> **Helper prompt for AI assistants:**
>
> When working on this repository, the most important files are:
> - `src/data.ts` — to add, remove, or update shopping list items
> - `src/App.tsx` — to change UI layout, filtering, or interactions
> - `vite.config.ts` — to adjust build settings or the GitHub Pages base path
> - `.github/workflows/deploy.yml` — to modify the CI/CD deployment pipeline
> - `index.html` — to update page metadata, title, or Open Graph tags

## Deployment

The app is automatically deployed to **GitHub Pages** on every push to `main` via the workflow in `.github/workflows/deploy.yml`.

To enable GitHub Pages in your fork:
1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**

## Contributing

Issues and pull requests are welcome: [github.com/voku/LaborShoppingList](https://github.com/voku/LaborShoppingList)
