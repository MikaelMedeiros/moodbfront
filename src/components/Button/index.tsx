// @flow 
import * as React from 'react';
import styles from "././Button.module.css";

import Link from 'next/link';

type variantas = "primary" | "secondary" | "black" | "white";
type ButtonProps = {variant?: variantas} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const VariantMap = {
    primary: styles.primary,
    secondary: styles.secondary,
    black: styles.black,
    white: styles.white
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