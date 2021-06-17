import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const GET_COUNTRY_ID = 'GET_COUNTRY_ID';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';
export const SWITCH_LOADING = 'SWITCH_LOADING';
export const CHANGE_PAGE = 'CHANGE_PAGE';

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
        const response = await axios.get(`http://localhost:3001/resume`);
        const countries = response.data;
        dispatch({ type: GET_ALL_COUNTRIES, payload: countries });
    }
}

export function getActivities() {
    return async function(dispatch) {
        const response = await axios.get('http://localhost:3001/activities');
        const activities = response.data;
        dispatch({ type: GET_ACTIVITIES, payload: activities });
    }
}

export function filterCountries(array) {
    return async function(dispatch) {
        const countries = await array;
        dispatch({ type: FILTER_COUNTRIES, payload: countries });
    }
}

export function switchLoading(boolean) {
    return function(dispatch) {
        dispatch({ type: SWITCH_LOADING, payload: boolean })
    }
}

export function changePage(number) {
    return function(dispatch) {
        dispatch({ type: CHANGE_PAGE, payload:  number})
    }
}