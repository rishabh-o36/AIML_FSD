import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
}   

export default UserDashboard;