import React from "react";
import cls from "./TextInput.module.scss"

export const TextInput = React.forwardRef(({
  type="",
  placeholder="",
  ...rest
},ref) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      ref={ref}
      {...rest}
      className={cls.text_input}
    />
  )
})