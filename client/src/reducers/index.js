// Reducers specify how the application's state changes in response to actions
// It takes the previous state and action and returns the next state
// A reducer should not mutate its arguments or have any side effects

import {
    GET_CONVO_DATA
} from './../actions/actions.js'

const initialState = {
    convoData: {}
}

function DeScribeApp(state = initialState, action) {
    console.log("action type: " + action.type);
    switch (action.type) {
        case GET_CONVO_DATA:
            console.log(action.payload);
            return Object.assign({}, state, {
                convoData: action.payload
            })
        default:
            return state
    }
}

export default DeScribeApp;