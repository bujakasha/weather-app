import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {getMobileScreensize} from '../hooks/windowWidth'

import InitialView from '../views/Initial'
import WeatherView from '../views/Weather'
import LoadingView from '../views/Loading'
import InfoView from '../views/Info'

import './App.scss'

const App = props => {
 
  const isSm = getMobileScreensize()
  const {isLoading, coordinates, forecast_current, showInfo} = props
  return (
    <div className="app_container">
      <div style={{minHeight: '90vh'}}>
        {(showInfo && <InfoView />) ||
          (isLoading && forecast_current === null && (
            <LoadingView isLoading={isLoading} />
          )) ||
          (coordinates && <WeatherView isSm={isSm} />) || <InitialView />}
      </div>
      <div
        className="w-100 text-center py-4"
        style={{position: 'relative', bottom: 0, left: 0}}
      >
        <a href="#" className="btn btn-link  text-muted">
          <FontAwesomeIcon icon={['fab', 'github']} size="1x" /> Github{' '}
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  showInfo: state.app.showInfo,
  coordinates: state.location.coordinates,
  forecast_current: state.weather.current
})

export default connect(mapStateToProps)(App)
