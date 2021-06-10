import React from 'react';
import styles from './Search.module.css';

export default function Search(props) {
    const [input, setInput] = React.useState("");

    function handleChange (event) {
        setInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(input.length === 0) {
            alert("Please enter something")
        } else {
            props.getCountries(input);
        }
    }

    return (
        <div className={styles.boxContainer}>
            <form className={styles.searchForm}>
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
