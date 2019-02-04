import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setActiveIndex} from '../../state/actions/weather'
import {formatUnixToFullDay} from '../../utils/date'
import ForecastGroupButton from './forecastBtn'

const SelectForecast = props => {
  const {activeIndex, forecast_current} = props
  const date = forecast_current && forecast_current.dt
  return (
    <div>
      <p className="text-center text-uppercase">
        <small>{(date && formatUnixToFullDay(date)) || ' - '}</small>
      </p>

      <div className="d-flex justify-content-center mb-3 mt-3 px-5">
        <div
          className="btn-group btn-block btn-group-sm"
          role="group"
          aria-label="Basic example"
        >
          <ForecastGroupButton
          title="Current"
          isActive={activeIndex === 0}
          onClick={props.setActiveIndex.bind(props, 0)}
          />
           <ForecastGroupButton
          title="24 hours"
          isActive={activeIndex === 1}
          onClick={props.setActiveIndex.bind(props, 1)}
          />
           <ForecastGroupButton
          title="5 days"
          isActive={activeIndex === 2}
          onClick={props.setActiveIndex.bind(props, 2)}
          />
        </div>
      </div>
    </div>
  )
}

SelectForecast.propTypes = {
  setActiveIndex: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  forecast_current: {
    dt: PropTypes.string,
  },
}

const mapStateToProps = state => ({
  activeIndex: state.weather.activeIndex,
  forecast_current: state.weather.current,
})

const mapDispatchToProps = dispatch => ({
  setActiveIndex: index => dispatch(setActiveIndex(index)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectForecast)



