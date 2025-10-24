import React from 'react'
import "./First.css"
import img1 from "../images/sweets_1_1024x1024.png"
import img2 from "../images/snacks_1_3754717e-5cfa-4bf8-bc8f-96dbd1e0907f_1024x1024.png"
import img3 from "../images/spices_1_1024x1024.png"
import img4 from "../images/pickles_1_1024x1024.png"
import img5 from "../images/mukhwas_2_1024x1024.png"
import img6 from "../images/rice_1_1024x1024.png"

const First = () => {
  return (
    <div>
      <section class="CATEGORIES">

        <h4 class="d-flex justify-content-center justify-content-md-center m-5"><b>CATEGORIES</b></h4>

        <div class="row  row-cols-3 row-cols-md-6 mt-3 d-flex justify-content-center">

  <div class="col-3 col-md-2 m-5 me-0 mt-0 sweets" >
    <div class="card border-0  d-flex justify-content-center text-center fullcard"/>
      <img src={img1} class="card-img-top tnt" alt="..."/>
      <div class="card-body">
        <h6 class="card-title">Sweets</h6>
      </div>
    </div>


  <div class="col-3 col-md-2 m-5 me-0 mt-0 snacks" >
    <div class="card border-0 d-flex justify-content-center text-center" >
      <img src={img2}class="card-img-top tnt" alt="..."/>
      <div class="card-body">
        <h6 class="card-title">Snacks</h6>
      </div>
    </div>
  </div>

  <div class="col-3 col-md-2 m-5 me-0 mt-0 masala" >
    <div class="card  border-0 d-flex justify-content-center text-center">
      <img src={img3} width="" height="" class="card-img-top tnt" alt="..."/>
      <div class="card-body">
        <h6 class="card-title">Masala</h6>
      </div>
    </div>
  </div>

  <div class="col-3 col-md-2 m-5 me-0 mt-0 pickle" >
    <div class="card border-0 d-flex justify-content-center text-center">
      <img src={img4} class="card-img-top tnt" alt="..."/>
      <div class="card-body">
        <h6 class="card-title">Pickle</h6>
      </div>
    </div>
  </div>
  
   <div class="col-3 col-md-2 m-5 me-0 mt-0 mukhwas">
    <div class="card border-0 d-flex justify-content-center text-center">
      <img src={img5}class="card-img-top tnt" alt="..."/>
      <div class="card-body">
        <h6 class="card-title">Mukhwas</h6>
      </div>
    </div>
  </div>

   <div class="col-3 col-md-2 m-5 me-0 mt-0 rice" >
    <div class="card  border-0 d-flex justify-content-center text-center">
      <img src={img6} class="card-img-top tnt" alt="..."/>
      <div class="card-body">
        <h6 class="card-title">Rice</h6>
      </div>
    </div>
  </div>
    </div>
    </section>
    </div>
  )
}

export default First
