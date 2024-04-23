import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import {cards} from '../../data'
import { projects } from '../../data'
import CatCard from '../../components/catCard/Catcard'
import ProjectCard from '../../components/projectCard/ProjectCard'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <h1>Popular services</h1>

      <Slide slidesToShow={4} arrowsScroll={4}
      >{cards.map(card=>(<CatCard item={card} key={card.id}/>))}
</Slide>
<div className="features">
  <div className="container">
    <div className="item">
      <h1>A whole world of freelance talent at your fingertips</h1>
    <div className="title">
      <img src='./img/check.png' alt=''/>
      Stick to your budget
    </div>
    <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
    <div className="title">
      <img src='./img/check.png' alt=''/>
      Get quality work done quickly
    </div>
    <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
    <div className="title">
      <img src='./img/check.png' alt=''/>
      Pay when you're happy
    </div>
    <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
    <div className="title">
      <img src='./img/check.png' alt=''/>
      Count on 24/7 support
    </div>
    <p>Find the right service for every price point. No hourly rates, just project-based pricing.Our round-the-clock support team is available to help anytime, anywhere.</p>
   
    </div>
    <div className="item">
      <video src='./img/video.mp4' controls></video>
    </div>
  </div>
</div>
<Slide slidesToShow={4} arrowsScroll={4}
      >{projects.map(card=>(<ProjectCard item={card} key={card.id}/>))}
</Slide>
    </div>
  )
}

export default Home