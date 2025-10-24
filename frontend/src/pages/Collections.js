import React from 'react'
import './Collection.css'
import img1 from "../images/8f1c421b6257a53c143c47fae14d6654.jpg"
import img2 from "../images/pickels.jpg"
import img3 from "../images/81_dDZFnB4L._SL1500.jpg"
import img4 from "../images/khichdi.jpg"
import img5 from "../images/masalas_2.jpg"
import img6 from "../images/drink_1.jpg"

const Collections = () => {
  return (
    <div>
       <section class="ourcollection">
    <h4 class="d-flex justify-content-center m-5 pt-5"><b>OUR COLLECTION</b></h4>

    <div class="ourcollection d-flex flex-wrap justify-content-center ">
                
      <div class="cardfit">
        <div class="card bg-dark text-white need" >
  <img src={img1}class="card-img need1 cardimg"/>
  <div class="card-img-overlay" >
    <div class="d-flex justify-content-center  cardtxt">
      <h4 class="card-title"><b>Mouth Freshner</b></h4>
</div>
    <div class="d-flex justify-content-center">
          <a href="#" class="btn text-white p-1 px-2 cardbbtn">Add to cart</a>
    </div>
  </div>
</div>
      </div>

      <div class="cardfit">
        <div class="card bg-dark text-white" >
  <img src={img2}class="card-img zom cardimg" alt="..."/>
  <div class="card-img-overlay" >
    <div class="d-flex justify-content-center cardtxt">
      <h4 class="card-title"><b>Mouth Freshner</b></h4>
</div>
    <div class="d-flex justify-content-center">
          <a href="#" class="btn text-white p-1 px-2 cardbbtn">Add to cart</a>
    </div>  
    
  </div>
</div>
      </div>

      <div class="cardfit">
        <div class="card bg-dark text-white" >
  <img src={img3}class="card-img zom cardimg" alt="..."/>
  <div class="card-img-overlay" >
    <div class="d-flex justify-content-center cardtxt">
      <h4 class="card-title"><b>Mouth Freshner</b></h4>
       
</div>
    <div class="d-flex justify-content-center" >
         <a href="#" class="btn text-white p-1 px-2 d-flex cardbbtn" >Add to cart</a>
    </div>
  </div>
</div>
      </div>

      <div class="cardfit">
        <div class="card bg-dark text-white" >
  <img src={img4}class="card-img zom cardimg" alt="..."/>
  <div class="card-img-overlay" >
    <div class="d-flex justify-content-center cardtxt">
      <h4 class="card-title"><b>Mouth Freshner</b></h4>
</div>
    <div class="d-flex justify-content-center" >
          <a href="#" class="btn text-white p-1 px-2 cardbbtn">Add to cart</a>
    </div>
  </div>
</div>
      </div>

      <div class="cardfit">
        <div class="card bg-dark text-white" >
  <img src={img5}class="card-img zom cardimg" alt="..."/>
  <div class="card-img-overlay" >
    <div class="d-flex justify-content-center  cardtxt">
      <h4 class="card-title"><b>Mouth Freshner</b></h4>
</div>
    <div class="d-flex justify-content-center">
          <a href="#" class="btn text-white p-1 px-2 cardbbtn" >Add to cart</a>
    </div>
  </div>
</div>
      </div>

      <div class="cardfit">
        <div class="card bg-dark text-white" >
  <img src={img6}class="card-img zom cardimg" alt="..."/>
  <div class="card-img-overlay" >
    <div class="d-flex justify-content-center  cardtxt">
      <h4 class="card-title"><b>Mouth Freshner</b></h4>
</div>
    <div class="d-flex justify-content-center" >
          <a href="#" class="btn text-white p-1 px-2 cardbbtn">Add to cart</a>
    </div>
  </div>
</div>
      </div>
    </div>
  </section> 
    </div>
  )
}

export default Collections
