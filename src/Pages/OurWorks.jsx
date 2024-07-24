import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar'
import {Helmet, HelmetProvider } from 'react-helmet-async'
import Footer from '../Components/Footer/Footer'
import Discus from '../Components/Discus/Discus'
import TextAnimation from '../Components/TextAnimation/TextAnimation'
import Button from '../Components/Button/Button'
import imgHero from '../assets/img/img-hero-work.svg'
import arrowRight from '../assets/img/arrow-right.svg'
import craftCard3 from '../assets/img/craft-card-3.png'
import iconSide from '../assets/img/icon-side-menu.svg'
import CardCover from '../Components/CardCover/CardCover'



function OurWorks() {
  const listText=[
    {text:'Web Developer'},
    {text:'Mobile App Development'},
    {text:'UI Design'},
    {text:'3D Design'},
    {text:'Digital Content'}
];
const [menu1, setmenu1] = useState(false);
const [menu2, setmenu2] = useState(false);

const showMenu1 = () => {
  setmenu1(!menu1);
};
const showMenu2 = () => {
  setmenu2(!menu2);
};

  return (
    <>

    <HelmetProvider>
      <Helmet>
        <title>Our Works | SMC</title>
      </Helmet>
    </HelmetProvider>
      

    <Navbar ns='nv1'/>

     {/* header */}

     <div id="header-our-capabilities" className="relative bg-smc-1 lg:bg-[url('./assets/img/bg-hero-work.svg')] bg-cover bg-no-repeat">
            
            {/* Hero Section */}
            <div className="min-h-[75vh] xl:px-[4.3rem] px-[1rem] py-[50px] mx-auto xl:container" id="section-hero-our-works">
                <div className="grid lg:grid-cols-2 grid-rows-1 gap-4">
                  <div className="detail-hero-work">
                    <CardCover selectCard="cc10">
                      <div className="flex flex-col gap-4 text-color-alternate">
                        <h1 className='md:text-[76px] text-[2.5rem]'>Projects we have done</h1>
                        <div className="w-full h-[10px] rounded-[100px] bg-white"></div>
                        <div className="flex md:flex-nowrap flex-wrap justify-between gap-4">
                          <h2 className="count-work flex md:text-[2.5rem] text-[1.5rem]"><div>100</div> +</h2>
                          <div className='mx-auto'><h3 className='md:text-[1.8rem] text-[1.2rem]'>Project Done</h3></div>
                          <div className="flex flex-col justify-center">
                          <Button btn="btn1" to='#' className='btn-primary-smc'>See Project</Button>
                          </div>
                        </div>
                      </div>
                    </CardCover>
                  </div>
                  <div className="img-hero-our-works w-full">
                    <img src={imgHero} alt="bg" className='w-full' />
                  </div>
                </div>
            </div>

            {/* animation text */}

            <TextAnimation 
            textItems={listText}
            boxClass="animation-text-box-1"
            ts="c1"
            />

     </div>

     {/* section works */}
     {/* section our capabilities */}
     <div className="xl:px-[4.3rem] px-[1rem] py-[50px] mx-auto xl:container" id="section-our-capabilities">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="works-left min-w-[20rem]">
              <CardCover selectCard='cc4'>
                  <div className="text-black flex flex-col gap-4">
                    <h4 className='m-0'>Work</h4>
                    <div className="menu-side flex flex-col">
                      <div className="line-side rounded-[100px] w-full h-[10px] bg-[#144688]"></div>
                      <div className="menu-side-list">
                        <div onClick={showMenu1} className={`my-4 cursor-pointer flex items-center justify-between ${menu1 ? 'menu-side-title-active' : 'menu-side-title'}`}>
                          <h5 className='m-0'>Custom Solution</h5>
                          <img src={iconSide} alt="e" className='transition-all' />
                        </div>
                        <div className={`menu-side-items transition-all flex flex-col gap-4 ${menu1 ? 'block' : 'hidden'}`}>
                          <a href="#">ERP Development</a>
                          <a href="#">WEB / App Developement</a>
                          <a href="#">Web & App Maintenance</a>
                          <a href="#">IT Consulting</a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-side flex flex-col">
                      <div className="line-side rounded-[100px] w-full h-[10px] bg-[#144688]"></div>
                      <div className="menu-side-list">
                        <div onClick={showMenu2} className={`my-4 cursor-pointer flex items-center justify-between ${menu2 ? 'menu-side-title-active-2' : 'menu-side-title-2'}`}>
                          <h5 className='m-0'>Creative Solution</h5>
                          <img src={iconSide} alt="e" className='transition-all' />
                        </div>
                        <div className={`menu-side-items transition-all flex flex-col gap-4 ${menu2 ? 'hidden' : 'block'}`}>
                          <a href="#">Google Service</a>
                          <a href="#">Social Media Activation & ADS</a>
                          <a href="#">SEO</a>
                          <a href="#">Web Maintenance</a>
                          <a href="#">Copywriting</a>
                          <a href="#">Presentation Design</a>
                          <a href="#">Digital Product Design</a>
                          <a href="#">Digital Banner Design</a>
                          <a href="#">Motion Graphic</a>
                          <a href="#">Illustration</a>
                        </div>
                      </div>
                    </div>

                  </div>
              </CardCover>
            </div>

            <div className="works-right text-black flex flex-col gap-10">
              <div className="title-works-right lg:w-full max-w-[527px] ms-auto">
                <CardCover selectCard="cc3" bg="bg-[#144688] py-2 px-4">
                  <p className='text-[white] text-[12px] font-bold text-end'>We have worked on more than 100 projects from various business fields that we have completed.</p>
                </CardCover>
              </div>
              <div className="card-works-box grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div className="card-works-wrapper xl:scale-90 scale-95">
                <CardCover selectCard="cc7" bg="bg-[#144688]">
                  <div className="flex flex-col relative">
                    <div className="works-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard3} alt="" className='scale-105' /></div>
                    <div className="works-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                      <div className="works-detail text-center bg-[white] w-full p-4 rounded-t-[10px] border-[5px] border-[#000]">
                        <h5>FirLife App</h5>
                        <p>A useful application to assist users in carrying out sports with tracking features during exercise. </p>
                        <div className="cta-card-works flex justify-end"><Button btn="btn1" to='#' className='ms-auto'><img src={arrowRight} alt="" /></Button></div>
                      </div>
                    </div>
                  </div>
                </CardCover>
                </div>
                <div className="card-works-wrapper xl:scale-90 scale-95">
                <CardCover selectCard="cc7" bg="bg-[#144688]">
                  <div className="flex flex-col relative">
                    <div className="works-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard3} alt="" className='scale-105' /></div>
                    <div className="works-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                      <div className="works-detail text-center bg-[white] w-full p-4 rounded-t-[10px] border-[5px] border-[#000]">
                        <h5>FirLife App</h5>
                        <p>A useful application to assist users in carrying out sports with tracking features during exercise. </p>
                        <div className="cta-card-works flex justify-end"><Button btn="btn1" to='#' className='ms-auto'><img src={arrowRight} alt="" /></Button></div>
                      </div>
                    </div>
                  </div>
                </CardCover>
                </div>
                <div className="card-works-wrapper xl:scale-90 scale-95">
                <CardCover selectCard="cc7" bg="bg-[#144688]">
                  <div className="flex flex-col relative">
                    <div className="works-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard3} alt="" className='scale-105' /></div>
                    <div className="works-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                      <div className="works-detail text-center bg-[white] w-full p-4 rounded-t-[10px] border-[5px] border-[#000]">
                        <h5>FirLife App</h5>
                        <p>A useful application to assist users in carrying out sports with tracking features during exercise. </p>
                        <div className="cta-card-works flex justify-end"><Button btn="btn1" to='#' className='ms-auto'><img src={arrowRight} alt="" /></Button></div>
                      </div>
                    </div>
                  </div>
                </CardCover>
                </div>
                <div className="card-works-wrapper xl:scale-90 scale-95">
                <CardCover selectCard="cc7" bg="bg-[#144688]">
                  <div className="flex flex-col relative">
                    <div className="works-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard3} alt="" className='scale-105' /></div>
                    <div className="works-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                      <div className="works-detail text-center bg-[white] w-full p-4 rounded-t-[10px] border-[5px] border-[#000]">
                        <h5>FirLife App</h5>
                        <p>A useful application to assist users in carrying out sports with tracking features during exercise. </p>
                        <div className="cta-card-works flex justify-end"><Button btn="btn1" to='#' className='ms-auto'><img src={arrowRight} alt="" /></Button></div>
                      </div>
                    </div>
                  </div>
                </CardCover>
                </div>
                <div className="card-works-wrapper xl:scale-90 scale-95">
                <CardCover selectCard="cc7" bg="bg-[#144688]">
                  <div className="flex flex-col relative">
                    <div className="works-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard3} alt="" className='scale-105' /></div>
                    <div className="works-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                      <div className="works-detail text-center bg-[white] w-full p-4 rounded-t-[10px] border-[5px] border-[#000]">
                        <h5>FirLife App</h5>
                        <p>A useful application to assist users in carrying out sports with tracking features during exercise. </p>
                        <div className="cta-card-works flex justify-end"><Button btn="btn1" to='#' className='ms-auto'><img src={arrowRight} alt="" /></Button></div>
                      </div>
                    </div>
                  </div>
                </CardCover>
                </div>
                <div className="card-works-wrapper xl:scale-90 scale-95">
                <CardCover selectCard="cc7" bg="bg-[#144688]">
                  <div className="flex flex-col relative">
                    <div className="works-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard3} alt="" className='scale-105' /></div>
                    <div className="works-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                      <div className="works-detail text-center bg-[white] w-full p-4 rounded-t-[10px] border-[5px] border-[#000]">
                        <h5>FirLife App</h5>
                        <p>A useful application to assist users in carrying out sports with tracking features during exercise. </p>
                        <div className="cta-card-works flex justify-end"><Button btn="btn1" to='#' className='ms-auto'><img src={arrowRight} alt="" /></Button></div>
                      </div>
                    </div>
                  </div>
                </CardCover>
                </div>
              </div>
            </div>
          </div>    
      </div>

    <Discus/>
    <Footer/>
    </>
  )
}

export default OurWorks
