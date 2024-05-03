// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '岚·域官网',
  tagline: '岚·域文档',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mistmc.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],


  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
      
      navbar: {
        title: '岚·域官网',
        logo: {
          alt: 'Mist',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '公告', position: 'left'},
          {to: '/history', label: '历史', position: 'left'},
          // {to: '/ipnew', label: '地址发布页', position: 'left'},
          {
            href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=T6yM-D3bmhVyfNCPUYXJVHvsR-lnBS5L&authKey=RHNudvIQ0B747p581y93kX6Cb%2FW88%2FQ%2FFQtnpTb7xciDcaQH3hBuVTe6pKMAA7Jj&noverify=0&group_code=807505406',
            label: 'QQ群',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '宣传',
            items: [
              {
                label: '宣传视频',
                href: 'https://www.bilibili.com/video/BV1eJ4m1j7Ha',
              },
            ],
          },
          {
            title: '岚域相关',
            items: [
              {
                label: 'QQ群[⭐]',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=T6yM-D3bmhVyfNCPUYXJVHvsR-lnBS5L&authKey=RHNudvIQ0B747p581y93kX6Cb%2FW88%2FQ%2FFQtnpTb7xciDcaQH3hBuVTe6pKMAA7Jj&noverify=0&group_code=807505406',
              },
              {
                label: 'Mist皮肤站',
                href: 'https://skin.mistmc.top/',
              },
              {
                label: '岚域的爱发电',
                href: 'https://afdian.net/a/mistmc',
              },
            ],
          },
          {
            title: '友链',
            items: [
              {
                label: '老万的Bilibili',
                href: 'https://space.bilibili.com/696652305',
              },
              {
                label: 'MC506工作室官网[旧]',
                href: 'https://mc506lw.github.io/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mistmc, MC506lw.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
