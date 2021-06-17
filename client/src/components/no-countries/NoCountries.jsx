import React from 'react';
import styles from './NoCountries.module.css';

export default function NoCountries() {
    return (
        <div className={styles.boxContainer}>
            <p>We could not find any country</p>
        </div>
    )
}
