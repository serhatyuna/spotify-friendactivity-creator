import React from 'react'
import './text-input.scss'

function TextInput({ children, ...props }) {
  return (
    <div className="text-input-container">
      {children}
      <input type="text" {...props} />
    </div>
  )
}

export default TextInput
