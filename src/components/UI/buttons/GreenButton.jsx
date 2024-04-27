import React from 'react'
import classes from './GreenButton.module.css'

const GreenButton = ({children}) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default GreenButton