import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {getWeatherIcon} from '../../utils/weatherIcon'
import './_header.scss'

const WeatherHeader = props => {
  const main = props.forecast.main
  const weather = props.forecast.weather
  const country = props.forecast.sys.country
  const station_name = props.forecast.name
  const icon = getWeatherIcon(weather[0].icon)
  return (
    <div className="header d-flex align-items-center justify-content-center">
      <div className="text-center">
        <FontAwesomeIcon icon={['fal', icon]} size="3x" />
        <br />
        <br />
        <h3 className="h1 font-weight-bold"> {(main && main.temp) || '-'}°</h3>
        <h6 className="h6">
          {station_name} | {country}
        </h6>
      </div>
    </div>
  )
}

WeatherHeader.propTypes = {
  forecast: {
    name: PropTypes.string,
    main: {
      temp: PropTypes.string,
    },
    sys: {
      country: PropTypes.string,
    },
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
      })
    ),
  },
}

export default WeatherHeader
