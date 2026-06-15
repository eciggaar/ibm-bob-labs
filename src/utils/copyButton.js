/**
 * Copy Button Utility Module
 * Provides reusable copy-to-clipboard functionality for code blocks
 * with Flowbite-style icon transitions
 * 
 * @module copyButton
 * @version 1.0.0
 * @since 2026-06-11
 */

/**
 * Configuration options for copy button behavior
 * @typedef {Object} CopyButtonConfig
 * @property {string} selector - CSS selector for code block containers (default: '.prose pre')
 * @property {number} resetDelay - Time in ms before resetting icon (default: 2000)
 * @property {boolean} skipExisting - Skip blocks that already have buttons (default: true)
 * @property {Function} onCopy - Optional callback after successful copy
 */

/**
 * Creates SVG icon elements for copy button
 * @private
 * @returns {{copyIcon: SVGElement, successIcon: SVGElement}} Icon elements
 */
function createIcons() {
  // Clipboard icon (default state)
  const copyIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  copyIcon.setAttribute('class', 'copy-icon');
  copyIcon.setAttribute('aria-hidden', 'true');
  copyIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  copyIcon.setAttribute('fill', 'currentColor');
  copyIcon.setAttribute('viewBox', '0 0 18 20');
  copyIcon.innerHTML = '<path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>';
  
  // Success checkmark icon
  const successIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  successIcon.setAttribute('class', 'success-icon');
  successIcon.setAttribute('aria-hidden', 'true');
  successIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  successIcon.setAttribute('fill', 'none');
  successIcon.setAttribute('viewBox', '0 0 16 12');
  successIcon.innerHTML = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>';
  
  return { copyIcon, successIcon };
}

/**
 * Creates a copy button element with event handlers
 * @private
 * @param {HTMLElement} codeElement - The code element to copy from
 * @param {number} resetDelay - Time before resetting button state
 * @param {Function} onCopy - Optional callback after successful copy
 * @returns {HTMLButtonElement} The configured button element
 */
function createCopyButton(codeElement, resetDelay, onCopy) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-code-button';
  button.setAttribute('aria-label', 'Copy code to clipboard');
  
  const { copyIcon, successIcon } = createIcons();
  button.appendChild(copyIcon);
  button.appendChild(successIcon);
  
  button.addEventListener('click', async (e) => {
    e.stopPropagation();
    try {
      const codeText = codeElement.textContent || '';
      await navigator.clipboard.writeText(codeText);
      
      // Show success state
      button.classList.add('copied');
      button.setAttribute('aria-label', 'Code copied to clipboard');
      
      // Call optional callback
      if (onCopy && typeof onCopy === 'function') {
        onCopy(codeText);
      }
      
      // Reset after delay
      setTimeout(() => {
        button.classList.remove('copied');
        button.setAttribute('aria-label', 'Copy code to clipboard');
      }, resetDelay);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  });
  
  return button;
}

/**
 * Initializes copy buttons for all code blocks matching the selector
 * @param {CopyButtonConfig} config - Configuration options
 * @returns {number} Number of buttons added
 */
export function setupCopyButtons(config = {}) {
  const {
    selector = '.prose pre',
    resetDelay = 2000,
    skipExisting = true,
    onCopy = null
  } = config;
  
  // Check for Clipboard API support
  if (!navigator.clipboard) {
    console.warn('Clipboard API not supported in this browser');
    return 0;
  }
  
  const codeBlocks = document.querySelectorAll(selector);
  let buttonsAdded = 0;
  
  codeBlocks.forEach((pre) => {
    // Skip if button already exists
    if (skipExisting && pre.querySelector('.copy-code-button')) {
      return;
    }
    
    const code = pre.querySelector('code');
    if (!code) return;
    
    const button = createCopyButton(code, resetDelay, onCopy);
    pre.appendChild(button);
    buttonsAdded++;
  });
  
  return buttonsAdded;
}

/**
 * Initializes copy buttons with automatic DOM ready detection
 * @param {CopyButtonConfig} config - Configuration options
 */
export function initCopyButtons(config = {}) {
  function init() {
    setupCopyButtons(config);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}

/**
 * Default export for convenience
 */
export default {
  setupCopyButtons,
  initCopyButtons
};

// Made with Bob
