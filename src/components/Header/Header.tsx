import React from 'react';
import Link from 'next/link'
import Logo from '../Logo/Logo'
import styles from './Header.module.scss'
const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <nav className={styles.headerContainer}>
                <Logo />
                <Link className={styles.headerContainer__link} href="#">Offerings</Link>
                <Link className={styles.headerContainer__link} href="#">Offerings</Link>
                <Link className={styles.headerContainer__link} href="#">Offerings</Link>
                <Link className={styles.headerContainer__link} href="#">Offerings</Link>
                <Link className={styles.headerContainer__link__donate} href="https://theprosparityproject.org/donate">Donate</Link>
            </nav>
        </div>
    )
}

export default Header