const request = require('request');
const yargs = require('yargs');

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
  .alias('help', 'h')
  .argv;

const encodedAddress = encodeURI(argv.address);
request(
  {
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true,
  },
  (error, response, body) => {
    const result = body.results[0];
    const { lat, lng } = result.geometry.location;
    console.log(`Address: ${result.formatted_address}`);
    console.log(`Latitude: ${lat}`);
    console.log(`Latitude: ${lng}`);
  }
);
