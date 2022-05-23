import React from 'react';

import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import theme from '../src/theme';

const providerFn = ({ theme, children }) => {
  const muTheme = createTheme(theme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(null, [theme], { providerFn }));

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
