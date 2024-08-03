import React from 'react'
import classes from './ActionButton.module.css'

const ActionButton = ({onClick, children}) => {
  return (
    <button
      onClick={onClick} 
      className={children === "-" ? classes.ActionButton_darker : classes.ActionButton}
    >
      {children}
    </button>
  )
}

export default ActionButton