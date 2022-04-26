// @flow 
import * as React from 'react';
type InputProps = {
    placeholder: string,
};
export const Input: React.FunctionComponent<InputProps> = (props) => {
    return (
        <input className='border-b-2 w-full' placeholder={props.placeholder}></input>
    );
};