import React,{useEffect, useState} from 'react'
import './Featured.scss'
import { Carousel } from 'react-responsive-carousel'

const images=['./img/man.png','./img/women.png']

const Featured = () => {

  const [currentIndex, setCurrentIndex]=useState(0)

  useEffect(()=>{
    const intervalId = setInterval(()=>{
    if(currentIndex===images.length-1){
setCurrentIndex(0);
    }
  else{
    setCurrentIndex(currentIndex+1);
  }},3000)
  return()=>clearInterval(intervalId)
  }
  )
  return (
    <div className='featured'>
    <div className="container">
    <div className="left">
      <h1>Search for freelance services
</h1>
<div className="search">
  <div className="searchInput">
    <img src='./img/search.png' alt='' />
    <input type='text' placeholder='Search for any service...'/>
  </div>
  <button>Search</button>
</div>
<div className="popular">
  <span>Popular</span>
  <button>Web design</button>
  <button>Wordpress</button>
  <button>Logo design</button>
  <button>AI services</button>

</div>
    </div>

    <div className="right">
       <img className='animateImage' src={images[currentIndex]} alt=''/>


       </div>

    </div>
    </div>
  )
}

export default Featured