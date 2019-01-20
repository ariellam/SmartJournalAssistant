import data from '../data.js'

// Define action types
export const GET_CONVO_DATA = 'GET_CONVO_DATA';

const URL = "http://localhost:3001/";

// Action creators
// update state with data from firebase whenever this action is called
export const getConvoData = () => dispatch =>  {
  console.log("setting convo data");
  dispatch({
    type: GET_CONVO_DATA,
    payload: data
  })
}

// export const getConvoData = () => dispatch =>  {
//     console.log("fetching convo data")
//     fetch(URL, {
//         method: "GET"
//     })
//     .then(res => res.json())
//     .then(data => {console.log(data);
//         dispatch({
//             type: GET_CONVO_DATA,
//             payload: data
//         })}
//     );
    
// }


