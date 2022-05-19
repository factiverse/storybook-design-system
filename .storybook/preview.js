import React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material';
import { muiTheme } from 'storybook-addon-material-ui5';

// Create your own theme like this.
// Note: you can specify theme name in `themeName` field. Otherwise it will be displayed by the number.
// you can specify only required fields overriding the `Light Base Theme`

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];

/*
 * More on Storybook global parameters at:
 * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // Add docs for MUI v5
  docs: {
    inlineStories: false,
    iframeHeight: 'auto',
  },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
  options: {
    storySort: {
      order: ['Introduction', 'Colors', 'Typography'],
    },
  },
};
