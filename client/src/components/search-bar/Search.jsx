import React from 'react';
import styles from './Search.module.css';

export default function Search() {
    return (
        <div className={styles.boxContainer}>
            <form className={styles.searchForm}>
                <input className={styles.searchBox} type="text" placeholder="Example: Belgium"/>
                <button className={styles.searchButton} type="submit">Search</button>
            </form>
        </div>
    )
}
