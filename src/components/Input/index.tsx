import * as React from 'react';
import styles from '././Input.module.css';

type InputProps = {
    placeholder: string,
    type?: string,
    id?: string,
    name?: string,
    value?: string | "",
    error?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
};
export const Input: React.FunctionComponent<InputProps> = (props) => {
    
    return (
        <input 
            value={props.value} 
            type={props.type} 
            id={props.id} 
            name={props.name} 
            className={styles.root} 
            placeholder={props.placeholder}
        ></input>
    );
};