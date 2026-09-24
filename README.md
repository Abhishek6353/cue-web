# Cue landing page

This is a dependency-free static landing page for recruiting Cue’s early iPhone beta users.

## Run locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Legal pages

Static Privacy Policy and Terms & Conditions pages are at `/legal/privacy-policy.html` and `/legal/terms-and-conditions.html`. The site footer links to both. Their wording mirrors the iOS app; see `legal/README.md` for local preview and publication checks. They need an approved public HTTPS host before their URLs can be used in App Store Connect.

## Connect applications before publishing

The beta form validates entries and displays a local success state for prototype testing. Connect its `submit` handler in `script.js` to a real approved collection endpoint before using it to recruit users, so submissions are actually delivered and stored according to the chosen privacy policy.
