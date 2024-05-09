import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import GeneralPage from '../pages/General/GeneralPage'
import ProductsPage from '../pages/Products/ProductsPage'
import NewsPage from '../pages/News/NewsPage'
import ProfilePage from '../pages/Profile/ProfilePage'
import CartPage from '../pages/Cart/CartPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/general" element={<GeneralPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/news" element={<NewsPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/" element={<Navigate to="general" replace/>}/>
    </Routes>
  )
}

export default AppRouter