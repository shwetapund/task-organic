import React from 'react'
import "./Footer.css"
import icon1 from "./../../assets/twitter.png";
import icon2 from "./../../assets/instagram.png";
import icon3 from "./../../assets/envelope.png";

function Footer() {
  return (
    <>
    <div className='footer-container'>
    <div className='d-flex justify-content-evenly text-white footer-cont'>
    <div className=''>
      <p className='fs-5'>hii this is thw website</p>
      <p>For far away behind <br/>
         the word mountains far <br/>
          from the countries Vokalls <br/>
          <span className='color-green'>Organic</span> </p>
    </div>
    <div>
      <p  className='fs-5'>hii this is thw website</p>
      <p className='diff-color'>For far away behind <br/>
         the word mountains far <br/>
          from the countries Vokalls </p>
    </div>
    <div>
      <p  className='fs-5'>hii this is thw website</p>
      <p className='diff-color'>For far away behind <br/>
         the word mountains far <br/>
          from the countries Vokalls </p>
    </div>
    <div>
      <p  className='fs-5'>hii this is thw website</p>
      <p>For far away behind <br/>
         the word mountains far </p>
         <button className='btn-footer'>Get this plant</button>
         <span className='small'>New</span>
    </div>

   </div>
 
    
    <div className='d-flex justify-content-evenly align-items-center mt-5 pb-5'>
        <div className='normal-text'>
            <p className='text-white'>Organic food, ecological food, or biological food are foods</p>
        </div>
        <div className='social-icon-cont'>
            <img src={icon1} className='social-icon'/>
            <img src={icon2} className='social-icon'/>
            <img src={icon3} className='social-icon'/>
        </div>
    </div>
    </div>
       </>
  )
}

export default Footer