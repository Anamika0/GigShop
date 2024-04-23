import React, { useEffect, useRef, useState } from 'react'
import './Gigs.scss'
import {gigs} from '../../data'
import GigCard from '../../components/gigCard/GigCard'


const Gigs = () => {
  const sellerRef=useRef(null)
  const budgetRef=useRef(null)
  const deliveryTimeRef=useRef(null)

 

  const [seller,setSeller]=useState(false)
  const [budget,setBudget]=useState(false)
  const [deliveryTime,setDeliveryTime]=useState(false)
  const [open,setOpen]=useState(false)
  const [sort,setSort]=useState('sales')


  const reSort=(type)=> {
    setSort(type)
    setOpen(false)
  }


  const toggleSeller=(name)=>{
    switch(name){
      case 'seller':{
        setSeller(!seller)
        break
      }

      case 'budget':
        {
        setBudget(!budget)
        break
        }

      case 'deliveryTime':
        {
          setDeliveryTime(!deliveryTime)
          break
        }
       

    }
  }

  const handleClickOutside=(event)=>{
    if(sellerRef.current && !sellerRef.current.contains(event.target)){
      setSeller(()=>false)
  
    }
    if(budgetRef.current && !budgetRef.current.contains(event.target)){
      setBudget(()=>false)
  
    }
    if(deliveryTimeRef.current && !deliveryTimeRef.current.contains(event.target)){
      setDeliveryTime(()=>false)
  
    }
  }

  useEffect(()=>
  {document.addEventListener('click', handleClickOutside, true)},[])
  return (
    <div className='gigs'>

    <div className="container">
      <div className="navpath">
      <img src="./img/home.png" alt=""  className='home'/>
      <img src="./img/next.png" alt="" className='next'/>
      <span>GigShop GRAPHICS & DESIGN</span>
      <img src="./img/next.png" alt="" className='next'/>
      

      </div>
   <h1>AI Artists</h1>
   <p>Explore amazing skills and possiblities with GigShop's AI Artists
</p>
<div className="menu">
  <div className="left">
    <div className="seller" ref={sellerRef}>
    <button onClick={()=>toggleSeller('seller')}>Seller Details<img src='./img/arrowDown.png' className={`iconNotSelected ${  seller && "iconSelected" }`}/></button>
    {seller?
  (<div className="menu">

<a href="#">Top Sellers</a>
    <a href="#">Advanced</a>
    <a href="#">Intermediate</a>
    <a href="#">New Seller</a>
  </div>):null
    }
    </div>
    <div className="budget" ref={budgetRef} >
    <button onClick={()=>toggleSeller('budget')}>Budget<img src='./img/arrowDown.png' className={`iconNotSelected ${  budget && "iconSelected" }`}/></button>
    {budget?
  (<div className="menu">
    <a href="#">Less than 10K</a>
    <a href="#">10k to 30k</a>
    <a href="#">More than 30K</a>
    <a href="#">Any</a>

  </div>):null
    }    </div>
    <div className="deliveryTime" ref={deliveryTimeRef}  >
    <button onClick={()=>toggleSeller('deliveryTime')}>Delivery Time<img src='./img/arrowDown.png' className={`iconNotSelected ${  deliveryTime && "iconSelected" }`}/></button>
    {deliveryTime?
  (<div className="menu">
    <a href="#">Express 24H</a>
    <a href="#">2 days</a>
    <a href="#">7 to 15 days</a>
    <a href="#"> More than 15 days</a>
  </div>):null
    } </div>
  </div>
  <div className="right">
  <span className="sortBy">Sort by</span>
  <span className="sortType">{sort=='sales'?"Best Selling": "Newest"}</span>
  <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
  {open &&(<div className="rightMenu">
    {sort==='sales'?<span onClick={()=>reSort("createdAt")}>Newest</span>
    :(<span onClick={()=>reSort("sales")}>Best Selling</span>)}
  </div>)}
</div>
    </div>
    <div className="cards">
          {gigs.map((gig) => (
            <GigCard className='gigCardItems' key={gig.id} item={gig} />
          ))}
        </div>
    </div>
    </div>
  )
}

export default Gigs