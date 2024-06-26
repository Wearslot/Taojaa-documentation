// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TAOJAA',
  tagline: ' Seamlessy Bring your online Store live with TAOJAA',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://Tajoo.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Taojaa-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TaJaa', // Usually your GitHub org/user name.
  projectName: 'Taojaa-documentation', // Usually your repo name.
  trailingSlash:false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
      //   title: 'Storefront',
        logo: {
          alt: 'My Site Logo',
          src: 'img/nav_bar_logo.png',
        },
        items: [
        //   {to: "setup", label:"Storefront", position: "left"},


         
          {
            type: 'docSidebar',
            sidebarId: 'storefront',
            position: 'left',
            label: 'Storefront',
          },

          {
            type: 'docSidebar',
            sidebarId: 'refrences',
            position: 'left',
            label: 'References',
          },

         
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'References',
          // },

          {
            type: 'docSidebar',
            sidebarId: 'Community',
            position: 'left',
            label: 'Community',
          },

         
          
         

        

          {to: '/blog', label: 'Blog', position: 'left'},
        
          // {to: 'changelog', label:'Changelog', position: 'left'},


          // drop down menu

          // {
          //   type: 'dropdown',
          //   label: 'Refrences',
          //   position: 'left',
          //   items: [
          //     {
          //       label: 'Getting Started',
          //       to: 'docs/intro',
          //     },
          //     {
          //       label: 'Advanced Guides',
          //       to: 'docs/intro',
          //     },
          //   ],
          // },
          

          
          {
            href: 'https://github.com/Wearslot/taojaa-documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/taojaahq/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/taojaa/',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/taojaahq',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Wearslot/taojaa-documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
