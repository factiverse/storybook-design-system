import React from 'react';
import PropTypes from 'prop-types';
import { Typography as TypographyMUI, TypographyProps } from '@mui/material';
import '../../config/fonts/styles.css';
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from '@mui/material/styles';

export const Typography = (props: TypographyProps) => {
  const {
    children,
    variant,
    align,
    gutterBottom,
    noWrap,
    paragraph,
    fontFamily,
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
        sx={{ fontFamily: fontFamily }}
      >
        {children}
      </TypographyMUI>
    </ThemeProvider>
  );
};

Typography.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'inherit',
  ]),
  fontFamily: PropTypes.oneOf(['DM Mono', 'Arizona Serif', 'default']),
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
};

Typography.defaultProps = {
  children: 'Hello World',
  variant: 'body1',
  align: 'left',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  fontFamily: 'default',
};

export default Typography;
