import React from 'react';
import { createTheme } from '@mui/material';
import { muiTheme } from 'storybook-addon-material-ui5';
/**
 * Display test results within Storybook
 * run `npm run test:watch` to keep the test output file up to date
 */
import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../testOutput.json';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E8EBEC',
    },
    secondary: {
      main: 'rgba(0,0,0,0.7)',
    },
    tertiary: {
      light: '#FFE275',
      main: '#f8c608',
      dark: '#C7A008',
      contrastText: '#000',
    },
  },
  typography: {
    button: {
      fontFamily: 'DM Mono',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'secondary' && {
              boxShadow: '0px 0px 10px #f8c608',
            }),
        }),
      },
    },
  },
});

addDecorator(
  withTests({
    results,
  })
);

export const decorators = [muiTheme(theme)];

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
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#E8EBEC',
      },
      {
        name: 'dark',
        value: '#333333',
      },
    ],
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
};
