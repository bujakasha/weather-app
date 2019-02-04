import {clearWeather} from './weather'
import {setLoading} from './app'

import {gelocateUser} from '../../utils/geolocate'

export const SET_LOCATION = 'SET_LOCATION'
export const SELECT_LOCATION = 'SELECT_LOCATION'
export const CLEAR_LOCATION = 'CLEAR_LOCATION'

export const selectLocation = ({value, title}) => {
  return dispatch => {
    dispatch(clearWeather())
    dispatch({
      type: SELECT_LOCATION,
      coordinates: value,
      place_name: title,
    })
  }
}

export const getUserLocation = () => {
  return dispatch => {
    dispatch(setLoading('Locating...'))
    gelocateUser(coordinates => {
      if (coordinates) {
        dispatch(selectLocation({value: coordinates, title: 'Located'}))
      }
      dispatch(setLoading())
    })
  }
}

export const clearWeatherAndLocaiton = () => {
  return dispatch => {
    dispatch(clearLocation())
    dispatch(clearWeather())
  }
}
export const clearLocation = () => ({
  type: CLEAR_LOCATION,
})

export const setLocation = ({name, id}) => ({
  type: SET_LOCATION,
  station_name: name,
  staion_id: id,
})
