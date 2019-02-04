import {
  SET_WEATHER_CURRENT,
  SET_WEATHER_TODAY,
  SET_WEATHER_FIVEDAYS,
  SET_ACTIVE_INDEX,
  CLEAR_WEATHER,
} from '../actions/weather'

const initialState = {
  activeIndex: 0,

  current: null,
  today: null,
  fiveDays: null,
}
export default (state = initialState, action) => {
  const {type} = action
  switch (type) {
    case SET_ACTIVE_INDEX: {
      return {
        ...state,
        activeIndex: action.activeIndex,
      }
    }
    case SET_WEATHER_CURRENT: {
      return {
        ...state,
        current: action.data,
      }
    }
    case SET_WEATHER_TODAY: {
      return {
        ...state,
        today: action.data,
      }
    }
    case SET_WEATHER_FIVEDAYS: {
      return {
        ...state,
        fiveDays: action.data,
      }
    }
    case CLEAR_WEATHER: {
      return initialState
    }
    default:
      return state
  }
}
