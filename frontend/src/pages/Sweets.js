import React from 'react'
import './Sweets.css'
import img1 from "../images/New_Sweet.webp"
import img2 from "../images/palmcondylifestyle.jpg"
import img3 from "../images/Recreate-Modakor-Gur-Besan-Laddu-Combos-all-Design-for-Delightfood0-6_bf94d2f9-bdbb-4044-a3b7-8da53f19fc09.jpg"    
import img4 from "../images/Kaju-Katli-250g-liestyle-1.webp"
import img5 from "../images/Khush-Angoori-Petha-350g-Lifestyle-1.webp"
import img6 from "../images/Sugar-free-Angoori-Petha-350g-lifestyle-1.webp"
import img7 from "../images/Dodha-Burfi-500g_Lifestyle-1.webp"
import img8 from "../images/MOTI_CHOOR_LADOO_400g.jpg"
import img9 from "../images/Jodhpuri_Ladoo_400g.jpg"


const Sweets = () => {
  return (
    <div>
      {/* <!------------------------------------------------------------------------------------------------------------------  --> */}
   


        <img src={img1} className='imgfirst'/>

    {/* <!--------------------------------------------------------------------------------------------------------------------------------  --> */}
<section>
  

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
    <h6 class="card-title"><b>Plam condy tal</b></h6>
    <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star"></i>12.7k reviews</p>
    <h6 class="card-text text-danger">Rs.98.00<del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3 d-flex justify-content-center">

        <div class="card border-0 contfit" >
    <img src={img3} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Chocolate Modak 250g </b></h6>
   <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star"></i>14.2k reviews</p>
       <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center ">

        <div class="card border-0 contfit " >
    <img src={img4} class="card-img-top most text-muted" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Kaju Kalti 250g</b></h6>
    <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i>9.7k reviews</p>
        <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white  txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 contfit" >
    <img src={img5} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Khush Angoori Petha 350g</b></h6>
    <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i>10.1k reviews</p>
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
    <h6 class="card-title"><b>Sugar Free Angoori peta 350g</b></h6>
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
    <h6 class="card-title"><b></b>Dodha Burfi 500g</h6>
   <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i>14.2k reviews</p>
       <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white  txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center ">

        <div class="card border-0 contfit" >
    <img src={img8} class="card-img-top most text-muted" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Moti Choor Ladoo 400g</b></h6>
    <p class="card-text"> <i class="fa-solid fa-star"></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i>9.7k reviews</p>
        <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>

<div class="col-md-3  d-flex justify-content-center">

        <div class="card border-0 contfit" >
    <img src={img9} class="card-img-top most" alt="..."/>
  <div class="card-body bg-light text-center">
    <h6 class="card-title"><b>Jodhpuri Ladoo 400g</b></h6>
    <p class="card-text"> <i class="fa-solid fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i><i class="fa-regular fa-star" ></i>10.1k reviews</p>
        <h6 class="card-text text-danger">Rs.98.00 <del class="text-muted">Rs.1999.00</del></h6>
    <a href="#" class="btn text-white txtbg" >Add to cart</a>
  </div>
  </div>
  
</div>
     </div>
     
  <div class=" d-flex justify-content-center m-5">
     <a href="#" class="btn  px-3 me-1 txtbg"><b>1</b></a>
     <a href="#" class="btn  px-3 me-1 pagebg" ><b>2</b></a>
     <a href="#" class="btn px-3 me-1 pagebg" ><b>3</b></a>
     <a href="#" class="btn  px-3 me-1 pagebg" ><b>4</b></a>
     <a href="#" class="btn  px-3 me-1 pagebg" ><b>&rarr;</b></a>
  </div>
   
    </section>
{/* <!-- -------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
    </div>
  )
}

export default Sweets
