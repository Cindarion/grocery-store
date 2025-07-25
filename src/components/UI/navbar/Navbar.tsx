import React, { useContext, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import classes from "./Navbar.module.css"
import { CartContext } from '@/components/context/cartContext'
import MobileNavbar from '@/components/UI/navbar/MobileNavbar/MobileNavbar'
import DesktopNavbar from '@/components/UI/navbar/DesktopNavbar/DesktopNavbar'

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation().pathname;
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('CartContext must be used within a TodoProvider');
  };
  const { getCartQuantity } = cartContext;
  const cartQuantity = getCartQuantity();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
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
      <DesktopNavbar
        cartQuantity={cartQuantity}
        location={location}
      />
      <MobileNavbar 
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        cartQuantity={cartQuantity}
        location={location}
      />
    </header>
  )
}

export default React.memo(Navbar);