// Actions are used to send data to the store using dispatch
// actionCreators are functions that create and return actions

// Define action types
export const GET_CONVO_DATA = 'GET_CONVO_DATA';

const URL = "http://localhost:3001/";
// Action creators
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

var data = [
{
	"time_created": "2019-03-19T19:44:29+00:00",
	"duration": "00:35:21",
	"flow": [
		{
			"prompt": "How was your day today?",
			"response": "It was okay, I guess"
		},
		{
			"prompt": "Would you like to talk about it?",
			"response": "Grade 12 student here. I'm president of model un, came fifth in deca icdc, and have a lot of side projects I can demonstrate. I know python and made 5k off of bitcoin too as well as ICOs back when they were popular. Now that I'm done with my ECs, what average do I need to get a gf? The waterloo application website has no info, so I'm assuming mid to high 90s? A lot of people in cs i spoke to seemed to have gotten deferred from gf though so is it only high 90s then? I was going to take the Euclid but I havent had time to study for it so I dont want my poor euclid scores to hurt my potential of getting gf. Idk if I should take it anyways. Also does gf have good co op opportunities? I'd like to try out a wide variety of positions and i dont know if gf would offer that. I heard laurier gf program can get you into a lot of places you wouldnt even think of, is this true? At the same time sometimes you get screwed over. Really I'm just looking for advice on how to get into this highly competitive program I hear everyone talking about."
		}
	]
},
{
	"time_created": "2019-03-19T19:44:29+00:00",
	"duration": "00:35:21",
	"flow": [
		{
			"prompt": "How was your day today?",
			"response": "It was horrible."
		},
		{
			"prompt": "Would you like to talk about it?",
			"response": "The room I was sitting in smelled like feet."
		}
	]
}

]


// for testing only
export const getConvoData = () => dispatch =>  {
  console.log("setting convo data");
  dispatch({
    type: GET_CONVO_DATA,
    payload: data
  })
}


