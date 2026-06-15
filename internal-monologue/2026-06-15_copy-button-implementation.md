# Code Block Copy Button Implementation

## Overview

This implementation adds Flowbite-style copy buttons with icon transitions to all code blocks in the lab pages. The buttons use SVG icons that transition from a clipboard icon to a checkmark when code is successfully copied.

## Implementation Details

### 1. CSS Styling (`src/styles/code-blocks.css`)

The CSS has been updated to:
- Add padding-right to code blocks to make space for the button
- Style the `.copy-code-button` class with proper positioning and hover states
- Handle icon visibility with `.copy-icon` and `.success-icon` classes
- Support the `.copied` state that shows the checkmark

### 2. JavaScript Enhancement (`src/layouts/LabLayout.astro`)

The `setupCopyButtons()` function:
- Automatically finds all `<pre>` elements in `.prose` content
- Creates a button element with Flowbite SVG icons
- Adds click handlers that:
  - Copy code to clipboard using the Clipboard API
  - Toggle between clipboard and checkmark icons
  - Reset to clipboard icon after 2 seconds
- Runs on page load with proper DOM ready detection

### 3. Flowbite Icons Used

**Clipboard Icon (default state):**
```svg
<svg viewBox="0 0 18 20">
  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
</svg>
```

**Checkmark Icon (success state):**
```svg
<svg viewBox="0 0 16 12">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
</svg>
```

## Features

✅ **Automatic Enhancement**: All markdown code blocks automatically get copy buttons
✅ **Icon Transitions**: Smooth transition from clipboard to checkmark icon
✅ **Accessibility**: Proper ARIA labels and keyboard focus support
✅ **Dark Mode Ready**: Styles support dark mode (when implemented)
✅ **No Dependencies**: Pure JavaScript, no external libraries required
✅ **Flowbite Design**: Uses official Flowbite clipboard component icons

## Browser Compatibility

- Modern browsers with Clipboard API support
- Graceful degradation for older browsers (button won't appear if clipboard API unavailable)

## Testing

A test file (`test-copy-button.html`) is included to verify the implementation works correctly outside of the Astro build system.

## Usage

The implementation is automatic. Any code block in markdown content will automatically receive a copy button:

\`\`\`bash
git clone https://github.com/example/repo
\`\`\`

## Customization

To customize the button appearance, modify the CSS in `src/styles/code-blocks.css`:

- `.copy-code-button`: Main button styles
- `.copy-code-button:hover`: Hover state
- `.copy-code-button:focus`: Focus state for accessibility
- `.copy-code-button.copied`: Success state styles

## References

- [Flowbite Clipboard Component](https://flowbite.com/docs/components/clipboard/)
- [MDN Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)