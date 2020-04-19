import React from 'react'

import './secondary-button.scss'

function SecondaryButton({ children, className, ...props }) {
  const classes = 'button button-secondary ' + className

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default SecondaryButton
