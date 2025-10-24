import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Carousel from '../pages/Carousel' 
import First from '../pages/First'
import Lovedproducts from '../pages/Lovedproducts'  
import Newarrivals from '../pages/Newarrivals'
import Dailysnacks from '../pages/Dailysnacks'
import Websites from '../pages/Websites'  
import Collections from '../pages/Collections'
import Last from '../pages/Last'      

const HomeLayout = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <First/>
      <Lovedproducts/>
      <Newarrivals/>
      <Dailysnacks/>
      <Websites/>
        <Collections/>
        <Last/>
      <Footer/>
    </div>
  )
}

export default HomeLayout
