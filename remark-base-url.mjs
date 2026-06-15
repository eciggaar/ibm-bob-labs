import { visit } from 'unist-util-visit';

export function remarkBaseUrl(baseUrl) {
  return (tree) => {
    visit(tree, 'link', (node) => {
      // Only process links that start with /labs/
      if (node.url && node.url.startsWith('/labs/')) {
        node.url = baseUrl + node.url;
      }
    });
  };
}

// Made with Bob
