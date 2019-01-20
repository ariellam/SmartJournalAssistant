const express = require('express')
const app = express();

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
// Realtime Database under the path /messages/:pushId/original
exports.addEntry = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const original = JSON.parse(req.body);
  // might need to parse this??? depending on what it looks like

  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  return admin.database().ref('/entry').push(original).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    return res.redirect(303, snapshot.ref.toString());
  });
});

exports.analyzeEntry = functions.database.ref('/entry/{pushId}')
.onCreate((snapshot, context) => {
    // current value in db
    const data = snapshot.val();
    // call ibm watson here
    // testing
    data['analytics'] = {
        "test": "aaaaa",
        "emotions": [
            "happiness",
            "anger",
            "sadness"
        ]
    };
    return admin.database().ref('/entry/' + context.params.pushId).update(data);
});

exports.getAllEntries = functions.https.onRequest((req, res) => {
    return admin.database().ref('/entry').once('value').then(function(snapshot) {
        return res.status(200).send(snapshot.val());
      }, function (error) {
          console.log(error);
      });
})

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
