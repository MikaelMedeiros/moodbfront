// @flow 
import * as React from 'react';
import styles from "././Button.module.css";

type variantas = "primary" | "secondary" 
type ButtonProps = {variant?: variantas} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const VariantMap = {
    primary: styles.primary,
    secondary: styles.secondary,
}

export const Button: React.FunctionComponent<ButtonProps>  = (props) => {

    const {variant = "primary", ...otherProperts} = props;
    const className = [styles.root, VariantMap[variant]];

    return (
        <button {...otherProperts} className={className.join(" ")}>
            {props.children}
        </button>
    );
};