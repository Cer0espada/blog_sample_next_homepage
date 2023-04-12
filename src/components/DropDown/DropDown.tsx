import React, { useState } from 'react';
import styles from './DropDown.module.scss'

interface DropDownInputs {
    name: string;
    classed: string;
}

interface Props {
    title: string
    objArray: DropDownInputs[]
    addedClass: string
}

const DropDown: React.FC<Props> = ({ title, objArray }) => {
    const [clicked, setClicked] = useState(false);

    const handleDropDownClick = () => setClicked(prevState => !prevState);
    return (
        <div className={styles.dropdown}>
            <nav className={styles.dropdown_container}>
                <div className={styles.dropdown_container__heading_container}>
                    <h2 onClick={handleDropDownClick}
                        className={styles.dropdown_container__heading_container__heading}>{title}</h2>

                    <i className={clicked ?
                        `fas fa-chevron-up ${styles.dropdown_container__heading_container__icon} ${styles.down}` :
                        `fas fa-chevron-up ${styles.dropdown_container__heading_container__icon} ${styles.up}`}></i>
                </div>

                <nav className={styles.dropdownContainer__item_container}>
                    {clicked && objArray?.map((item, index) =>
                        <p key={index} className={`${styles.dropdownContainer__item_container__item} ${item.classed}`}>{item.name}</p>
                    )}
                </nav>

            </nav>
        </div >)
}

export default DropDown