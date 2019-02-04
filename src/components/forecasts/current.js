import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const CurrentForecast = props => {
  const forecast = props.forecast
  const main = forecast.main
  return (
    <div className="days_weathers py-4 text-center">
      <div className="col-12">
        <ul className="list-unstyled row justify-content-center">
          <ValueItem icon="sunrise" title="Sunrise" value={`6:25`} />
          <ValueItem icon="sunset" title="Sunset" value={`20:35`} />
          <ValueItem
            icon="humidity"
            title="Humidity"
            value={`${main.humidity}%`}
          />

          <ValueItem title="Visibility" value={`${forecast.visibility}m`} />
          <ValueItem
            icon="wind"
            title="Windspeed"
            value={`${forecast.wind.speed}m/s`}
          />
          <ValueItem
            icon="clouds"
            title="Clouds"
            value={`${forecast.clouds.all}%`}
          />
        </ul>
      </div>
    </div>
  )
}

CurrentForecast.propTypes = {
  forecast: PropTypes.shape({
    visibility: PropTypes.number,
    main: PropTypes.shape({
      humidity: PropTypes.number,
    }),
    clouds: PropTypes.shape({
      all: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
  }),
}

export default CurrentForecast

const ValueItem = props => (
  <li className="col-6 col-md-4 py-3">
    <div>
      <h6 className="w-100 h5 font-weight-normal">{props.title}</h6>

      <span className={'h4 mb-0' + (props.icon && ' pl-4')}>
        {props.value}

        {props.icon && (
          <FontAwesomeIcon className="mx-2" icon={['fal', props.icon]} />
        )}
      </span>
    </div>
  </li>
)

ValueItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
}
