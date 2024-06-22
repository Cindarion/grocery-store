import React, { memo } from 'react'
import {Link} from 'react-router-dom'
import classes from "./Navbar.module.css"
import SimpleButton from '../buttons/SimpleButton/SimpleButton'

const Navbar = memo(() => {
  return (
    <header className={classes.header}>
      <div className={classes.companyTitle}>
        <Link to='/general'>
          <span>
            BloomBasket
          </span>
        </Link>
      </div>

      <nav className={classes.navPanel}>
        <ul>
          <li>
            <Link to="/products">
              Shop
            </Link> 
          </li>
          <li>
            <Link to="/news">
              Newstand
            </Link>
          </li>
          <li>
            <Link to="/general">
              Who we are
            </Link>
          </li>
          <li>
            <Link to="/profile">
              My profile
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <SimpleButton>
                Basket
              </SimpleButton>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
})

export default Navbar;