import React from 'react'
import CardCover from '../CardCover/CardCover'
import Button from '../Button/Button'
import human from '../../assets/img/human.png'
import starTesti from '../../assets/img/star-testi-2.svg'
import sendIcon from "../../assets/img/send-icon.svg"


function Discus() {
  return (
    <>
    <section className="section-discus">
      <div className="xl:container xl:px-0 px-4 mx-auto">
        <div className="mx-auto w-full max-w-[71.25rem]">
            <CardCover selectCard="cc5" bg="bg-[#144688]">
                <div className="discus-content_wrapper flex justify-between lg:flex-row flex-col lg:gap-[6.875rem] gap-[2.5rem] lg:ps-[6.875rem] lg:pe-[3rem] p-[1.5rem] lg:pb-[6.75rem] lg:pt-[5rem]">          
                    <div className="discus-start_content w-full lg:max-w-[26.875rem] text-black lg:text-start text-center">
                        <CardCover selectCard='cc4' bg="bg-[#fff]">
                            <div className="card-testimonial flex flex-col gap-[1.875rem]">
                                <h5>Our client say</h5>
                                <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center border-b-2 border-[#00000040] pb-[1.875rem]">
                                    <h4 className="m-0">5.0</h4>
                                    <div className="star-point flex flex-nowrap items-center">
                                        <img src={starTesti} alt="" />
                                    </div>
                                </div>
                                <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                                <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                                    <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                                        <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                        <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                            <h6 className='m-0'>Marc Andre</h6>
                                            <span className='text-gray-400 text-[12px]'>CEO WARUNG PINTAR</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardCover>
                    </div>
                    <div className="discus-end_content w-full lg:max-w-[28.875rem]">
                        <div className="form-discus flex flex-col gap-[2.938rem]">
                            <div className="title-form-discus"><h3 className='lg:text-[2.5rem] text-[1.8rem] text-color-alternate'>Ready to discuss your project with us?</h3></div>
                            <form action="#" className='grid grid-row-3 gap-[30px]'>
                                <input className='w-full md:max-w-[unset] sm:max-w-[500px] px-4 py-[10px] placeholder-white bg-transparent border-[3px] border-white rounded-[5px]' type="text" name="" id="" placeholder='Full Name' />
                                <input className='w-full md:max-w-[unset] sm:max-w-[500px] px-4 py-[10px] placeholder-white bg-transparent border-[3px] border-white rounded-[5px]' type="email" name="" id="" placeholder='Email' />
                                <textarea className='w-full md:max-w-[unset] sm:max-w-[500px] px-4 py-[10px] placeholder-white bg-transparent border-[3px] border-white rounded-[5px] h-[150px]' name="" id="" cols="30" rows="10" placeholder='About Project'></textarea>
                                <Button btn="btn2" className='btn-primary-smc ms-auto'>Send Message <img src={sendIcon} alt="" /></Button>
                            </form>
                        </div>
                    </div>         
                </div>
            </CardCover>
        </div>
      </div>
    </section>
    </>
  )
}

export default Discus
