/*
Setting up your api key:
- Add watson_api_key.js to the /api/functions/watson directory
*/

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const watson = require('watson-developer-cloud');
require('./watson_api_key.js');
require('./sample_speech')
var async = require('asyncawait/async');
var await = require('asyncawait/await');


// supplying the API key
const nlu = new NaturalLanguageUnderstandingV1({
    // note: if unspecified here, credentials are pulled from environment properties:
    iam_apikey: key,
    version: '2018-04-05',
    url: 'https://gateway-wdc.watsonplatform.net/natural-language-understanding/api'
});

function watsonObject() {
    this.nlu = nlu;
}

// analyze sample text

watsonObject.prototype.getAnalysis = function(data) {
    var combinedResponses = data;
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
    function analysis(params){
        watsonObject.prototype.analyzeText(params);
    }

    analysis(params);

}


// retrieve sentiment analysis
watsonObject.prototype.analyzeText = function(params) {
    nlu.analyze(params, function(err, res) {
        if (err) {
            return console.log(err);
        }

        else watsonObject.prototype.formatAnalysis(res);
    });
}

// format Watson response into object to store in database
watsonObject.prototype.formatAnalysis = function(res) {
    if(res){
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
        console.log(data); 
        return data;
    }
    console.log('data is undefined');
}

module.exports = watsonObject;