// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const GITHUB_URL = "https://github.com/nguyentran-se";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Peppers",
  tagline: "A Passionate Front End Engineer",
  url: "https://nguyentran-se.github.io",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nguyentran-se", // Usually your GitHub org/user name.
  projectName: "nguyentran-se.github.io", // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "coding",
          routeBasePath: "coding",
          include: ["**/*.{md,mdx}"],
          breadcrumbs: true,
          editUrl:
            "https://github.com/nguyentran-se/nguyentran-se.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 3,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Peppers.`,
          },
          // blogSidebarTitle: '',
          editUrl:
            "https://github.com/nguyentran-se/nguyentran-se.github.io/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "vi"],
  // },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      image: "img/peppers-og.png",
      navbar: {
        title: "Peppers",
        hideOnScroll: true,
        logo: {
          alt: "Peppers Logo",
          src: "img/peppers.png",
        },
        items: [
          // {
          //   type: "search",
          //   position: "right",
          // },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // dropdownItemsAfter: [
          //   {
          //     to: "https://github.com/nguyentran-se/",
          //     label: "Help me translate",
          //   },
          // ],
          // },
          {
            position: "right",
            label: "Coding",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            type: "dropdown",
            label: "Me",
            position: "right",
            items: [
              {
                label: "Showroom",
                to: "/showroom",
              },
              {
                label: "About me",
                to: "/about-me",
              },
            ],
          },
          {
            href: GITHUB_URL,
            label: " ",
            position: "right",
            className: "navbar-icon-gh",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Featured Blog",
            items: [
              {
                label: "Intro",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              {
                label: "Twitter",
                href: "https://twitter.com/peppers_se",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/nguyentran-se/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: GITHUB_URL,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Peppers. Built with Docusaurus.`,
      },
      prism: {
        defaultLanguage: "typescript",
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "peppers",
        content:
          'Peppers - Blog Sharing Site. Contact for work <a target="_blank" rel="noopener noreferrer" href="https://github.com/nguyentran-se">here</a>!',
        backgroundColor: "var(--ifm-color-primary-dark)",
        textColor: "var(--ifm-font-color-base-inverse)",
        isCloseable: true,
      },
    }),
};

module.exports = config;
