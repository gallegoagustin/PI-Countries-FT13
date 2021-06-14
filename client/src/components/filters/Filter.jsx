import React from 'react';
import { connect } from 'react-redux';
import { getActivities, getActivityCountries, getAllCountries, filterCountries } from '../../actions';
import styles from './Filter.module.css';

function Filter(props) {

    const [continent, setContinent] = React.useState("all-continents");
    const [name, setName] = React.useState("az");
    const [activity, setActivity] = React.useState("all-activities");

    let unfilteredCountries = props.allCountries;
    let filteredCountries = [];

    function numberSortAscending(list) {

        list.sort((a, b) => {
            return a.population - b.population
        })
    }

    function numberSortDescending(list) {

        list.sort((a, b) => {
            return b.population - a.population
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

    function handleChange(event, type) {

        if(type === "continent") {
            setContinent(event.target.value);
        }

        if(type === "name") {
            setName(event.target.value);
        }

        if(type === "activity") {
            setActivity(event.target.value);
        }
    }

    async function handleSubmit(event) {
        
        event.preventDefault();

        if(continent !== "all-continents") {
            unfilteredCountries = unfilteredCountries.filter((country) => country.continent === continent);
        }

        if(activity !== "all-activities") {
            await props.getActivityCountries(activity);
            const countries = await props.activityCountries;
            for(let i = 0; i < unfilteredCountries.length; i++) {
                if(countries.indexOf(unfilteredCountries[i].name) !== -1) {
                    filteredCountries.push(unfilteredCountries[i])
                }
            }
        }

        if(name !== "az") {

            if(name === "za") {
                stringSortDescending(filteredCountries);
                stringSortDescending(unfilteredCountries);

            }

            if(name === "pdown") {
                numberSortDescending(filteredCountries);
                numberSortDescending(unfilteredCountries);
            }

            if(name === "pup") {
                numberSortAscending(filteredCountries);
                numberSortAscending(unfilteredCountries);
            }
        }

        let result = activity === "all-activities" ? unfilteredCountries : filteredCountries;

        if(!result.length) {
            alert("We could not find any country");
            return;
        }
        props.filterCountries(result);
    }

    return (
        <div>
            <form className={styles.formContainer}
            onSubmit={(e) => {handleSubmit(e)}}
            >
            <div>
                    <select 
                        name="continent" 
                        className={styles.selectButton}
                        value={continent}
                        onChange={(e) => {handleChange(e, "continent")}}
                    >
                        <option defaultValue selected value="all-continents">All continents</option>
                        <option value = "Africa">Africa</option>
                        <option value = "Americas">Americas</option>
                        <option value = "Asia">Asia</option>
                        <option value = "Europe">Europe</option>
                        <option value = "Oceania">Oceania</option>
                        <option value = "Polar">Polar</option>
                    </select>
                    <select 
                        name="name" 
                        className={styles.selectButton}
                        value={name}
                        onChange={(e) => {handleChange(e, "name")}}
                    >
                        <option defaultValue selected value = "az">Name (A - Z)</option>
                        <option value = "za">Name (Z - A)</option>
                        <option value = "pdown">Population &#9660;</option>
                        <option value = "pup">Population &#9650;</option>
                    </select>
                    <select 
                        name="activities" 
                        className={styles.selectButton}
                        value={activity}
                        onChange={(e) => {handleChange(e, "activity")}}
                    >
                        <option defaultValue selected value = "all-activities">All activities</option>
                        {
                           props.activities.map((activity) => <option  value={activity.name}>{activity.name}</option>) 
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
      getActivities: () => dispatch(getActivities()),
      getAllCountries: (type) => dispatch(getAllCountries(type)),
      getActivityCountries: (name) => dispatch(getActivityCountries(name)),
      filterCountries: (array) => dispatch(filterCountries(array))
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
