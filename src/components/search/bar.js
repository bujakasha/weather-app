import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './_search.scss'

const SearchBar = ({className, toggleDropdown, onValueChange, ...props}) => {
  let [value, setValue] = useState('')
  const onChange = event => {
    setValue(event.target.value)
    onValueChange(event.target.value)
  }
  const clearValue = event => {
    setValue('')
    onValueChange(null)
  }
  return (
    <div className={'search_bar d-flex ' + (className||'')}>
      <label
        htmlFor="search"
        className="btn btn-lg text-center pr-2 mb-0"
        href="#"
      >
        <FontAwesomeIcon size="1x" icon={['far', 'search']} />{' '}
      </label>
      <input
        type="text"
        id="search"
        onBlur={toggleDropdown.bind(props, false)}
        onFocus={toggleDropdown.bind(props, true)}
        autoComplete="off"
        value={value}
        onChange={onChange}
        className="form_control bg-transparent border-0 pb-2"
        placeholder="Search for a place"
      />

      {value && (
        <button
          type="button"
          onClick={clearValue}
          className="btn btn-link text-dark btn-lg text-center"
        >
          <FontAwesomeIcon
            size="1x"
            transform="grow-2s"
            icon={['far', 'times']}
          />{' '}
        </button>
      )}
    </div>
  )
}

SearchBar.propTypes = {
  className: PropTypes.string,
  toggleDropdown: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
}

export default SearchBar
