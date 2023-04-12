import React from 'react';
import logo from '../../../img/logo-1-light.jpg'

import styles from './logo.module.scss'
const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img src={logo.src} alt="Prosparity Project Logo" />
            <p>Prosp<span>(</span>A<span>)</span>rity <br />Project</p>
        </div>
    )
}

export default Logo