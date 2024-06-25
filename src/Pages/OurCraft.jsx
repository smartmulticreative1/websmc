import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import {Helmet, HelmetProvider } from 'react-helmet-async'
import TextAnimation from '../Components/TextAnimation/TextAnimation'
import Button from '../Components/Button/Button'
import CardCover from '../Components/CardCover/CardCover'
import Footer from '../Components/Footer/Footer'
import imgHero from '../assets/img/img-hero-craft.svg'
import starHeroSvg from '../assets/img/star.svg'
import labelBest from '../assets/img/label-best.svg'
import craftCard1 from '../assets/img/craft-card-1.png'
import craftCard2 from '../assets/img/craft-card-2.png'
import craftCard3 from '../assets/img/craft-card-3.png'
import Label from '../Components/Label/Label'



function OurCraft() {
  const listText=[
    {text:'You can try and use our craft anytime'},
    {text:'You can try and use our craft anytime'},
    {text:'You can try and use our craft anytime'},
    {text:'You can try and use our craft anytime'},
    {text:'You can try and use our craft anytime'}
];
  return (
    <>

    <HelmetProvider>
      <Helmet>
        <title>Our Craft | SMC</title>
      </Helmet>
    </HelmetProvider>

    <Navbar ns='nv1'/>

     {/* header */}

     <div id="header-our-capabilities" className="relative bg-smc-1 bg-cover bg-no-repeat">
            
            {/* Hero Section */}
            <div className="px-[1rem] py-[50px] mx-auto xl:container relative" id="section-hero-our-craft">
                <div className="grid grid-cols-1">
                  <div className="img-hero-our-craft mx-auto">
                    <img src={imgHero} alt="bg" />
                    <img src={starHeroSvg} alt="bg" className='absolute right-[-1rem] bottom-2/4 lg:block hidden' />
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

     {/* section our craft */}
     <div id="section-our-craft" className='xl:px-[4.3rem] px-[1rem] py-[50px] mx-auto xl:container'>
      <div className="grid grid-cols-1">
        <div className="title-our-craft grid lg:grid-cols-2 grid-rows-1 mb-10 text-black">
          <div className="title-our-craft-left">
            <p>Our Craft</p>
            <h3>Craft made by ourselves</h3>
          </div>
          <div className="title-our-craft-right lg:w-full max-w-[527px]">
            <CardCover selectCard="cc3" bg="bg-[#144688] py-2 px-4">
              <p className='text-[white] text-[12px] font-bold'>You can try all of our crafts and they are publicly accessible and some are free.</p>
            </CardCover>
          </div>
        </div>
        <div className="card-our-craft-wrapper grid grid-cols-1 gap-8">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 text-black">
            <div className="card-craft-wrapper xl:scale-100 scale-95">
            <CardCover selectCard="cc7" bg="bg-[#144688]">
                <div className="flex flex-col relative">
                  <div className="craft-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard1} alt="" /></div>
                  <div className="craft-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                    <div className="craft-detail text-center bg-[white] max-w-[300px] w-full p-4 rounded-t-[10px]">
                      <h5 className='m-0'>Hajat</h5>
                      <p className='font-semibold'>Weeding Invinting</p>
                    </div>
                    <Button btn="btn1" to='#' className='btn-primary-smc mx-auto'>Lets Try</Button>
                  </div>
                  <div className="absolute label-card-craft top-4 left-4">
                    <Label lbl="lbl1" className="bg-[#144688] text-white">
                      <span>NEW !!!</span>
                    </Label>
                  </div>
                </div>
              </CardCover>
            </div>
            <div className="card-craft-wrapper xl:scale-100 scale-95">
            <CardCover selectCard="cc7" bg="bg-[#144688]">
                <div className="flex flex-col relative">
                  <div className="craft-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard2} alt="" /></div>
                  <div className="craft-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                    <div className="craft-detail text-center bg-[white] max-w-[300px] w-full p-4 rounded-t-[10px]">
                      <h5 className='m-0'>Make Por</h5>
                      <p className='font-semibold'>Portfolio Builder</p>
                    </div>
                    <Button btn="btn1" to='#' className='btn-primary-smc mx-auto'>Lets Try</Button>
                  </div>
                  <div className="hidden absolute label-card-craft top-4 left-4">
                    <Label lbl="lbl1" className="bg-[#144688] text-white">
                      <span>NEW !!!</span>
                    </Label>
                  </div>
                </div>
              </CardCover>
              </div>
              <div className="card-craft-wrapper xl:scale-100 scale-95">
              <CardCover selectCard="cc7" bg="bg-[#144688]">
                <div className="flex flex-col relative">
                  <div className="craft-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard3} alt="" className='scale-105' /></div>
                  <div className="craft-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                    <div className="craft-detail text-center bg-[white] max-w-[300px] w-full p-4 rounded-t-[10px]">
                      <h5 className='m-0'>TOFO</h5>
                      <p className='font-semibold'>AI Photo Enchancer</p>
                    </div>
                    <Button btn="btn1" to='#' className='btn-primary-smc mx-auto'>Lets Try</Button>
                  </div>
                  <div className="absolute label-card-craft bottom-[10rem] right-[-6rem]">
                      <img src={labelBest} alt="" />
                  </div>
                </div>
              </CardCover>
              </div>
              <div className="card-craft-wrapper xl:scale-100 scale-95">
              <CardCover selectCard="cc7" bg="bg-[#144688]">
                <div className="flex flex-col relative">
                  <div className="craft-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard1} alt="" /></div>
                  <div className="craft-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                    <div className="craft-detail text-center bg-[white] max-w-[300px] w-full p-4 rounded-t-[10px]">
                      <h5 className='m-0'>Hajat</h5>
                      <p className='font-semibold'>Weeding Invinting</p>
                    </div>
                    <Button btn="btn1" to='#' className='btn-primary-smc mx-auto'>Lets Try</Button>
                  </div>
                  <div className="hidden absolute label-card-craft top-4 left-4">
                    <Label lbl="lbl1" className="bg-[#144688] text-white">
                      <span>NEW !!!</span>
                    </Label>
                  </div>
                </div>
              </CardCover>
              </div>
              <div className="card-craft-wrapper xl:scale-100 scale-95">
              <CardCover selectCard="cc7" bg="bg-[#144688]">
                <div className="flex flex-col relative">
                  <div className="craft-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard2} alt="" /></div>
                  <div className="craft-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                    <div className="craft-detail text-center bg-[white] max-w-[300px] w-full p-4 rounded-t-[10px]">
                      <h5 className='m-0'>Make Por</h5>
                      <p className='font-semibold'>Portfolio Builder</p>
                    </div>
                    <Button btn="btn1" to='#' className='btn-primary-smc mx-auto'>Lets Try</Button>
                  </div>
                  <div className="absolute label-card-craft top-4 left-4">
                    <Label lbl="lbl1" className="bg-[#144688] text-white">
                      <span>Cooming Soon</span>
                    </Label>
                  </div>
                </div>
              </CardCover>
              </div>
              <div className="card-craft-wrapper xl:scale-100 scale-95">
              <CardCover selectCard="cc7" bg="bg-[#144688]">
                <div className="flex flex-col relative">
                  <div className="craft-card-img overflow-hidden border-b-[5px] border-b-[#000]"><img src={craftCard3} alt="" className='scale-105' /></div>
                  <div className="craft-card-detail bg-[#144688] p-4 flex flex-col justify-center items-center gap-4">
                    <div className="craft-detail text-center bg-[white] max-w-[300px] w-full p-4 rounded-t-[10px]">
                      <h5 className='m-0'>TOFO</h5>
                      <p className='font-semibold'>AI Photo Enchancer</p>
                    </div>
                    <Button btn="btn1" to='#' className='btn-primary-smc mx-auto'>Lets Try</Button>
                  </div>
                  <div className="hidden absolute label-card-craft bottom-[10rem] right-[-6rem]">
                      <img src={labelBest} alt="" />
                  </div>
                </div>
              </CardCover>
              </div>
          </div>
          <div className="cta-our-craft text-center mt-4">
            <Button btn="btn1" to='#' className='btn-primary-smc btn-primary-smc-white mx-auto'><p className='px-4'>More</p></Button>
          </div>
        </div>
      </div>
     </div>

     <Footer/>

    </>
  )
}

export default OurCraft
