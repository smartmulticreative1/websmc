import {useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Button from '../Components/Button/Button'
import starHeroSvg from '../assets/img/star.svg'
import arrowHeroSvg1 from '../assets/img/arrow-1.svg'
import arrowHeroSvg2 from '../assets/img/arrow-2.svg'
import whatTxt from '../assets/img/what-text.svg'
import work1 from '../assets/img/work-1.svg'
import imgMeet from '../assets/img/meet.svg'
import quoteIcon from '../assets/img/quote-icon.svg'
import human from '../assets/img/human.png'
import starTesti from '../assets/img/star-testi.svg'
import devCard from '../assets/img/dev-card.svg'
import digCard from '../assets/img/dig-card.svg'
import hpDig from '../assets/img/hp-dig.svg'
import textHome from '../assets/img/text-home.svg'
import TextAnimation from '../Components/TextAnimation/TextAnimation'
import {Helmet, HelmetProvider } from 'react-helmet-async'
import CardCover from '../Components/CardCover/CardCover'
import Carousel from '../Components/Carousel/Carousel'
import Footer from '../Components/Footer/Footer'
import Discus from '../Components/Discus/Discus'


function Home() {
    const listText=[
        {text:'Web Developer'},
        {text:'Mobile App Development'},
        {text:'UI Design'},
        {text:'3D Design'},
        {text:'Digital Content'}
    ];
    const listText2=[
        {text:'Our Work'},
        {text:'Our Work'},
        {text:'Our Work'},
        {text:'Our Work'},
        {text:'Our Work'}
    ];
    const [cardAnim1, setIsCardAnim1] = useState(false);
    const [cardAnim2, setIsCardAnim2] = useState(false);

    const toggleCardAnim1 = () => {
        setIsCardAnim1(!cardAnim1);
    };
    const toggleCardAnim2 = () => {
        setIsCardAnim2(!cardAnim2);
    };
  return (
    <>

    <HelmetProvider>
        <Helmet>
            <title>SMC</title>
        </Helmet>
    </HelmetProvider>


        <Navbar ns='nv1'/>
        
     <section className="section-home_header w-full background-primary xl:px-0 px-4 xl:bg-[url('../src/assets/img/bg-header_home.svg')] bg-cover bg-no-repeat lg:bg-center 2xl:bg-top">
        <div className="xl:container mx-auto">
          <div className="home-header-content_wrapper xl:pt-[3.125rem] xl:pb-[5.25rem] xl:ps-[4.375rem] overflow-hidden">
            <div className="home-header_content text-color-alternate flex flex-col justify-center gap-[3.75rem]">
              <div className="home-header-detail_content flex flex-col gap-[1.875rem]">
                <div className="home-header_title sm:max-w-[29.188rem] sm:h-[21.125rem] pe-[1rem] sm:translate-x-0 w-full">
                  <img src={textHome} alt="" className='w-full sm:hidden block' />
                  <div className='hidden sm:block'>
                    <h2 className='xl:leading-[6.125rem] leading-normal sm:text-[4.5rem] text-[3rem]'>The Best way to grow your</h2>
                    <div className="sm:translate-x-[12rem] sm:translate-y-[-5rem] translate-y-[-4rem] translate-x-[8rem] flex flex-nowrap">
                      <div className="relative rotate-[-1.65deg]">
                        <div className='relative z-10 py-[0.625rem] px-[1.25rem] bg-white text-black border-solid border-2 border-black rounded-[0.313rem]'><h2 className='sm:text-[4.5rem] text-[3rem]'>Business</h2></div>
                        <div className="absolute bg-[#00173F] top-[0.5rem] left-[0.5rem] w-[95%] h-full rounded-[0.313rem]"></div>
                      </div>
                      <img src={starHeroSvg} alt="" className='translate-x-[-1.5rem] translate-y-[4rem]'/>
                    </div>
                  </div>
                </div>
                <div className="home-header_desk sm:max-w-[29.625rem] max-w-[14.188rem]"><p className='sm:text-[1.25rem] text-[1rem] font-semibold'>Your Cost-effective, Cross-Continental, Digital Innovation Partner</p></div>
              </div>
              <div className="home-header-cta_content xl:mx-0 mx-auto lg:pb-0 pb-4">
                <div className="h-0 sm:translate-x-[-3rem] translate-x-[-5rem] translate-y-[-3rem]"><img src={arrowHeroSvg1} alt="" className='animate-bounce'/></div>
                <Button btn="btn1" to='/resource' className='sm:ms-[1.875rem] ms-0 btn-primary-smc'>RECENT WORKS</Button>
                <div className="h-0 sm:translate-x-[16rem] translate-x-[8rem] sm:translate-y-[-2rem] translate-y-[-1.5rem]"><img src={arrowHeroSvg2} alt="" className='animate-bounce delay-75'/></div>
              </div>
            </div>
          </div>
        </div>
     </section>
 
     <section className='section-text-animation w-full'>
        <div className="text-animation_wrapper">
          <TextAnimation 
            textItems={listText}
            boxClass="animation-text-box-1"
            ts="c1"
            />
        </div>
     </section>

     <section className="section-meet w-full xl:px-0 px-4">
      <div className="xl:container mx-auto">
        <div className="meet-content_wrapper pt-[4.063rem] pb-[6.875rem] max-w-[71.25rem] mx-auto">
          <CardCover selectCard="cc1" bg="bg-[white]">
            <div className="meet-detail_content flex flex-col sm:gap-[2.5rem] gap-[2.75rem] sm:pt-[2.5rem] pt-[1.563rem] sm:pb-[5.438rem] pb-[4.875rem]">
              <div className="meet-start_content"><h3 className='text-center text-[#00173F] sm:text-[2.5rem] text-[1.25rem]'>Meet Smart Multi Creative</h3></div>
              <div className="meet-end_content flex sm:gap-[5.188rem] gap-[2.375rem] sm:flex-row flex-col sm:mx-[5.25rem] mx-[2.563rem]">
                <img src={imgMeet} alt="" className='' />
                <div className="meet-detail_end flex flex-col sm:gap-[1.25rem] gap-[2.438rem] text-[1.25rem] text-black">
                  <p className='sm:font-bold font-normal'>We offer visually appealing and user-centric interactive solutions tailored to your business needs.</p>
                  <p className='sm:font-normal font-bold sm:text-[1.25rem] text-[1rem]'>We combine digital content creative with software development custom created and interactive design assets. We is a creative IT and digital partner with crowd-economy methods where you can collaborate B2B with us.</p>
                </div>
              </div>
            </div>
          </CardCover>
        </div>
      </div>
     </section>

     <section className="section-our-cap w-full">
        <div className="our-cap-content_wrapper flex flex-col gap-[3.125rem] pb-[3.75rem]">
          <div className="our-cap-start_content background-primary text-center py-[1.25rem] text-color-alternate"><h5>Our Capabilities</h5></div>
          <div className="xl:container mx-auto our-cap-end_content flex flex-col gap-[5rem] ">
            <div className="our-cap-detail_end flex justify-center">
              <div className="w-[20%] ms-[8.438rem] xl:block hidden"><img src={whatTxt} alt="What can we do"/></div>
              <div className="text-color-alternate w-full xl:translate-x-[-8rem] flex flex-col gap-[6.25rem] justify-center items-center">

                <div onClick={toggleCardAnim1} className={`${cardAnim1 ? 'card-anim-active' : 'card-anim'} sm:scale-[.7] md:scale-100 scale-100 relative w-[19.125rem] m-0 cursor-pointer`}>
                    <div className="sm:block hidden">
                      <div className="absolute mt-10 transition-all btn-left-wrapper left-[-80%] flex flex-col gap-[1.5rem]">
                          <Button btn="btn4" to='/erp-dev' className='ms-auto'>ERP Development</Button>
                          <Button btn="btn4" to='/it-consulting' className='ms-auto'>IT Consulting</Button>
                      </div>
                      <div className="absolute mt-10 transition-all btn-right-wrapper right-[-110%] flex flex-col gap-[1.5rem]">
                          <Button btn="btn4" to='/web-app-dev' className='me-auto'>WEB / App Developement</Button>
                          <Button btn="btn4" to='/maintenance' className='me-auto'>Software Maintenance</Button>
                      </div>
                    </div>
                    <CardCover selectCard="cc2" bg="bg-[#144688]" titleCard="Development">
                        <img src={devCard} alt="" />
                        <img src={hpDig} alt="" className='absolute bottom-[1rem] right-[2rem] z-10' />
                    </CardCover>
                </div>

                <div onClick={toggleCardAnim2} className={`${cardAnim2 ? 'card-anim-active' : 'card-anim'} sm:scale-[.7] md:scale-100 scale-100 relative w-[19.125rem] xl:ms-[4.75rem] cursor-pointer`}>
                    <div className="sm:block hidden">
                      <div className="absolute transition-all btn-left-wrapper left-[-95%] flex flex-col gap-[1.5rem]">
                          <Button btn="btn4" to='/custom-solution' className='ms-auto'>Presentation Design</Button>
                          <Button btn="btn4" to='/digital-product-design' className='ms-auto'>Digital Product Design</Button>
                          <Button btn="btn4" to='/custom-solution' className='ms-auto'>Digital Banner Design</Button>
                          <Button btn="btn4" to='/custom-solution' className='ms-auto'>Motion Graphic</Button>
                          <Button btn="btn4" to='/custom-solution' className='ms-auto'>Illustration</Button>
                      </div>
                      <div className="absolute transition-all btn-right-wrapper right-[-125%] flex flex-col gap-[1.5rem]">
                          <Button btn="btn4" to='/copywriting-google-service' className='me-auto'>Google Service</Button>
                          <Button btn="btn4" to='/ads-service' className='me-auto'>Social Media Activation & ADS</Button>
                          <Button btn="btn4" to='/seo-service' className='me-auto'>SEO</Button>
                          <Button btn="btn4" to='/maintenance' className='me-auto'>Web Maintenance</Button>
                          <Button btn="btn4" to='/copywriting-service' className='me-auto'>Copywriting</Button>
                      </div>
                    </div>
                    <CardCover selectCard="cc2" bg="bg-[#144688]" titleCard="Digital Creative">
                        <img src={digCard} alt="" />
                    </CardCover>
                </div>

              </div>
            </div>
            <div className="our-cap-cta_end flex gap-[1.25rem] justify-center">
            <h5 className='text-[1.25rem] pe-4 text-black'>Want to know more <br /> about our capabilities?</h5>
            <Button btn="btn1" to='#' className='btn-primary-smc'>Learn More</Button>
            </div>
          </div>
        </div>
     </section>

     <section className='section-text-animation w-full'>
        <div className="text-animation_wrapper">
          <TextAnimation 
            textItems={listText2}
            boxClass="animation-text-box-1"
            ts="c1"
            />
        </div>
     </section>

     <section className="section-our-work w-full xl:px-0 px-4 background-primary">
      <div className="xl:container mx-auto">
        <div className="our-work-content_wrapper bg-[url('../src/assets/img/bg-work.svg')] bg-cover bg-center bg-no-repeat pt-[2.188rem] pb-[5.938rem] flex flex-col">
          <div className="our-work-start_content w-full max-w-[71.25rem] mx-auto flex flex-col xl:flex-row xl:gap-[5rem] gap-[1rem]">
            <h3 className='text-color-alternate text-[2rem]'>Our lastest work</h3>
            <div className="our-work-start_desk flex flex-col md:flex-row gap-[2.5rem]">
              <CardCover selectCard="cc3" bg="bg-[white]">
                <p className='text-black font-bold leading-4 text-[0.75rem] w-full max-w-[31.875rem]'>Business challenges are tough, but we will be committed to helping you find themthe best technology solutions for their business growth</p>
              </CardCover>
              <div className="block"><Button btn="btn1" to='#' className='btn-primary-smc'>RECENT WORKS</Button></div>
            </div>
          </div>
          <div className="our-work-end_content text-color-alternate">
            <Carousel cs='cwork'>
              <div className="our-work-content_slide flex justify-center sm:flex-row flex-col sm:gap-[3.375rem] py-[2.625rem]">
                <div className="slide-work_img w-full max-w-[30.875rem]"><img src={work1} alt="" /></div>                
                <div className="slide-work_detail flex flex-col gap-[2.5rem] w-full max-w-[29.125rem] pt-[2.5rem]">
                  <h3>FirLife App</h3>
                  <p className='text-[1.25rem]'>A useful application to assist users in carrying out sports with tracking features during exercise. Apart from that, there is also a weekly user report while exercising using this application</p>
                </div>                
              </div>
              <div className="our-work-content_slide flex justify-center sm:flex-row flex-col sm:gap-[3.375rem] py-[2.625rem]">
                <div className="slide-work_img w-full max-w-[30.875rem]"><img src={work1} alt="" /></div>                
                <div className="slide-work_detail flex flex-col gap-[2.5rem] w-full max-w-[29.125rem] pt-[2.5rem]">
                  <h3>FirLife App</h3>
                  <p className='text-[1.25rem]'>A useful application to assist users in carrying out sports with tracking features during exercise. Apart from that, there is also a weekly user report while exercising using this application</p>
                </div>                
              </div>
              <div className="our-work-content_slide flex justify-center sm:flex-row flex-col sm:gap-[3.375rem] py-[2.625rem]">
                <div className="slide-work_img w-full max-w-[30.875rem]"><img src={work1} alt="" /></div>                
                <div className="slide-work_detail flex flex-col gap-[2.5rem] w-full max-w-[29.125rem] pt-[2.5rem]">
                  <h3>FirLife App</h3>
                  <p className='text-[1.25rem]'>A useful application to assist users in carrying out sports with tracking features during exercise. Apart from that, there is also a weekly user report while exercising using this application</p>
                </div>                
              </div>
            </Carousel>
          </div>
        </div>
      </div>
     </section>

     <section className="section-testimonial">
      <div className="xl:container xl:px-0 px-4 mx-auto">
        <div className="testimonial-content_wrapper text-black w-full max-w-[59.313rem] mx-auto flex flex-col gap-[2.813rem] py-[4.375rem]">
          <div className="testimonial-start_content flex flex-col gap-[1.125rem] text-center">
            <p className='text-[1.5rem] font-bold'>Testimonial</p>
            <h3>What our clients love in working with us</h3>
          </div>
          <div className="testimonial-end_content flex flex-col gap-[2.938rem]">
            <div className="testimonial-card_wrapper flex flex-col gap-[2.813rem]">
              <CardCover selectCard='cc4'>
                  <div className="card-testimonial flex flex-col gap-[1.875rem]">
                      <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                      <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                      <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                          <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                              <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                              <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                  <h6 className='m-0'>Marc Andre</h6>
                                  <span className='text-gray-400 text-[12px]'>CEO WARUNG PINTAR</span>
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
                                  <span className='text-gray-400 text-[12px]'>CEO WARUNG PINTAR</span>
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
                                  <span className='text-gray-400 text-[12px]'>CEO WARUNG PINTAR</span>
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
            <div className="cta-testimonial-card_wrapper text-center"><Button btn="btn1" to='#' className='btn-primary-smc'>show more review</Button></div>
          </div>
        </div>
      </div>
     </section>

        <Discus/>
        <Footer/>

    </>
  )
}

export default Home
