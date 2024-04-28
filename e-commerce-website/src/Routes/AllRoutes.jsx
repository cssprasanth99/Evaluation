import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";
import { ProductDetails } from "../Pages/ProductDetails";
import { Cart } from "../Pages/Cart";
import { Checkout } from "../Pages/Checkout";
import { Login } from "../Pages/Login";
import { PrivateRoute } from "../Pages/PrivateRoute";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
