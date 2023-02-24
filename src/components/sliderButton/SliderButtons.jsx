
import classNames from 'classnames'
import React from 'react'
import { MdArrowForwardIos , MdArrowBackIosNew } from "react-icons/md";

import cls from "./SliderButtons.module.scss"

function SliderButtons({direct , handleClick}) {
  const mode = ["left" , "right"]
  return (
    <button 
      onClick={handleClick}
      className={
        classNames(cls.slider_button, cls[direct])
      }
    >
      {
        direct === "left"
          ? <MdArrowBackIosNew />
          : <MdArrowForwardIos />
      }
    </button>
  )
}

export default SliderButtons;