import * as React from 'react';
import styles from '././Toast.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faCircleInfo, faCircleCheck, faCircleExclamation, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { createRoot, Root } from 'react-dom/client';

type variants = "success" | "warn" | "error" | "info";
type durations = number &   (1000 | 2000 | 3000 | 4000 | 5000); 
type ToastProps = {
    variant?: variants,
    message: string,
    duration: durations
};

const VariantMap = {
    success: styles.success,
    warn: styles.warn,
    error: styles.error,
    info: styles.info,
}

let root: Root;

const Toast: React.FunctionComponent<ToastProps> = (props) => {
    const {variant = "success", ...otherProperts} = props;
    const classNameCard = styles.card;
    const classNameClose = styles.closeButton;
    const classNameMessage = [styles.message, VariantMap[variant]];

    const [opacity, setOpacity] = useState('opacity-100');

    useEffect(() => {
      const timer = setTimeout(() => {
        return setOpacity('opacity-0');
      }, props.duration);
  
      return () => clearInterval(timer);
    }, [props.duration]);
    return (
        <div id="toast-id" className={opacity}>
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

export const ToastContainer = () => {
    return (
        <div id="toast-container" className={styles.toastContainer}>
        </div>
    )
}

export const toast = {
    remove: () => {
        root.unmount();
        toast.currentToast = false
    },
    currentToast: false,
    /**
    * This is the notify message function
    * @param message The message to be displayed
    * @param variant The variant of the message
    * @param duration The duration of the message in miliseconds
    * @returns returns a toast component
    */
    notify: ( message: string , variant: variants, duration: durations) =>{
        if(toast.currentToast) { 
            toast.remove()
        }

        root = createRoot((document.getElementById('toast-container') as HTMLElement))
        root.render(<Toast 
            variant={variant}
            message={message} 
            duration={duration} />);
        toast.currentToast = true
    }
}