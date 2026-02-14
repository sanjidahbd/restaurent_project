import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Offcanvas from '@/Components/Offcanvas'
import React from 'react'

function FrontendLayout({children}) {
  return (
    <>  
        <Offcanvas/>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default FrontendLayout