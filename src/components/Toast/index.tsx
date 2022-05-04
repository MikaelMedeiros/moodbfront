import * as React from 'react';
import styles from '././Toast.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faCircleInfo, faCircleCheck, faCircleExclamation, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

type variants = "success" | "warn" | "error" | "info"; 
type ToastProps = {
    variant?: variants,
    message: string
};

const VariantMap = {
    success: styles.success,
    warn: styles.warn,
    error: styles.error,
    info: styles.info,
}

export const Toast: React.FunctionComponent<ToastProps> = (props) => {

    const {variant = "success", ...otherProperts} = props;
    const classNameCard = styles.card;
    const classNameClose = styles.closeButton;
    const classNameMessage = [styles.message, VariantMap[variant]];

    const [opacity, setOpacity] = useState('opacity-100');

    useEffect(() => {
      const timer = setTimeout(() => {
        return setOpacity('opacity-0');
      }, 4000);
  
      return () => clearInterval(timer);
    }, []);
    return (
        <div className={opacity}>
            <div className={classNameCard}>
                <div className="flex items-center">
                    {getIcon(variant)}
                    <p className={classNameMessage.join(" ")}>{props.message}</p>
                </div>
                <span className={classNameClose}>
                    <FontAwesomeIcon icon={faWindowClose}/>            
                </span>
            </div>
        </div>
    );
};

function getIcon(typeToast: string) {
     return {
         'success': <FontAwesomeIcon icon={faCircleCheck}/>,
         'warn': <FontAwesomeIcon icon={faTriangleExclamation}/>,
         'error': <FontAwesomeIcon icon={faCircleExclamation}/>,
         'info': <FontAwesomeIcon icon={faCircleInfo}/>,
     }[typeToast];
}