import React from 'react';
import styles from './StarterBox.module.css';
import { Link } from 'react-router-dom';

export default function 
() {
    return (
        <div className={styles.boxContainer}>
            <h1>Countries App</h1>
            <hr className={styles.separator}></hr>
            <p>This app was built as a learning project for <strong>Henry's bootcamp</strong>. You will be able to look for information about any country in the world and add touristic activities for them.</p>
            <p>Not only you can <strong>search for countries</strong> and <strong>add activities</strong> but also ordering or filtering them by name, continent and kind of activity if necessary.</p>
            <p>You can check the <strong>responsive design</strong> too!</p>
            <Link to='/home'><a className={styles.getStartedBox}><span>Get started</span></a></Link>
        </div>
    )
}
