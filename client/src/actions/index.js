const axios = require('axios').default;

export const GET_COUNTRIES= 'GET_COUNTRIES';
export const GET_COUNTRY_NAME= 'GET_COUNTRY_NAME';
export const GET_COUNTRY_ID= 'GET_COUNTRY_ID';
export const GET_ALL_COUNTRIES= 'GET_ALL_COUNTRIES';
export const POST_ACTIVITY= 'POST_ACTIVITY';


export function getCountries() {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/countries`);
        const countries = response.data;
        dispatch({ type: GET_COUNTRIES, payload: countries });
    }
}

export function getCountry(name) {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
        const countries = response.data;
        if(!countries.length) {
            return alert('We could not find any country')
        }
        dispatch({ type: GET_COUNTRY_NAME, payload: countries });
    }
}

export function countryDetail(id) {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/countries/${id}`);
        const country = response.data;
        dispatch({ type: GET_COUNTRY_ID, payload: country });
    }
}

export function getAllCountries() {
    return async function(dispatch) {
        const response = await axios.get('http://localhost:3001/countries?name=all');
        const countries = response.data;
        dispatch({ type: GET_ALL_COUNTRIES, payload: countries });
    }
}