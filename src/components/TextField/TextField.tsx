import React from 'react';
import { TextField as TextFieldMUI, TextFieldProps } from '@mui/material';

export const TextField = ({ sx, placeholder, id, label, variant, disabled, color, ...props}: TextFieldProps) => {
    return <TextFieldMUI fullWidth sx={sx} label={label} variant={variant} id={id} disabled={disabled} color={color}  {...props} />
};

TextField.defaultProps = {
    variant: "outlined",
    id: "outlined-basic",
    label: "Headline",
    disabled: false,
    color: "primary"
}
export default TextField;