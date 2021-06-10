const axios = require('axios').default;

export const GET_COUNTRIES= 'GET_COUNTRIES';

export function getCountries() {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/countries`);
        const countries = response.data;
        dispatch({ type: GET_COUNTRIES, payload: countries });
    }
}