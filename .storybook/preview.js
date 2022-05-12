import React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material';
import { muiTheme } from 'storybook-addon-material-ui5';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import { GlobalStyles } from '../src/config/global.styles';
/*
 * Global decorator to apply the styles to all stories
 * Read more about them at:
 * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */

// Create your own theme like this.
// Note: you can specify theme name in `themeName` field. Otherwise it will be displayed by the number.
// you can specify only required fields overriding the `Light Base Theme`
const newTheme = {
  themeName: 'Grey Theme',
  palette: {
    primaryColor: '#00bcd4',
    alternateTextColor: '#4a4a4a',
    canvasColor: '#616161',
    textColor: '#bdbdbd',
    secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
    disabledColor: '#757575',
    accent1Color: '#607d8b',
  },
};

export const decorators = [
  muiTheme([newTheme]),
  (Story) => (
    <>
      <ThemeProvider theme={newTheme}>
        {/* <GlobalStyles /> */}
        <Story />
      </ThemeProvider>
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
  features: { emotionAlias: false },
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
