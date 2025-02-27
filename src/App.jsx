import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CompanyLogin from './pages/CompanyLogin.jsx';
function App() {
  return (
    <>
      <Header />
      <Outlet><div className="app">
      <CompanyLogin />
    </div></Outlet>
      <Footer />
    </>
  );
}

export default App;