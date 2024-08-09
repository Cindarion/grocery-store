import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const DisplayNavbar = ({children}) => {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === '/login') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true)
    }
  }, [location])

  return (
    <>{showNavbar && children}</>
  )
}

export default DisplayNavbar