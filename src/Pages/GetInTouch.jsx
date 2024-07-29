import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import CardCover from '../Components/CardCover/CardCover'
import quoteIcon from '../assets/img/quote-icon.svg'
import human from '../assets/img/human.png'
import starTesti from '../assets/img/star-testi.svg'
import Button from '../Components/Button/Button'
import sendIcon from "../assets/img/send-icon.svg"
import waIcon from "../assets/img/wa-icon.svg"
import check from '../assets/img/check.svg'
import git1 from '../assets/img/git-1.svg'
import humanAsk from '../assets/img/human-ask.png'
import {Helmet, HelmetProvider } from 'react-helmet-async'
import Faq from '../Components/Faq/Faq'
import Carousel from '../Components/Carousel/Carousel'


function GetInTouch() {
  const faq=[
    {
      title: 'What service do you provide?',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
    {
      title: 'Do you have an example project?',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
    {
      title: 'Where should I go if I want to discuss',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
    {
      title: 'How long does it take to complete the project',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
    {
      title: 'what service do you provide?',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
    {
      title: 'What service do you provide?',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
  ]

  return (
    <>

    <HelmetProvider>
        <Helmet>
            <title>Get In Touch</title>
        </Helmet>
    </HelmetProvider>

       <Navbar ns='nv1'/>

      <section className="section-gitouch w-full xl:px-0 px-4 bg-[#144688]">
          <div className="xl:container mx-auto">
            <div className="gitouch-content_wrapper p-[2.5rem_0_6.25rem] w-full max-w-[71.25rem] mx-auto">
              <CardCover selectCard="cc5" bg="bg-[white]">
                <div className="gitouch-form flex lg:flex-row flex-col gap-[1.688rem] p-[1.5rem] lg:p-[2.813rem_3rem_2.5rem_5rem]">
                  <div className="gitouch-start_content w-full lg:max-w-[26.938rem] flex flex-col  gap-[2.438rem]">
                    <img src={git1} alt="image" className='mx-auto' />
                    <div className="detail_gitouch-start flex flex-col gap-[1.313rem]">
                      <p className="font-bold">LET'S TALKS</p>
                      <div className="flex flex-col gap-[0.688rem]">
                        <div className="flex flex-nowrap gap-[0.625rem]"><img className='w-[1.5rem] h-[1.5rem]' src={check} alt="icon" /><p className="font-semibold">we will respond to you in 24 hours</p></div>
                        <div className="flex flex-nowrap gap-[0.625rem]"><img className='w-[1.5rem] h-[1.5rem]' src={check} alt="icon" /><p className="font-semibold">we are open for discussion regarding your business</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="gitouch-end_content w-full lg:max-w-[34.25rem] flex flex-col  gap-[]">
                    <div className="form-discus flex flex-col gap-[2.938rem]">
                        <div className="title-form-discus"><h3 className='lg:text-[2.5rem] text-[1.8rem] text-black'>Ready to discuss your project with us?</h3></div>
                        <form action="#" className='grid grid-row-3 gap-[30px]'>
                            <input className='w-full md:max-w-[unset] sm:max-w-[500px] px-4 py-[10px] placeholder-black bg-transparent border-[3px] border-black rounded-[5px]' type="text" name="" id="" placeholder='Full Name' />
                            <input className='w-full md:max-w-[unset] sm:max-w-[500px] px-4 py-[10px] placeholder-black bg-transparent border-[3px] border-black rounded-[5px]' type="email" name="" id="" placeholder='Email' />
                            <textarea className='w-full md:max-w-[unset] sm:max-w-[500px] px-4 py-[10px] placeholder-black bg-transparent border-[3px] border-black rounded-[5px] h-[150px]' name="" id="" cols="30" rows="10" placeholder='About Project'></textarea>
                            <Button btn="btn2" className='btn-primary-smc ms-auto'>Send Message <img src={sendIcon} alt="" /></Button>
                        </form>
                    </div>
                  </div>
                </div>
              </CardCover>
            </div>
          </div>
      </section>

      <section className="section-testimonial">
      <div className="xl:container xl:px-0 px-4 mx-auto">
        <div className="testimonial-content_wrapper text-black w-full mx-auto flex flex-col gap-[2.813rem] py-[4.375rem]">
          <div className="testimonial-start_content flex flex-col gap-[1.125rem] text-center">
            <p className='text-[1.5rem] font-bold'>Testimonial</p>
            <h3>What our clients love in working with us</h3>
          </div>
          <div className="testimonial-end_content flex flex-col gap-[2.938rem]">
            <Carousel cs='ctesti'>
              <div className="testimonial-card_wrapper md:m-[0_2rem_2rem_0] flex flex-col gap-[2.813rem]">
                <CardCover selectCard='cc4'>
                    <div className="card-testimonial flex flex-col gap-[1.875rem]">
                        <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                        <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                        <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                            <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                                <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                    <h6 className='m-0'>Marc Andre</h6>
                                    <span className='text-gray-400 text-[12px]'>CEO CORTEVA AGRISCIENCE</span>
                                </div>
                            </div>
                            <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                                <h4 className="m-0">5.0</h4>
                                <div className="star-point flex flex-nowrap items-center">
                                    <img src={starTesti} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardCover>
                <CardCover selectCard='cc4'>
                    <div className="card-testimonial flex flex-col gap-[1.875rem]">
                        <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                        <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                        <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                            <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                                <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                    <h6 className='m-0'>Marc Andre</h6>
                                    <span className='text-gray-400 text-[12px]'>CEO CORTEVA AGRISCIENCE</span>
                                </div>
                            </div>
                            <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                                <h4 className="m-0">5.0</h4>
                                <div className="star-point flex flex-nowrap items-center">
                                    <img src={starTesti} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardCover>
                <CardCover selectCard='cc4'>
                    <div className="card-testimonial flex flex-col gap-[1.875rem]">
                        <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                        <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                        <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                            <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                                <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                    <h6 className='m-0'>Marc Andre</h6>
                                    <span className='text-gray-400 text-[12px]'>CEO CORTEVA AGRISCIENCE</span>
                                </div>
                            </div>
                            <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                                <h4 className="m-0">5.0</h4>
                                <div className="star-point flex flex-nowrap items-center">
                                    <img src={starTesti} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardCover>

              </div>
              <div className="testimonial-card_wrapper md:m-[0_2rem_2rem_0] flex flex-col gap-[2.813rem]">
                <CardCover selectCard='cc4'>
                    <div className="card-testimonial flex flex-col gap-[1.875rem]">
                        <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                        <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                        <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                            <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                                <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                    <h6 className='m-0'>Marc Andre</h6>
                                    <span className='text-gray-400 text-[12px]'>CEO CORTEVA AGRISCIENCE</span>
                                </div>
                            </div>
                            <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                                <h4 className="m-0">5.0</h4>
                                <div className="star-point flex flex-nowrap items-center">
                                    <img src={starTesti} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardCover>
                <CardCover selectCard='cc4'>
                    <div className="card-testimonial flex flex-col gap-[1.875rem]">
                        <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                        <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                        <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                            <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                                <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                    <h6 className='m-0'>Marc Andre</h6>
                                    <span className='text-gray-400 text-[12px]'>CEO CORTEVA AGRISCIENCE</span>
                                </div>
                            </div>
                            <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                                <h4 className="m-0">5.0</h4>
                                <div className="star-point flex flex-nowrap items-center">
                                    <img src={starTesti} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardCover>
                <CardCover selectCard='cc4'>
                    <div className="card-testimonial flex flex-col gap-[1.875rem]">
                        <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                        <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                        <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                            <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                                <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                    <h6 className='m-0'>Marc Andre</h6>
                                    <span className='text-gray-400 text-[12px]'>CEO CORTEVA AGRISCIENCE</span>
                                </div>
                            </div>
                            <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                                <h4 className="m-0">5.0</h4>
                                <div className="star-point flex flex-nowrap items-center">
                                    <img src={starTesti} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardCover>

              </div>
              <div className="testimonial-card_wrapper md:m-[0_2rem_2rem_0] flex flex-col gap-[2.813rem]">
                <CardCover selectCard='cc4'>
                    <div className="card-testimonial flex flex-col gap-[1.875rem]">
                        <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                        <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                        <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                            <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                                <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                    <h6 className='m-0'>Marc Andre</h6>
                                    <span className='text-gray-400 text-[12px]'>CEO CORTEVA AGRISCIENCE</span>
                                </div>
                            </div>
                            <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                                <h4 className="m-0">5.0</h4>
                                <div className="star-point flex flex-nowrap items-center">
                                    <img src={starTesti} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardCover>
                <CardCover selectCard='cc4'>
                    <div className="card-testimonial flex flex-col gap-[1.875rem]">
                        <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                        <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                        <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                            <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                                <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                    <h6 className='m-0'>Marc Andre</h6>
                                    <span className='text-gray-400 text-[12px]'>CEO CORTEVA AGRISCIENCE</span>
                                </div>
                            </div>
                            <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                                <h4 className="m-0">5.0</h4>
                                <div className="star-point flex flex-nowrap items-center">
                                    <img src={starTesti} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardCover>
                <CardCover selectCard='cc4'>
                    <div className="card-testimonial flex flex-col gap-[1.875rem]">
                        <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                        <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                        <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                            <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                                <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                    <h6 className='m-0'>Marc Andre</h6>
                                    <span className='text-gray-400 text-[12px]'>CEO CORTEVA AGRISCIENCE</span>
                                </div>
                            </div>
                            <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                                <h4 className="m-0">5.0</h4>
                                <div className="star-point flex flex-nowrap items-center">
                                    <img src={starTesti} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardCover>

              </div>
            </Carousel>
          </div>
        </div>
      </div>
     </section>

      <section className="section-faq w-full xl:px-0 px-4">
          <div className="xl:container mx-auto">
            <div className="faq-content_wrapper text-black flex flex-col gap-[4.375rem] mx-auto w-full max-w-[72rem]">
              <div className="faq-start_content text-start flex flex-nowrap items-end gap-[1.25rem]">
                <h2>FAQ</h2><p className="text-[1.25rem] font-bold">(Frequently Asked Questions)</p>
              </div>
              <div className="faq-end_content flex md:flex-row flex-col gap-[4rem]">
                <CardCover selectCard='cc4' bg="bg-[#fff]">
                  <div className="flex flex-col gap-[2.5rem] w-full max-w-[19.25rem] mx-auto">
                    <div className="flex flex-col gap-[1.25rem]">
                      <p className="text-[1.875rem] font-bold text-center leading-[2.563rem]">SMC <br /> Public Relations</p>
                      <div className="w-full rounded-[0.625rem] h-[0.563rem] bg-[#144688]"></div>
                      <div className="flex flex-wrap gap-[1.563rem]">
                        <div className="w-[4.188rem] h-[4.188rem] rounded-full overflow-hidden border-[0.25rem] border-[#144688]"><img src={humanAsk} alt="human img" /></div>
                        <div className="flex flex-col gap-[0.313rem]">
                          <div className="text-[1.25rem] font-bold">Andine</div>
                          <div className="text-[0.75rem]">Manager SMC</div>
                        </div>
                      </div>
                      <p className='leading-[1.375rem]'>Hello, I'm Andine, you can discuss or ask about the services we have. We are open if you ask anything</p>
                    </div>
                    <div className='mx-auto'><Button btn="btn2" className='btn-primary-smc'><div className='flex flex-nowrap gap-[1.063rem]'><div>Ask a Quetion</div> <img src={waIcon} alt="" /></div></Button></div>
                  </div>
                </CardCover>
                <div className="flex flex-col gap-[2.5rem] w-full max-w-[49.375rem] mx-auto">
                  <Faq faqItems={faq}/>
                </div>
              </div>
            </div>
          </div>
      </section>

      <Footer/>
    </>
  )
}

export default GetInTouch
