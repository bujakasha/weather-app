import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {toggleInfo} from '../state/actions/app'
import {clearWeatherAndLocaiton} from '../state/actions/location'
import {getWeather, getWeatherAction} from '../state/actions/weather'

import Header from '../components/header'
import SelectForecast from '../components/select_forecast/index'
import Navigation from '../components/navigation'
import Loading from '../components/loading'

import CurrentForecast from '../components/forecasts/current'
import TodayForecast from '../components/forecasts/today'
import FiveDaysForecast from '../components/forecasts/fiveDays'

const WeatherView = props => {
  const {
    activeIndex,
    forecast_current,
    forecast_today,
    forecast_fivedays,
    location,
    isSm,
  } = props

  useEffect(() => {
    if(forecast_current){
      document.title = `${forecast_current.name} | Weather`
    }
    return ()=>{
      document.title = 'Simply weather';

    }
  })
  useEffect(() => {
    const weather = getWeatherAction(activeIndex)
    if (props[weather.jsonLabel] === null) {
      props.featchWeather(location, weather)
    }
  })

  return (
    <>
      <Navigation
        toggleInfo={props.toggleInfo}
        clearWeather={props.clearStates}
      />
      <main className="container main_content pb-5">
        <div className="row">
          <div className="col-12 collg-3 px-0">
            {(forecast_current !== null && (
              <Header forecast={forecast_current} />
            )) || <Loading />}
          </div>
          <div className="col-12 collg-9">
            <div className="col-lg-10 offset-lg-1 px-0">
              <SelectForecast />
              {(activeIndex === 0 && forecast_current && (
                <CurrentForecast forecast={forecast_current} />
              )) ||
                (activeIndex === 1 && forecast_today && (
                  <TodayForecast forecast={forecast_today} />
                )) ||
                (activeIndex === 2 && forecast_fivedays && (
                  <FiveDaysForecast isSm={isSm} forecast={forecast_fivedays} />
                )) || <Loading />}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  location: state.location,
  activeIndex: state.weather.activeIndex,

  forecast_current: state.weather.current,
  forecast_today: state.weather.today,
  forecast_fivedays: state.weather.fiveDays,
})

const mapDispatchToProps = dispatch => ({
  featchWeather: (location, activeIndex) =>
    dispatch(getWeather(location, activeIndex)),

  clearStates: () => dispatch(clearWeatherAndLocaiton()),
  toggleInfo: () => dispatch(toggleInfo()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherView)
