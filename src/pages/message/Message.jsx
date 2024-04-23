import React from 'react'
import './Message.scss'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
<span className="breadcrumbs">
  <Link to='/messages' className='link'>
    Messages
  </Link>
  <img src="/img/next.png" alt="" className='next'/>
John Doe
</span>
<div className="messages">
  <div className="item">
    <img src="/img/catPfp.jpg" alt="" />
    <p>Hi. Do you make covers for Wattpad books?</p>
  </div>
  <div className="item owner">
    <img src="/img/dogPfp.jpg" alt="" />
    <p>Yes!</p>
  </div>
  <div className="item">
    <img src="/img/catPfp.jpg" alt="" />
    <p>I was working on this new book. It would be great if you could help me</p>
  </div>
  <div className="item owner">
    <img src="/img/dogPfp.jpg" alt="" />
    <p>Yes sure!</p>
  </div>
  <div className="item">
    <img src="/img/catPfp.jpg" alt="" />
    <p>Great! Could you please tell me the process</p>
  </div>
  <div className="item owner">
    <img src="/img/dogPfp.jpg" alt="" />
    <p>Sure. Just go to this gig's page and at the right, you should see a section with pricing. You can place an order as required!</p>
  </div>
  <div className="item">
    <img src="/img/catPfp.jpg" alt="" />
    <p>Thanks!</p>
  </div>
</div>
<hr/>
<div className="write">
  <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
  <button>Send</button>

</div>
      </div>
    </div>
  )
}

export default Message