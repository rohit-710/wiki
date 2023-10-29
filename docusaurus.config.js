const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "Polygon Wiki",
  tagline: "The official documentation for 0xPolygon.",
  url: "https://wiki.polygon.technology",
  baseUrl: "/",
  favicon: "img/logo-round-purple.png",
  organizationName: "Polygon Labs",
  projectName: "wiki",
  trailingSlash: true,
  customFields: {
    description: "Build your next application on Polygon.",
  },
  onBrokenLinks: 'log',
  themeConfig: {
    metadata: [{ name: 'description', content: 'Welcome to Polygon Wiki, the official documentation for Polygon. Learn about Polygon and its suite of Ethereum-scaling solutions.' }],
    /*
    announcementBar: {
      id: 'banner',
      content: `
        <div class="announcement-bar">
            Discover the Next Evolution with Polygon CDK. Learn more
            <a href="https://wiki.polygon.technology/cdk" target="_self" class="announcement-link" style="color: #ffffff;">here</a>
        </div>
      `,
      textColor: '#ffffff',
      isCloseable: true,
    },
    */
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    category: {
      emoji: ''
    },
    footer: {
      style: 'light',
      links: [
        {
          title: "Resources",
          items: [
            {
              href: 'https://support.polygon.technology/support/home',
              label: 'Polygon Support',
            },
            {
              label: "Advocate Program",
              href: "https://polygon.technology/advocate-program/"
            },
            {
              label: "Polygon Funds",
              href: "https://polygon.technology/funds/"
            },
            {
              label: "Bug Bounty",
              href: "https://immunefi.com/bounty/polygon/"
            },
            {
              href: 'https://www.dappstorekit.io/',
              label: 'Build your own dApp',
              target: '_blank',
              rel: null,
              position: 'right',
            },
          ]
        },
        {
          title: "Reference",
          items: [
            {
              label: "Original Whitepaper",
              href: "https://github.com/maticnetwork/whitepaper/"
            },
            {
              label: "POL Whitepaper",
              href: "https://polygon.technology/papers/pol-whitepaper"
            },
          ]
        },
        {
          title: "Native dApps",
          items: [
            {
              href: 'https://wallet.polygon.technology',
              label: 'PoS Wallet',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://staking.polygon.technology/',
              label: 'PoS Staking',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://polygonscan.com/',
              label: 'PoS Explorer',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://explorer.hermez.io/',
              label: 'Hermez',
              target: '_blank',
              rel: null,
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              href: 'https://forum.polygon.technology/',
              label: 'Forum',
            },
            {
              href: 'https://twitter.com/0xPolygon',
              label: 'Twitter',
            },
            {
              href: 'https://discord.com/invite/0xPolygon',
              label: 'Discord',
            },
            {
              href: 'https://www.reddit.com/r/0xPolygon/',
              label: 'Reddit',
            },
            {
              href: 'https://t.me/polygonofficial',
              label: 'Telegram',
            },
          ]
        },
        {
          title: "Polygon Labs",
          items: [
            {
              label: "About Us",
              href: "https://polygon.technology/about/"
            },
            {
              label: "Contact",
              href: "https://polygon.technology/contact-us/"
            },
            {
              label: "Blogs",
              href: "https://blog.polygon.technology/"
            },
            {
              label: "Brand Kit",
              href: "https://www.notion.so/polygontechnology/Brand-Resources-2cd18ae436584e98a6c5aae56db73058/"
            },
          ]
        },
        {
          title: "Legal",
          items: [
            {
              label: "Content Disclaimer",
              href: "https://github.com/0xPolygon/wiki/blob/main/CONTENT_DISCLAIMER.md"
            },
            {
              label: "Terms of Use",
              href: "https://polygon.technology/terms-of-use"
            },
            {
              label: "Privacy Policy",
              href: "https://polygon.technology/privacy-policy"
            },
          ]
        },
      ],
      logo: {
        alt: 'Polygon Logo',
        src: 'img/polygon-labs.png',
        href: 'https://polygon.technology/',
      },
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    image: 'polygon-logo.png',
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
      additionalLanguages: ['solidity']
    },
    algolia: {
      indexName: "matic_developer",
      appId: '16JCDEHCCN',
      apiKey: "d172fe1ed43468315f82bd9679515131",
      contextualSearch: true,
      algoliaOptions: {
        attributesToSnippet: ['content:20'],
      },
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Polygon logo",
        src: "/img/polygon-logo.png",
        srcDark: "/img/polygon-logo.png",
        target: "_self",
      },
      items: [
        {
          label: "CDK",
          position: "left",
          items: [
            {
              href: '/cdk/what-is-polygon-cdk/',
              label: 'What is the CDK?',
              target: '_self',
              rel: null,
            },
            {
              href: '/cdk/validium/quickstart/',
              label: 'Get Started with the CDK',
              target: '_self',
              rel: null,
            },
            {
              href: '/cdk/validium/validium-attributes/',
              label: 'Learn about the Validium',
              target: '_self',
              rel: null,
            },
            {
              href: '/cdk/validium/dac-overview/',
              label: 'Learn about Data Availability',
              target: '_self',
              rel: null,
            },
            {
              href: '/category/cdk-rollups/',
              label: 'Launch a Rollup',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "zkEVM",
          position: "left",
          items: [
            {
              to: '/category/polygon-zkevm/',
              label: 'What is zkEVM?',
              target: '_self',
              rel: null,
            },
            {
              to: '/zkevm/develop/',
              label: 'Get Started with zkEVM',
              target: '_self',
              rel: null,
            },
            {
              to: '/zkevm/introduction/',
              label: 'Learn about zkEVM',
              target: '_self',
              rel: null,
            },
            {
              to: '/category/build-a-zk-powered-dapp/',
              label: 'Build a ZK-Powered dApp',
              target: '_self',
              rel: null,
            },
            {
              href: '/category/setup-zknode/',
              label: 'Run a ZK Node',
              target: '_self',
              rel: null,
            },
            {
              to: '/category/zkevm/',
              label: 'Launch a zkEVM Rollup',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "PoS",
          position: "left",
          items: [
            {
              href: '/pos/what-is-polygon-pos/',
              label: 'What is PoS?',
              target: '_self',
              rel: null,
            },
            {
              href: '/category/polygon-pos/',
              label: 'Get Started with PoS',
              target: '_self',
              rel: null,
            },
            {
              href: '/category/polygon-pos/',
              label: 'Learn about PoS',
              target: '_self',
              rel: null,
            },
            {
              to: '/category/build-a-pos-powered-dapp/',
              label: 'Build a PoS-Powered dApp',
              target: '_self',
              rel: null,
            },
            {
              href: '/category/operate-a-node/',
              label: 'Run a PoS Node',
              target: '_self',
              rel: null,
            },
            {
              href: '/category/become-a-validator/',
              label: 'Become a PoS Validator',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "Edge",
          position: "left",
          items: [
            {
              href: '/edge/what-is-edge/',
              label: 'What is Edge?',
              target: '_self',
              rel: null,
            },
            {
              href: '/edge/operate/quickstart/',
              label: 'Get Started with Edge',
              target: '_self',
              rel: null,
            },
            {
              href: '/category/system-design/',
              label: 'Learn about Edge',
              target: '_self',
              rel: null,
            },
            {
              to: '/category/build-an-edge-powered-chain/',
              label: 'Deploy an Edge-Powered Chain',
              target: '_self',
              rel: null,
            },
          ],
        },
        {
          label: "Miden",
          position: "left",
          items: [
            {
              href: 'https://github.com/0xPolygonMiden',
              label: 'What is Miden?',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://0xpolygonmiden.github.io/examples/',
              label: 'Get Started with Miden',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://github.com/0xPolygonMiden/miden-base/tree/main/docs/src',
              label: 'Learn about the Miden Rollup',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://0xpolygonmiden.github.io/miden-vm/',
              label: 'Learn about MidenVM',
              target: '_blank',
              rel: null,
            },
          ],
        },
        {
          to: 'https://devs.polygonid.com/',
          label: 'ID',
          position: "left",
          target: '_blank',
          rel: null,
        },
        {
          label: "Support",
          position: "right",
          items: [
            {
              href: 'https://support.polygon.technology/support/solutions',
              label: 'Knowledge Base',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://support.polygon.technology/support/home',
              label: 'Raise a Ticket',
              target: '_blank',
              rel: null,
            },
          ],
        },
        {
          to: '/contribute/orientation/',
          label: 'Contribute',
          position: "right",
          target: '_self',
          rel: null,
        },
        {
          href: "https://github.com/0xPolygon",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/0xPolygon/wiki/tree/main/",
          path: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false, throwOnError: true, globalGroup: true }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-LLNECLTBDN',
          anonymizeIP: true,
        },
      },
    ],
  ],
};
