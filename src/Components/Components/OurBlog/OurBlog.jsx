import React, { useState, useEffect } from 'react';

const OurBlog = ({ blogs }) => {
  const [activeCategory, setActiveCategory] = useState('ALL BLOG');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const itemsPerPage = 6;

  useEffect(() => {
    let filtered = blogs;

    if (searchTerm) {
      filtered = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.details.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setActiveCategory('ALL BLOG');
    } else if (activeCategory !== 'ALL BLOG') {
      filtered = blogs.filter(blog => blog.category === activeCategory);
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [searchTerm, activeCategory, blogs]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = category => {
    setActiveCategory(category);
    setSearchTerm('');
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage =>
      Math.min(prevPage + 1, Math.ceil(filteredBlogs.length / itemsPerPage))
    );
  };

  const displayedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="our-blog-end_content flex flex-col gap-[3.125rem]">
        <div className="nav-tab_our-blog flex gap-[1.875rem] mx-auto">
          <button
            onClick={() => handleCategoryChange('ALL BLOG')}
            className={activeCategory === 'ALL BLOG' ? 'text-red-500' : ''}
          >
            ALL BLOG
          </button>
          <button
            onClick={() => handleCategoryChange('Custom Solution')}
            className={activeCategory === 'Custom Solution' ? 'text-red-500' : ''}
          >
            CUSTOM SOLUTION
          </button>
          <button
            onClick={() => handleCategoryChange('Creative Solution')}
            className={activeCategory === 'Creative Solution' ? 'text-red-500' : ''}
          >
            CREATIVE SOLUTION
          </button>
          <form>
            <input
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button type="submit"></button>
          </form>
        </div>
        <div className="card-our-blog_wrapper flex flex-col gap-[1.875rem]">
          {searchTerm === '' && activeCategory === 'ALL BLOG' && currentPage === 1 && (
            <div className="card-full-our-blog">
              <div className="thumb-our-blog"><img src="" alt="thumbnail" /></div>
              <div className="detail-our-blog flex flex-col gap-[1.25rem]">
                <div className="text-start-our-blog_detail flex gap-[1.25rem]">
                  <p className="text-[0.875rem] w-full">Custom Solution</p>
                  <p className="text-[0.875rem] min-w-[4rem]">12 March</p>
                </div>
                <div className="text-end-our-blog_detail flex flex-col">
                  <p className="text-[1.25rem] font-bold">A useful application to assist users in carrying out sports with tracking features during exercise.</p>
                  <div className="ms-auto"><button>-</button></div>
                </div>
              </div>
            </div>
          )}
          {displayedBlogs.map((blog, index) => (
            <div key={index} className="card-our-blog_items">
              <div className="card-items-our-blog w-full max-w-[22.75rem]">
                <div className="thumb-our-blog"><img src={blog.image} alt="thumbnail" /></div>
                <div className="detail-our-blog flex flex-col gap-[1.25rem]">
                  <div className="text-start-our-blog_detail flex gap-[1.25rem]">
                    <p className="text-[0.875rem] w-full">{blog.category}</p>
                    <p className="text-[0.875rem] min-w-[4rem]">{blog.date}</p>
                  </div>
                  <div className="text-end-our-blog_detail flex flex-col">
                    <p className="text-[1.25rem] font-bold">{blog.title}</p>
                    <div className="ms-auto"><button>-</button></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="pagination-our-blog-items mt-[1.875rem] flex flex-nowrap gap-[4.375rem] mx-auto">
            {currentPage > 1 && (
              <button onClick={handlePrevPage}>Previous</button>
            )}
            {[...Array(Math.ceil(filteredBlogs.length / itemsPerPage)).keys()].map(num => (
              <button
                key={num}
                onClick={() => handlePageChange(num + 1)}
                className={currentPage === num + 1 ? 'text-red-500' : ''}
              >
                {num + 1}
              </button>
            ))}
            {currentPage < Math.ceil(filteredBlogs.length / itemsPerPage) && (
              <button onClick={handleNextPage}>Next</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBlog;
