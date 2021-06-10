import { GET_COUNTRIES, GET_COUNTRY_ID, GET_COUNTRY_NAME } from '../actions/index';

const initialState = {
    initialCountries: [],
    countryDetail: {}
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
        default:
            return state;
    }
}