import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Stations Docs',
  tagline: 'Documentação clientes e parceiros Stations',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://stations-cloud.github.io',
  baseUrl: '/stations-docs/',

  organizationName: 'Stations-Cloud',
  projectName: 'stations-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Atualizações e novidades do Super App Stations',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          postsPerPage: 10,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Stations Docs',
      logo: {
        alt: 'Stations Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'modulosSidebar',
          position: 'left',
          label: 'App',
        },
        {to: '/blog', label: 'Novidades', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {label: 'Módulos', to: '/docs/modulos'},
            {label: 'Changelog', to: '/docs/changelog'},
          ],
        },
        {
          title: 'Mais',
          items: [
            {label: 'Novidades', to: '/blog'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Stations Cloud. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
