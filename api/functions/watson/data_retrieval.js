/*
Setting up your api key:
- Add watson_api_key.js to the /api/functions/watson directory
*/

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const watson = require('watson-developer-cloud');
require('./watson_api_key.js');
require('./sample_speech')

// supplying the API key
function watsonObject() { 
    this.nlu = new NaturalLanguageUnderstandingV1({
        // note: if unspecified here, credentials are pulled from environment properties:
        iam_apikey: key,
        version: '2018-04-05',
        url: 'https://gateway-wdc.watsonplatform.net/natural-language-understanding/api'
    });
}

// analyze sample text

function getAnalysis(data) {
    var combinedResponses = parseText(data);
    var params = {
        html: combinedResponses,
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
    var analysis = analyzeText(params);
    formatAnalysis(analysis);
}

// combine all user responses from google home
watsonObject.prototype.parseText = function(data) {
    var response = "";
    for (let i = 0; i < data.flow.length; i++) {
        response = response + ' ' + data.flow[i]['response'];
    }
    return response;
}

// retrieve sentiment analysis
function analyzeText(params) {
    nlu.analyze(params, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(res);
        var analysis = formatAnalysis(res);
        console.log(analysis)
        // console.log(res.keywords);
        // console.log(res.keywords[0]);
        // console.log(res.keywords[0].sentiment)
        // TODO: save result to database
        return analysis;
    });
}

// format Watson response into object to store in database
function formatAnalysis(res) {
    var data = {
        overall_sentiment: {
            score: res.sentiment.document.score,
            label: res.sentiment.document.label
        },
        keywords: res.keywords,
        entities: res.entities,
        overall_emotion: res.emotion.document.emotion,
        concepts: res.concepts
    }   
    return data;
}

module.exports = watsonObject;