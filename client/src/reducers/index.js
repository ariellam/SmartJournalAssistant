// Reducers specify how the application's state changes in response to actions
// It takes the previous state and action and returns the next state
// A reducer should not mutate its arguments or have any side effects

import {
    SET_USER_DATA,
    SET_IMAGE_DATA,
    SET_ALL_IMAGE_DATA
} from './../actions/actions.js'

const initialState = {
    userData: [],
    imageData: [],
    allImageData: []
}

function contentHubApp(state = initialState, action) {
    console.log("action type: " + action.type);
    switch (action.type) {
        case SET_USER_DATA:
            console.log("set user data: ");
            console.log(action.payload);
            return Object.assign({}, state, {
                userData: action.payload
            })
        case SET_IMAGE_DATA:
            return Object.assign({}, state, {
                imageData: action.payload
            })
        case SET_ALL_IMAGE_DATA:
            return Object.assign({}, state, {
                allImageData: action.payload
            })
        default:
            return state
    }
}

export default contentHubApp;