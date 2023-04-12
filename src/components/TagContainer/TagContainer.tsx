import React, { useState, useContext } from 'react';
import TitleContainer from '../TitleContainer/TitleContainer';
// import TagContainerContextProvider, { TagContainerContext } from './context/TagContainerContext';
import Cards from '../Cards/Cards';
import styles from './TagContainer.module.scss'
import HR from '../HR/hr';
const TagContainer = () => {

    const [x, setX] = useState(0);
    // const { clicked, setClicked } = useContext(TagContainerContext)

    const someArray = [<Cards />,
    <Cards />,
    <Cards />,
    <Cards />,
    <Cards />]
    // subtracting from the length to determine how many blogMod widths to move , and how many we want to display at a time
    const goLeft = () => (x === 0 ? setX(-275 * (someArray.length - 2)) : setX(x + 275));

    //someArray.length was used so the input can be dynamic
    const goRight = () => (x === -275 * (someArray.length - 3)) ? setX(0) : setX(x - 275);


    return (
        // < TagContainerContextProvider>
        <div className={styles.blogTagContainer}>
            <TitleContainer title="Blog Container" heading="h6" addedClass={styles.blogTagContainer__heading} />
            <div className={styles.blogTagContainer__wrapper}>
                <i className={`${styles.blogTagContainer__leftChevron} fas fa-chevron-left`}
                    onClick={goLeft}></i>
                <div className={styles.blogTagContainer__cardCarousel}
                    style={{ transform: `translateX(${x}px)` }}>
                    {someArray.map((_, index) => (<Cards key={index} />))}
                </div>
                <i className={`${styles.blogTagContainer__rightChevron} fas fa-chevron-right`}
                    onClick={goRight}></i>
            </div>
            <HR />
        </div >
        // </TagContainerContextProvider>
    )
}

export default TagContainer;
