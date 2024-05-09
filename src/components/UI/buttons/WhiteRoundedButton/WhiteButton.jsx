import React from 'react'
import classes from './WhiteButton.module.css'

const WhiteButton = ({children}) => {
  return (
    <button className={classes.WhiteButton}>
      {children}
    </button>
  )
}

export default WhiteButton