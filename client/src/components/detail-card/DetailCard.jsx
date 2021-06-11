import React from 'react';
import { connect } from 'react-redux';
import styles from './DetailCard.module.css';

function DetailCard(props) {
    return (
        <div className={styles.detailRow}>
            <div>
                <img className={styles.detailFlag} src={props.detail.flag} alt="" />
            </div>
            <div className={styles.detailText}>
                <p><strong>Name:</strong> {props.detail.name} ({props.detail.id})</p>
                <p><strong>Continent:</strong> {props.detail.continent}</p>
                <p><strong>Capital:</strong> {props.detail.capital}</p>
                <p><strong>Subregion:</strong> {props.detail.subregion}</p>
                <p><strong>Area:</strong> {props.detail.area} km2</p>
                <p><strong>Population:</strong> {props.detail.population} citizens</p>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      detail: state.countryDetail
    }; 
}

export default connect(mapStateToProps, null)(DetailCard);