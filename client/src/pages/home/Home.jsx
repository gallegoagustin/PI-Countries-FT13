import React from 'react';
import Search from '../../components/search-bar/Search.jsx';
import Row from '../../components/countries-row/Row.jsx';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Search/>
            <Row/>
        </div>
    )
}
