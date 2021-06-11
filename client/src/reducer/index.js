import { GET_ALL_COUNTRIES, GET_COUNTRIES, GET_COUNTRY_ID, GET_COUNTRY_NAME } from '../actions/index';

const initialState = {
    initialCountries: [],
    countryDetail: {},
    allCountries: []
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                initialCountries: action.payload
            }
        case GET_COUNTRY_NAME:
            return {
                ...state,
                initialCountries: action.payload
            }
        case GET_COUNTRY_ID:
            return {
                ...state,
                countryDetail: action.payload
            }
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }
        default:
            return state;
    }
}