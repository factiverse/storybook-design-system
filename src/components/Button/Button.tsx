import React from 'react';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';
import PropTypes from 'prop-types';



export const Button = ({ variant, size, color, disabled, ...props}: ButtonProps) => {
    return <ButtonMUI variant={variant} size={size} color={color} disabled={disabled} {...props} />
};

Button.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    variant: "contained",
    size: "medium",
    color: "primary",
    disabled: false
}
export default Button;