
export const gelocateUser = callback => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        console.log(
          'latitude',
          position.coords.latitude,
          'longitude',
          position.coords.longitude
        )
        callback([position.coords.longitude, position.coords.latitude])
      },
      function error(error_message) {
        callback()
        console.error(
          'An error has occured while retrieving location',
          error_message
        )
      }
    )
  } else {
    callback()
    return alert('Geolocation is not supported by this browser.')
  }
}
