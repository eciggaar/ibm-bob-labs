# Deployment Guide for IBM Bob Labs

This repository is configured to deploy to GitHub Pages from a **private repository**.

## Repository Information

- **Private Repo**: https://github.com/IBMDeveloperBNL/ibm-bob-labs
- **Public Site**: https://ibmdeveloperbnl.github.io/ibm-bob-labs

## How It Works

1. **Source code stays private** in the main repository
2. **GitHub Actions** automatically builds the site on push to `main`
3. **Built site is deployed** to GitHub Pages (publicly accessible)
4. **Only static HTML/CSS/JS** is published, not source code

## Setup Steps

### 1. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - Source: **GitHub Actions**
3. Save changes

### 2. Push Your Code

```bash
# Add the remote (if not already added)
git remote add origin https://github.com/IBMDeveloperBNL/ibm-bob-labs.git

# Push to main branch
git push -u origin main
```

### 3. Monitor Deployment

1. Go to **Actions** tab in GitHub
2. Watch the "Deploy to GitHub Pages" workflow
3. Once complete (green checkmark), site is live at:
   - https://ibmdeveloperbnl.github.io/ibm-bob-labs

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration Files

- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for deployment
- **`astro.config.mjs`**: Astro configuration with correct URLs
  - `site`: https://ibmdeveloperbnl.github.io
  - `base`: /ibm-bob-labs

## Troubleshooting

### Pages Not Showing Up

1. Check Actions tab for build errors
2. Verify Pages is enabled in Settings → Pages
3. Ensure workflow has proper permissions (already configured)

### 404 Errors on Navigation

- Verify `base: '/ibm-bob-labs'` is set in `astro.config.mjs`
- Clear browser cache and hard refresh

### Build Failures

- Check Node.js version (should be 20)
- Verify all dependencies are in `package.json`
- Review build logs in Actions tab

## Security Notes

✅ **Safe to deploy publicly:**
- Built HTML/CSS/JS files
- Lab documentation content
- Static assets

⚠️ **Never commit:**
- API keys or secrets
- Internal URLs or credentials
- Proprietary code or algorithms

## Manual Deployment (Alternative)

If GitHub Actions is unavailable:

```bash
# Build locally
npm run build

# Deploy dist folder to gh-pages branch
cd dist
git init
git add .
git commit -m "Deploy"
git remote add origin https://github.com/IBMDeveloperBNL/ibm-bob-labs.git
git push -f origin HEAD:gh-pages
```

Then configure Pages to deploy from `gh-pages` branch.