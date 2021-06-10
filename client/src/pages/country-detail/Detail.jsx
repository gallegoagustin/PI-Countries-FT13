import React from 'react';
import { connect } from 'react-redux';
import styles from './Detail.module.css';

function Detail(props) {

    console.log(props.detail.activities)

    return (
        <div className={styles.detailContainer}>
            <h1>Detailed information for {props.detail.name}</h1>
            <hr className={styles.separator} />
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
            <div className={styles.activitiesColumn}>
                <p className={styles.activitiesTitle}><strong>Touristic activities</strong></p>
                <div className={styles.activitiesContainer}>
                    {
                        !props.detail.activities?.length ? <span className={styles.emptyList}>There are no activities yet</span> :
                        props.detail.activities?.map((a) => 
                            <div className={styles.activityBox}>
                                <strong>Name:</strong> {a.name}<br></br>
                                <strong>Level:</strong> {a.level}/5<br></br>
                                <strong>Length:</strong> {a.length} hours<br></br>
                                <strong>Season:</strong> {a.season}<br></br>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      detail: state.countryDetail
    }; 
}

export default connect(mapStateToProps, null)(Detail);