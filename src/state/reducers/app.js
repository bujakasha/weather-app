import {TOGGLE_INFO_VIEW, SET_LOADING} from '../actions/app'

const initialState = {
  isLoading: false,
  showInfo: false,
}
export default (state = initialState, action) => {
  const {type} = action
  switch (type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading || false,
      }
    }
    case TOGGLE_INFO_VIEW: {
      return {
        ...state,
        showInfo: !state.showInfo,
      }
    }
    default:
      return state
  }
}
