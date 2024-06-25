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
        
        <div className="bg-smc-1 lg:bg-[url('./assets/img/bg-hero.svg')] bg-cover bg-no-repeat">
            
            {/* Hero Section */}
            <div className="min-h-[75vh] xl:px-[4.3rem] px-[1rem] py-[50px] mx-auto xl:container" id="section-hero-home">
                <div className="columns-1">
                <div className=' md:max-w-[500px]'>
                    <h2 className=' relative sm:text-[4.5rem] text-[2.5rem]'>The Best <br /> way to grow <br /> your 
                        <div className='rotate-[-2.5deg] lg:scale-100 absolute bottom-0 lg:right-[-7.5rem] right-0 rounded-[15px] shadow-[0px_20px_0px_-10px_rgba(0,0,0,0.75)]'>
                            <div className="w-full bg-white text-black px-5 border-solid border-2 border-black rounded-[5px]">Business</div>
                            <img src={starHeroSvg} alt="" className='absolute right-[-45px] bottom-[-50px]'/>
                        </div>
                    </h2>
                    <h4 className='py-[2rem]'>Your Cost-effective, Cross-Continental, Digital Innovation Partner</h4>
                    <div className="mt-[2.5rem] ms-0 sm:ms-12 relative text-center sm:text-start">
                        <Button btn="btn1" to='#' className='btn-primary-smc'>RECENT WORKS</Button>
                        <img src={arrowHeroSvg1} alt="" className='absolute top-[-50px] sm:left-[-100px] left-[0]' />
                        <img src={arrowHeroSvg2} alt="" className='absolute sm:bottom-[-50px] sm:right-[110px] bottom-[-80px] right-0' />
                    </div>
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

        {/* Meet Section */}
        
        <div className="xl:px-[4.3rem] px-[1rem] p-[65px_0_85px_0] mx-auto xl:container bg-white" id="section-meet">
            <div className="grid grid-cols-1">
                   <CardCover selectCard="cc1" bg="bg-[white]">
                    <h3 className='text-[#00173F] text-center pt-10 pb-5'>Meet Smart Multi Creative</h3>
                    <div className="lg:grid lg:grid-cols-[40%_60%] flex flex-wrap gap-5 text-black pt-5 pb-20">
                        <img src={imgMeet} alt="" className='m-auto w-full max-w-[257px]' />
                        <div className="desk-meet px-10">
                            <p className='font-bold'>We offer visually appealing and user-centric interactive solutions tailored to your business needs.</p><br />
                            <p>We combine digital content creative with software development custom created and interactive design assets. We is a creative IT and digital partner with crowd-economy methods where you can collaborate B2B with us.</p>
                        </div>
                    </div>
                   </CardCover>
            </div>
        </div>

        {/* our capabilities */}
        <div id="section-our-cap xl:px-[4.3rem] px-[1rem] py-[50px]">
            <div className="container-full mx-auto bg-[#144688] min-h-[74px] flex flex-column items-center justify-center">
                <h4 className='m-0'>Our Capabilities</h4>
            </div>
            <div className="xl:container mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-[25%_75%] mt-20 gap-44">
                    <div className="img-our-cap hidden justify-center xl:flex">
                        <img src={whatTxt} alt="What can we do"/>
                    </div>

                    <div className="flex flex-col gap-20">
                        
                            <div onClick={toggleCardAnim1} className={`${cardAnim1 ? 'card-anim-active' : 'card-anim'} w-full relative max-w-[20rem] m-auto xl:m-0 cursor-pointer`}>
                                <div className="absolute mt-10 transition-all btn-left-wrapper left-[-100%] flex flex-col gap-4">
                                    <Button btn="btn4" to='#' className='ms-auto'>ERP Development</Button>
                                    <Button btn="btn4" to='#' className='ms-auto'>IT Consulting</Button>
                                </div>
                                <div className="absolute mt-10 transition-all btn-right-wrapper right-[-100%] flex flex-col gap-4">
                                    <Button btn="btn4" to='#' className='me-auto'>WEB / App Developement</Button>
                                    <Button btn="btn4" to='#' className='me-auto'>Software Maintenance</Button>
                                </div>
                                <CardCover selectCard="cc2" bg="bg-[#144688]" titleCard="Development">
                                    <img src={devCard} alt="" />
                                    <img src={hpDig} alt="" className='absolute bottom-[1rem] right-[2rem] z-10' />
                                </CardCover>
                            </div>
                        
                            <div onClick={toggleCardAnim2} className={`${cardAnim2 ? 'card-anim-active' : 'card-anim'} w-full relative max-w-[20rem] m-auto xl:m-0 cursor-pointer`}>
                                <div className="absolute mt-10 transition-all btn-left-wrapper left-[-100%] flex flex-col gap-4">
                                    <Button btn="btn4" to='#' className='ms-auto'>ERP Development</Button>
                                    <Button btn="btn4" to='#' className='ms-auto'>IT Consulting</Button>
                                </div>
                                <div className="absolute mt-10 transition-all btn-right-wrapper right-[-100%] flex flex-col gap-4">
                                    <Button btn="btn4" to='#' className='me-auto'>WEB / App Developement</Button>
                                    <Button btn="btn4" to='#' className='me-auto'>Software Maintenance</Button>
                                </div>
                                <CardCover selectCard="cc2" bg="bg-[#144688]" titleCard="Digital Creative">
                                    <img src={digCard} alt="" />
                                </CardCover>
                            </div>
                   
                    </div>

                </div>
                <div className="grid grid-cols-1 mb-10 mt-20">
                    <div className="flex lg:flex-nowrap flex-wrap gap-4 text-center items-center justify-center">
                        <div className='md:me-5'>
                        <h4 className='text-black'>Want to know more <br /> about our capabilities?</h4>
                        </div>
                        <Button btn="btn1" to='#' className='btn-primary-smc'>Learn More</Button>
                    </div>
                </div>
            </div>

        </div>

         {/* animation text */}
         <TextAnimation 
            textItems={listText2}
            boxClass="animation-text-box-1"
            ts="c1"
            />
        {/* work */}
        <div id="section-work" className='bg-smc-1 '>
            <div className="bg-[url('./src/assets/img/bg-work.svg')] bg-cover bg-no-repeat min-h-[550px]">
                <div className="xl:container mx-auto xl:px-[4.3rem] px-[1rem] py-[50px]">
                    <div className="lg:grid lg:grid-cols-[40%_60%] flex flex-wrap gap-4">
                        <div className='w-full'><h3 className='text-center lg:text-start'>Our lastest work</h3></div>
                        <div className='flex lg:flex-row flex-col gap-4 justify-between'>
                        <CardCover selectCard="cc3" bg="bg-[white]">
                            <p className='text-black font-bold'>Business challenges are tough, but we will be committed to helping you find themthe best technology solutions for their business growth</p>
                            </CardCover>
                        <div className='lg:mx-[2rem]'><Button btn="btn1" to='#' className='btn-primary-smc'>RECENT WORKS</Button></div>
                        </div>
                    </div>
                    <div className="min-h-[550px] mt-[50px] px-7">
                    <Carousel cls="work-slide" cs="c1">
                        <div className=' md:scale-95 scale-90'>
                            <div className="grid lg:grid-cols-2 grid-rows-1 gap-4">

                            <div className="img-work flex justify-center"><img src={work1} alt="" /></div>
                            <div className="desk-work">
                                <h3>FirLife App</h3>
                                <p>A useful application to assist users in carrying out sports with tracking features during exercise. Apart from that, there is also a weekly user report while exercising using this application</p>
                            </div>
                            </div>
                        </div>
                        <div className=' md:scale-95 scale-90'>
                            <div className="grid lg:grid-cols-2 grid-rows-1 gap-4">

                            <div className="img-work flex justify-center"><img src={work1} alt="" /></div>
                            <div className="desk-work">
                                <h3>FirLife App</h3>
                                <p>A useful application to assist users in carrying out sports with tracking features during exercise. Apart from that, there is also a weekly user report while exercising using this application</p>
                            </div>
                            </div>
                        </div>
                        <div className=' md:scale-95 scale-90'>
                            <div className="grid lg:grid-cols-2 grid-rows-1 gap-4">

                            <div className="img-work flex justify-center"><img src={work1} alt="" /></div>
                            <div className="desk-work">
                                <h3>FirLife App</h3>
                                <p>A useful application to assist users in carrying out sports with tracking features during exercise. Apart from that, there is also a weekly user report while exercising using this application</p>
                            </div>
                            </div>
                        </div>
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>

        {/* testimonial */}
        <div id="section-testimonial">
            <div className="xl:container mx-auto xl:px-[4.3rem] px-[1rem] py-[50px] text-black">
                <div className="grid grid-cols-1">
                    <div className="title-section-testimoni text-center">
                        <span className='pb-4 text-[20px]'>Testimonial</span>
                        <h3 className='mb-10'>What our clients love in working with us</h3>
                    </div>
                    <div className="testimonial mb-20 grid grid-rows-3 gap-10">
                        <CardCover selectCard='cc4'>
                            <div className="card-testimonial flex flex-col">
                                <div className="icon-quote mb-10"><img src={quoteIcon} alt="" /></div>
                                <p className=' font-bold mb-4'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                                <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-4">
                                    <div className="client-testimonial flex flex-nowrap gap-1 max-w-[300]">
                                        <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                        <div className="client-testimonial-detail flex flex-col">
                                            <h6 className='m-0'>Marc Andre</h6>
                                            <span className='text-gray-400 text-[12px]'>CEO WARUNG PINTAR</span>
                                        </div>
                                    </div>
                                    <div className="client-feedback flex flex-nowrap items-center max-w-[300px]">
                                        <h4 className="m-0 me-4">5.0</h4>
                                        <div className="star-point flex flex-nowrap items-center">
                                            <img src={starTesti} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardCover>
                        <CardCover selectCard='cc4'>
                            <div className="card-testimonial flex flex-col">
                                <div className="icon-quote mb-10"><img src={quoteIcon} alt="" /></div>
                                <p className=' font-bold mb-4'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                                <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-4">
                                    <div className="client-testimonial flex flex-nowrap gap-1 max-w-[300]">
                                        <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                        <div className="client-testimonial-detail flex flex-col">
                                            <h6 className='m-0'>Marc Andre</h6>
                                            <span className='text-gray-400 text-[12px]'>CEO WARUNG PINTAR</span>
                                        </div>
                                    </div>
                                    <div className="client-feedback flex flex-nowrap items-center max-w-[300px]">
                                        <h4 className="m-0 me-4">5.0</h4>
                                        <div className="star-point flex flex-nowrap items-center">
                                            <img src={starTesti} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardCover>
                        <CardCover selectCard='cc4'>
                            <div className="card-testimonial flex flex-col">
                                <div className="icon-quote mb-10"><img src={quoteIcon} alt="" /></div>
                                <p className=' font-bold mb-4'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                                <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-4">
                                    <div className="client-testimonial flex flex-nowrap gap-1 max-w-[300]">
                                        <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                                        <div className="client-testimonial-detail flex flex-col">
                                            <h6 className='m-0'>Marc Andre</h6>
                                            <span className='text-gray-400 text-[12px]'>CEO WARUNG PINTAR</span>
                                        </div>
                                    </div>
                                    <div className="client-feedback flex flex-nowrap items-center max-w-[300px]">
                                        <h4 className="m-0 me-4">5.0</h4>
                                        <div className="star-point flex flex-nowrap items-center">
                                            <img src={starTesti} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardCover>
                    </div>
                    <div className="cta-testimonial flex flex-nowrap justify-center">
                        <Button btn="btn1" to='#' className='btn-primary-smc'>show more review</Button>
                    </div>
                </div>
            </div>
        </div>

        <Discus/>
        <Footer/>

    </>
  )
}

export default Home
