const { defineRouting } = require("next-intl/routing");

const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "ar",
  localeDetection: true
});

module.exports = { routing };
