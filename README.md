# Cue landing page

This is a dependency-free static landing page for recruiting Cue’s early iPhone beta users.

## Run locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Connect applications before publishing

The beta form validates entries and displays a local success state for prototype testing. Connect its `submit` handler in `script.js` to a real approved collection endpoint before using it to recruit users, so submissions are actually delivered and stored according to the chosen privacy policy.
