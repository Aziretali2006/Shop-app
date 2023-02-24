import React from 'react'
import cls from "./AuthSubmit.module.scss"

function AuthSubmit({location}) {
  return (
    <div className={cls.auth_button_center}>
      <button className={cls.auth_button}>
        {location}
      </button>
    </div>
  )
}

export default AuthSubmit;