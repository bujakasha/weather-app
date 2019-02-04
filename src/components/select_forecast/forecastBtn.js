import React from 'react'
import PropTypes from 'prop-types'

const ForecastGroupButton = ({ title, onClick, isActive})=>(
  <button
  type="button"
  onClick={onClick}
  className={
    'btn ' + ((isActive && 'btn-dark') || 'btn-outline-dark')
  }
>
  {' '}
  {title}{' '}
</button>
)
ForecastGroupButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
}

export default ForecastGroupButton