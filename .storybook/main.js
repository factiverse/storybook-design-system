module.exports = {
  "stories": [
    '../src/Introduction.stories.mdx',
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.tsx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-a11y',
    'storybook-addon-material-ui',
    '@storybook/addon-interactions'
  ],
  "framework": "@storybook/react",
  "typescript": {
    check: true, // type-check stories during Storybook build
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  }
}