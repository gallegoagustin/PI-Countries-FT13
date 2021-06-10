import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../../actions';
import styles from './Search.module.css';

function Search(props) {
    const [input, setInput] = React.useState("");

    function handleChange (event) {
        setInput(event.target.value)
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
            <form className={styles.searchForm} onSubmit={(e) => {handleSubmit(e)}}>
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
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
      getCountry: (input) => dispatch(getCountry(input)),
    };
  }
  
export default connect(null, mapDispatchToProps)(Search);