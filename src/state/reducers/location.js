import {
  SET_LOCATION,
  SELECT_LOCATION,
  CLEAR_LOCATION,
} from '../actions/location'

const initialState = {
  place_name: null,
  coordinates: null,
  station_name: null,
  station_id: null,
  country: null,
}
export default (state = initialState, action) => {
  const {type} = action
  switch (type) {
    case SELECT_LOCATION: {
      return {
        ...state,
        coordinates: action.coordinates,
        place_name: action.place_name,
      }
    }
    case SET_LOCATION: {
      return {
        ...state,
        station_name: action.station_name,
        station_id: action.station_id,
      }
    }
    case CLEAR_LOCATION: {
      return initialState
    }
    default:
      return state
  }
}
