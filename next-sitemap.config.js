/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ivancom.eu", // <- твій домен
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  trailingSlash: false,
  alternateRefs: [
    {
      href: "https://ivancom.eu/uk",
      hreflang: "uk",
    },
    {
      href: "https://ivancom.eu/pl",
      hreflang: "pl",
    },
    {
      href: "https://ivancom.eu/en",
      hreflang: "en",
    },
  ],
};
