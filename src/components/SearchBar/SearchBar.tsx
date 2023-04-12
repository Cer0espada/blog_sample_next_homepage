import React, { createRef } from 'react';
import HR from '../HR/hr'
import styles from './SearchBar.module.scss'
const SearchBar: React.FC = () => {
    const inputRef = createRef<HTMLInputElement>();

    const handleButtonClick = (): void => {
        if (inputRef) {
            inputRef!.current!.focus()
        }
    }

    return (
        <>
            <div className={styles.searchBar}>
                <div className={styles.searchBar_container}>

                    <div className={styles.searchBar_container_contentContainer}>
                        <i className={`fas fa-search ${styles.searchBar_containerContainer__icon}`}></i>
                        <input ref={inputRef} className={styles.searchBar_containerContainer__input} type="text" placeholder={'Try "passive income"'} />
                    </div>
                    <HR />
                </div>
            </div>

        </>
    )
}

export default SearchBar