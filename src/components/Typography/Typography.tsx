import React from 'react';
// import './Button.scss';
// import PropTypes from 'prop-types';
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

/* Typography.propTypes = {
  children: PropTypes.element.isRequired,
  fontFamily: PropTypes.oneOf([
    'DM Mono',
    'Arizona Serif',
    'DM Mono Light',
    'ABC Arizona Serif Light',
    'default',
  ]),
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
};

Typography.defaultProps = {
  children: 'Testing text',
  variant: 'h5',
  align: 'left',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  fontFamily: 'default',
}; */

export default Typography;
