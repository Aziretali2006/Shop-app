
import React from 'react'
import { Link } from 'react-router-dom'
import "./AuthNavigate.scss"

const AuthNavigate = ({location}) => {
  return (
    <Link 
      to={location === "register" ? "/auth/login" : "/auth/register"}
      className="authNavigate_link"
    >
      {
        location === "register"
          ? "Already have an account!"
          : "You dont have an accout!"
      }
    </Link>
  )
}

export default AuthNavigate
