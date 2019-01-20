// Actions are used to send data to the store using dispatch
// actionCreators are functions that create and return actions

// Define action types
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_IMAGE_DATA = 'SET_IMAGE_DATA';
export const SET_ALL_IMAGE_DATA = 'SET_ALL_IMAGE_DATA';

const URL = "http://localhost:3001/";
// Action creators
export const setUserData = (userId) => dispatch =>  {
    console.log("fetching data for userid=" + userId)
    fetch(URL + "users/" + userId, {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {console.log(data.data);
        dispatch({
            type: SET_USER_DATA,
            payload: data.data
        })}
    );
    
}

export const setImageData = (imageId) => dispatch => {
    console.log("fetching data for imageId=" + imageId)
    fetch(URL + "content/" + imageId, {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: SET_IMAGE_DATA,
            payload: data.data
        })}
    );
}

export const setAllImageData = () => dispatch => {
    console.log("fetching all image data")
    fetch(URL + "content/", {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: SET_ALL_IMAGE_DATA,
            payload: data.data
        })}
    );
}

