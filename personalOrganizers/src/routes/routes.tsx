import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
// import { ProtectedRoutes } from './ProtectedRoutes';
// import { PageNotFound } from '../pages/NotFoundPage';
// import RegisterPage from '../pages/RegisterPage';
// import ShopPage from '../pages/ShopPage';
// import { CartProvider } from '../providers/CartContext/CartContext';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    {/*<Route path='/register' element={<RegisterPage />} />
    <Route path='*' element={<PageNotFound />} /> */}

    {/* <Route element={<ProtectedRoutes />}>
      <Route
        path='/shop'
        element={
          <CartProvider>
            <ShopPage />
          </CartProvider>
        }
      />
    </Route> */}
  </Routes>
);
