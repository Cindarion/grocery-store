import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import IntroductionPage from '../pages/Introduction/IntroductionPage'
import ProductsPage from '../pages/Products/ProductsPage'
import NewsPage from '../pages/News/NewsPage'
import ProfilePage from '../pages/Profile/ProfilePage'
import CartPage from '../pages/Cart/CartPage'
import LoginPage from '../pages/Login/LoginPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/introduction" element={<IntroductionPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/news" element={<NewsPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/" element={<Navigate to="introduction" replace/>}/>
    </Routes>
  )
}

export default AppRouter