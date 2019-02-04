import {combineReducers} from 'redux'
import app from './app'
import weather from './weather'
import location from './location'

export default combineReducers({
  app,
  weather,
  location,
})
