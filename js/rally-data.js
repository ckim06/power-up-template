var RALLY_API_KEY = '_lipBuGakRCSLETr9nHB0XLFtMSFQU0LwtP2t3TupvvQ';
var rally = require('rally');
var queryUtils = rally.util.query;
var Q = require('q');

function apiSettings(options) {
  return {
    apiKey: RALLY_API_KEY,
    server: 'https://rally1.rallydev.com'
  }
}

var settings = apiSettings({ apiKey: options.apiKey });
var restApi = rally(settings);

restApi.update({
    ref: '/defect/79914115024', //may be a ref ('/defect/1234') or an object with a _ref property
    data: {
        Name: 'My Updated Defect' //the data with which to update the specified object
    },
    fetch: ['FormattedID', 'Name'], //fields to fetch

    requestOptions: {} //optional additional options to pass through to request
}, function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Object);
    }
});
