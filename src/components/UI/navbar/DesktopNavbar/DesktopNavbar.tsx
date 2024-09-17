import { Link } from "react-router-dom"
import ActionButton from "../../Buttons/ActionButton/ActionButton"
import classes from "./DesktopNavbar.module.css"

type desktopNavbarProps = {
  cartQuantity: number
}
const DesktopNavbar = ({cartQuantity}: desktopNavbarProps) => {
  const renderCartQuantity = () => {
    if (cartQuantity > 0) { 
      return (
        <span className={classes.cartQuantityWrapper}>
          {cartQuantity}
        </span>
      )
    }
  }
  
  return (
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
  )
}

export default DesktopNavbar