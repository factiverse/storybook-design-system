module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  staticDirs: ['../public'],
  addons: [
    // Official addons
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-addon-material-ui5',
    '@storybook/addon-jest',

    // Community addons
    'storybook-mobile',
  ],
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  typescript: {
    check: true, // type-check stories during Storybook build
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        return prop.parent
          ? /@mui/.test(prop.parent.fileName) ||
              !/node_modules/.test(prop.parent.fileName)
          : true;
      },
    },
  },
  features: {
    emotionAlias: false,
    interactionsDebugger: true,
  },
};
