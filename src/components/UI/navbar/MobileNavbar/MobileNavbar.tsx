import { Link } from "react-router-dom"
import classes from "./MobileNavbar.module.css"
import hamburgerIcon from "src/data/icons/hamburger-button.png"

type mobileNavbarProps = {
  isOpen: boolean
  toggleMenu: () => void
  cartQuantity: number
}
const MobileNavbar = ({isOpen, toggleMenu, cartQuantity}:mobileNavbarProps) => {
  const toggleWithDelay = () => {
    setTimeout(() => {
      toggleMenu()
    }, 150)
  };

  const renderCartQuantity = () => {
    if (cartQuantity > 0) { 
      return (
        <span className={classes.cartQuantityWrapper}>
          {cartQuantity}
        </span>
      )
    }
  };

  const renderBasketLink = () => {
    if (cartQuantity > 0) {
      return (
        <li className={classes.greenBackground}>
          <Link to="/cart">
            Basket
            <span className={classes.quantityNearLink}>
              {cartQuantity}
            </span>
          </Link>
        </li>
      )
    }
    return (
      <li>
        <Link to="/cart">Basket</Link>
      </li>
    )
  };

  const renderNavigationMenu = () => {
    if (isOpen) {
      return (
        <span 
          onClick={toggleMenu}
          className={classes.navbarModalWindow}>
          <ul 
            onClick={toggleWithDelay} 
            className={classes.navbarLinksContainer}>
            {renderBasketLink()}
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/news">Newstand</Link></li>
            <li><Link to="/introduction">Who we are</Link></li>
            <li><Link to="/login">My profile</Link></li>
            <li><a href="#">Quit</a></li>
          </ul>
        </span>
      )
    }  
  };

  return (
    <nav className={classes.mobileNavbar}>
      <button 
        className={classes.burgerButton} 
        onClick={toggleMenu}
      >
        <img 
          src={hamburgerIcon} 
          className={classes.BurgerIcon} 
          alt="open navigation menu"
        />
        {renderCartQuantity()}
      </button>
      {renderNavigationMenu()}
    </nav>
  )
}

export default MobileNavbar