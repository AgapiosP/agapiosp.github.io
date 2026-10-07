# Agapios Paraskeva — Portfolio

Static personal portfolio for `https://agapiosp.github.io`.

## What is included

- Responsive single-page portfolio
- Current AI / agent ecosystem section with links to official vendor documentation
- Experience, education, skills and measurable results based on the supplied CV
- Privacy-first local portfolio assistant (no API key, no external AI calls)
- Contact form UI ready for Formspree
- No framework or build step required

## Publish on GitHub Pages

1. Create a **public** repository named exactly `agapiosp.github.io` under the `AgapiosP` GitHub account.
2. Upload all files in this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. The site will be available at `https://agapiosp.github.io` after GitHub Pages finishes the deployment.

## Make the contact form work without publishing your email

The form is already configured for Formspree, but it needs your unique form ID.

1. Create a free Formspree account.
2. Create a new form and choose the private email inbox where you want messages delivered.
3. Formspree will give you an endpoint similar to `https://formspree.io/f/abcdwxyz`.
4. In `index.html`, replace:

```html
https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID
```

with the endpoint Formspree gives you.

Your real email address does **not** need to appear in the site's HTML.

## Optional: real AI chatbot later

The included assistant is deliberately local and deterministic, so the public site has no secrets and costs nothing to run.

If you want a real LLM chatbot later, use a server-side endpoint (for example Cloudflare Workers AI). Never place an OpenAI, Anthropic, Gemini, Hugging Face or Cloudflare API token directly in browser JavaScript.

## Updating the AI Radar

The AI section is labelled `verified Oct 2026` and points to official model documentation. When model generations change, update the labels in `index.html` but keep the official links.

## Files

- `index.html` — site content
- `styles.css` — responsive visual design
- `script.js` — navigation, scroll effects and local portfolio assistant
- `404.html` — GitHub Pages fallback
- `robots.txt` — crawler instructions

