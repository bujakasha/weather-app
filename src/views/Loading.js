import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const LoadingView = ({isLoading}) => {
  const loadingMessage =
    (typeof isLoading === 'string' || isLoading instanceof String) && isLoading

  return (
    <main className="view_container loading_container d-flex align-items-center justify-content-center">
      <span className="mb-4 text-center">
        <FontAwesomeIcon
          className="text-muted"
          icon={['fal', 'circle-notch']}
          size="3x"
          spin
        />

        <p className="mt-3"> {loadingMessage || 'Loading...'} </p>
      </span>
    </main>
  )
}

export default LoadingView
