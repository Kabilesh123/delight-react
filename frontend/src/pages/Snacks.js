import React from 'react'
import './Sweets.css'
import img1 from "../images/snackjpg.webp"
import img2 from "../images/Cuttack-Mixture-200gm-Lifestyle.jpg-1.webp"
import img3 from "../images/Soya_Stick_200gm_Pouch_Lifestyle1.webp"
import img4 from "../images/Cocktail-Masala-Nut-Mix-300g-Lifestyle-1.webp"
import img5 from "../images/Masala-Nut-Mix-200g-Lifestyle-Images-1.webp"
import img6 from "../images/tomato_thokku.jpg"
import img7 from "../images/Rago-Masala-Mixture-250gm-Lifestyle-1.webp"
import img8 from "../images/Pepper-Banana-Chips-350gm-Lifestyle-1.webp"
import img9 from "../images/Masala-Murukku-200g-Lifetyle-Images-1.webp"  

const Snacks = () => {
  return (
    <div>
      <section>
              <img src={img1} alt=""/>

<div class="dropdown d-flex justify-content-end m-5">
    <p class="mt-1"><i class="fa-solid fa-filter"></i> &nbsp; Short by</p>
  <a class="btn dropdown-toggle ms-2 short" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
    Featured
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Best Selling</a></li>
    <li><a class="dropdown-item" href="#">Price,Low to high</a></li>
    <li><a class="dropdown-item" href="#">Price,High to low </a></li>
  </ul>
</div>

</section>


    <section class="new arrivals ">
             
     <div class="row d-flex justify-content-center mt-5">
      
      <div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 contfit" >
    <img src={img2} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Cuttack Mixture 200g</b></h6>
    <p class="card-text"> <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star"></i>12.7k reviews</p>
    <h6 class="card-text text-danger">Rs.98.00<del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3 d-flex justify-content-center">

        <div class="card border-0 contfit" >
    <img src={img3} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Diet Soys Sticks </b></h6>
   <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i>14.2k reviews</p>
       <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center ">

        <div class="card border-0 contfit" >
    <img src={img4} class="card-img-top most text-muted" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Coktail Masala nut mix 300g</b></h6>
    <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i>9.7k reviews</p>
        <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 contfit" >
    <img src={img5} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Masala Nut Mix 200g</b></h6>
    <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i>10.1k reviews</p>
        <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>
     </div>
     
  
   
     
     <div class="row d-flex justify-content-center">
      
      <div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 contfit" >
    <img src={img6} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Beetroot kanji 250ml</b></h6>
    <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i>12.7k reviews</p>
    <h6 class="card-text text-danger">Rs.98.00<del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3 d-flex justify-content-center">

        <div class="card border-0 contfit" >
    <img src={img7} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Rago masala Mixture 250g</b></h6>
   <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i>14.2k reviews</p>
       <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg">Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center ">

        <div class="card border-0 contfit" >
    <img src={img8} class="card-img-top most text-muted" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Pepper Banana Mix Chips 350g</b></h6>
    <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>9.7k reviews</p>
        <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 contfit" >
    <img src={img9} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Masala Muruku 200g</b></h6>
    <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i>10.1k reviews</p>
        <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>
     </div>
     
  <div class=" d-flex justify-content-center m-5">
     <a href="#" class="btn  px-3 me-1 txtbg" ><b>1</b></a>
     <a href="#" class="btn  px-3 me-1 pagebg" ><b>2</b></a>
     <a href="#" class="btn px-3 me-1 pagebg" ><b>3</b></a>
     <a href="#" class="btn  px-3 me-1 pagebg" ><b>4</b></a>
     <a href="#" class="btn  px-3 me-1 pagebg" ><b>&rarr;</b></a>
  </div>
   
    </section>
    </div>
  )
}

export default Snacks
