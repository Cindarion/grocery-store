import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import classes from "./Navbar.module.css"
import ActionButton from 'src/components/UI/Buttons/ActionButton/ActionButton'
import { CartContext } from 'src/components/context/cartContext'

const Navbar: React.FC = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('CartContext must be used within a TodoProvider');
  };
  const { getCartQuantity } = cartContext;

  const renderCartQuantity = () => {
    if (getCartQuantity() > 0) {
      return (
       <span className={classes.cartQuantityContainer}>{getCartQuantity()}</span>
      )
    };
  };

  return (
    <header className={classes.navbarHeader}>
      <div className={classes.companyTitle}>
        <Link to='/introduction'>
          <span>
            BloomBasket
          </span>
        </Link>
      </div>
      <nav className={classes.navigationPanel}>
        <ul>
          <li><Link to="/products">Shop</Link> </li>
          <li><Link to="/news">Newstand</Link></li>
          <li><Link to="/introduction">Who we are</Link></li>
          <li><Link to="/login">My profile</Link></li>
          <li><Link to="/cart">
            <ActionButton children={"Basket"}/>
            {renderCartQuantity()}
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default React.memo(Navbar);