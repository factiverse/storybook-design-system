import React from "react";
import "./Button.scss";
import { Button as ButtonMUI, ButtonProps } from "@mui/material";

const Button = (props: ButtonProps) => {

    const { color, value, disabled } = props

    return (
    <ButtonMUI
        style={{background: color}}
        aria-label={'Check claim'}
        disabled={disabled}
        >{value}
    </ButtonMUI>)
};


// export default React.forwardRef<HTMLAnchorElement, ButtonBaseProps>(Button);
export default Button;
