const request = require('request');

request(
  {
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=13107%20meadow%20hall%20court%20virginia',
    json: true,
  },
  (error, response, body) => {
    const result = body.results[0];
    const {lat, lng} = result.geometry.location;
    console.log(`Address: ${result.formatted_address}`);
    console.log(`Latitude: ${lat}`);
    console.log(`Latitude: ${lng}`);

  }
);
