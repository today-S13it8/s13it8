# s13it8.com

Marketing site for s13it8, LLC: AI agents, self-hosted infrastructure, websites and small business tools. Based in St. Louis, Missouri.

Built with React, TypeScript, Vite, Tailwind CSS v4, shadcn/ui components and Motion for animation.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # serve the built site
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/site.ts` | All copy that repeats: nav, services, steps, rules, portfolio projects, email, booking link |
| `src/pages/` | Home, Services, Portfolio, About, Contact, 404 |
| `src/components/ui/` | shadcn components (button, card, input, textarea, label, badge, sheet) |
| `src/components/motion.tsx` | `Reveal`, `Stagger`, `WordsIn` animation helpers |
| `src/components/network-background.tsx` | The animated node network behind the home hero |
| `src/index.css` | Brand colors and fonts as shadcn theme variables |
| `public/img/` | Logos and project images (WebP) |

Add more shadcn components with `npx shadcn@latest add <name>`; `components.json` is already set up.

## Motion

Reveals on scroll, staggered cards, word-by-word headlines, page transitions, a sliding nav pill, an animated portfolio filter and a drifting node network in the hero. Everything respects the visitor's "reduce motion" setting, and the network canvas pauses when it scrolls off screen.

## Deploy

**GitHub Pages:** in the repo, go to Settings, Pages, and set Source to "GitHub Actions". Every push to `main` then builds and publishes to `https://today-s13it8.github.io/s13it8/`. When s13it8.com points at Pages, change `BASE_PATH` in `.github/workflows/deploy.yml` to `/`.

**Anywhere else (Cloudflare Pages, Coolify, Netlify):** build command `npm run build`, output folder `dist`. Leave `BASE_PATH` unset for a site served at the domain root. The build copies `index.html` to `404.html` so links like `/services` load on static hosts.

## Contact form

There is no backend yet. Sending opens the visitor's email app with a message to s13it8@gmail.com filled in. To receive submissions directly, post the form to an n8n webhook in `src/pages/contact.tsx`.

## Still to fill in

- A personal line on the About page (background and why s13it8 started). Spot is marked with a TODO in `src/pages/about.tsx`
