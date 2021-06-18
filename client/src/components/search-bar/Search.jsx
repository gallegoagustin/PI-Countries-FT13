import React from 'react';
import { connect } from 'react-redux';
import { filterCountries, getCountry} from '../../actions';
import styles from './Search.module.css';

function Search(props) {
    
    const [input, setInput] = React.useState("");

    function handleChange (event) {
        setInput(event.target.value)
    }

    function handleClick() {
        let allCountries = [...props.countries];

        let result = [];

        let i1 = Math.floor(Math.random() * allCountries.length);

        result.push(i1);
        
        let i2 = Math.floor(Math.random() * allCountries.length);

        while(i2 === i1) {
            i2 = Math.floor(Math.random() * allCountries.length);
        }

        result.push(i2);

        let i3 = Math.floor(Math.random() * allCountries.length);

        while(i3 === i1 || i3 === i2) {
            i3 = Math.floor(Math.random() * allCountries.length);
        }

        result.push(i3);

        let i4 = Math.floor(Math.random() * allCountries.length);

        while(i4 === i1 || i4 === i2 || i4 === i3) {
            i4 = Math.floor(Math.random() * allCountries.length);
        }

        result.push(i4);

        let i5 = Math.floor(Math.random() * allCountries.length);

        while(i5 === i1 || i5 === i2 || i5 === i3 || i5 === i4) {
            i5 = Math.floor(Math.random() * allCountries.length);
        }

        result.push(i5);

        let match = [];

        for(let i = 0; i < allCountries.length; i++) {
            if(result.indexOf(i) !== -1) {
                match.push(allCountries[i])
            }
        }

        props.filterCountries(match);
        
    }

    function handleSubmit(event) {

        event.preventDefault();

        if(input.length === 0) {
            alert("Please enter a country")
        } else {
            props.getCountry(input);
        }

    }

    return (
        <div className={styles.boxContainer}>
            <form 
                className={styles.searchForm} 
                onSubmit={(e) => {handleSubmit(e)}}>
                <input 
                    className={styles.searchBox} 
                    type="text" 
                    placeholder="Example: Belgium"
                    value={input}
                    onChange={(e) => {handleChange(e)}}
                />
                <button 
                    className={styles.searchButton} 
                    type="submit">
                        Search
                </button>
            </form>
            <i 
                class="fas fa-dice-five"
                id={styles.dice} 
                onClick={() => {handleClick()}}
            >
            </i>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      countries: state.allCountries,
    }; 
}

function mapDispatchToProps(dispatch) {
    return {
      filterCountries: (list) => dispatch(filterCountries(list)),
      getCountry: (input) => dispatch(getCountry(input))
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Search);