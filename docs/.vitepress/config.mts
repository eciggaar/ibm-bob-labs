import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IBM Client Engineering",
  description: "IBM Bob and IBM FileNet Content Manager",
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lab Materials', link: '/ibm-bob' }
    ],

    sidebar: [
      {
        text: 'IBM Bob',
        items: [
          { text: 'Getting Started', link: '/ibm-bob/' },
          { text: 'Installation', link: '/ibm-bob/installation' },
          { text: 'IDE Scavenger Hunt', link: '/ibm-bob/ide-scavenger-hunt' }
        ]
      },
      
      {
        text: 'Meet Bob, your AI Documentalist',
        items: [
          { text: 'Overview', link: '/documentalist-lab/bob-as-documentalist/'},
          { text: 'Bob, What Do We Have?', link: '/documentalist-lab/bob-as-documentalist/01-inventory' },
          { text: 'Bob, What Looks Wrong?', link: '/documentalist-lab/bob-as-documentalist/02-identify-issues' },
          { text: 'Bob, Show Me HRDocument in Detail', link: '/documentalist-lab/bob-as-documentalist/03-hrdocument-detail' },
          { text: 'Bob, Explain the Inheritance', link: '/documentalist-lab/bob-as-documentalist/04-inheritance' },
          { text: 'Bob, Give Me a Cleaning Roadmap', link: '/documentalist-lab/bob-as-documentalist/05-cleaning-roadmap' }
        ]
      },

      {
        text: 'Feeding Bob: Generate Sample Content',
        items: [
          { text: 'Overview', link: '/documentalist-lab/generate-sample-content/'},
          { text: 'Generate Sample Documents', link: '/documentalist-lab/generate-sample-content/01-generate-documents' },
          { text: 'Understand Document Properties', link: '/documentalist-lab/generate-sample-content/02-document-properties' },
          { text: 'Upload First Employee', link: '/documentalist-lab/generate-sample-content/03-upload-first-employee' },
          { text: 'Upload Remaining Employees', link: '/documentalist-lab/generate-sample-content/04-upload-remaining' },
          { text: 'Verify Documents', link: '/documentalist-lab/generate-sample-content/05-verify-documents' },
          { text: 'Review in Navigator', link: '/documentalist-lab/generate-sample-content/06-review-in-navigator' }
        ]
      },

      {
        text: 'Bob the Classifier: Review & Reclassify',
        items: [
          { text: 'Overview', link: '/documentalist-lab/review-and-reclassify/'},
          { text: 'Run a Classification Audit', link: '/documentalist-lab/review-and-reclassify/01-classification-audit' },
          { text: 'Check Other Classes', link: '/documentalist-lab/review-and-reclassify/02-check-other-classes' },
          { text: 'Read and Analyze Content', link: '/documentalist-lab/review-and-reclassify/03-read-and-analyze' },
          { text: 'Fix One Document', link: '/documentalist-lab/review-and-reclassify/04-fix-one-document' },
          { text: 'Fix All Documents', link: '/documentalist-lab/review-and-reclassify/05-fix-all-documents' },
          { text: 'Generate Health Report', link: '/documentalist-lab/review-and-reclassify/06-health-report' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eciggaar/ibm-bob-labs' }
    ]
  }
})
