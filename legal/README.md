# Cue legal web pages

These standalone HTML pages mirror the wording in the iOS repository's `Cue/LegalViews.swift`:

- `privacy-policy.html` — the Privacy Policy URL to publish for App Store Connect.
- `terms-and-conditions.html` — the public terms page.
- `index.html` — a neutral entry page if the legal directory is hosted on its own.

They use only `legal.css`; there are no scripts, cookies, forms, or remote font requests in these pages. To preview from the repository root, run `python3 -m http.server 8000` and open `http://localhost:8000/legal/privacy-policy.html` or `http://localhost:8000/legal/terms-and-conditions.html`.

The pages are prepared locally. They do not have a public URL until they are published on an approved HTTPS host. After publication, check both URLs in a private browser window, then enter the policy URL in App Store Connect. Keep web and in-app wording and update dates aligned when either changes.
