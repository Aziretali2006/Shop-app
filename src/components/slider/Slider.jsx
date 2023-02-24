
import classnames from 'classnames';
import React from 'react'
import { SliderList } from '../../utils/List';
import Container from '../Container/Container';
import DotsSlider from '../dotsSlider/DotsSlider';
import SliderButtons from '../sliderButton/SliderButtons';
import cls from "./Slider.module.scss"

function Slider() {
  const [currentSlider, setCurrentSlider] = React.useState(1);

  const nextSlider = () => {
    if(currentSlider !== SliderList.length) {
      setCurrentSlider(currentSlider + 1)
    } else {
      setCurrentSlider(1)
    }
  }

  const prevSlider = () => {
    if(currentSlider > 1) {
      setCurrentSlider(currentSlider - 1)
    } else {
      setCurrentSlider(SliderList.length)
    }
  }


  return (
    <Container>
      <div className={cls.slider_parent}>
        <div className={cls.slider_parent_block}>
          {SliderList.map((item , index) => (
            <div
              key={item.id}
              style={{background: `url("${item.image}") center / cover`}}
              className={
                currentSlider === index + 1
                  ? classnames(cls.slider_item , cls.activeSlider)
                  : cls.slider_item
              }
            >
              <SliderButtons direct="left" handleClick={prevSlider}/>
              <SliderButtons direct="right" handleClick={nextSlider}/>
            </div>
          ))}
        </div>

        <div className={cls.slider_parent_dots}>
          {Array.from({length: SliderList.length}).map((item , index) => 
            <DotsSlider key={index} currentSlider={currentSlider} dotsIndex={index}/>)}
        </div>
      </div>
    </Container>
  )
}

export default Slider;
