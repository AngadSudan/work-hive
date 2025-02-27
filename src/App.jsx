import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CompanyLogin from './pages/CompanyLogin.jsx';
import CompanySignup from "./pages/CompanySignup.jsx";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <>
      <Header />
      <Outlet>
       </Outlet>
      <Footer />
    </>
  );
}

export default App;