import React from 'react';
import NewActivity from '../../components/new-activity/NewActivity';
import styles from './Activity.module.css';

export default function Activity() {
    return (
        <div className={styles.activityContainer}>
            <NewActivity/>
        </div>
    )
}
