var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');

const aipkey = process.env.ENV_TRANSPORT_API

var requestSettings = {
  method: 'GET',
  url: 'https://api.transport.nsw.gov.au/v1/gtfs/vehiclepos/lightrail',
  accept: 'application/x-google-protobuf',
    headers: {
      'Authorization': aipkey
    }
  };
request(requestSettings, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
    feed.entity.forEach(function(entity) {
      if (entity.trip_update) {
        console.log(entity.trip_update);
      }
    });
  }
});
