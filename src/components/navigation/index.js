import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import SearchBar from '../search/index'
import './_navigation.scss'

const Navigation = props => {
  return (
    <nav className="navbar navbar-expand navbar-light">
      <ul className="navbar-nav container">
        <li className="nav-item">
          <button
            type="button"
            onClick={props.clearWeather}
            className="nav-link px-3 btn btn-link text-center"
          >
            {' '}
            <FontAwesomeIcon size="2x" icon={['far', 'angle-left']} />{' '}
          </button>
        </li>

        <li className="nav-item mr-auto">
          <SearchBar />
        </li>

        <li className="nav-item ">
          <button
            type="button"
            onClick={props.toggleInfo}
            className="nav-link btn btn-link text-center"
          >
            {' '}
            <FontAwesomeIcon
              size="2x"
              transform="shrink-3s"
              icon={['fal', 'info']}
            />{' '}
          </button>
        </li>
      </ul>
    </nav>
  )
}
Navigation.propTypes = {
  clearWeather: PropTypes.func.isRequired,
  toggleInfo: PropTypes.func.isRequired,
}

export default Navigation
