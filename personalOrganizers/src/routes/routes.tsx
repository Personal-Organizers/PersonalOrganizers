import { Routes, Route } from 'react-router-dom';
// import { ProtectedRoutes } from './ProtectedRoutes';
// import LoginPage from '../pages/LoginPage';
// import { PageNotFound } from '../pages/NotFoundPage';
// import RegisterPage from '../pages/RegisterPage';
// import ShopPage from '../pages/ShopPage';
// import { CartProvider } from '../providers/CartContext/CartContext';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='*' element={<PageNotFound />} />

    <Route element={<ProtectedRoutes />}>
      <Route
        path='/shop'
        element={
          <CartProvider>
            <ShopPage />
          </CartProvider>
        }
      />
    </Route>
  </Routes>
);