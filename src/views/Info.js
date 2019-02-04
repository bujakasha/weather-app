import React from 'react'
import {connect} from 'react-redux'
import {toggleInfo} from '../state/actions/app'

const InfoView = props => {
  return (
    <main
      id="info_view"
      className="view_container  d-flex align-items-center justify-content-center"
    >
      <span
        className="text-center px-5 mb-5 pb-5 pb-md-0"
        style={{maxWidth: '650px'}}
      >
        <p className="h2 font-weight-light">
          Hey, this is simple weather app that displays{' '}
          <a
            className="text-dark font-weight-normal"
            href="https://openweathermap.org"
          >
            {' '}
            OpenWeatherMap
          </a>{' '}
          data.
        </p>
        <button
          type="button"
          onClick={props.toggleInfo}
          className="btn btn-lg btn-link mt-4"
        >
          {' '}
          Back to weather{' '}
        </button>
      </span>
    </main>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleInfo: () => dispatch(toggleInfo()),
})

export default connect(
  null,
  mapDispatchToProps
)(InfoView)
