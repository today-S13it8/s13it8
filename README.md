# s13it8.com

Marketing site for s13it8, LLC: AI agents, self-hosted infrastructure, websites and small business tools. Based in St. Louis, Missouri.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `services.html` | Services |
| `portfolio.html` | Portfolio (with AI / Web / Infra / Tools filter) |
| `about.html` | About Us |
| `contact.html` | Contact |

Plain HTML with no build step. Images live in `assets/img/` as WebP. The only script is `assets/js/site.js`, which runs the home question chips, the portfolio filter and the contact form.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Any static host works: GitHub Pages (Settings, Pages, deploy from `main`, root folder), Cloudflare Pages, or Coolify on the VPS.

## Contact form

The form opens the visitor's email app with a message to s13it8@gmail.com already filled in. To receive submissions without that step, point the form at an n8n webhook or a form service.

## Still to fill in

- Cal.com booking link on `contact.html` (currently `https://cal.com`)
- Founder photo and personal line on `about.html`
- One-line descriptions for Spatialinks and Jollyhops on `portfolio.html`
