var helper = require('../utils/queries.js');
var yelp = require('../utils/yelp.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../../client/dist'));


// yelp.search({ location: 'Houston' })
// .then(function (data) {
//   for (var i = 0; i < data.businesses.length; i++) {
//     var event = {
//       name: data.businesses[i].name,
//       description: data.businesses[i].snippet_text,
//       location: data.businesses[i].location.display_address.join(' '),
//       url: data.businesses[i].url,
//       image: data.businesses[i].image_url
//     };
//     helper.insertData(event, function(error, data) {
//       if (error) {
//         throw error;
//       }
//       console.log('Insert Worked!');
//     });
//   }
// })
// .catch(function (err) {
//   console.error(err);
// });

app.get('/getData', function(req, res, next) {
  helper.getData(function(data) {
    res.send(data);
  });
});

// app.post('/data', function (req, res, next) {
//   var fakeData = {name: 'Off the grid', location: 'SF'};
//   helper.insertData(fakeData, function (data) {
//     console.log('success', data);
//     res.end('success');
//   });
// });

module.exports = app;
