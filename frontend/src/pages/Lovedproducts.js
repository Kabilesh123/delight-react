import React from 'react'
import './Lovedproduct.css'
import img1 from "../images/Dry-Kesar-Petha-350g-lifestyle.jpg-1.webp"
import img2 from "../images/Calcutta-Meetha-Paan-300gm-Lifestyle-1.webp"
import img3 from "../images/Dry-Petha-350g-lifestyle.jpg1.webp"
import img4 from "../images/Banarasi-Meetha-Paan-300gm-Lifestyle-1_3fc86593-4919-4018-934e-f7193164be05.webp"

const Lovedproducts = () => {
  return (
    <div>
       <section class="lovedproducts">
             <h4 class="d-flex justify-content-center m-5 pt-3"><b>MOST LOVED PRODUCTS</b></h4>
        
     <div class="row d-flex justify-content-center">
      
      <div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img1} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Kesar dry peetha 350g</b></h6>
    <p class="card-text">12.7k reviews</p>
    <h6 class="card-text text-danger">Rs.285.00 <del class="text-muted">Rs.4999.00</del></h6>
    <a href="#" class="btn text-white bgcard" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3 d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img2} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Calcutta meetha paan</b></h6>
   <p class="card-text">14.2k reviews</p>
       <h6 class="card-text text-danger">Rs.285.00 <del class="text-muted">Rs.4999.00</del></h6>
    <a href="#" class="btn text-white bgcard" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img3}class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Dry peetha 350g</b></h6>
    <p class="card-text">9.7k reviews</p>
        <h6 class="card-text text-danger">Rs.229.00 <del class="text-muted">Rs.3999.00</del></h6>
    <a href="#" class="btn text-white">Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 lp1" >
    <img src={img4} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>banarasi meetha paan</b></h6>
    <p class="card-text"> 10.1k reviews</p>
        <h6 class="card-text text-danger">Rs.285.00 <del class="text-muted">Rs.4999.00</del></h6>
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

export default Lovedproducts
