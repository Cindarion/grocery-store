import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// pages
import IntroductionPage from '@/pages/Introduction/IntroductionPage'
import ProductsPage from '@/pages/Products/ProductsPage'
import NewsPage from '@/pages/News/NewsPage'
import ProfilePage from '@/pages/Profile/ProfilePage'
import CartPage from '@/pages/Cart/CartPage'
import AuthPage from '@/pages/Auth/AuthPage'

//components
import DisplayNavbar from '@/components/DisplayNavbar'
import Navbar from '@/components/UI/navbar/Navbar'

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
        <Route path="/login" element={<AuthPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/" element={<Navigate to="introduction" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter