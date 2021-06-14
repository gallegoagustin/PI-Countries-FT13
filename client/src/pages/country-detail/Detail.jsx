import React from 'react';
import { connect } from 'react-redux';
import DetailCard from '../../components/detail-card/DetailCard';
import styles from './Detail.module.css';

function Detail(props) {

    return (
        <div className={styles.detailContainer}>
            <div className={styles.pageHeader}>
                <h1>Detailed information for {props.detail.name}</h1>
                <hr className={styles.separator}/>    
            </div>
            <DetailCard />
            <div className={styles.activitiesColumn}>
                <p className={styles.activitiesTitle}><strong>Touristic activities</strong></p>
                <div className={styles.activitiesContainer}>
                    {
                        !props.detail.activities?.length ? <span className={styles.emptyList}>There are no activities yet</span> :
                        props.detail.activities?.map((a) => 
                            <div className={styles.activityBox}>
                                <strong>Name:</strong> {a.name}<br></br>
                                <strong>Level:</strong> {a.level}/5<br></br>
                                <strong>Length:</strong> {a.length} hour(s)<br></br>
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