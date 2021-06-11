import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { countryDetail } from '../../actions';
import styles from './Card.module.css';

function Card(props) {
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
                <Link to={`/detail/${props.id}`} ><a className={styles.seeMore} onClick={() => {props.countryDetail(props.id)}}><strong>See more</strong></a></Link>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
      countryDetail: (id) => dispatch(countryDetail(id)),
    };
  }
  
export default connect(null, mapDispatchToProps)(Card);