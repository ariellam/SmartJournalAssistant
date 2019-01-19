/*
Setting up your api key:
- Add watson_api_key.js to the /api/functions/watson directory
*/

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const watson = require('watson-developer-cloud');
require('./watson_api_key.js');
require('./sample_speech')

// supplying the API key
var nlu = new NaturalLanguageUnderstandingV1({
  // note: if unspecified here, credentials are pulled from environment properties:
  iam_apikey: key,
  version: '2018-04-05',
  url: 'https://gateway-wdc.watsonplatform.net/natural-language-understanding/api'
});

// analyze sample text
var options = {
    html: speechText,
    features: {
        concepts: {},
        keywords: {}
    }
}
nlu.analyze(options, function(err, res) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res);
    // TODO: save result to database or send directly to endpoint

});


