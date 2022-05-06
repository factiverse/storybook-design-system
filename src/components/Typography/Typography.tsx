import React from 'react';
import './Button.scss';
// import PropTypes from 'prop-types';
// import { Typography as TypographyMUI, TypographyProps } from '@mui/material';

interface TextProps {
  text: string;
}

export const Text = ({ text }: TextProps) => {
  return <p>{text}</p>;
};

/* Text.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.element,
};

Text.defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'primary',
  disabled: false,
  children: 'Testing text',
}; */

export default Text;
