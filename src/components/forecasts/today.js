import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {getWeatherIcon} from '../../utils/weatherIcon'
import {formatUnixToHours, formatUnixToTodayOrTomorrow} from '../../utils/date'

const ForecastToday = props => {
  const items = props.forecast.list
  return (
    <div className="days_weathers py-4 text-center">
      <ul className="list-group list-group-flush col-md-10 offset-md-1">
        {items &&
          items.length &&
          items.map((item, i) => (
            <DayItem {...item} date={item.dt} time="10:00" deg="2.2°" />
          ))}
      </ul>
    </div>
  )
}

ForecastToday.propTypes = {
  forecast: {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        dt: PropTypes.string,
      })
    ),
  },
}
export default ForecastToday

const DayItem = props => {
  const weather = props.weather[0]
  const main = props.main
  return (
    <li class="list-group-item bg-transparent text-left">
      <div className="d-flex w-100 justify-content-center align-items-center">
        <span className="py-3 px5 px-md-4 d-md-flex col-4 col-md-4 text-center text-md-left">
          <FontAwesomeIcon
            className="mr-md-2 mb-2 mb-md-0"
            size="2x"
            icon={['fal', getWeatherIcon(weather.icon)]}
          />
          <p style={{lineHeight: '.9em'}} className="h4 mb-0 pl-md-4">
            <small className="mb-0"> {formatUnixToHours(props.date)}</small>
            <small> {formatUnixToTodayOrTomorrow(props.date)}</small>
          </p>
        </span>
        <span className="w-100 pl-md-5 d-md-flex align-itemscenter">
          <span>
            <h5 class="mb-1 h4 font-weightbold"> {main.temp}° </h5>
            <p class="mb-1 mb-md-0 h5">{weather.description}</p>
          </span>
          <h6 className="ml-md-5 h5 mb-0 d-flex d-md-inline-block align-self-end">
            <small>Wind:{props.wind.speed * 1}m/s</small>
          </h6>
        </span>
      </div>
    </li>
  )
}

DayItem.propTypes = {
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  main: {
    temp: PropTypes.number,
  },
  date: PropTypes.string,
  wind: {
    speed: PropTypes.number,
  },
}
