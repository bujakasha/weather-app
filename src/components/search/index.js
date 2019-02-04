import React, {useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {mapboxGeocode} from '../../utils/mapboxGecode'
import {selectLocation} from '../../state/actions/location'
import SearchBar from './bar'
import Dropdown from './dropdown'
import './_search.scss'

const Search = props => {
  let [isLoading, setLoading] = useState(false)
  let [isOpen, setIsOpen] = useState(false)
  let [json, setJson] = useState([])

  const handleInputChange = value => {
     setIsOpen(true)
     setLoading(true)
     mapboxGeocode(value, result => {
       setJson(result || null)
       setLoading(false)
     })
   }

  const toggleDropdown = isOpen => {
    setIsOpen(isOpen || false)
  }

  const onSelect = item => {
    console.log(item)
    props.selectLocation(item)
  }

  return (
    <div className={'search_container ' + (props.outerClassName || '')}>
      <SearchBar
        className={props.className}
        toggleDropdown={toggleDropdown}
        isLoading={isLoading}
        onValueChange={handleInputChange}
      />
      {isOpen && (
        <Dropdown onSelect={onSelect} isLoading={isLoading} data={json} />
      )}
    </div>
  )
}

Search.propTypes = {
  className: PropTypes.string,
  outerClassName: PropTypes.string,
}

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  location: state.weather.location,
})

const mapDispatchToProps = dispatch => ({
  selectLocation: item => dispatch(selectLocation(item)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
