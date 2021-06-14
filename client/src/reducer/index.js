import { FILTER_COUNTRIES, GET_ACTIVITIES, GET_ACTIVITY_COUNTRIES, GET_ALL_COUNTRIES, GET_COUNTRIES, GET_COUNTRY_ID, GET_COUNTRY_NAME } from '../actions/index';

const initialState = {
    initialCountries: [],
    countryDetail: {},
    allCountries: [],
    activities: [],
    activityCountries: []
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
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case GET_ACTIVITY_COUNTRIES:
            return {
                ...state,
                activityCountries: action.payload
            }
        case FILTER_COUNTRIES:
            return {
                ...state,
                initialCountries: action.payload
            }
        default:
            return state;
    }
}