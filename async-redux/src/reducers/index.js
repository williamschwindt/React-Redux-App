import { FETCHING_LAUNCH_START, FETCHING_LAUNCH_SUCCESS, FETCHING_LAUNCH_FAILURE } from '../actions/index';

const initialState = {
    launchDetails: {},
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_LAUNCH_START :
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_LAUNCH_SUCCESS :
            return {
                ...state,
                launchDetails: action.payload,
                isFetching: false
            }
        case FETCHING_LAUNCH_FAILURE :
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default :
            return state;
    }
}