
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import * as LayoutPages from "../../apps/Layout"
import Loader from '../../components/loader/Loader';
import { Hooks } from '../../hooks';
import { path } from '../../service/path';

function LayoutRoutes() {
  const { currentUser , token } = Hooks.useUser();

  if(token) {
    if(!currentUser) {
      return <Loader />
    }
   } 

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LayoutPages.Main />}/>
        <Route path={path.favorite} element={<LayoutPages.Favorite />}/>
        <Route path={path.cart} element={<LayoutPages.Cart />}/>
      </Routes>
    </React.Fragment>
  )
}

export default LayoutRoutes;
