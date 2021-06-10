import React from 'react';
import { connect } from 'react-redux';
import Card from '../countries-card/Card.jsx';
import styles from './Row.module.css';

function Row(props) {
    console.log(props.countries)

    return (
        <div className={styles.rowContainer}>
           {
               props.countries.map((country) => 
                <Card key={country.id} flag={country.flag} name={country.name} continent={country.continent}/>
               )
           } 
        </div>
    )
}

function mapStateToProps(state) {
    return {
      countries: state.initialCountries
    }; 
}

export default connect(mapStateToProps, null)(Row);