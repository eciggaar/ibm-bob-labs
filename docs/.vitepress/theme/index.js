import './custom.css'
import { h, nextTick, watch } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { createMermaidRenderer } from 'vitepress-mermaid-renderer'
import 'vitepress-mermaid-renderer/css'
import Card from './components/Card.vue'
import CardGrid from './components/CardGrid.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { isDark } = useData()

    const initMermaid = () => {
      createMermaidRenderer({
        theme: isDark.value ? 'dark' : 'forest'
      })
    }

    nextTick(() => initMermaid())

    watch(
      () => isDark.value,
      () => initMermaid()
    )

    return h(DefaultTheme.Layout)
  },
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
    app.component('Card', Card)
    app.component('CardGrid', CardGrid)
  }
}
