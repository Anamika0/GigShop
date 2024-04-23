import React from 'react'
import './Slide.scss'
import Slider from 'infinite-react-carousel/lib/carousel/slider'


const Slide = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <>
    <div className='slide'>
        <div className="container">
        <Slider className='sliderItem' slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}



  </Slider>
        </div>
    </div>
    </>
  )
}

export default Slide