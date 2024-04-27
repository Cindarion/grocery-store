import React from 'react'
import classes from "./Navbar.module.css"
import GreenButton from '../buttons/GreenButton'

const Navbar = () => {
  return (
    <header>
      <div className={classes.companyTitle}><a href='#'><span>BloomBasket</span></a></div>
      <nav className={classes.navPanel}>
        <ul>
          <li>
            <a href='#'><span>Shop</span></a>
          </li>
          <li>
            <a href='#'><span>Newstand</span></a>
          </li>
          <li>
            <a href='#'><span>Who we are</span></a>
          </li>
          <li>
            <a href='#'><span>My profile</span></a>
          </li>
          <li>
            <a href='#'>
              <GreenButton>Basket</GreenButton>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar