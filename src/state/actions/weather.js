import {setLoading} from './app'
import {setLocation} from './location'
import {feacthOwm} from '../../utils/owmFeatch'
import {formatHoursToDays} from '../../utils/date'

export const SET_WEATHER_CURRENT = 'SET_WEATHER_CURRENT'
export const SET_WEATHER_TODAY = 'SET_WEATHER_TODAY'
export const SET_WEATHER_FIVEDAYS = 'SET_WEATHER_FIVEDAYS'
export const SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX'
export const CLEAR_WEATHER = 'CLEAR_WEATHER'

export const setActiveIndex = activeIndex => ({
  type: SET_ACTIVE_INDEX,
  activeIndex,
})

export const clearWeather = () => ({
  type: CLEAR_WEATHER,
})

export const setWeather = (type, data) => ({
  type,
  data,
})

export const getWeather = (location, weatherAction) => {
  return dispatch => {
    dispatch(setLoading(true))
    let url = `https://api.openweathermap.org/data/2.5/${
      weatherAction.urlParam
    }?`
    url += `lat=${location.coordinates[1]}&lon=${location.coordinates[0]}`
    if (weatherAction.urlParam === 'forecast') {
      url += `&cnt=${weatherAction.cnt}`
    }
    dispatch(setLoading(true))
    feacthOwm(url).then(data => {
      console.log(data)
      setTimeout(() => {
        if (weatherAction.jsonLabel === 'forecast_current') {
          dispatch(
            setLocation({
              name: data.name,
              id: data.id,
            })
          )
        }
        if (weatherAction.type === SET_WEATHER_FIVEDAYS) {
          dispatch(setWeather(weatherAction.type, formatHoursToDays(data.list)))
        } else {
          dispatch(setWeather(weatherAction.type, data))
        }

        dispatch(setLoading())
      }, 700)
    })
  }
}

export const getWeatherAction = activeIndex => {
  switch (activeIndex) {
    case 0:
      return {
        type: SET_WEATHER_CURRENT,
        urlParam: 'weather',

        jsonLabel: 'forecast_current',
      }
    case 1:
      return {
        type: SET_WEATHER_TODAY,
        urlParam: 'forecast',
        cnt: '8',
        jsonLabel: 'forecast_today',
      }
    case 2:
      return {
        type: SET_WEATHER_FIVEDAYS,
        urlParam: 'forecast',
        cnt: '40',
        jsonLabel: 'forecast_fivedays',
      }
    default:
      return null
  }
}
