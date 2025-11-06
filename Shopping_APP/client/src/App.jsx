import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDashboard/>}>
          <Route index element={<ShoppingCart />}/>

          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<h1>View Order</h1> }/>
          </Route>
          <Route path="/login" element={<h1>Login Here</h1> }/>
          <Route path="/register" element={<h1>Register Here</h1> }/>
          <Route path="*" element={<h1>404 Page </h1> }/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


// react-dom : used for connecting virtual with real dom