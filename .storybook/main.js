const custom = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  plugins: ["@emotion"],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: { ...config.resolve, alias: custom.resolve.alias },
    };
  },
};
