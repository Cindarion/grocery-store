import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// pages
import IntroductionPage from 'src/pages/Introduction/IntroductionPage'
import ProductsPage from 'src/pages/Products/ProductsPage'
import NewsPage from 'src/pages/News/NewsPage'
import ProfilePage from 'src/pages/Profile/ProfilePage'
import CartPage from 'src/pages/Cart/CartPage'
import LoginPage from 'src/pages/Login/LoginPage'

//components
import DisplayNavbar from './DisplayNavbar'
import Navbar from './UI/Navbar/Navbar'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <DisplayNavbar>
        <Navbar />
      </DisplayNavbar>

      <Routes>
        <Route path="/introduction" element={<IntroductionPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/" element={<Navigate to="introduction" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter