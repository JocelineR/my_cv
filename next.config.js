/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {};

export default config;
/*
const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});

*/
