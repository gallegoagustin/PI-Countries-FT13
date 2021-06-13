import React from 'react';
import NewActivity from '../../components/new-activity/NewActivity';
import styles from './Activity.module.css';

export default function Activity() {
    return (
        <div className={styles.activityContainer}>
            <h1 className={styles.formTitle}>New activities form</h1>
            <hr className={styles.separator}></hr>
            <NewActivity/>
        </div>
    )
}
