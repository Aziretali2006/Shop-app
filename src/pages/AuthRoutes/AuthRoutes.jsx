
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import * as AuthPages from "../../apps/Auth"
import useAuth from '../../hooks/useAuth'
import useLocation from '../../hooks/useLocation'
import { path } from '../../service/path'

function AuthRoutes() {
  const { token } = useAuth();
  const { actions } = useLocation();

  React.useEffect(() => {
    if(token) {
      actions.goToMain();
    }
  }, [token])

  return (
    <React.Fragment>
      <Routes>
        <Route path={path.register} element={<AuthPages.Register />}/>
        <Route path={path.login} element={<AuthPages.Login />}/>
      </Routes>
    </React.Fragment>
  )
}

export default AuthRoutes