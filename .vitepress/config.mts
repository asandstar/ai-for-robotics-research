import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const repositoryUrl = 'https://github.com/asandstar/ai-for-robotics-research'

export default withMermaid(
  defineConfig({
    lang: 'en-US',
    title: 'AI for Robotics Research',
    titleTemplate: ':title | AI for Robotics Research',
    description:
      'A public-safe playbook for AI-assisted robotics research, from papers and hypotheses to experiments and evidence.',
    base: '/ai-for-robotics-research/',
    cleanUrls: true,
    appearance: true,
    lastUpdated: true,
    ignoreDeadLinks: false,
    srcExclude: [
      'AGENTS.md',
      'CHANGELOG.md',
      'README.md',
      'README.zh-CN.md'
    ],
    head: [
      ['meta', { name: 'theme-color', content: '#2563eb' }],
      ['meta', { name: 'color-scheme', content: 'light dark' }]
    ],
    markdown: {
      math: true
    },
    themeConfig: {
      nav: [
        { text: 'Guide', link: '/docs/01-research-workflow' },
        { text: 'Practice', link: '/docs/10-research-drills' },
        {
          text: 'Toolkit',
          items: [
            { text: 'Prompt Library', link: '/docs/03-prompt-library' },
            { text: 'Templates', link: '/docs/04-templates' },
            { text: 'Sanitized Examples', link: '/examples/sanitized-examples' }
          ]
        },
        { text: 'Safety', link: '/docs/05-sanitization' },
        {
          text: '中文概览',
          link: `${repositoryUrl}/blob/main/README.zh-CN.md`
        }
      ],
      sidebar: [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/' },
            {
              text: 'Research Workflow',
              link: '/docs/01-research-workflow'
            },
            {
              text: 'Graduate Student Playbook',
              link: '/docs/06-grad-student-playbook'
            }
          ]
        },
        {
          text: 'Research Foundations',
          items: [
            {
              text: 'Robotics Frontiers',
              link: '/docs/02-robotics-frontiers'
            },
            {
              text: 'Research Taste',
              link: '/docs/07-research-taste'
            }
          ]
        },
        {
          text: 'Practice and Workflows',
          items: [
            {
              text: 'Research Drills',
              link: '/docs/10-research-drills'
            },
            {
              text: 'AI Value Playbook',
              link: '/docs/08-ai-value-playbook'
            },
            {
              text: 'Active Workflows',
              link: '/docs/09-active-workflows'
            }
          ]
        },
        {
          text: 'Toolkit',
          items: [
            {
              text: 'Prompt Library',
              link: '/docs/03-prompt-library'
            },
            { text: 'Templates', link: '/docs/04-templates' },
            {
              text: 'Sanitized Examples',
              link: '/examples/sanitized-examples'
            }
          ]
        },
        {
          text: 'Responsible Research',
          items: [
            {
              text: 'Sanitization Guide',
              link: '/docs/05-sanitization'
            }
          ]
        }
      ],
      outline: {
        level: [2, 3],
        label: 'On this page'
      },
      search: {
        provider: 'local'
      },
      socialLinks: [{ icon: 'github', link: repositoryUrl }],
      editLink: {
        pattern: `${repositoryUrl}/edit/main/:path`,
        text: 'Edit this page on GitHub'
      },
      lastUpdated: {
        text: 'Last updated',
        formatOptions: {
          dateStyle: 'medium',
          forceLocale: true
        }
      },
      docFooter: {
        prev: 'Previous',
        next: 'Next'
      },
      externalLinkIcon: true
    }
  })
)
