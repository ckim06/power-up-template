var RALLY_API_KEY = '_lipBuGakRCSLETr9nHB0XLFtMSFQU0LwtP2t3TupvvQ';
var express = require('express')
var bodyParser = require('body-parser');
var app = express()
var router = express.Router();
var rally = require('rally');
var Q = require('q');

function apiSettings(options) {
  return {
    apiKey: RALLY_API_KEY,
    server: 'https://rally1.rallydev.com'
  }
}

var settings = apiSettings({
  apiKey: RALLY_API_KEY
});
var restApi = rally(settings);
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});


app.use(express.static('./'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


router.route('/defect')
  .put(function (req, res) {
    var data = {
      ref: {
        _ref: req.body._ref
      },
      data: {
        Actuals: req.body.Actuals
      },
      fetch: ['FormattedID', 'Name', 'Actuals'],

      requestOptions: {}
    };

    restApi.update(data, function (error, result) {
      if (error) {
        res.json(error);
      } else {
        res.json(result.Object);
      }
    });



  })
  .get(function (req, res) {
    res.json({
      message: 'hooray! welcome to our api!'
    });
  });
app.use('/api', router);
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port 80!')
})
