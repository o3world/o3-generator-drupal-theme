module.exports = {
  stories: [
    "../documentation/intro.stories.mdx", //default story when project loads
    "../documentation/*.stories.mdx",
    "../templates/components/**/stories/*.stories.js",
    "../templates/components/**/**/stories/*.stories.js",
  ],
  addons: [
    "@storybook/addon-links",
    '@storybook/addon-a11y',
    "@storybook/addon-essentials",
  ],
  staticDirs: ['../dist'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: "twigjs-loader",
    });

    return config;
  }
}
