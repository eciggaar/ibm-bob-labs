# Copy Button Implementation - Quick Reference

## Overview

The copy button functionality is now deployed site-wide using a centralized, reusable architecture. All code blocks automatically receive Flowbite-style copy buttons with icon transitions.

## Architecture

### Centralized Utility Module
**Location**: [`src/utils/copyButton.js`](src/utils/copyButton.js)

This module provides all copy button functionality in a single, maintainable location.

### Current Deployment
- ✅ **Lab Pages**: [`src/layouts/LabLayout.astro`](src/layouts/LabLayout.astro)
- ✅ **Docs Pages**: [`src/layouts/DocsLayout.astro`](src/layouts/DocsLayout.astro)
- ✅ **Styles**: [`src/styles/code-blocks.css`](src/styles/code-blocks.css)

## Usage

### Basic Implementation

Add to any layout file:

```astro
<head>
  <!-- Include the CSS -->
  <link rel="stylesheet" href="/src/styles/code-blocks.css" />
</head>

<body>
  <!-- Your content -->

  <script>
    import { initCopyButtons } from '../utils/copyButton.js';
    
    // Initialize copy buttons
    initCopyButtons();
  </script>
</body>
```

### Custom Configuration

```javascript
import { initCopyButtons } from '../utils/copyButton.js';

initCopyButtons({
  selector: '.custom-code-container pre',  // Custom selector
  resetDelay: 3000,                        // 3 second reset
  skipExisting: true,                      // Skip existing buttons
  onCopy: (code) => {                      // Optional callback
    console.log('Code copied:', code);
  }
});
```

### Manual Trigger

For dynamic content loaded after page load:

```javascript
import { setupCopyButtons } from '../utils/copyButton.js';

// After loading dynamic content
loadDynamicContent().then(() => {
  setupCopyButtons({ skipExisting: false });
});
```

## Features

✅ **Automatic Enhancement** - All markdown code blocks get copy buttons  
✅ **Icon Transitions** - Smooth clipboard → checkmark animation  
✅ **Accessibility** - ARIA labels and keyboard support  
✅ **Dark Mode Ready** - Styles support dark mode  
✅ **No Dependencies** - Pure JavaScript, no external libraries  
✅ **Flowbite Design** - Official Flowbite clipboard icons  
✅ **Single Source** - All logic in one maintainable module  

## Customization

### Styling

Edit [`src/styles/code-blocks.css`](src/styles/code-blocks.css):

```css
/* Button appearance */
.prose pre .copy-code-button {
  /* Customize colors, size, position */
}

/* Hover state */
.prose pre .copy-code-button:hover {
  /* Customize hover effects */
}

/* Success state */
.prose pre .copy-code-button.copied {
  /* Customize success state */
}
```

### Behavior

Edit [`src/utils/copyButton.js`](src/utils/copyButton.js):

- Change default reset delay (line 108)
- Modify icon SVGs (lines 27-42)
- Add custom callbacks (lines 73-76)
- Extend functionality as needed

## API Reference

### `initCopyButtons(config)`

Initializes copy buttons with automatic DOM ready detection.

**Parameters:**
- `config` (Object, optional)
  - `selector` (string) - CSS selector for code blocks (default: `'.prose pre'`)
  - `resetDelay` (number) - Reset time in ms (default: `2000`)
  - `skipExisting` (boolean) - Skip existing buttons (default: `true`)
  - `onCopy` (function) - Callback after copy (optional)

**Example:**
```javascript
initCopyButtons({
  selector: '.prose pre',
  resetDelay: 2000,
  skipExisting: true
});
```

### `setupCopyButtons(config)`

Manually setup copy buttons (requires DOM to be ready).

**Returns:** Number of buttons added

**Example:**
```javascript
const count = setupCopyButtons();
console.log(`Added ${count} copy buttons`);
```

## Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers
- ⚠️ Requires Clipboard API support (graceful degradation)

## Maintenance

### Making Changes

1. Edit [`src/utils/copyButton.js`](src/utils/copyButton.js)
2. Changes automatically apply to all pages
3. Test across Lab and Docs pages
4. Update version number in module comments

### Single Source of Truth

All copy button logic lives in one file. Any modifications only need to be made once.

## Troubleshooting

### Buttons Not Appearing

1. Check browser console for errors
2. Verify CSS file is loaded
3. Ensure Clipboard API is supported
4. Check selector matches your code blocks

### Icons Not Showing

1. Verify SVG paths are correct
2. Check CSS for icon visibility rules
3. Ensure no conflicting styles

### Copy Not Working

1. Requires HTTPS in production
2. Needs user gesture (click event)
3. Check browser Clipboard API support

## Future Enhancements

Potential features to add:

- Toast notifications on copy
- Copy statistics/analytics
- Language labels on hover
- Partial line selection
- Download as file option
- Enhanced dark mode support

## Related Files

- **Utility Module**: [`src/utils/copyButton.js`](src/utils/copyButton.js)
- **Styles**: [`src/styles/code-blocks.css`](src/styles/code-blocks.css)
- **Lab Layout**: [`src/layouts/LabLayout.astro`](src/layouts/LabLayout.astro)
- **Docs Layout**: [`src/layouts/DocsLayout.astro`](src/layouts/DocsLayout.astro)
- **Implementation Plan**: [`COPY_BUTTON_DEPLOYMENT_PLAN.md`](COPY_BUTTON_DEPLOYMENT_PLAN.md)
- **Original Docs**: [`COPY_BUTTON_IMPLEMENTATION.md`](COPY_BUTTON_IMPLEMENTATION.md)

## Support

For issues or questions:
1. Check the implementation plan for detailed architecture
2. Review the utility module source code
3. Test in browser developer tools
4. Verify all files are properly imported

---

**Version**: 1.0.0  
**Last Updated**: 2026-06-11  
**Status**: Production Ready ✅