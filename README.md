# Cue landing page

This is a dependency-free static companion site for the Cue iPhone app. Its visuals and copy follow the current app, using Queue screenshots with sample finds. The site has no signup form or site analytics.

## Run locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Legal pages

Static Privacy Policy and Terms & Conditions pages are at `/legal/privacy-policy.html` and `/legal/terms-and-conditions.html`. The site footer links to both. Their wording mirrors the iOS app; see `legal/README.md` for local preview and publication checks. They need an approved public HTTPS host before their URLs can be used in App Store Connect.

## Availability

Early-access signups are closed until there is an approved collection endpoint and matching privacy disclosure. The site currently shows an availability message instead of a form. The web pages still need an approved public HTTPS host before their URLs can be used in App Store Connect.
