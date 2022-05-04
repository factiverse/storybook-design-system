import React from 'react';
import { TextField as TextFieldMUI, TextFieldProps } from '@mui/material';
import PropTypes from 'prop-types';

export const TextField = ({ sx, placeholder, id, label, variant, disabled, color, ...props}: TextFieldProps) => {
    return <TextFieldMUI sx={sx} label={label} variant={variant} id={id} disabled={disabled} color={color}  {...props} />
};

TextField.propTypes = {
    variant: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    helperText: PropTypes.string,
    sx: PropTypes.object
};

TextField.defaultProps = {
    variant: "outlined",
    id: "outlined-basic",
    label: "Headline",
    disabled: false,
    color: "primary",
    sx:{width: "45%"}
}
export default TextField;