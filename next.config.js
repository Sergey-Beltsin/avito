const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  swcMinify: true,
});

module.exports = nextConfig;
