import React from 'react'
import './Lovedproduct.css'
import img1 from "../images/Beetroot-kanji-250ml.webp"
import img2 from "../images/Radish-Kanji250ml_392478af-7409-4c5a-bed6-bf26f6a5e405.webp"
import img3 from "../images/smoked-salt100g.webp"
import img4 from "../images/Green-chilli-lemon-salt.webp"


const Newarrivals = () => {
  return (
    <div>
       <section class="new arrivals ">
             <h4 class="d-flex justify-content-center m-5 pt-5"><b>NEW ARRIVALS</b></h4>
        
     <div class="row d-flex justify-content-center">
      
      <div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img1} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Beetroot kanji 250ml</b></h6>
    <p class="card-text">12.7k reviews</p>
    <h6 class="card-text text-danger">Rs.98.00<del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white bgcard" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3 d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img2} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Beetroot kanji 250ml</b></h6>
   <p class="card-text">14.2k reviews</p>
       <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white bgcard" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img3} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Smoked salt 100g</b></h6>
    <p class="card-text"> 9.7k reviews</p>
        <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white bgcard" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img4} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Gree chilli lemon-salted</b></h6>
    <p class="card-text">10.1k reviews</p>
        <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white bgcard" >Add to cart</a>
  </div>
  </div>
  
</div>
     </div>
     
  <div class=" d-flex justify-content-center m-5">
     <a href="#" class="btn text-white p-3 bgcard" >View all</a>
  </div>
   
   
    </section>
    </div>
  )
}

export default Newarrivals
