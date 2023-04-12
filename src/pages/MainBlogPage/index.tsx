import React from 'react';

import logo from '../../../img/logo-1-dark.jpg';
import Cards from '@/components/Cards/Cards';
import SearchBar from '@/components/SearchBar/SearchBar';
import TitleContainer from '@/components/TitleContainer/TitleContainer';
import TagContainer from '@/components/TagContainer/TagContainer';
import BlogPostGrid from '@/components/BlogPostGrid/BlogPostGrid';
import Header from '@/components/Header/Header';
import styles from './MainBlogPage.module.scss'

import Head from 'next/head';


const MainBlogPage: React.FC = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web site created using nextjs"
                />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
                    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" crossOrigin="anonymous" />

                <script src="https://kit.fontawesome.com/29a239d63d.js" ></script>

                <title>React App</title>
            </Head >
            <Header />
            <div className={styles.mainBlogPage}>

                <div className={styles.mainBlogPage_container}>
                    <SearchBar />

                    <div className={styles.mainBlogPage_container__main_content}>
                        <div className={styles.mainBlogPage_container__trending}>
                            <TitleContainer title="Trending" heading='h2' addedClass={styles.mainBlogPage_container__trending_title} />
                            <div className={styles.mainBlogPage_container__trending__grid}>
                                <Cards long="true" />
                                <Cards />
                                <Cards />
                                <Cards />
                            </div>
                        </div>
                        <div className={styles.mainBlogPage_container__category_container}>
                            <div className={styles.mainBlogPage_container__category_container__topic_container}>
                                <TitleContainer title="Topics" heading="h4" addedClass={styles.titleContainer__topic} />
                                <i className="fas fa-globe-africa"></i>
                                <p className={styles.happeningNow}>Happening Now</p>

                                <i className="fas fa-dollar-sign"></i>
                                <p className={styles.financialLiteracy}>Financial Literacy</p>

                                <div className="fas fa-graduation-cap"></div>
                                <p className={styles.education}>Education</p>

                                <i className="fas fa-female"></i>
                                <p className={styles.blackFemaleExcellence}>Black Female Excellence</p>

                                <img src={logo.src} alt="" />
                                <p className={styles.prosparity}>Prosparity</p>
                            </div>
                            <div className={styles.mainBlogPage_container__category_container__tag_container}>
                                <TitleContainer title="Tags" heading="h4" addedClass={styles.titleContainer__topic} />
                                <p className="tags">#first tag</p>
                                <p className="tags">#second tag</p>
                                <p className="tags">#third tag</p>
                                <p className="tags">#fourth tag</p>
                                <p className="tags">#fifth tag</p>
                                <p className="tags">#sixth tag</p>
                            </div>
                        </div>
                    </div>
                    <TagContainer />
                    <BlogPostGrid />
                </div >
            </div >


        </>
    )

}

export default MainBlogPage