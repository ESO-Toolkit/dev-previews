# ESO Toolkit — Dev Previews

PR preview deployments for [ESO-Toolkit/eso-toolkit](https://github.com/ESO-Toolkit/eso-toolkit).

Each pull request automatically gets a live preview deployed to a subdirectory:

```
https://eso-toolkit.github.io/dev-previews/pr-{number}/
```

## How It Works

1. When a PR is opened/updated on `eso-toolkit`, a GitHub Actions workflow builds the app
2. The build output is pushed to this repo under `pr-{number}/`
3. GitHub Pages serves each preview at its own URL
4. When a PR is closed/merged, the preview directory is automatically cleaned up

## Structure

```
├── index.html        # Landing page listing all active previews
├── previews.json     # Machine-readable list of active previews
├── pr-123/           # Preview for PR #123
├── pr-456/           # Preview for PR #456
└── ...
```
