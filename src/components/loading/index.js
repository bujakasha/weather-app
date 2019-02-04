import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './_loading.scss'

const Loading = () => {
  return (
    <div className="loading">
      <span className="text-center">
        <FontAwesomeIcon
          className="text-muted"
          icon={['fal', 'circle-notch']}
          size="3x"
          spin
        />
        <p className="mt-3"> Loading...</p>
      </span>
    </div>
  )
}

export default Loading
