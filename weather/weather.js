const request = require('request');

const getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/6ae8b6f925a4371aff96369fa46ec1e4/${lat},${lng}`,
      json: true,
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,
        });
      } else {
        callback('Unable to fetch weather.');
      }
    }
  );
};

module.exports.getWeather = getWeather;
