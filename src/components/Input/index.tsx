import * as React from 'react';
import styles from '././Input.module.css';

type InputProps = {
    placeholder: string,
    type: string
};
export const Input: React.FunctionComponent<InputProps> = (props) => {
    return (
        <input type={props.type} className={styles.root} placeholder={props.placeholder}></input>
    );
};