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
var params = {
    html: speechText,
    features: {
        sentiment: {
            document: true
        },
        emotion: {
            document: true
        },
        concepts: {
            limit: 3
        },
        entities: {
            emotion: true
        },
        keywords: {
            sentiment: true,
            emotion: true,
            limit: 5
        },
        
    }
}

nlu.analyze(params, function(err, res) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res);
    // console.log(res.keywords);
    // console.log(res.keywords[0]);
    // console.log(res.keywords[0].sentiment)
    // TODO: save result to database
});


