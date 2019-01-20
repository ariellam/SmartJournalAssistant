import { createStore, applyMiddleware } from 'redux'
import DeScribeApp from './reducers'
import thunk from 'redux-thunk'

/* 
states:
- imageData
- userData
- allImageData
*/

const store = createStore(DeScribeApp, applyMiddleware(thunk))

// Log the initial state
console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

unsubscribe()

export default store