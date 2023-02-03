/* eslint-disable import/no-dynamic-require,global-require */

module.exports = {
  locales: ["ru", "en"],
  defaultLocale: "ru",
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: (lang, ns) => require(`./src/shared/lib/locales/${lang}/${ns}`),
};
