import React from 'react'
import './Websites.css'
import img1 from "../images/AMAZON-1.webp"
import img2 from "../images/flipkart.webp"
import img3 from "../images/swiggy.webp"
import img4 from "../images/instamart-logo.webp"
import img5 from "../images/blinkit.webp"
import img6 from "../images/bigbasket.webp"

const Websites = () => {
  return (
    <div>
         <section class="websites">


        <h2 class="d-flex justify-content-center justify-content-md-center m-5"><b>We are also available on</b></h2>

        <div class="row  row-cols-3 row-cols-md-6 mt-3 d-flex justify-content-center">

  <div class="col-3 col-md-2 m-5 me-0 mt-0 size">
    <div class="card border-0  d-flex justify-content-center text-center">
      <img src={img1} class="card-img-top tnt" alt="..."/>
      
    </div>
  </div>

  <div class="col-3 col-md-2 m-5 me-0 mt-0 size" >
    <div class="card border-0  d-flex justify-content-center text-center">
      <img src={img2} class="card-img-top tnt" alt="..."/>
      
    </div>
  </div>

  <div class="col-3 col-md-2 m-5 me-0 mt-0 size" >
    <div class="card border-0  d-flex justify-content-center text-center">
      <img src={img3} class="card-img-top tnt" alt="..."/>
      
    </div>
  </div>

  <div class="col-3 col-md-2 m-5 me-0 mt-0 size" >
    <div class="card border-0  d-flex justify-content-center text-center">
      <img src={img4} class="card-img-top tnt" alt="..."/>
      
    </div>
  </div>
  
   <div class="col-3 col-md-2 m-5 me-0 mt-0 size" >
    <div class="card border-0  d-flex justify-content-center text-center">
      <img src={img5} class="card-img-top tnt" alt="..."/>
      
    </div>
  </div>

   <div class="col-3 col-md-2 m-5 me-0 mt-0 size" >
    <div class="card border-0  d-flex justify-content-center text-center">
      <img src={img6} class="card-img-top tnt" alt="..."/>
      
    </div>
  </div>

</div>

  </section>
    </div>
  )
}

export default Websites
