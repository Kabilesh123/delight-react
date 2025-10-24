import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Sweets from '../pages/Sweets'

const SweetsLayout = () => {
  return (
    <div>
        <Header/>
        <Sweets/>
        <Footer/>
    </div>
  )
}

export default SweetsLayout
