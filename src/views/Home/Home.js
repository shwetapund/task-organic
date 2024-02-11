import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css";
import Card from '../../components/Cards/Card';
import bellPepper from "./../../assets/bell=pepper.jpg";
import cocumber from "./../../assets/cocumber.jpg";
import sproutVeggie from "./../../assets/sprout-veggie.jpg";
import carrots from "./../../assets/carrot-fruit.jpg";
import dragon from "./../../assets/dragon-fruit.jpg";
import watercress from "./../../assets/watercress.jpg";
import Cards2 from '../../components/Cards2/Cards2';
import Img1 from "./../../assets/leaf.png";
import Img2 from "./../../assets/hello.png";
import Img3 from "./../../assets/plant-a-tree.png";
import Img4 from "./../../assets/location.png";
import Img5 from "./../../assets/water-drops.png";
import Img6 from "./../../assets/water-waves.png";

function Home() {
  return (
    <>
    <div className='color-back'>
    <Navbar/>
    <div className='home-image d-flex flex-column align-items-center text-center '>
      <h1 className='text-white heading'>100% ORGANIC</h1>
      <p className='text-white small-heading'>A new website template by <u>sc.chinaz.com</u> under license Creative </p>
      <p className='text-white fs-5'><u>Commons 3.0</u></p>
      <button className='home-btn'>Get This</button>
    </div>
    <div className='d-flex justify-content-center'>
      <Card 
      image={dragon}
      title={"Organic Dragon Fruit"}
      />
      <Card 
      image={sproutVeggie}
      title={"Organic Sprout Veggie"}/>
      <Card 
      image={watercress}
      title={"Organic Watercress"}/>
    </div>
    <div className='d-flex justify-content-center second-cards'>
      <Card 
      image={carrots}
      title={"Organic Carrots"}/>
      <Card 
      image={bellPepper}
      title={"Organic Bell Pepper"}/>
      <Card 
      image={cocumber}
      title={"Organic Cocumber"}/>
    </div>

    <div className='slide-image pt-3'>
      <h1 className='text-center pt-5'>FRESH & NON-GMO PRODUCTS</h1>
      <p className='text-center'> For far away behind the word mountains far from the countries Vokalls and Consonantia their live the blin texts</p>
    </div>

    <div className='d-flex justify-content-center'>
      <Cards2 
      img={Img1}/>
      <Cards2 
      img={Img2}/>
      <Cards2 
      img={Img3}/>
    </div>

    <div className='d-flex justify-content-center second-cards'>
      <Cards2 
      img={Img4}/>
      <Cards2 
      img={Img5}/>
      <Cards2 
      img={Img6}/>
    </div>

    </div>
    </>
  )
}

export default Home