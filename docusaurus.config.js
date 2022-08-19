// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation',
  tagline: 'We\'re here to help',
  url: 'https://support.aikomail.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Aiko Mail', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Aiko Mail Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://aikomail.com',
            label: 'Back to the main site',
            position: 'left',
          },
          {
            href: 'https://aikomail.com/download#FromDocumentation',
            label: 'Download Now',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
              {
                label: 'Savings Calculator',
                href: 'https://aikomail.com/savings',
              },
              {
                label: 'Media Kit',
                href: 'https://aikomail.com/media',
              },
              {
                label: 'Careers',
                href: 'https://angel.co/company/aiko-ai/jobs',
              },
              {
                label: 'Blog',
                href: 'https://aikomail.com/blog/',
              },
              {
                label: 'Terms',
                href: 'https://aikomail.com/terms',
              },
              {
                label: 'Privacy',
                href: 'https://aikomail.com/privacy',
              },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aiko Mail Inc. All Rights Reserved. Various trademarks held by their respective owners.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
