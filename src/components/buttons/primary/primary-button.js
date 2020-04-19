import React from 'react'

import './primary-button.scss'

function PrimaryButton({ children, className, ...props }) {
  const classes = 'button button-primary ' + className

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default PrimaryButton
