const mapboxAccessToken = process.env.REACT_APP_MAPBOX_TOKEN
var delayTimer;
export const mapboxGeocode = (inputValue, callback) => {
 console.log(mapboxAccessToken)
  if (inputValue && inputValue.length > 2) {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function() {
          fetch(
            `https://api.tiles.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
              inputValue
            )}.json?access_token=${mapboxAccessToken}`,
            {method: 'get'}
          )
            .then(response => response.json().then(json => ({json, response})))
            .then(({json, response}) => {
              if (!response.ok) {
                return Promise.reject(json)
              }
              const formated = json.features.map(feature => ({
                title: feature.place_name,
                type: feature.place_type,
                value: feature.center,
              }))
              return callback(formated)
            })
            .then((response, error) => {
              console.log('ALERT', response, error)
            })
    }, 400);
  } else {
    callback([])
  }
}
