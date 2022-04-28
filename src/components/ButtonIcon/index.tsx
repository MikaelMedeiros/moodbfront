// @flow 
import * as React from 'react';
import styles from "././ButtonIcon.module.css";


type variantas = "primary" | "secondary" 
type ButtonIconProps = {variant?: variantas} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const VariantMap = {
    primary: styles.primary,
    secondary: styles.secondary,
}

export const ButtonIcon: React.FunctionComponent<ButtonIconProps>  = (props) => {

    const {variant = "primary", ...otherProperts} = props;
    const className = [styles.root, VariantMap[variant]];

    return (
        <button {...otherProperts} className={className.join(" ")}>
            {props.children}
        </button>
    );
};