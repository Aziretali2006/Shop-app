
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header'
import AuthRoutes from '../pages/AuthRoutes/AuthRoutes';
import LayoutRoutes from '../pages/LayoutRoutes/LayoutRoutes';
import { mainPath } from '../service/path';

function Routess() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path={mainPath.layout + "*"} element={<LayoutRoutes />}/>
          <Route path={mainPath.auth + "*"} element={<AuthRoutes />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default Routess;