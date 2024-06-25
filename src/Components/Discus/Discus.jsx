import React from 'react'
import CardCover from '../CardCover/CardCover'
import Button from '../Button/Button'
import human from '../../assets/img/human.png'
import starTesti from '../../assets/img/star-testi-2.svg'
import sendIcon from "../../assets/img/send-icon.svg"


function Discus() {
  return (
    <>
     {/* discus */}
     <div id="section-discus">
            <div className="xl:container mx-auto xl:px-[4.3rem] px-[1rem] py-[50px]">
                <div className="grid grid-cols-1 mb-5">
                    <CardCover selectCard="cc5" bg="bg-[#144688]">
                        <div className="flex lg:flex-row flex-col items-center justify-center gap-10">
                            <div className="card-client-say lg:w-[410px] w-full">
                                <CardCover selectCard="cc4" bg="bg-[#fff]">
                                <div className="card-testimonial flex flex-col gap-4 text-[#000]">
                                <h5>Our client say</h5>
                                <div className="client-feedback flex flex-nowrap items-center max-w-[300px] pb-4 border-b-2">
                                    <h4 className="m-0 me-4 text-[#000]">5.0</h4>
                                    <div className="star-point flex flex-nowrap items-center">
                                        <img src={starTesti} alt="" />
                                    </div>
                                </div>
                                <p className='text-[#000] font-bold mb-4'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                                <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-4">
                                    <div className="client-testimonial flex flex-nowrap gap-1 max-w-[300]">
                                        <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                        <div className="client-testimonial-detail flex flex-col text-[#000]">
                                            <h6 className='m-0'>Marc Andre</h6>
                                            <span className='text-gray-400 text-[12px]'>CEO WARUNG PINTAR</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </CardCover>
                            </div>
                            <div className="form-discus grid grid-rows-1 gap-4 w-full lg:max-w-[462px]">
                                <div className="title-form-discus"><h3 className='lg:text-[2.5rem] text-[1.8rem]'>Ready to discuss your project with us?</h3></div>
                                <form action="#" className='grid grid-row-3 gap-[30px]'>
                                    <input className='w-full md:max-w-[unset] sm:max-w-[500px] px-4 py-[10px] placeholder-white bg-transparent border-[3px] border-white rounded-[5px]' type="text" name="" id="" placeholder='Full Name' />
                                    <input className='w-full md:max-w-[unset] sm:max-w-[500px] px-4 py-[10px] placeholder-white bg-transparent border-[3px] border-white rounded-[5px]' type="email" name="" id="" placeholder='Email' />
                                    <textarea className='w-full md:max-w-[unset] sm:max-w-[500px] px-4 py-[10px] placeholder-white bg-transparent border-[3px] border-white rounded-[5px] h-[150px]' name="" id="" cols="30" rows="10" placeholder='About Project'></textarea>
                                    <Button btn="btn2" className='btn-primary-smc ms-auto'>Send Message <img src={sendIcon} alt="" /></Button>
                                </form>
                            </div>
                        </div>
                    </CardCover>
                </div>
            </div>
        </div>
    </>
  )
}

export default Discus
