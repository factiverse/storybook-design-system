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
      main: '#ffffff',
    },
    secondary: {
      main: '#f8c608',
    },
    error: {
      main: '#f72525',
    },
    warning: {
      main: '#fecd0c',
    },
    success: {
      main: '#0ccb58',
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

  overrides: {
    MuiButton: {
      contained: {
        color: '#f8c608',
        backgroundColor: '#f8c608',
        '&:hover': {
          backgroundColor: '#f8c608',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: '#f8c608',
          },
        },
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
