import React from 'react'
import classes from './ActionButton.module.css'

const SimpleButton = ({onClick, children}) => {
  return (
    <button
      onClick={onClick} 
      className={classes.ActionButton}
    >
      {children}
    </button>
  )
}

export default SimpleButton