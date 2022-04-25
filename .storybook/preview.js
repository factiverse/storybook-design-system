import React from 'react';

// import { muiTheme } from 'storybook-addon-material-ui'

// const newTheme = { themeName: 'Grey Theme', palette: { primary: '#00bcd4', alternateTextColor: '#4a4a4a', canvasColor: '#616161', textColor: '#bdbdbd', secondaryTextColor: 'rgba(255, 255, 255, 0.54)', disabledColor: '#757575', accent1Color: '#607d8b', }, };

// export const decorators = [muiTheme([newTheme])];

import { GlobalStyles } from '../src/config/global.styles';

/*
 * Global decorator to apply the styles to all stories
 * Read more about them at:
 * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
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
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
};
