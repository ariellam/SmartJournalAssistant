const express = require('express')
const app = express();

const watsonObject = require('./watson/data_retrieval');
const watson_nlp = new watsonObject();

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://describe-9e5c7.firebaseio.com`,
    serviceAccount: serviceAccount
});

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /entries/:entry
exports.addEntry = functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    const original = req.body;
    // response = {
    //     'response': original.queryResult.queryText
    // }
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    return admin.database().ref('/entries').push(original).then((snapshot) => {
        // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
        return res.redirect(303, snapshot.ref.toString());
    });
});

// every time a new entry is added into the database, this function runs and adds analytics
exports.analyzeEntry = functions.database.ref('/entries/{pushId}')
    .onCreate((snapshot, context) => {
        // current value in db
        data = snapshot.val();
        res = watson_nlp.getAnalysis(data.response);

        data['analytics'] = {
            'sadness': '0.440825',
            'joy': '0.52647',
            'fear': '0.047817',
            'disgust': '0.040826',
            'anger': '0.005933'
        }
        return admin.database().ref('/entries/' + context.params.pushId).update(data);
    });

// this function is called every time a get request is made to this endpoint
exports.getAllEntries = functions.https.onRequest((req, res) => {
    return admin.database().ref('/entries').once('value').then(function (snapshot) {
        return res.status(200).send(snapshot.val());
    }, function (error) {
        console.log(error);
    });
})

// var data = {
// 	"time_created": "2014-06-01T12:00:00Z",
// 	"duration": "11:59:01",
// 	"flow": [
// 		{
// 			"prompt": "How are you feeling today?",
// 			"response": "I am sad."
// 		},
// 		{
// 			"prompt": "Do you want to talk about it?",
// 			"response": "incredible amounts of angerrryyyy." 
// 		},
// 			{
// 			"prompt": "Do you want to talk about it?",
// 			"response": "incredible amoun." 
// 		}
// 	]
// }
// watson_nlp.getAnalysis(data);

// exports.testFunction = functions.https.onRequest((req, res) => {
//     // Grab the text parameter.
//     const original = req.query.text;
//     // Push the new message into the Realtime Database using the Firebase Admin SDK.
//     return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
//       // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//       console.log("test function");
//       return res.redirect(303, snapshot.ref.toString());
//     });
//   });

// app.get('/', function (req, res) {
//     return admin.database().ref('/messages').once('value').then(function(snapshot) {
//         return res.status(200).send(snapshot.val());
//       }, function (error) {
//           console.log(error);
//       });
// });

// app.post('/', function(req, res) {
//     const original = req.body;
//     res.send(original);
//     res.send("this works");
// })

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });
