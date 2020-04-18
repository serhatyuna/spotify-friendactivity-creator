import React from 'react'
import './select-input.scss'

function SelectInput({ children, ...props }) {
  const options = children.filter((c) => c.type === 'option')
  const otherChildren = children.filter((c) => c.type !== 'option')

  return (
    <div>
      {otherChildren}
      <select {...props}>{options}</select>
    </div>
  )
}

export default SelectInput
