# Copy Button GitHub Pages Fix

## Issue
Copy buttons visible and working locally but missing on GitHub Pages deployment.

## Root Cause
CSS file was linked incorrectly in layout files:
```html
<link rel="stylesheet" href="/src/styles/code-blocks.css" />
```

This works in Vite dev mode (serves source files directly) but fails in production build because:
1. Source files aren't served in production - only built assets
2. Path doesn't account for base URL (`/ibm-bob-labs`)
3. CSS needs to be imported so Astro can process and bundle it

## Solution
Changed from external `<link>` tag to Astro import statement:
```typescript
import '../styles/code-blocks.css';
```

This ensures:
- CSS is processed and bundled during build
- Proper path resolution with base URL
- CSS is included in production build

## Files Modified
- `src/layouts/LabLayout.astro` - Added import, removed link tag
- `src/layouts/DocsLayout.astro` - Added import, removed link tag

## Testing
After rebuild and redeploy to GitHub Pages, copy buttons should now appear and function correctly.