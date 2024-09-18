import { Link, useLocation } from "react-router-dom"
import classes from "./MobileNavbar.module.css"
import hamburgerIcon from "src/data/icons/hamburger-button.png"
import { notAuthUser } from "src/constants/usersRoutes"

type mobileNavbarProps = {
  isOpen: boolean
  toggleMenu: () => void
  cartQuantity: number
}

const MobileNavbar = ({isOpen, toggleMenu, cartQuantity}:mobileNavbarProps) => {
  const routesArray = Object.values(notAuthUser);
  const location = useLocation();
  
  const toggleWithDelay = () => {
    setTimeout(() => {
      toggleMenu()
    }, 150)
  };

  const renderCartQuantity = (iconLocation: string) => {
    if (cartQuantity > 0) { 
      return (
        <span className={iconLocation === "nearBurger" ?  classes.cartQuantityWrapper : classes.quantityNearLink}>
          {cartQuantity}
        </span>
      )
    }
  };

  const renderNavigationMenu = () => {
    if (isOpen) {
      return (
        <span onClick={toggleMenu} className={classes.navbarModalWindow}>
          <ul onClick={toggleWithDelay} className={classes.navbarLinksContainer}>
            {routesArray.map((rout, index) => {
              return (
                <li key={index} className={location.pathname === rout.path ? classes.linkWrapperCurrent : classes.linkWrapper}>
                  <Link to={rout.path}>
                    {rout.name}
                    {rout.name === "Basket" 
                      ? renderCartQuantity("nearMenu") 
                      : ""}
                  </Link>
                </li>
              )
            })}
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
        {renderCartQuantity("nearBurger")}
      </button>
      {renderNavigationMenu()}
    </nav>
  )
}

export default MobileNavbar