import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {getWeatherIcon} from '../../utils/weatherIcon'
import {formatUnixToHours, formatToDay} from '../../utils/date'

const ForecastFiveDays = props => {
  const items = props.forecast
  return (
    <div className="days_weathers py-4 text-center">
      <ul className="list-group list-group-flush col-md-10 offset-md-1">
        {items &&
          items.length &&
          items.map((item, i) => (
            <DayItem isSm={props.isSm} key={item.date} {...item} />
          ))}
      </ul>
    </div>
  )
}

ForecastFiveDays.propTypes = {
  isSm: PropTypes.bool,
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      weathers: PropTypes.object,
    })
  ),
}

export default ForecastFiveDays

const DayItem = props => {
  const {isSm, weathers} = props
  return (
    <li class="list-group-item bg-transparent text-left">
      <div className="d-flex w-100 justify-content-center align-items-center">
        <span className="py-3 col-4 col-md-3 pl-0">
          <h5>
            {' '}
            <small className="text-uppercase">
              {' '}
              {formatToDay(new Date(props.date))}
            </small>{' '}
          </h5>
        </span>

        <span className="w-100 d-flex align-items-center">
          {!isSm && <OneDayWeather {...weathers['5']} />}
          <OneDayWeather {...weathers['8']} />
          <OneDayWeather {...weathers['14']} />
          <OneDayWeather {...weathers['17']} />
          {!isSm && <OneDayWeather {...weathers['20']} />}
        </span>
      </div>
    </li>
  )
}

DayItem.propTypes = {
  weathers: PropTypes.object,
  isSm: PropTypes.bool,
}

const OneDayWeather = props => (
  <div className="col text-center">
    <h6>{props.temp && <small className=""> {props.temp}° </small>}</h6>

    <h6 className="">
      <FontAwesomeIcon
        className="mr4"
        size="1x"
        icon={['fal', (props.icon && getWeatherIcon(props.icon)) || 'minus']}
      />
    </h6>

    <h6>
      {props.unixDate && (
        <small className=""> {formatUnixToHours(props.unixDate)} </small>
      )}
    </h6>
  </div>
)

DayItem.propTypes = {
  temp: PropTypes.number.isRequired,
  unixDate: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
