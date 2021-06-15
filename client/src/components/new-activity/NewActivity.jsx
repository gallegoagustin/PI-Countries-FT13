import React from 'react';
import { connect } from 'react-redux';
import styles from './NewActivity.module.css';

const axios = require('axios').default;

function NewActivity(props) {

    const [name, setName] = React.useState("");
    const [level, setLevel] = React.useState("1");
    const [length, setLength] = React.useState("0");
    const [season, setSeason] = React.useState("summer");
    const [countries, setCountries] = React.useState([]);
    const [response, setResponse] = React.useState({})

    const handleChange = function(event, inputType) {
        if(inputType === "name"){
            setName(event.target.value);
        }
        if(inputType === "level"){
            setLevel(event.target.value);
        }
        if(inputType === "length"){
            setLength(event.target.value);
        }
        if(inputType === "season"){
            setSeason(event.target.value);
        }
        if(inputType === "countries"){
            setCountries([...countries, event.target.value]);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        if(!name.length){
            return alert("Please enter a valid name")
        }

        if(!season.length) {
            setSeason("summer")
        }

        setResponse(await axios({
            method: 'post',
            url: 'http://localhost:3001/activity', 
            data: {     
                name: name,
                level: parseInt(level),
                length: parseInt(length),
                season: season,
                countries: countries
            }
        }))
        
        setName("");
        setLevel(1);
        setLength(1);
        setSeason("summer");
        setCountries([]);
    }

    function clearAll(event) {
        event.preventDefault();
        setName("");
        setLevel(1);
        setLength(1);
        setSeason("summer");
        setCountries([]);
    }

    function clearCountries(event) {
        event.preventDefault();
        setCountries([]);
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={(e) => {handleSubmit(e)}}>
                <div className={styles.formSet}>
                    <label className={styles.formTitles}>
                        Name*:
                    </label>
                    <input
                        className={styles.formBox}
                        onChange={(e) => {handleChange(e, "name")}}
                        value={name}
                        placeholder="Example: Trecking"
                    />
                </div>
                <div className={styles.formSet}>
                    <label className={styles.formTitles} htmlFor="level">Level*:</label>
                    <select name="level"
                        onChange={(e) => {handleChange(e, "level")}}
                        value={level}
                        className={styles.formBox}
                    >
                        <option value = {1} defaultValue>1 (no sweat)</option>
                        <option value = {2}>2 (slight)</option>
                        <option value = {3}>3 (regular)</option>
                        <option value = {4}>4 (heavy)</option>
                        <option value = {5}>5 (rocky)</option>
                    </select>
                </div>
                <div className={styles.formSet}>
                    <label className={styles.formTitles}>
                        Length* (hours):
                    </label>
                    <input
                        type="number"
                        onChange={(e) => {handleChange(e, "length")}}
                        value={length}
                        className={styles.formBox}
                    />
                </div>
                <div className={styles.formSet}>
                    <label className={styles.formTitles} htmlFor="season">Season*:</label>
                    <select name="season"
                        onChange={(e) => {handleChange(e, "season")}}
                        value={season}
                        className={styles.formBox}
                    >
                        <option value = "summer" defaultValue>Summer</option>
                        <option value = "spring">Spring</option>
                        <option value = "autumn">Autumn</option>
                        <option value = "winter">Winter</option>
                    </select>
                </div>
                <div className={styles.formSet}>
                    <label className={styles.formTitles} htmlFor="countries">Countries:</label>
                    <select name="cuntries" multiple
                        onChange={(e) => {handleChange(e, "countries")}}
                        value={countries}
                        className={styles.formBox}
                    >
                        {
                            props.allCountries?.map((country) =>
                                <option key={country.name} value = {country.name}>{country.name}</option>
                            )
                        }
                    </select>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.formButton} onClick={(e) => {clearCountries(e)}}>Reset countries</button>
                    <button className={styles.formButton} onClick={(e) => {clearAll(e)}}>Reset all</button>
                    <button className={styles.formButton} type="submit">Add activity</button>
                </div>
                {
                    response.data === "Activity created" ? <span className={styles.success}>{response.data}</span> : <span className={styles.error}>{response.data}</span>
                }
                <span className={styles.alert}>(*) obligatory fields</span>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      allCountries: state.allCountries
    };
}

export default connect(mapStateToProps, null)(NewActivity);