const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
    },
  })
  .help()
  .alias('help', 'h').argv;

const encodedAddress = encodeURIComponent(argv.address);
const geoCodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios
  .get(geoCodeUrl)
  .then(response => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.');
    }
    console.log(response.data.results[0].formatted_address);
    const { lat, lng } = response.data.results[0].geometry.location;
    const weatherUrl = `https://api.darksky.net/forecast/6ae8b6f925a4371aff96369fa46ec1e4/${lat},${lng}`;
    return axios.get(weatherUrl);
  })
  .then(response => {
    const { temperature, apparentTemperature } = response.data.currently;
    console.log(
      `It's currently ${temperature}. Feels like ${apparentTemperature}.`
    );
  })
  .catch(error => {
    if (error.code === 'ENOTFOUND') {
      console.log('Unable to connect to API');
    } else {
      console.log(error.message);
    }
  });
