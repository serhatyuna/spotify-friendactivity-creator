import React from 'react'

import './primary-button.scss'

function PrimaryButton({ children, ...props }) {
  return (
    <button {...props} className="button button-primary">
      {children}
    </button>
  )
}

export default PrimaryButton
