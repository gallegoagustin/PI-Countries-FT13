import React from 'react';
import StarterBox from '../../components/starter-box/StarterBox';
import styles from '../landing/Landing.module.css';

export default function Landing() {
    return (
        <div className={styles.landingContainer}>
            <StarterBox />
        </div>
    )
}
