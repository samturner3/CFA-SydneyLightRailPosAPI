var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');

const aipkey = process.env.ENV_TRANSPORT_API

var options = {
  url: 'https://api.transport.nsw.gov.au/v1/gtfs/vehiclepos/lightrail',
  encoding: null,
  headers: {
    'Authorization': aipkey
  }

};

function callback(error, response, body) {

  // console.log('Status', response.statusCode);
  // console.log('Headers', JSON.stringify(response.headers));
  // console.log('Reponse received', body);

  if (!error && response.statusCode == 200) {
    console.log('No Error!')
    var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
    console.log('No Error!2')
    feed.entity.forEach(function(entity) {
      // console.log('No Error!3')
      // console.log(entity)
      // if (entity.trip_update) {
        // console.log('No Error!4')
        console.log('latitude:' + entity.vehicle.position.latitude);
        console.log('longitude:' + entity.vehicle.position.longitude);
      // }
    });
  }
}

request(options, callback);
