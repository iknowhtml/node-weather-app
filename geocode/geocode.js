const request = require('request');

const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURI(address);
  request(
    {
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true,
    },
    (error, response, body) => {
      if (error) {
        callback('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        console.log('unable to find that address.');
      } else if (body.status === 'OK') {
        const result = body.results[0];
        const { lat, lng } = result.geometry.location;

        callback(undefined, {
          address: result.formatted_address,
          latitude: lat,
          longitude: lng,
        });
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;
