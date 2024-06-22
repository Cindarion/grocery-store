import React from 'react'
import classes from './SimpleButton.module.css'

const SimpleButton = ({children}) => {
  return (
    <button className={classes.SimpleButton}>
      {children}
    </button>
  )
}

export default SimpleButton