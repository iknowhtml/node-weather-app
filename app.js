const request = require('request');

request(
  {
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=13107%20meadow%20hall%20court%20virginia',
    json: true,
  },
  (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
  }
);
