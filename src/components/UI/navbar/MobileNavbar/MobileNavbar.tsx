import { Link } from "react-router-dom"
import classes from "./MobileNavbar.module.css"
import hamburgerIcon from "src/data/icons/hamburger-button.png"

type mobileNavbarProps = {
  isOpen: boolean
  toggleMenu: () => void
}
const MobileNavbar = ({isOpen, toggleMenu}:mobileNavbarProps) => {

  return (
    <span className={classes.mobileNavbarContainer}>
      <button 
        className={classes.burgerButton} 
        onClick={toggleMenu}
      >
        <img 
          src={hamburgerIcon} 
          className={classes.BurgerIcon} 
          alt="open navigation list"
        />
      </button>
      {isOpen?
        <span className={classes.mobileNavContainer}>
          <ul className={classes.mobileNavList}>
            <li><Link to="/cart">Basket</Link></li>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/news">Newstand</Link></li>
            <li><Link to="/introduction">Who we are</Link></li>
            <li><Link to="/login">My profile</Link></li>
            <li><a href="#">Quit</a></li>
          </ul>
        </span>
      : ""
      }
    </span>
  )
}

export default MobileNavbar