const request = require('request');

const geoCodeAddress = address => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURI(address);
    request(
      {
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true,
      },
      (error, response, body) => {
        if (error) {
          reject('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
          reject('unable to find that address.');
        } else if (body.status === 'OK') {
          const result = body.results[0];
          const { lat, lng } = result.geometry.location;

          resolve({
            address: result.formatted_address,
            latitude: lat,
            longitude: lng,
          });
        }
      }
    );
  });
};

geoCodeAddress('13107 Meadow Hall Court Herndon VA').then(
  location => {
    console.log(JSON.stringify(location, undefined, 2));
  },
  errorMessage => {
    console.log(errorMessage);
  }
);
