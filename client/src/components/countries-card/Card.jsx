import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card(props) {
    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardFlag} src={props.flag} alt="" />
            <div className={styles.cardText}>
                Name: {props.name}
            </div>
            <div className={styles.cardText}>
                Continent: {props.continent}
            </div>
            <div>
                <Link><a className={styles.seeMore}><strong>See more</strong></a></Link>
            </div>
        </div>
    )
}
