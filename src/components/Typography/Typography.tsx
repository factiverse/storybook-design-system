import React from 'react';
import { Typography as TypographyMUI, TypographyProps } from '@mui/material';
import '../../config/fonts/styles.css';
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from '@mui/material/styles';

/**
 * Wrapper for [Material UI Typography](https://mui.com/material-ui/react-typography/).
 *
 * @param {TypographyProps} props
 * @return {JSX.Element}
 */
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
        sx={sx}
        fontFamily={fontFamily}
        {...props}
      >
        {children}
      </TypographyMUI>
    </ThemeProvider>
  );
};

export default Typography;
