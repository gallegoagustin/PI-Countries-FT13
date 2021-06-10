import { GET_COUNTRIES } from '../actions/index';

const initialState = {
    initialCountries: []
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                initialCountries: action.payload
            }
        default:
            return state;
    }
}