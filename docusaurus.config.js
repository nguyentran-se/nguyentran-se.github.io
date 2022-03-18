// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const GITHUB_URL = "https://github.com/nguyentran-se";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Welcome To Peppers Blog",
  tagline: "A Passionate Front End Engineer",
  url: "https://nguyentran-se.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nguyentran-se", // Usually your GitHub org/user name.
  projectName: "nguyentran-se.github.io", // Usually your repo name.
  trailingSlash: false,
  plugins: [
    // [
    // "content-blog",
    // {
    //   path: "blog",
    //   routeBasePath: "blog",
    //   include: ["*.md", "*.mdx"],
    //   // ...
    // },
    // ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 3,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Peppers",
        logo: {
          alt: "My Site Logo",
          src: "img/peppers.png",
        },
        items: [
          {
            // type: "doc",
            // docId: "intro",
            to: "/coding",
            position: "right",
            label: "Coding",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: GITHUB_URL,
            label: "GitHub",
            position: "right",
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
