# Agent Website

Marketing website for **TaskAgentAI**, built as a static site with Tailwind (CDN) and modular UI components.

## Project Structure

- `index.html` - App shell, theme config, global styles, and component script imports
- `components/app.js` - Composes and renders the page into `#app`
- `components/header.js` - Top navigation
- `components/hero.js` - Hero section + execution dashboard-style component
- `components/sections.js` - Main content sections
- `components/footer.js` - Footer

## Run Locally

You can open `index.html` directly, but using a local server is recommended:

```bash
cd "/Users/karthikmanjunath/Documents/Agents Website"
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080`

## Editing Workflow

1. Update the relevant file in `components/`.
2. If browser cache is stale, bump the `?v=` query param in `index.html` for that script.
3. Refresh the page.

## Tech Notes

- Tailwind is loaded via CDN (`cdn.tailwindcss.com`).
- Google Fonts: Inter + Material Symbols.
- No build step or framework required.

## Git

Main branch: `main`  
Remote: `https://github.com/SantheApps/agent_website.git`
