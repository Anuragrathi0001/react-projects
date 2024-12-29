import React from 'react'
import '../App.css'
// import Button from './Button'
function Hero() {
  return (
    <div className='container'>

      <nav className='nav-links'> <img src="src\assets\brand.png" alt="nike_logo" />
        <ul className='links'>
          <li><a href="#">STORE</a></li>
          <li><a href="#">PRODUCT</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a href="#">ABOUT</a></li></ul>
        <button>Register</button>
      </nav>
      <div className="middle">
        <div className="left">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <h5>YOUR FEET DESERVE THE BEST
            AND WE ARE HERE TO PROVIDE THAT THING TO YOU WITH OUR RANGES FROM FLY TO FORCE FROM DUNK TO AMBUSH AND FROM VAPOUR TO FLY</h5>
          <div className="btns"><button>Shop Now</button> <button className='grey-btn'>Category</button></div> 
          <div className="btm-cont"><h6>ALSO AVAIL ON </h6> <img src="src\assets\amazon.png" alt="amazon" /><img src="src\assets\flipkart.png" alt="flipkart" /></div> 
        </div>

        <div className="right"> <img src="src\assets\shoe_image.png" alt="nike's" /></div>
      </div>

    </div>
  )
}

export default Hero
