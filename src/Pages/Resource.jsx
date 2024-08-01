import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import {Helmet, HelmetProvider } from 'react-helmet-async'
import Button from '../Components/Button/Button';
import Footer from '../Components/Footer/Footer';
import TextAnimation from '../Components/TextAnimation/TextAnimation';
import OurBlog from '../Components/OurBlog/OurBlog';
import CardCover from '../Components/CardCover/CardCover';
import btnPrev from '../assets/img/btn-prev.svg'
import btnNext from '../assets/img/btn-next.svg'
import rscGuide1 from '../assets/img/rsc-guide-1.png'
import iconQuote2 from '../assets/img/icon-quote-2.svg'
import iconRscCard1 from '../assets/img/icon-rsc-card-1.svg'
import iconRscCard2 from '../assets/img/icon-rsc-card-2.svg'
import iconRscCard3 from '../assets/img/icon-rsc-card-3.svg'
import iconRscCard4 from '../assets/img/icon-rsc-card-4.svg'
import iconRscCard5 from '../assets/img/icon-rsc-card-5.svg'
import iconRscCard6 from '../assets/img/icon-rsc-card-6.svg'
import iconRscCard7 from '../assets/img/icon-rsc-card-7.svg'
import iconRscCard8 from '../assets/img/icon-rsc-card-8.svg'
import iconRscCard9 from '../assets/img/icon-rsc-card-9.svg'
import iconRscCard10 from '../assets/img/icon-rsc-card-10.svg'
import iconRscCard11 from '../assets/img/icon-rsc-card-11.svg'
import iconRscCard12 from '../assets/img/icon-rsc-card-12.svg'
import iconRscCard13 from '../assets/img/icon-rsc-card-13.svg'
import iconRscCard14 from '../assets/img/icon-rsc-card-14.svg'
import ourBlogThum1 from '../assets/img/thumb-rsc-1.png'
import ourBlogThum2 from '../assets/img/thumb-rsc-2.png'
import ourBlogThum3 from '../assets/img/thumb-rsc-3.png'
import caseImg1 from '../assets/img/case-rsc-1.png'
import caseImg2 from '../assets/img/case-rsc-2.png'
import caseImg3 from '../assets/img/case-rsc-3.png'


function Resource() {
  const listText=[
    {text:'Blog'},
    {text:'Case Studies'},
    {text:'Guides and Books'},
];
  
// our blog
  const blogs = [
    {
      title: 'A useful application to assist users in carrying out sports with tracking features during exercise.',
      details: 'Detailed description of the blog post.',
      category: 'Custom Solution',
      date: '12 March',
      image:ourBlogThum1,
    },
    {
      title: 'A useful application to assist users in carrying out sports with tracking features during exercise.',
      details: 'Exploring creative solutions for businesses.',
      category: 'Creative Solution',
      date: '15 April',
      image:ourBlogThum2,
    },
    {
      title: 'A useful application to assist users in carrying out sports with tracking features during exercise.',
      details: 'Comprehensive ERP development services.',
      category: 'Custom Solution',
      date: '22 May',
      image:ourBlogThum3,
    },
    {
      title: 'A useful application to assist users in carrying out sports with tracking features during exercise.',
      details: 'Innovative trends in web design.',
      category: 'Creative Solution',
      date: '30 June',
      image:ourBlogThum2,
    },
    {
      title: 'A useful application to assist users in carrying out sports with tracking features during exercise.',
      details: 'How AI and automation are transforming businesses.',
      category: 'Custom Solution',
      date: '5 July',
      image:ourBlogThum3,
    },
    {
      title: 'A useful application to assist users in carrying out sports with tracking features during exercise.',
      details: 'Effective strategies for digital marketing.',
      category: 'Creative Solution',
      date: '12 August',
      image:ourBlogThum1,
    },
    {
      title: 'A useful application to assist users in carrying out sports with tracking features during exercise.',
      details: 'Exploring advanced solutions for ERP systems.',
      category: 'Custom Solution',
      date: '19 September',
      image:ourBlogThum3,
    },
    {
      title: 'A useful application to assist users in carrying out sports with tracking features during exercise.',
      details: 'Creating a strong brand identity.',
      category: 'Creative Solution',
      date: '25 October',
      image:ourBlogThum2,
    }
  ];

   // our section case studies content
   const caseStudies = [
    {
      title: 'How EVHUB can supervise the rented car vehicle 1',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: caseImg1,
    },
    {
      title: 'How EVHUB can supervise the rented car vehicle 2',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: caseImg2,
    },
    {
      title: 'How EVHUB can supervise the rented car vehicle 3',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: caseImg3,
    },
    {
      title: 'How EVHUB can supervise the rented car vehicle 4',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: caseImg2,
    },
    {
      title: 'How EVHUB can supervise the rented car vehicle 5',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: caseImg3,
    },
    {
      title: 'How EVHUB can supervise the rented car vehicle 6',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: caseImg1,
    },
    // Add more cards as needed
  ];
  
   const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(caseStudies.length / cardsPerPage);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = caseStudies.slice(indexOfFirstCard, indexOfLastCard);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Resource | SMC</title>
      </Helmet>
    </HelmetProvider>
    
    <Navbar ns='nv2'/>

    <section className="section-header_resource w-full xl:px-0 px-4 bg-[url('../src/assets/img/bg-resource.png')] bg-cover bg-top">
      <div className="xl:container mx-auto">
        <div className="resource-content_wrapper flex flex-col gap-[3.438rem] text-center text-black p-[6.875rem_0_8.688rem]">
          <div className="resource-start_content flex flex-col gap-[2.5rem] mx-auto w-full max-w-[60.125rem]">
            <p className="text-[1.25rem]">SMART MULTI CREATIVE RESOURCES:</p>
            <h3>"The Gateway to Profound Knowledge and Personal Advancement."</h3>
            <p>Provide information that is not only informative but also has a significant level of depth</p>
          </div>
          <div className="resource-end_content flex flex-col gap-[1.875rem]">
            <p className='text-[1.25rem]'>Explore Features</p>
            <div className="cta-resource_header flex md:flex-row flex-col justify-center gap-[1.875rem]">
              <button className='btn-tab btn-primary-tab btn-primary-tab-white'><span>CASE STUDIES</span></button>
              <button className='btn-tab btn-primary-tab btn-primary-tab-white'><span>BLOG</span></button>
              <button className='btn-tab btn-primary-tab btn-primary-tab-white'><span>GUIDE AND BOOK</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='section-text-animation w-full'>
        <div className="text-animation_wrapper">
          <TextAnimation 
            textItems={listText}
            boxClass="animation-text-box-2"
            ts="c1"
            />
        </div>
     </section>

    <section className="section-our-blog text-[black] w-full xl:px-0 px-4">
      <div className="xl:container mx-auto">
        <div className="our-blog-content_wrapper flex flex-col gap-[3.75rem] mx-auto w-full max-w-[74.313rem] p-[4.063rem_0_3.75rem]">
          <div className="our-blog-start_content flex flex-col gap-[0.938rem]">
            <div className="title-our-blog_section flex md:flex-row flex-col items-center gap-[1.188rem]">
              <h2>Blog -</h2>
              <h3>Inspiring Minds, One Post at a Time</h3>
            </div>
            <p className="text-[1.25rem]">useful and helpful article</p>
          </div>
          <OurBlog blogs={blogs} />
        </div>
      </div>
    </section>

    <section className="section-case-studies bg-[#144688] w-full xl:px-0 px-4">
      <div className="xl:container mx-auto">
        <div className="case-studies-content_wrapper text-white flex flex-col gap-[4.375rem] mx-auto w-full max-w-[71.25rem] py-[4.375rem]">
          <div className="case-studies-start_content flex md:gap-[9.063rem] gap-[1rem] md:flex-row flex-col">
            <h3 className='w-full max-w-[15.688rem]'>Case Studies</h3>
            <CardCover selectCard="cc3" bg="bg-[white]">
            <p className="text-[1.25rem] text-black">Encouraging companies to continue to innovate and create new solutions together. Solutions that can make our clients happy with their growing business.</p>
            </CardCover>
          </div>
          <div className="case-studies-end_content flex flex-col gap-[2.5rem]">
            {currentCards.map((card, index) => (
              <div
                className="card-case-studies_items flex gap-[3.938rem] md:flex-row flex-col"
                key={index}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="thumbnail-case-studies_card w-full md:max-w-[28.813rem]">
                    <CardCover selectCard="cc12" bg="bg-[white]">
                        <img src={card.imgSrc} alt="thumbnail" className='w-full h-full' />
                      </CardCover>
                    </div>
                    <div className="detail-case-studies_card w-full max-w-[38.188rem] p-[1.25rem] flex flex-col gap-[1.875rem]">
                      <h3>{card.title}</h3>
                      <p className="text-[1.25rem]">{card.description}</p>
                      <div className="cta-btn-case-studies_card md:ms-auto">
                        <button className='btn-tab btn-primary-tab-white'>SEE MORE DETAILS</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="detail-case-studies_card w-full max-w-[38.188rem] p-[1.25rem] flex flex-col gap-[1.875rem]">
                      <h3>{card.title}</h3>
                      <p className="text-[1.25rem]">{card.description}</p>
                      <div className="cta-btn-case-studies_card md:ms-auto">
                        <button className='btn-tab btn-primary-tab-white'>SEE MORE DETAILS</button>
                      </div>
                    </div>
                    <div className="thumbnail-case-studies_card w-full md:max-w-[28.813rem] md:order-last order-first">
                      <CardCover selectCard="cc12" bg="bg-[white]">
                        <img src={card.imgSrc} alt="thumbnail" className='w-full h-full' />
                      </CardCover>
                    </div>
                  </>
                )}
              </div>
            ))}
            <div className="card-case-studies_pagination mt-[1.25rem] flex flex-nowrap gap-[4.375rem] mx-auto items-center">
              <button onClick={handlePrev} disabled={currentPage === 1} className="pagination-button"><img src={btnPrev} alt="" /></button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index + 1)}
                  className={currentPage === index + 1 ? 'btn-tab btn-primary-tab' : 'btn-tab btn-primary-tab-white'}
                >
                  {index + 1}
                </button>
              ))}
              <button onClick={handleNext} disabled={currentPage === totalPages} className="pagination-button"><img src={btnNext} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-guide w-full xl:px-0 px-4">
      <div className="xl:container mx-auto">
        <div className="guide-content_wrapper text-black flex flex-col gap-[2.438rem] mx-auto w-full max-w-[71.25rem] p-[4.375rem_0_6.25rem]">
          <div className="guide-start_content flex flex-col gap-[3.125rem]">
            <div className="content-1-start_guide flex flex-col gap-[1.25rem]">
              <p className="text-[1.25rem] text-[#00000040]">Guides and Books</p>
              <p className="text-[1.563rem] font-bold text-center">Quality educational content is not just the material or content, but how the material is presented. The development and marketing of your product must be prepared as well as possible. Use the content on this page to help you.</p>
              <img src={rscGuide1} alt="thumbnail" className="mt-[1.875rem]" />
              <div className="quote-guide mt-[1.438rem] flex flex-col mx-auto w-fit text-center justify-center">
                <img src={iconQuote2} alt="" className='w-full' />
                <p className='text-[1.25rem]'>The process is not an obstacle, but a ladder to success</p>
                <div className="w-full h-[6px] rounded-[17px] bg-[#144688]"></div>
              </div>
            </div>
          </div>
          <div className="guide-end_content flex flex-col gap-[3.125rem]">
            <p className="text-center text-[1.563rem] font-semibold mx-auto w-full max-w-[46rem]">Choose the content we have created for you that can help you grow your business.</p>
            <div className="card-guide_wrapper flex flex-wrap lg:justify-start justify-center gap-[3.125rem_5rem]">
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard1} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard2} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard3} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard4} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard5} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard6} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard7} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard8} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard9} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard10} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard11} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard12} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard13} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
              <CardCover selectCard="cc7" bg="bg-[white] w-full lg:max-w-[20rem]">
                <div className="card-guide_items flex flex-col gap-[1.25rem] p-[2.625rem_1.875rem]">
                  <img src={iconRscCard14} alt="Icon" className='w-full max-w-[10rem]' />
                  <div className="flex flex-col gap-[1.563rem] w-full lg:max-w-[20rem]">
                    <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                    <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                  </div>
                </div>
              </CardCover>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>

    </>
  )
}

export default Resource
