
import React from 'react'
import Clothes from '../../../components/clothes/Clothes';
import Container from '../../../components/Container/Container';
import Slider from '../../../components/slider/Slider';

import cls from "./Main.module.scss"

function Main() {
  return (
    <React.Fragment>
      <Slider />

      <Container>
        <div className={cls.main_clothes}>
          <h2>Our Products</h2>
          <Clothes />

          <div className={cls.main_clothes_button}>
            <button>More clothes</button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Main;