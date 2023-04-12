import React, { useState, useContext } from 'react';
// import {TagContainerContext} from'./context/TagContainerContext';
import { Heading, Title, TitleContainer as Props } from './TitleContainer.types'
import styles from './TitleContainer.module.scss'

const TitleContainer: React.FC<Props> = ({ heading, title, addedClass, toggle }) => {

    //   const {clicked, setClicked} = useContext(TagContainerContext)

    return (

        <div className={addedClass ? `${styles.titleContainer} ${styles.titleContainer__topic}` : `${styles.titleContainer}`} >

            {(heading === Heading.h1) && <h1 className={styles.titleContainer__h1}>{title}</h1>
            }
            {(heading === "h2") && <h2 className={styles.titleContainer__h2}>{title}</h2>}
            {(heading === "h3") && <h3 className={styles.titleContainer__h3}>{title}</h3>}
            {(heading === "h4") && <h4 className={styles.titleContainer__h4}>{title}</h4>}
            {(heading === "h5") && <h5 className={styles.titleContainer__h5}>{title}</h5>}
            {(heading === "h6") && <h6 className={styles.titleContainer__h6}>{title}</h6>}

            {/* {toggle&&<p onClick={() => setClicked(prevState => !prevState)} className="title-container__toggle">Select</p>} */}
        </div >
    )
}

export default TitleContainer