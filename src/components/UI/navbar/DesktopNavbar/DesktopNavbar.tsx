import { Link } from "react-router-dom"
import classes from "./DesktopNavbar.module.css"
import { notAuthUserDesktop } from "src/constants/usersRoutes"
import ActionButton from "../../Buttons/ActionButton/ActionButton"

type desktopNavbarProps = {
  cartQuantity: number
  location: string
}
const DesktopNavbar = ({cartQuantity, location}: desktopNavbarProps) => {
  const routesArray = Object.values(notAuthUserDesktop)

  const renderCartQuantity = () => {
    if (cartQuantity > 0) { 
      return (
        <span className={classes.cartQuantityWrapper}>
          {cartQuantity}
        </span>
      )
    }
  };

  const renderCartButton = () => {
    return (
      <>
        <ActionButton
          children="Basket"
        />
        {renderCartQuantity()}
      </>
    )
  };

  const renderNavigationList = () => {
    return (
      <ul className={classes.navbarLinksContainer}>
        {routesArray.map((rout, index) => {
          return (
            <li key={index} className={location === rout.path ? `${classes.pageLinkWrapperCurrent} ${classes.pageLinkWrapper}` : classes.pageLinkWrapper}>
              <Link to={rout.path}>
                {rout.name === "Basket" 
                  ? renderCartButton()
                  : rout.name
                }
              </Link>
            </li>
          )
        })}
      </ul>
    )
  };
  
  return (
    <nav className={classes.navigationPanel}>
      {renderNavigationList()}
    </nav>
  )
}

export default DesktopNavbar