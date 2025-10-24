import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
      <section class="d-flex justify-content-center">
   
    <form >
         <h1 class="text-center fw-bolder p-3">Login</h1>
  <div class="mb-3 fit1" >
    <label for="exampleInputEmail1" class="form-label" >Email*</label>
    <input type="email" placeholder="Email" class="form-control p-3 text-muted placeholder" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password*</label>
    <input type="password" placeholder="Password" class="form-control p-3 placeholder" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" class="btn btn-danger p-3 fit2">Submit</button>

  <div class="text-center p-3">
    <a href=""  class=" text-decoration-none text-dark"><p><i class="fa-solid fa-key"></i>Forgot your password?</p></a>
  <a href="createaccount.html" class=" text-decoration-none text-dark">  <p><i class="fa-solid fa-user-plus"></i> Create Account</p></a>
    <a href="" class=" text-decoration-none text-dark"><p><i class="fa-solid fa-house-chimney"></i> Return to Store</p></a>
  </div>
</form>
   </section>
    </div>
  )
}

export default Login
