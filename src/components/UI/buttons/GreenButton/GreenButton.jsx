import React from 'react'
import classes from './GreenButton.module.css'

const GreenButton = ({children}) => {
  return (
    <button className={classes.GreenButton}>
      {children}
    </button>
  )
}

export default GreenButton