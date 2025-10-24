import React from 'react'
import './Header.css'
import img from "../images/DF_logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div>
          <header>
       
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <div class="row d-flex justify-content: space-around;">

    <div class="col-3 d-flex">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="ms-2 mt-3"> <a class="text-dark ms-0 d-sm-block d-md-none " href="#"><i class="fa-solid fa-magnifying-glass"></i></a></div>
    </div>

<div class="col-3">
  <div className='test' >
    <Link to="/">
           <img class="" src={img} alt="" width="90"/>

    </Link>
  </div>
     
</div>
<div class="col-3 col-md-3">
      <div class="collapse navbar-collapse mt-2 ms-75" id="navbarTogglerDemo01">
             
                <ul class="navbar-nav ">
                  <li class="nav-item"><Link class="nav-link active" to="/sweets"><b>SWEETS</b></Link></li>
                 
                    <li class="nav-item"><Link class="nav-link active" to="/snacks"><b>SNACKS</b></Link></li>
                   
                    <li class="nav-item"><Link class="nav-link active" to="/pickels"><b>PICKLE</b></Link></li>
                  </ul> 
                    
                
      </div>
</div>
<div class="col-3">
  <div class="d-flex fit ">
       <Link class="text-dark me-3" to="/login">
       <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
        </Link>


      <a class="text-dark me-3 " href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="black" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>      
        </a>

                
      <a class="d-sm-none d-md-block text-dark me-0" href="#">
       <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="black" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
      </a>
  </div>

   

</div>
    </div>
    </div>
    </nav>



        
    </header>
    </div>
 
    </>
  )
}

export default Header
