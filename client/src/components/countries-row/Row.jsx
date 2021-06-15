import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '../countries-card/Card.jsx';
import Loading from '../loading/Loading.jsx';
import Pagination from '../pagination/Pagination.jsx';
import styles from './Row.module.css';

function Row(props) {

    const [state, setState] = useState({
        countries: [],
        currentPage: 1,
        countriesPerPage: 10
    });

    const lastCountry =  state.currentPage * state.countriesPerPage;
    const firstCountry = lastCountry - state.countriesPerPage;
    const currentCountries = props.countries?.slice(firstCountry, lastCountry);

    function changePage(number) {
        setState({
            ...state,
            currentPage: number
        })
    }

    return (
        <div>
            <div className={styles.rowContainer}>
                {
                    props.loading === true ? <Loading/> :
                    currentCountries.map((country) => 
                        <Card key={country.id} flag={country.flag} name={country.name} continent={country.continent} id={country.id}/>
                    )
                }
            </div>
            <Pagination countriesPerPage={state.countriesPerPage} totalCountries={props.countries.length} currentPage={state.currentPage} changePage={changePage}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      countries: state.initialCountries,
      loading: state.loading
    }; 
}

export default connect(mapStateToProps, null)(Row);