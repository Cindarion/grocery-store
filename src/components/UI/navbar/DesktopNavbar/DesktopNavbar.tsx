import { Link } from "react-router-dom"
import ActionButton from "../../Buttons/ActionButton/ActionButton"
import classes from "./DesktopNavbar.module.css"

type desktopNavbarProps = {
  renderCartQuantity: () => JSX.Element | undefined
}
const DesktopNavbar = ({renderCartQuantity}: desktopNavbarProps) => {
  return (
    <nav className={classes.navigationPanel}>
      <ul>
        <li><Link to="/products">Shop</Link> </li>
        <li><Link to="/news">Newstand</Link></li>
        <li><Link to="/introduction">Who we are</Link></li>
        <li><Link to="/login">My profile</Link></li>
        <li><Link to="/cart">
          <ActionButton children={"Basket"}/>
          <span className={classes.cartQuantityContainer}>
            {renderCartQuantity()}
          </span>
        </Link>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNavbar