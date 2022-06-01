module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // Official addons
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-jest',

    // Community addons
    'storybook-mobile',
    'storybook-addon-mdx-embed'
  ],
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: true, // type-check stories during Storybook build
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  features: {
    emotionAlias: false,
  },
};
