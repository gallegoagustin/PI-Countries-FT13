import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getAllCountries, filterCountries, switchLoading, changePage } from '../../actions';
import styles from './Filter.module.css';

function Filter(props) {

    const [state, setState] = useState({
        order: "az",
        activity: "all-activities",
        continent: "all-continents",
    })

    function numberSortAscending(list, type) {

        list.sort((a, b) => {
            return a[type] - b[type]
        })
    }

    function numberSortDescending(list, type) {
        list.sort((a, b) => {
            return b[type] - a[type]
        })
    }

    function stringSortDescending(list) {

        list.sort((a, b) => {
            
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
        
            if (fa > fb) {
                return -1;
            }

            if (fa < fb) {
                return 1;
            }
            return 0;
        });
    }

    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {

        event.preventDefault();
        
        props.switchLoading(true);

        props.changePage(1);

        let unfilteredCountries = [...props.allCountries];

        if(state.continent !== "all-continents") {
            unfilteredCountries = unfilteredCountries.filter((country) => country.continent === state.continent);
        }

        let filteredCountries = [];

        if(state.activity !== "all-activities") {
            for(let i = 0; i < unfilteredCountries.length; i++) {
                if(unfilteredCountries[i].activities.length) {
                    for(let j = 0; j < unfilteredCountries[i].activities.length; j++) {
                        if(unfilteredCountries[i].activities[j].name === state.activity) {
                            filteredCountries.push(unfilteredCountries[i]);
                        }
                    }
                }
            }
        }

        if(state.order !== "az") {

            if(state.order === "za") {
                stringSortDescending(filteredCountries);
                stringSortDescending(unfilteredCountries);
                
            }

            if(state.order === "pdown") {
                numberSortDescending(filteredCountries, "population");
                numberSortDescending(unfilteredCountries, "population");
            }

            if(state.order === "pup") {
                numberSortAscending(filteredCountries, "population");
                numberSortAscending(unfilteredCountries, "population");
            }

            if(state.order === "adown") {
                numberSortDescending(filteredCountries, "area");
                numberSortDescending(unfilteredCountries, "area");
            }

            if(state.order === "aup") {
                numberSortAscending(filteredCountries, "area");
                numberSortAscending(unfilteredCountries, "area");
            }
        }
        
        let result = state.activity === "all-activities" ? unfilteredCountries : filteredCountries;
        
        props.filterCountries(result);

        props.switchLoading(false);
    }

    return (
        <div>
            <form 
                className={styles.formContainer}
                onSubmit={(e) => {handleSubmit(e)}}
            >
            <div className={styles.selectButtons}>
                    <select 
                        name="continent" 
                        className={styles.selectButton}
                        value={state.continent}
                        onChange={(e) => {handleChange(e)}}
                    >
                        <option defaultValue value="all-continents">All continents</option>
                        <option value = "Africa">Africa</option>
                        <option value = "Americas">Americas</option>
                        <option value = "Asia">Asia</option>
                        <option value = "Europe">Europe</option>
                        <option value = "Oceania">Oceania</option>
                        <option value = "Polar">Polar</option>
                    </select>
                    {/* {
                        state.continent !== "all-continents" ?
                        <select 
                            name="subregion" 
                            className={styles.selectButton}
                            value={state.continent}
                            onChange={(e) => {handleChange(e)}}
                        >
                            <option defaultValue value="all-continents">All regions</option>
                            <option value = "Africa">Africa</option>
                        </select> : null
                    
                    } */}
                    <select 
                        name="order" 
                        className={styles.selectButton}
                        value={state.order}
                        onChange={(e) => {handleChange(e)}}
                    >
                        <option defaultValue value = "az">Name (A - Z)</option>
                        <option value = "za">Name (Z - A)</option>
                        <option value = "pdown">Population &#9660;</option>
                        <option value = "pup">Population &#9650;</option>
                        <option value = "adown">Area &#9660;</option>
                        <option value = "aup">Area &#9650;</option>
                    </select>
                    <select 
                        name="activity" 
                        className={styles.selectButton}
                        value={state.activity}
                        onChange={(e) => {handleChange(e)}}
                    >
                        <option defaultValue value = "all-activities">All activities</option>
                        {
                           props.activities.map((activity) => <option key={activity} value={activity.name}>{activity.name}</option>) 
                        }
                    </select>
                </div>
                <button 
                    className={styles.searchButton} 
                    type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      activities: state.activities,
      allCountries: state.allCountries,
      activityCountries: state.activityCountries,
      initial: state.initialCountries
    }; 
}

function mapDispatchToProps(dispatch) {
    return {
      getAllCountries: () => dispatch(getAllCountries()),
      filterCountries: (array) => dispatch(filterCountries(array)),
      changePage: (number) => dispatch(changePage(number)),
      switchLoading: (boolean) => dispatch(switchLoading(boolean))
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
