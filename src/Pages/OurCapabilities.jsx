import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import {Helmet, HelmetProvider } from 'react-helmet-async'
import Footer from '../Components/Footer/Footer'
import Button from '../Components/Button/Button'
import TextAnimation from '../Components/TextAnimation/TextAnimation'
import Discus from '../Components/Discus/Discus'
import Carousel from '../Components/Carousel/Carousel'
import iconCursor from '../assets/img/icon-cursor.svg'
import slideCap1 from '../assets/img/slide-cap-1.svg'
import slideCap2 from '../assets/img/slide-cap-2.svg'
import slideCap3 from '../assets/img/slide-cap-3.svg'
import slideCap4 from '../assets/img/slide-cap-4.svg'
import cSolusi from '../assets/img/custom-solutions.svg'
import cCreative from '../assets/img/creative-solutions.svg'
import CardCover from '../Components/CardCover/CardCover'

function OurCapabilities() {
  const listText=[
    {text:'Web Developer'},
    {text:'Mobile App Development'},
    {text:'UI Design'},
    {text:'3D Design'},
    {text:'Digital Content'}
];
  return (
    <>

      <HelmetProvider>
        <Helmet>
          <title>Our Capabilities | SMC</title>
        </Helmet>
      </HelmetProvider>

      <Navbar ns='nv1'/>

      {/* header */}

      <div id="header-our-capabilities" className="relative bg-smc-1 lg:bg-[url('./assets/img/bg-our-capabilities.svg')] bg-cover bg-no-repeat">
            
            {/* Hero Section */}
            <div className="lg:min-h-[800px] xl:px-[4.3rem] px-[1rem] py-[50px] mx-auto xl:container" id="section-hero-our-capabilities">
                <div className="flex flex-col gap-4">
                    <h2 className='text-[1.8rem] sm:text-[4.5rem] relative'>
                      Guaranteed <br /> <span className='text-[1.8rem] sm:text-[4.5rem] relative after:absolute after:w-full sm:after:h-[10px] after:h-[5px] after:bg-[white] after:rounded-[100px] after:content-[""] after:left-0 after:bottom-[-.3rem] sm:after:bottom-[-.8rem]'>ability</span> with <br /> <span className='text-[1.8rem] sm:text-[4.5rem] relative after:absolute after:w-full sm:after:h-[10px] after:h-[5px] after:bg-[white] after:rounded-[100px] after:content-[""] after:left-0 after:bottom-[-.3rem] sm:after:bottom-[-.8rem]'>experienced</span> people
                    </h2>
                    <p className='w-full max-w-[569px] font-bold mb-10'>We will help you find solutions to your problems. We have years of experience in the IT and branding industry.</p>
                </div>
            </div>

            {/* cta hero */}
            <div className="cta-hero-our-cap absolute bottom-[3rem] w-full text-center flex flex-col justify-center">
              <h5>Check our capability</h5>
              <div className="w-auto mx-auto">
                <a href="#section-our-capabilities"><img src={iconCursor} alt="" className='animate-bounce' /></a>
              </div>
            </div>
            {/* animation text */}

            <TextAnimation 
            textItems={listText}
            boxClass="animation-text-box-1"
            ts="c1"
            />

      </div>

      {/* section our capabilities */}
      <div className="xl:px-[4.3rem] px-[1rem] py-[50px] mx-auto xl:container" id="section-our-capabilities">
            <div className="flex flex-col gap-10">
              <h1 className='clr-smc-4 font-semibold text-center'>Our Capabilities</h1>
              <div className="custom-solution">
                <CardCover selectCard='cc8' textImg={cSolusi}>
                  <div className="slider-1 p-4">
                    <Carousel cls="work-slide" cs="c2">
                      <div className="me-10 scale-90">
                        <CardCover selectCard="cc7" bg="bg-[#144688]">
                          <div className="flex flex-col justify-center items-center gap-4 relative p-10">
                            <div className="craft-card-img overflow-hidden"><img src={slideCap1} alt="" /></div>
                            <Button btn="btn4" to='#' className='mx-auto text-white font-bold'>Web & App Developement</Button>                    
                          </div>
                        </CardCover>
                      </div>
                      <div className="me-10 scale-90">
                        <CardCover selectCard="cc7" bg="bg-[#144688]">
                          <div className="flex flex-col justify-center items-center gap-4 relative p-10">
                            <div className="craft-card-img overflow-hidden"><img src={slideCap2} alt="" /></div>
                            <Button btn="btn4" to='#' className='mx-auto text-white font-bold'>ERP Development</Button>                    
                          </div>
                        </CardCover>
                      </div>
                      <div className="me-10 scale-90">
                        <CardCover selectCard="cc7" bg="bg-[#144688]">
                          <div className="flex flex-col justify-center items-center gap-4 relative p-10">
                            <div className="craft-card-img overflow-hidden"><img src={slideCap3} alt="" /></div>
                            <Button btn="btn4" to='#' className='mx-auto text-white font-bold'>Google Services</Button>                    
                          </div>
                        </CardCover>
                      </div>
                      <div className="me-10 scale-90">
                        <CardCover selectCard="cc7" bg="bg-[#144688]">
                          <div className="flex flex-col justify-center items-center gap-4 relative p-10">
                            <div className="craft-card-img overflow-hidden"><img src={slideCap4} alt="" /></div>
                            <Button btn="btn4" to='#' className='mx-auto text-white font-bold'>SOCIAL MEDIA ACTIVATION & ADS</Button>                    
                          </div>
                        </CardCover>
                      </div>
                      
                    </Carousel>
                  </div>
                </CardCover>
              </div>
              <div className="creative-solution">
                <CardCover selectCard='cc9' textImg={cCreative}>
                  <div className="slider-1 p-4">
                    <Carousel cls="work-slide" cs="c2">
                      <div className="me-10 scale-90">
                        <CardCover selectCard="cc7" bg="bg-[#144688]">
                          <div className="flex flex-col justify-center items-center gap-4 relative p-10">
                            <div className="craft-card-img overflow-hidden"><img src={slideCap1} alt="" /></div>
                            <Button btn="btn4" to='#' className='mx-auto text-white font-bold'>Web & App Developement</Button>                    
                          </div>
                        </CardCover>
                      </div>
                      <div className="me-10 scale-90">
                        <CardCover selectCard="cc7" bg="bg-[#144688]">
                          <div className="flex flex-col justify-center items-center gap-4 relative p-10">
                            <div className="craft-card-img overflow-hidden"><img src={slideCap2} alt="" /></div>
                            <Button btn="btn4" to='#' className='mx-auto text-white font-bold'>ERP Development</Button>                    
                          </div>
                        </CardCover>
                      </div>
                      <div className="me-10 scale-90">
                        <CardCover selectCard="cc7" bg="bg-[#144688]">
                          <div className="flex flex-col justify-center items-center gap-4 relative p-10">
                            <div className="craft-card-img overflow-hidden"><img src={slideCap3} alt="" /></div>
                            <Button btn="btn4" to='#' className='mx-auto text-white font-bold'>Google Services</Button>                    
                          </div>
                        </CardCover>
                      </div>
                      <div className="me-10 scale-90">
                        <CardCover selectCard="cc7" bg="bg-[#144688]">
                          <div className="flex flex-col justify-center items-center gap-4 relative p-10">
                            <div className="craft-card-img overflow-hidden"><img src={slideCap4} alt="" /></div>
                            <Button btn="btn4" to='#' className='mx-auto text-white font-bold'>SOCIAL MEDIA ACTIVATION & ADS</Button>                    
                          </div>
                        </CardCover>
                      </div>
                      
                    </Carousel>
                  </div>
                </CardCover>
              </div>
            </div>    
        </div>
        <Discus/>
        <Footer/>
    </>
  )
}

export default OurCapabilities
