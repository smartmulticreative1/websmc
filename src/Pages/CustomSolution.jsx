import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import {Helmet, HelmetProvider } from 'react-helmet-async'
import Button from '../Components/Button/Button'


function CustomSolution() {
  return (
    <>
       <Navbar ns='nv1'/>

       <HelmetProvider>
        <Helmet>
            <title>Custom Solution</title>
        </Helmet>
    </HelmetProvider>

      <section className="section-c-solution w-full xl:px-0 px-4">
        <div className="xl:container mx-auto">
          <div className="c-solution-content_wrapper text-center flex flex-col gap-[1.875rem] p-[3.125rem_0] w-full max-w-[46.875rem] mx-auto">
            <div className="c-solution-start_content flex flex-col gap-[2.5rem]">
              <p className="font-bold text-[1.25rem]">Custom Solution</p>
              <h3>Growing with Your Ideas: Innovative Development Services for the Future.</h3>
            </div>
            <div className="c-solution-end_content flex flex-col gap-[3.125rem]">
              <p>We are not just a solution provider, but a partner committed to growing and evolving together with our customers, with a focus on innovation and readiness to face future challenges.</p>
              <div>
              <Button btn="btn1" className='btn-primary-smc'>Lets's work together</Button>

              </div>
            </div>
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

export default CustomSolution