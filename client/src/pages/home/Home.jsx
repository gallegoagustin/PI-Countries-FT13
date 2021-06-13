import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCountries, getCountries } from '../../actions/index.js';
import Search from '../../components/search-bar/Search.jsx';
import Row from '../../components/countries-row/Row.jsx';
import styles from './Home.module.css';

export default function Home(props) {

    /* useEffect(() => {
        if(!props.countries.length) {
            props.getCountries();
        }
        if(!props.allCountries.length) {
            props.getAllCountries();
        }
    }, []) */

    return (
        <div className={styles.homeContainer}>
            <Search/>
            <Row/>
        </div>
    )
}

/* function mapStateToProps(state) {
    return {
      countries: state.initialCountries,
      allCountries: state.allCountries
    };
}

function mapDispatchToProps(dispatch) {
    return {
      getCountries: () => dispatch(getCountries()),
      getAllCountries: () => dispatch(getAllCountries())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); */