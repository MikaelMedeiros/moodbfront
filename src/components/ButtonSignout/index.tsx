// @flow 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import styles from '././ButtonSignOut.module.css';



export const ButtonSignOut: React.FunctionComponent = () => {

    return (
        <button className={styles.root}>
            <FontAwesomeIcon icon={faSignOut} />
        </button>
    );
};