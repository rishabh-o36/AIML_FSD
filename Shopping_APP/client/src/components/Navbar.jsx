import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/cart">View Cart</Link>
      <Link to="/order">View Order</Link>
    </div>
  )
}

export default Navbar
