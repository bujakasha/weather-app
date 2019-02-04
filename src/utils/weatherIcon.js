export const getWeatherIcon = icon => {
  switch (icon) {
    case '01d':
      return 'sun'
    case '02d':
      return 'sun-cloud'
    case '03d':
      return 'clouds'
    case '04d':
      return 'clouds-sun'
    case '09d':
      return 'cloud-drizzle'
    case '10d':
      return 'cloud-sun-rain'
    case '11d':
      return 'thunderstorm'
    case '13d':
      return 'cloud-snow'
    case '50d':
      return 'fog'
    case '01n':
      return 'moon'
    case '02n':
      return 'cloud-moon'
    case '03n':
      return 'clouds'
    case '04n':
      return 'clouds-moon'
    case '09n':
      return 'cloud-moon-rain'
    case '10n':
      return 'cloud-moon-rain'
    case '11n':
      return 'thunderstorm-moon'
    case '13n':
      return 'cloud-snow'
    case '50n':
      return 'fog'
    default:
  }
}
