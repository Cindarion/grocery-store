import React, { memo, useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import classes from "./Navbar.module.css"
import ActionButton from '../Buttons/ActionButton/ActionButton'
import { CartContext } from '../../context/cartContext'

const Navbar = memo(() => {
  const { cart, dislpayQuantity } = useContext(CartContext)

  return (
    <header>
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
              <ActionButton>
                Basket {dislpayQuantity && <span>({cart.length})</span>}
              </ActionButton>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
})

export default Navbar;