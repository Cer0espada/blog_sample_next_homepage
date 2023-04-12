import React from 'react';
import balcony from '../../../img/balcony.jpg';
import author from '../../../img/author.jpg';

import styles from './Cards.module.scss'

interface Props {
    long?: string
}

const Cards: React.FC<Props> = ({ long }) => {
    return (
        <div className={long ? styles.blogCardsLong : styles.blogCards}>
            <div className={long ? styles.blogCardsLong_container : styles.blogCards_container}>
                <figure className={long ? styles.blogCardsLong_image_container : styles.blogCards_image_container}>
                    <img src={balcony.src} alt="" className={styles.blogCards_image_container__image} />
                </figure>

                <div className={long ? styles.blogCardsLong_text_container : styles.blogCards_text_container}>
                    <h2 className={`${styles.blogCards_text_container__category} `} > category</h2>
                    <h1 className={styles.blogCards_text_container__title}>title</h1>
                    <p className={long ? styles.blogCardsLong_text_container__body : styles.blogCards_text_container__body}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur possimus blanditiis expedita recusandae vel amet! Accusamus nesciunt explicabo illum veritatis nostrum quaerat, porro, asperiores exercitationem incidunt amet rem quis.</p>

                    <div className={styles.blogCards_text_container__author_container}>
                        <figure className={styles.blogCardsLong_text_container__author_container__img_container}>
                            <img src={author.src} alt="" />
                        </figure>
                        <div className={styles.blogCards_text_container__author_container__text_container}>
                            <p className={styles.blogCards_text_container__author_container__text_container__text}>Maya Lombardi</p>
                            <p className={styles.blogCards_text_container__author_container__text_container__date}>{`Nov 2, 2020`}</p>
                        </div>

                    </div>
                </div >
            </div >
        </div >
    )

}

export default Cards