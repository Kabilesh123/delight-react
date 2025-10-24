import React from 'react'
import './Lovedproduct.css'
import img1 from "../images/Bikaneri-Bhujia-300gm-Pouch-Lifestyle.webp"
import img2 from "../images/Nandran-Banan-Chips-200g-lifetyle.jpg-1.webp"
import img3 from "../images/Butter-Murukku-200g-Lifestyle.jpg-1.webp"
import img4 from "../images/Masala-Nut-Mix-200g-Lifestyle-Images-1.webp"

const Dailysnacks = () => {
  return (
    <div>
        <section class="dailysnacks ">
             <h4 class="d-flex justify-content-center m-5 pt-5"><b>DAILY SNACKS</b></h4>
        
     <div class="row d-flex justify-content-center">
      
      <div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img1} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Bikaneri Bhujia 300g</b></h6>
    <p class="card-text">12.7k reviews</p>
    <h6 class="card-text text-danger">Rs.285.0 <del class="text-muted">Rs.4999.00</del></h6>
    <a href="#" class="btn text-white bgcard" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3 d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img2}class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Nanderan banana chips 200g</b></h6>
   <p class="card-text"> .2k reviews</p>
       <h6 class="card-text text-danger">Rs.285.00 <del class="text-muted">Rs.4999.00</del></h6>
    <a href="#" class="btn text-white bgcard" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img3} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>butter murukku 200g</b></h6>
    <p class="card-text"> 9.7k reviews</p>
        <h6 class="card-text text-danger">Rs.229.00 <del class="text-muted">Rs.3999.00</del></h6>
    <a href="#" class="btn text-white bgcard" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img4} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Masala nut mix 200g</b></h6>
    <p class="card-text">10.1k reviews</p>
        <h6 class="card-text text-danger">Rs.285.0 <del class="text-muted">Rs.4999.00</del></h6>
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

export default Dailysnacks
