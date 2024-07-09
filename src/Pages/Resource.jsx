import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import {Helmet, HelmetProvider } from 'react-helmet-async'
import Button from '../Components/Button/Button';


function Resource() {
  
  const cards = [
    { id: 1, title: "Card 1", content: "Content of card 1" },
    { id: 2, title: "Card 2", content: "Content of card 2" },
    { id: 3, title: "Card 3", content: "Content of card 3" },
    { id: 4, title: "Card 4", content: "Content of card 4" },
    { id: 5, title: "Card 5", content: "Content of card 5" },
    { id: 6, title: "Card 6", content: "Content of card 6" },
    { id: 7, title: "Card 7", content: "Content of card 7" },
    { id: 8, title: "Card 8", content: "Content of card 8" },
    { id: 9, title: "Card 9", content: "Content of card 9" },
    { id: 10, title: "Card 10", content: "Content of card 10" }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

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

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Resource | SMC</title>
      </Helmet>
    </HelmetProvider>

    <Navbar ns='nv1'/>


    <div className="App hidden">
      <div className="card-container">
        {currentCards.map(card => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          {/* Previous */}
        <Button btn="btnNon" to='#' className='btn-primary-smc'><img src="" alt=">" /></Button>
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>

    </>
  )
}

export default Resource
