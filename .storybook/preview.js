import React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material';
import { muiTheme } from 'storybook-addon-material-ui5';

/**
 * Display test results within Storybook
 * run `npm run test:watch` to keep the test output file up to date
 */
import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

import results from '../testOutput.json';

addDecorator(
  withTests({
    results,
  })
);

// import { muiTheme } from 'storybook-addon-material-ui'

export const decorators = [
  muiTheme(),
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
