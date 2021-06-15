import React from 'react';
import styles from './Pagination.module.css';

export default function Pagination(props) {

    const pages = [];

    for(let i = 1; i <= Math.ceil(props.totalCountries/props.countriesPerPage); i++) {
        pages.push(i);
    }

    return (
        <ul className={styles.pagesList}>
            {pages.map(page => 
                <li key={page} className={props.currentPage === page ? styles.currentPage : styles.pageItem}>
                    <a href="#!" onClick={() => {props.changePage(page)}}>{page}</a>
                </li>
            )}
        </ul>
    )
}
