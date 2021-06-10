import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { getCountries } from '../../actions/index.js';
import Search from '../../components/search-bar/Search.jsx';
import Row from '../../components/countries-row/Row.jsx';
import styles from './Home.module.css';

function Home(props) {

    useEffect(() => {
        props.getCountries();
    }, [])

    return (
        <div className={styles.homeContainer}>
            <Search/>
            <Row/>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
      getCountries: () => dispatch(getCountries()),
    };
  }
  
export default connect(null, mapDispatchToProps)(Home);