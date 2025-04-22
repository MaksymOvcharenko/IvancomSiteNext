const staticRoutes = [
  "",
  "/about",
  "/brandua",
  "/business",
  "/calculator",
  "/contacts",
  "/courier",
  "/europe-to-europe",
  "/europe-to-ukraine",
  "/faq",
  "/promotions",
  "/self-service",
  "/services",
  "/tariffs",
  "/ukraine-to-europe",
];

const locales = ["uk", "pl", "en"];

module.exports = {
  siteUrl: "https://ivancom.eu",
  generateRobotsTxt: true,
  alternateRefs: locales.map((locale) => ({
    href: `https://ivancom.eu/${locale}`,
    hreflang: locale,
  })),
  transform: async (config, path) => {
    return locales.map((locale) => {
      const localizedPath = path === "" ? `/${locale}` : `/${locale}${path}`;
      return {
        loc: `${config.siteUrl}${localizedPath}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: path === "" ? 1.0 : 0.7,
        alternateRefs: locales.map((lng) => ({
          href: `${config.siteUrl}/${lng}${path}`,
          hreflang: lng,
        })),
      };
    });
  },
  additionalPaths: async () => {
    const allLocalizedRoutes = [];
    for (const path of staticRoutes) {
      for (const locale of locales) {
        allLocalizedRoutes.push({ loc: `/${locale}${path}` });
      }
    }
    return allLocalizedRoutes;
  },
};
