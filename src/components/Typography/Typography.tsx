import React from 'react';
import { Typography as TypographyMUI, TypographyProps } from '@mui/material';
import '../../config/fonts/styles.css';
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from '@mui/material/styles';

export const Typography = (props: TypographyProps) => {
  const {
    children = 'Hello World',
    variant = 'body1',
    align = 'left',
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    fontFamily = 'Arizona Serif',
    sx,
    color,
  } = props;

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <TypographyMUI
        variant={variant}
        align={align}
        gutterBottom={gutterBottom}
        noWrap={noWrap}
        paragraph={paragraph}
        color={color}
        sx={sx ?? { fontFamily: fontFamily }}
      >
        {children}
      </TypographyMUI>
    </ThemeProvider>
  );
};

export default Typography;
