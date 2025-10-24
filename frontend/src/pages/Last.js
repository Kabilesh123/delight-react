import React from 'react'
import './Last.css'
import img1 from "../images/calcutta_metha_paan_600x400.webp"
import img2 from "../images/iyenagar_sambar_masala_600x400.webp"
import img3 from "../images/tomoato_thokku_600x400.webp"

const Last = () => {
  return (
    <div>
       <section class="websites">


        <h2 class="d-flex justify-content-center justify-content-md-center m-5"><b>Trending Blogs</b></h2>

        <div class="row  row-cols-3 row-cols-md-6 mt-3 d-flex justify-content-center">
  
  <div class="col-6 col-md-4 m-5 me-0 mt-0 imgfit">
    <div class="card border-0  d-flex justify-content-center text-center">
      <img src={img1} class="card-img-top" alt="..."/>
      
    </div>
  </div>
  
   <div class="col-6 col-md-4 m-5 me-0 mt-0 imgfit ">
    <div class="card border-0  d-flex justify-content-center text-center">
      <img src={img2}class="card-img-top rounded" alt="..."/>
      
    </div>
  </div>

   <div class="col-6 col-md-4 m-5 me-0 mt-0 imgfit">
    <div class="card border-0  d-flex justify-content-center text-center">
      <img src={img3}class="card-img-top" alt="..."/>
      
    </div>
  </div>

</div>

  </section> 
    </div>
  )
}

export default Last
