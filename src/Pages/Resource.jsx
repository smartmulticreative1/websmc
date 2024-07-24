import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import {Helmet, HelmetProvider } from 'react-helmet-async'
import Button from '../Components/Button/Button';
import Footer from '../Components/Footer/Footer';
import TextAnimation from '../Components/TextAnimation/TextAnimation';
import OurBlog from '../Components/OurBlog/OurBlog';


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
      image: 'image-url',
    },
    {
      title: 'Creative Design for Modern Business',
      details: 'Exploring creative solutions for businesses.',
      category: 'Creative Solution',
      date: '15 April',
      image: 'image-url',
    },
    {
      title: 'ERP Development Services',
      details: 'Comprehensive ERP development services.',
      category: 'Custom Solution',
      date: '22 May',
      image: 'image-url',
    },
    {
      title: 'The Future of Web Design',
      details: 'Innovative trends in web design.',
      category: 'Creative Solution',
      date: '30 June',
      image: 'image-url',
    },
    {
      title: 'AI and Automation in Business',
      details: 'How AI and automation are transforming businesses.',
      category: 'Custom Solution',
      date: '5 July',
      image: 'image-url',
    },
    {
      title: 'Digital Marketing Strategies',
      details: 'Effective strategies for digital marketing.',
      category: 'Creative Solution',
      date: '12 August',
      image: 'image-url',
    },
    {
      title: 'Advanced ERP Solutions',
      details: 'Exploring advanced solutions for ERP systems.',
      category: 'Custom Solution',
      date: '19 September',
      image: 'image-url',
    },
    {
      title: 'Brand Identity and Design',
      details: 'Creating a strong brand identity.',
      category: 'Creative Solution',
      date: '25 October',
      image: 'image-url',
    }
  ];

    // our section case studies content
  const caseStudies = [
    {
      title: 'How EVHUB can supervise the rented car vehicle 1',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: '',
    },
    {
      title: 'How EVHUB can supervise the rented car vehicle 2',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: '',
    },
    {
      title: 'How EVHUB can supervise the rented car vehicle 3',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: '',
    },
    {
      title: 'How EVHUB can supervise the rented car vehicle 4',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: '',
    },
    {
      title: 'How EVHUB can supervise the rented car vehicle 5',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: '',
    },
    {
      title: 'How EVHUB can supervise the rented car vehicle 6',
      description: 'A case study of how EVHUB can keep an eye on the rented car vehicle so as to minimize the damage that occurs while in the rental stage by customers',
      imgSrc: '',
    },
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

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Resource | SMC</title>
      </Helmet>
    </HelmetProvider>

    <Navbar ns='nv1'/>

    <section className="section-header_resource w-full xl:px-0 px-4">
      <div className="xl:container mx-auto">
        <div className="resource-content_wrapper flex flex-col gap-[3.438rem] text-center p-[6.875rem_0_8.688rem]">
          <div className="resource-start_content flex flex-col gap-[2.5rem] mx-auto w-full max-w-[60.125rem]">
            <p className="text-[1.25rem]">SMART MULTI CREATIVE RESOURCES:</p>
            <h3>"The Gateway to Profound Knowledge and Personal Advancement."</h3>
            <p>Provide information that is not only informative but also has a significant level of depth</p>
          </div>
          <div className="resource-end_content flex flex-col gap-[1.875rem]">
            <p className='text-[1.25rem]'>Explore Features</p>
            <div className="cta-resource_header flex justify-center gap-[1.875rem]">
              <button>CASE STUDIES</button>
              <button>BLOG</button>
              <button>GUIDE AND BOOK</button>
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

    <section className="section-our-blog w-full xl:px-0 px-4">
      <div className="xl:container mx-auto">
        <div className="our-blog-content_wrapper flex flex-col gap-[3.75rem] mx-auto w-full max-w-[74.313rem] p-[4.063rem_0_3.75rem]">
          <div className="our-blog-start_content flex flex-col gap-[0.938rem]">
            <div className="title-our-blog_section flex items-center gap-[1.188rem]">
              <h2>Blog -</h2>
              <h3>Inspiring Minds, One Post at a Time</h3>
            </div>
            <p className="text-[1.25rem]">useful and helpful article</p>
          </div>
          <OurBlog blogs={blogs} />
        </div>
      </div>
    </section>

    <section className="section-case-studies w-full xl:px-0 px-4">
      <div className="xl:container mx-auto">
        <div className="case-studies-content_wrapper flex flex-col gap-[4.375rem] mx-auto w-full max-w-[71.25rem] py-[4.375rem]">
          <div className="case-studies-start_content flex gap-[9.063rem]">
            <h3 className='w-full max-w-[15.688rem]'>Case Studies</h3>
            <p className="text-[1.25rem]">Encouraging companies to continue to innovate and create new solutions together. Solutions that can make our clients happy with their growing business.</p>
          </div>
          <div className="case-studies-end_content flex flex-col gap-[2.5rem]">
            {currentCards.map((card, index) => (
              <div
                key={index}
                className={`card-case-studies_items flex gap-[3.938rem] ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="thumbnail-case-studies_card w-full max-w-[28.813rem]">
                      <img src={card.imgSrc} alt="thumbnail" />
                    </div>
                    <div className="detail-case-studies_card w-full max-w-[38.188rem] p-[1.25rem] flex flex-col gap-[1.875rem]">
                      <h3>{card.title}</h3>
                      <p className="text-[1.25rem]">{card.description}</p>
                      <div className="cta-btn-case-studies_card ms-auto">
                        <button>SEE MORE DETAILS</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="detail-case-studies_card w-full max-w-[38.188rem] p-[1.25rem] flex flex-col gap-[1.875rem]">
                      <h3>{card.title}</h3>
                      <p className="text-[1.25rem]">{card.description}</p>
                      <div className="cta-btn-case-studies_card ms-auto">
                        <button>SEE MORE DETAILS</button>
                      </div>
                    </div>
                    <div className="thumbnail-case-studies_card w-full max-w-[28.813rem]">
                      <img src={card.imgSrc} alt="thumbnail" />
                    </div>
                  </>
                )}
              </div>
            ))}
            <div className="card-case-studies_pagination mt-[1.25rem] flex flex-nowrap gap-[4.375rem] mx-auto items-center">
              <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index + 1)}
                  className={currentPage === index + 1 ? 'text-red-500' : ''}
                >
                  {index + 1}
                </button>
              ))}
              <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-guide w-full xl:px-0 px-4">
      <div className="xl:container mx-auto">
        <div className="guide-content_wrapper flex flex-col gap-[2.438rem] mx-auto w-full max-w-[71.25rem] p-[4.375rem_0_6.25rem]">
          <div className="guide-start_content flex flex-col gap-[3.125rem]">
            <div className="content-1-start_guide flex flex-col gap-[1.25rem]">
              <p className="text-[1.25rem]">Guides and Books</p>
              <p className="text-[1.563rem] font-bold text-center">Quality educational content is not just the material or content, but how the material is presented. The development and marketing of your product must be prepared as well as possible. Use the content on this page to help you.</p>
              <img src="" alt="thumbnail" className="mt-[1.875rem]" />
              <div className="quote-guide mt-[1.438rem] flex justify-center">
                <p className='text-[1.25rem]'>The process is not an obstacle, but a ladder to success</p>
              </div>
            </div>
          </div>
          <div className="guide-end_content flex flex-col gap-[3.125rem]">
            <p className="text-center text-[1.563rem] font-semibold mx-auto w-full max-w-[46rem]">Choose the content we have created for you that can help you grow your business.</p>
            <div className="card-guide_wrapper flex flex-wrap gap-[3.125rem_5rem]">
              <div className="card-guide_items flex flex-col gap-[1.25rem]">
                <img src="" alt="Icon" />
                <div className="flex flex-col gap-[1.563rem] w-full max-w-[19.188rem]">
                  <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                  <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                </div>
              </div>
              <div className="card-guide_items flex flex-col gap-[1.25rem]">
                <img src="" alt="Icon" />
                <div className="flex flex-col gap-[1.563rem] w-full max-w-[19.188rem]">
                  <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                  <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                </div>
              </div>
              <div className="card-guide_items flex flex-col gap-[1.25rem]">
                <img src="" alt="Icon" />
                <div className="flex flex-col gap-[1.563rem] w-full max-w-[19.188rem]">
                  <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                  <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                </div>
              </div>
              <div className="card-guide_items flex flex-col gap-[1.25rem]">
                <img src="" alt="Icon" />
                <div className="flex flex-col gap-[1.563rem] w-full max-w-[19.188rem]">
                  <p className="text-[1.5rem] font-bold">ERP Development Guide</p>
                  <p>Web/Application Development such as custom coded web applications and CMS websites including WordPress. </p>
                </div>
              </div>
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
