import React, { useMemo, useState } from 'react';
import Cards from '../Cards/Cards';
import { Pagination } from 'antd';
import styles from './BlogPostGrid.module.scss'
import DropDown from '../DropDown/DropDown';

const someArray = [<Cards />, <Cards />, <Cards />, <Cards />, <Cards />]
const BlogPostGrid: React.FC = () => {
    const [pageSize, setPageSize] = useState(6);
    const [current, setCurrent] = useState(1);
    const [posts] = useState([])
    // const [filteredPosts, setFilteredPosts] = useState("")
    const paginatedPosts = useMemo(() => {
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return someArray.slice(firstIndex, lastIndex)
    }, [current, pageSize])

    const titleArray = [
        { name: "All Categories", classed: "regular" },
        { name: "Happening Now", classed: "happening-now" },
        { name: "Financial Literacy", classed: "financial-literacy" },
        { name: "Black Female Excellence", classed: "black-female-excellence" },
        { name: "Education", classed: "education" },
        { name: "Prosparity", classed: "prosparity" },
    ]

    const sortByArray = [
        { name: "Recent", classed: "regular" },
        { name: "Trending", classed: "regular" }
    ]

    return (

        <div className={styles.BlogPostGrid}>
            <div className={styles.BlogPostGrid_container}>
                <div className={styles.BlogPostGrid_container__title_container}>
                    <h1 className={styles.BlogPostGrid_container__title_container__title}>All Posts</h1>

                    <div className={styles.BlogPostGrid_container__title_container__dropdown}>Filtered by: <DropDown objArray={titleArray} title="All Categories" addedClass="blog-dropdown filtered" /></div>
                    <div className={styles.BlogPostGrid_container__title_container__dropdown}>Sort By: <DropDown objArray={sortByArray} title="Recent" addedClass="blog-dropdown sorted" /></div>
                </div>
                <div className={styles.BlogPostGrid_container__grid}>
                    {someArray.map((_, index) => (<Cards key={index} />))}
                </div>
                <Pagination
                    simple
                    showSizeChanger
                    onShowSizeChange={setPageSize}
                    pageSize={pageSize}
                    total={posts.length}
                    defaultCurrent={current}
                    onChange={setCurrent} />
            </div>

        </div>
    )
}

export default BlogPostGrid