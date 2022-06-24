import * as React from 'react';
import styles from '././linkButton.module.css';
import Link from 'next/link';

type LinkProps = {
    children: React.ReactNode,
    href: string,
}


export const LinkButton: React.FunctionComponent<LinkProps> = ({
    children,
    href,
}) => {
    return (
      <Link href={href}>
        <a className={styles.root} >
          {children}
        </a>
      </Link>
    );
};