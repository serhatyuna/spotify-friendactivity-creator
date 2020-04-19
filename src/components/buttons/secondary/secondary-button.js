import React from 'react'

import './secondary-button.scss'

function SecondaryButton({ children, ...props }) {
  return (
    <button {...props} className="button button-secondary">
      {children}
    </button>
  )
}

export default SecondaryButton
