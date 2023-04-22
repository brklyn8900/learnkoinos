import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learn Koinos",
  description: "Build on the worlds first free-to-use blockchain, Koinos.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'First Smart Contract', link: '/getting-started' },
          { text: 'Using The Faucet', link: '/using-the-faucet.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/koinos' }
    ]
  }
})
