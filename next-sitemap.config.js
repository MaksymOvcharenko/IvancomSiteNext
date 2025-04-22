const locales = ["uk", "pl", "en"];

const staticRoutes = [
  "/uk",
  "/pl",
  "/en",
  "/uk/about",
  "/pl/about",
  "/en/about",
  "/uk/brandua",
  "/pl/brandua",
  "/en/brandua",
  "/uk/business",
  "/pl/business",
  "/en/business",
  "/uk/calculator",
  "/pl/calculator",
  "/en/calculator",
  "/uk/contacts",
  "/pl/contacts",
  "/en/contacts",
  "/uk/courier",
  "/pl/courier",
  "/en/courier",
  "/uk/europe-to-europe",
  "/pl/europe-to-europe",
  "/en/europe-to-europe",
  "/uk/europe-to-ukraine",
  "/pl/europe-to-ukraine",
  "/en/europe-to-ukraine",
  "/uk/faq",
  "/pl/faq",
  "/en/faq",
  "/uk/promotions",
  "/pl/promotions",
  "/en/promotions",
  "/uk/self-service",
  "/pl/self-service",
  "/en/self-service",
  "/uk/services",
  "/pl/services",
  "/en/services",
  "/uk/tariffs",
  "/pl/tariffs",
  "/en/tariffs",
  "/uk/ukraine-to-europe",
  "/pl/ukraine-to-europe",
  "/en/ukraine-to-europe",
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ivancom.eu",
  generateRobotsTxt: true,
  generateSitemapTxt: false, // ❗️ОБОВ’ЯЗКОВО
  sitemapSize: 5000,

  transform: async () => null,

  additionalPaths: async (config) => {
    const entries = [];

    for (const fullPath of staticRoutes) {
      const [, currentLocale, ...rest] = fullPath.split("/");
      const rawPath = "/" + rest.join("/");

      const loc = `${config.siteUrl}${fullPath}`;
      const lastmod = new Date().toISOString();
      const changefreq = "weekly";
      const priority = rawPath === "" ? 1.0 : 0.7;

      const alternateRefs = locales.map((lng) => ({
        hreflang: lng,
        href: `${config.siteUrl}/${lng}${rawPath}`,
      }));

      entries.push({ loc, lastmod, changefreq, priority, alternateRefs });
    }

    return entries;
  },
};
