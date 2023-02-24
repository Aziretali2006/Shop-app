
import classNames from 'classnames';
import React from 'react'
import cls from "./DotsSlider.module.scss"

function DotsSlider({dotsIndex , currentSlider}) {
  return (
    <div className={
      currentSlider === dotsIndex + 1
        ? classNames(cls.dots_slider , cls.activeDots)
        : cls.dots_slider
    }>
      
    </div>
  )
}

export default DotsSlider;
