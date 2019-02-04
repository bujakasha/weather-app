import React from 'react'
import {connect} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import SearchBar from '../components/search'
import {getUserLocation} from '../state/actions/location'

const InitialView = props => {
  return (
      <main id="initial_view" className="container text-center">
        <h2 className="h1 font-weight-bold text-uppercase"> Simply weather </h2>
        <p> Search for location to start. </p>

        <div className="d-inline-block mt-4">
          <SearchBar className="bg-white border rounded" outerClassName="vw-90" />
        </div>
        <br />
        <button
          type="button"
          onClick={props.getUserLocation}
          className="btn btn-link mt-3 pr-4 text-muted"
        >
          <FontAwesomeIcon
            icon={['far', 'location']}
            size="1x"
            className="mr-2"
          />
          Get your geolocation{' '}
        </button>
      </main>
  )
}
const mapDispatchToProps = dispatch => ({
  getUserLocation: () => dispatch(getUserLocation()),
})

export default connect(
  null,
  mapDispatchToProps
)(InitialView)
