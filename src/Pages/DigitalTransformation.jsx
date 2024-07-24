import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

function DigitalTransformation() {
  return (
    <>
       <Navbar ns='nv1'/>

       <section className="section- w-full xl:px-0 px-4">
        <div className="xl:container mx-auto">
          <div className="-content_wrapper">
            <div className="-start_content"></div>
            <div className="-mid_content"></div>
            <div className="-end_content"></div>
          </div>
        </div>
      </section>
      
      <section className="section- w-full xl:px-0 px-4">
        <div className="xl:container mx-auto">
          <div className="-content_wrapper">
            <div className="-start_content"></div>
            <div className="-mid_content"></div>
            <div className="-end_content"></div>
          </div>
        </div>
      </section>
      
       <Footer/>
    </>
  )
}

export default DigitalTransformation