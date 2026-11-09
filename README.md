# PortfolioBidisha

Source for [portfolio-bidisha.vercel.app](https://portfolio-bidisha.vercel.app/), the personal site of
Bidisha Das, Senior Member of Technical Staff at Salesforce (backend and platform engineering, enterprise
authorization, AI agent infrastructure).

Built with Next.js 16 (pages router, Turbopack builds) and React 18, deployed on Vercel from `main`.

## Layout

| Path | What it is |
|---|---|
| `pages/index.js` | The only route. Page title, meta description, Open Graph tags, canonical URL and JSON-LD `Person` data live here. |
| `components/` | Header, social sidebar and page content, with their CSS modules. Keep components out of `pages/`: every file there becomes a public route. |
| `public/assets/resume.pdf` | The canonical public résumé. Every résumé link on the site points here. |
| `resume/Bidisha_Das_Resume.html` | Source for the résumé PDF. |
| `next.config.js` | Security headers, `noindex` on the résumé PDF, and redirects from old component routes. |
| `public/robots.txt`, `public/sitemap.xml` | Crawler hints. |
| `projects/langchain-rag-helper/` | A Python project kept for reference. It is not part of the site build. |

## Develop

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Update the résumé

Edit `resume/Bidisha_Das_Resume.html`, then render it with headless Chrome:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/assets/resume.pdf "file://$PWD/resume/Bidisha_Das_Resume.html"
```

Keep the public résumé free of phone numbers and home addresses; email, LinkedIn, GitHub and this site are the
contact channels. Keep the file at the same path so existing links keep working.
